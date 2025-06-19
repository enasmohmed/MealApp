import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./MealDetails.scss";

const MealDetails = () => {
  const { idMeal } = useParams();
  const [meal, setMeal] = useState(null);
  const navigate = useNavigate();

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
    return <p className="text-center text-lg font-semibold mt-10">Loading...</p>;
  }

  return (
    <div className="meal-details p-4 md:p-10 bg-[#fffaf3] min-h-screen">
      {/* Back button */}
      <button
        onClick={() => navigate("/")}
        className="mb-6 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
      >
        ← Back to Home
      </button>

      {/* Header */}
      <header className="meal-header pacifico-font mb-6 text-center">
        <h1 className="text-3xl text-orange-600 font-bold">{meal.strMeal}</h1>
      </header>

      {/* Container: Responsive layout */}
      <div className="meal-container flex flex-col md:flex-row gap-6 items-start">
        {/* Left section */}
        <div className="w-full md:w-2/3">
          {/* Image */}
          <div className="meal-image mb-6">
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full max-w-xl mx-auto rounded-lg shadow-md"
            />

            {/* Buttons */}
            <div className="meal-buttons mt-4 flex gap-4 justify-center">
              {meal.strYoutube && (
                <a
                  href={meal.strYoutube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn youtube px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  YouTube
                </a>
              )}
              {meal.strSource && (
                <a
                  href={meal.strSource}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn source px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800"
                >
                  Source
                </a>
              )}
            </div>
          </div>

          {/* Ingredients (for small screens only) */}
          <div className="block md:hidden bg-white rounded-lg p-4 shadow mb-6">
            <h2 className="text-xl font-bold mb-3 text-green-700 text-center">Ingredients</h2>
            <ul className="flex flex-wrap gap-2 justify-center text-sm text-gray-800">
              {Object.keys(meal)
                .filter((key) => key.startsWith("strIngredient") && meal[key])
                .map((key) => {
                  const measureKey = key.replace("strIngredient", "strMeasure");
                  return (
                    <li
                      key={key}
                      className="bg-gray-100 px-3 py-1 rounded-full border border-gray-300"
                    >
                      {meal[key]} {meal[measureKey] && `- ${meal[measureKey]}`}
                    </li>
                  );
                })}
            </ul>
          </div>

          {/* Instructions */}
          <div className="meal-instructions text-gray-800 leading-relaxed">
            <h2 className="text-xl font-semibold mb-2 text-green-700">Instructions</h2>
            <p>{meal.strInstructions}</p>
          </div>
        </div>

        {/* Right section (hidden on small screens) */}
        <div className="hidden md:block w-full md:w-1/3">
          <div className="meal-ingredients bg-white rounded-lg p-4 shadow">
            <h2 className="text-xl font-bold mb-3 text-green-700">Ingredients</h2>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
              {Object.keys(meal)
                .filter((key) => key.startsWith("strIngredient") && meal[key])
                .map((key) => {
                  const measureKey = key.replace("strIngredient", "strMeasure");
                  return (
                    <li key={key}>
                      <span className="font-medium">{meal[key]}</span>
                      {meal[measureKey] && `: ${meal[measureKey]}`}
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
