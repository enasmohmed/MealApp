import React from "react";
import logo from "../../assets/images/logo.png";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-4">
      <div className="container mx-auto text-center">
      
        <div className="flex items-center justify-center mb-2">
          <img
            src={logo} 
            alt="Recipe Logo"
            className="w-8 h-8 mr-2"
          />
          <span className="font-bold text-lg text-gray-800">Recipe</span>
        </div>
        
        
        <p className="text-sm text-gray-500">
          © 2025 Enas Mohamed™. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
