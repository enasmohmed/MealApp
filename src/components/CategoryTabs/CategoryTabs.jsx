import React from "react";

export default function CategoryTabs({ categories, activeTab, setActiveTab }) {
  return (
    <div className="flex flex-wrap justify-center mb-6 p-3">
      {/* All tab */}
      <button
        className={`p-4 rounded-full ${
          activeTab === "All"
            ? "bg-black text-white"
            : "text-gray-600 bg-gray-300 hover:bg-gray-100"
        }`}
        onClick={() => setActiveTab("All")}
      >
        All
      </button>
      {/* Category tabs */}
      {categories.map((category) => (
        <button
          key={category}
          className={`p-4 m-1 rounded-full ${
            activeTab === category
              ? "bg-green-500 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => setActiveTab(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
