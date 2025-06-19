import "./Sidebar.scss";
import logo from "../../assets/images/logo.png";
import { Utensils } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Sidebar() {
  const [activeTab, setActiveTab] = useState("profile");
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
        );
        setCategories(response.data.categories);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <>
      {/* ✅ Toggle button (only on small screens) */}
      <button
        className="fixed top-4 left-4 z-50 bg-orange-500 text-white p-3 rounded-lg shadow-lg md:hidden"
        onClick={() => setSidebarVisible(true)}
      >
        ☰
      </button>

      {/* ✅ Sidebar Overlay (Mobile) */}
      {sidebarVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={() => setSidebarVisible(false)} />
      )}

      {/* ✅ Sidebar itself */}
      <div
        className={`fixed top-0 left-0 z-50 w-64 min-h-screen bg-slate-100 shadow-md p-4 transform transition-transform duration-300 md:static md:translate-x-0 ${
          sidebarVisible ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* ✕ Close button */}
        <div className="md:hidden text-right mb-4">
          <button
            className="text-red-600 text-2xl font-bold"
            onClick={() => setSidebarVisible(false)}
          >
            ✕
          </button>
        </div>

        <div className="logo mb-6">
          <img src={logo} alt="Recipe Logo" className="w-full rounded-lg" />
        </div>

        <nav className="menu space-y-2">
          <Link
            to="/"
            className={`menu-item flex items-center gap-2 p-2 rounded-lg ${
              location.pathname === "/" ? "bg-orange-500 text-white" : "bg-white text-gray-700"
            }`}
          >
            <Utensils className="w-5 h-5" />
            Meals
          </Link>
          <Link
            to="#"
            className="menu-item flex items-center gap-2 p-2 rounded-lg hover:bg-gray-200"
          >
            <Utensils className="w-5 h-5 text-gray-700" />
            Ingredients
          </Link>
          <Link
            to="#"
            className="menu-item flex items-center gap-2 p-2 rounded-lg hover:bg-gray-200"
          >
            <Utensils className="w-5 h-5 text-gray-700" />
            Area
          </Link>
        </nav>
      </div>
    </>
  );
}
