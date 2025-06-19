import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Globe } from "lucide-react";
import axios from "axios";
import CategoryTabs from "../CategoryTabs/CategoryTabs";
import "./Home.scss";

export default function Home() {
  const [meals, setMeals] = useState([]);
  const [activeTab, setActiveTab] = useState("All");
  const [categories, setCategories] = useState([]);

  // Fetch meal categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
        );
        setCategories(response.data.meals.map((meal) => meal.strCategory));
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

 
  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await axios.get(
          activeTab === "All"
            ? "https://www.themealdb.com/api/json/v1/1/search.php?s="
            : `https://www.themealdb.com/api/json/v1/1/filter.php?c=${activeTab}`
        );
        setMeals(response.data.meals || []);
      } catch (error) {
        console.error("Error fetching meals:", error);
      }
    };
    fetchMeals();
  }, [activeTab]);

  return (
    <div className="p-4 bg-[#fef6e4] min-h-screen">
      {/* Title */}
      <h1 className="text-4xl font-bold text-orange-600 mb-6 pacifico-font">
        Learn, Cook, Eat Your Food
      </h1>

      {/* Tabs */}
      <CategoryTabs
        categories={categories}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Meal Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {meals.map((meal) => (
    <div
      key={meal.idMeal}
      className="relative bg-white shadow-md p-4 border rounded-lg hover:shadow-xl transition duration-300 flex flex-col items-center"
    >
      {/* Meal Image */}
      <div className="w-full h-40 overflow-hidden rounded-lg mb-4">
        <img
          className="w-full h-full object-cover"
          src={meal.strMealThumb}
          alt={meal.strMeal}
        />
      </div>

      {/* Meal Title */}
      <h2 className="text-base md:text-lg font-semibold text-center text-gray-800 mb-1">
        {meal.strMeal}
      </h2>

      {/* Area (Only for "All") */}
      {activeTab === "All" && (
        <div className="flex items-center justify-center text-gray-600 text-sm mb-2">
          <Globe className="w-4 h-4 mr-1 text-green-600" />
          <span>{meal.strArea}</span>
        </div>
      )}

      {/* Button */}
      <Link to={`/meal/${meal.idMeal}`} className="mt-auto">
        <button className="px-4 py-2 bg-green-500 text-white text-sm font-medium rounded-full hover:bg-green-600 transition">
          View Recipe
        </button>
      </Link>
    </div>
  ))}
</div>

    </div>
  );
}
