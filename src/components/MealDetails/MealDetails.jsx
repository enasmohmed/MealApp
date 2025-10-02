import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Youtube , ExternalLink, ArrowLeft } from "lucide-react";
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
    <div className="meal-details p-6 md:p-12 bg-gradient-to-b from-orange-50 to-white min-h-screen">
      {/* Back button */}
      <button
        onClick={() => navigate("/")}
        className="mb-6 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition flex items-center gap-2"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </button>

      {/* Header */}
      <header className="meal-header text-center mb-8">
        <h1 className="text-4xl font-extrabold text-orange-700 drop-shadow">
          {meal.strMeal}
        </h1>
        <p className="text-gray-500 mt-2 italic">
          Category: {meal.strCategory} | Area: {meal.strArea}
        </p>
      </header>

      {/* Container */}
      <div className="meal-container grid grid-cols-1 md:grid-cols-2 gap-6 items-start justify-center max-w-5xl mx-auto">
        {/* Left: Image */}
        <div className="meal-image relative group">
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="w-full rounded-xl shadow-lg transform transition duration-300 group-hover:scale-105"
          />

          {/* Buttons */}
          <div className="meal-buttons mt-4 flex gap-6 justify-center">
            {meal.strYoutube && (
              <a
                href={meal.strYoutube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2 bg-red-600 text-white rounded-full shadow hover:bg-red-700 transition no-underline"
              >
                <Youtube className="w-5 h-5" />
                YouTube
              </a>
            )}
            {meal.strSource && (
              <a
                href={meal.strSource}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2 bg-gray-700 text-white rounded-full shadow hover:bg-gray-800 transition"
              >
                <ExternalLink className="w-5 h-5" />
                Source
              </a>
            )}
          </div>
        </div>

        {/* Right: Ingredients */}
        <div className="meal-ingredients bg-white rounded-xl shadow-lg p-6 w-2/5 sticky top-10">
          <h2 className="text-2xl font-bold mb-4 text-green-700 border-b pb-2">
            Ingredients
          </h2>
          <ul className="grid grid-cols-1 gap-2 text-gray-700">
            {Object.keys(meal)
              .filter((key) => key.startsWith("strIngredient") && meal[key])
              .map((key) => {
                const measureKey = key.replace("strIngredient", "strMeasure");
                return (
                  <li
                    key={key}
                    className="bg-green-50 px-3 py-2 rounded-lg border border-green-100 flex justify-between items-center"
                  >
                    <span className="font-medium">{meal[key]}</span>
                    <span className="text-gray-600 text-sm">
                      {meal[measureKey]}
                    </span>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>

      {/* Instructions (Full width under grid) */}
      <div className="meal-instructions mt-10 bg-white rounded-xl shadow p-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-green-700 border-b pb-2">
          Instructions
        </h2>
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {meal.strInstructions}
        </p>
      </div>

    </div>
  );
};

export default MealDetails;
