import "./Sidebar.scss";
import logo from "../../assets/images/logo.png";
import { Utensils } from "lucide-react";
import { Link,  useLocation } from 'react-router-dom'
import React, { useState, useEffect } from "react";
import axios from "axios";


export default function Sidebar() {
  const [activeTab, setActiveTab] = useState("profile");
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
        );
        setCategories(response.data.categories); // تخزين الفئات في الحالة
        setLoading(false);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);



  return <>
        {/* ✅ Sidebar */}
        <div className="w-[50%] border-gray-600 bg-slate-100 shadow-md p-4">
          <div className="logo mb-6">
            <img src={logo} alt="Recipe Logo" className="w-full rounded-lg" />
          </div>
          <nav className="menu space-y-2">
            <Link
              to="/"
              className={`menu-item flex text-white bg-orange-500 font-bold items-center gap-2 p-2 rounded-lg hover:bg-orange-600 ${
                location.pathname === "/" ? "bg-orange-500 font-bold" : ""}`}>
              <Utensils className="w-5 h-5 text-white" />
              Meals
            </Link>
            
            <Link to="#" className="menu-item flex items-center gap-2 p-2 rounded-lg hover:bg-gray-200">
              <Utensils className="w-5 h-5 text-gray-700" />
              Ingredients
            </Link>
            <Link to="#" className="menu-item flex items-center gap-2 p-2 rounded-lg hover:bg-gray-200">
              <Utensils className="w-5 h-5 text-gray-700" />
              Area
            </Link>
          </nav>
        </div>
      
      
  </>
}
