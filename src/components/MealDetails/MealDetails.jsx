import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MealDetails.scss";

const MealDetails = () => {
  const { idMeal } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    const fetchMealDetails = async () => {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
      );
      const data = await response.json();
      setMeal(data.meals[0]);
    };

    fetchMealDetails();
  }, [idMeal]);

  if (!meal) {
    return <p>Loading...</p>;
  }

  return (
    <div className="meal-details">
      
      <header className="meal-header pacifico-font">
        <h1>{meal.strMeal}</h1>
      </header>
  
      
      <div className="meal-container">
        
        <div className="left-section w-[70%]">
          
          <div className="meal-image">
              <img src={meal.strMealThumb} alt={meal.strMeal} />
              
                <div className="meal-buttons mt-5">
              <a href={meal.strYoutube} target="_blank" rel="noopener noreferrer" className="btn youtube" >
                Youtube
              </a>
              <a href={meal.strSource} target="_blank" rel="noopener noreferrer" className="btn source">
                Source
              </a>
            </div> 
          </div>
            
          <div className="meal-instructions">
            <p>{meal.strInstructions}</p>
          </div>

          
        
        </div>
  
        {/* section right*/}
        <div className="right-section w-[30%]">
          <div className="meal-ingredients">
            <h2>Ingredients</h2>
            <ul>
              {Object.keys(meal)
                .filter((key) => key.startsWith("strIngredient") && meal[key])
                .map((key) => {
                  const measureKey = key.replace("strIngredient", "strMeasure");
                  return (
                    <li key={key}>
                      <span>{meal[key]}:</span> <span>{meal[measureKey]}</span>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default MealDetails;
