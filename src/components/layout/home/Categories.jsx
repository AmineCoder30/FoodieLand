// File: src/components/Categories.jsx

import React from "react";
import { BiGame } from "react-icons/bi";

const categories = [
  { name: "Breakfast", image: "🍙", BiGame: "from-[#70824614]" },
  { name: "Vegan", image: "🥬", BiGame: "from-[#6CC63F14]" },
  { name: "Meat", image: "🥩", BiGame: "from-[#CC261B14]" },
  { name: "Dessert", image: "🍰", BiGame: "from-[#F09E0014]" },
  { name: "Lunch", image: "🥪", BiGame: "from-[#00000014]" },
  { name: "Chocolate", image: "🍫", BiGame: "from-[#00000014]" },
];

const Categories = () => {
  return (
    <div className=" container my-20 mx-auto p-6  rounded-lg ">
      {/* Title and Button */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Categories</h2>
        <button className="px-4 py-2 text-sm font-medium text-black bg-light-blue rounded-full hover:bg-blue-200">
          View All Categories
        </button>
      </div>
      {/* Category Items */}
      <div className="mb-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`flex flex-col items-center p-4 bg-gradient-to-t ${category.BiGame} to-transparent rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200`}
          >
            {/* Image/Emoji */}
            <div className="text-6xl mb-10">{category.image}</div>
            {/* Name */}
            <p className="text-sm font-medium text-gray-700">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
