// File: src/components/Ingredients.js

import React, { useState } from "react";

const IngredintsList = ({ title }) => {
  // Initial state for ingredients
  const [selected, setSelected] = useState(null);

  // Ingredients data
  const ingredients = [
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
  ];

  // Handler for selection
  const handleSelection = (index) => {
    setSelected(index);
  };

  return (
    <div>
      <p className="text-lg font-semibold text-gray-700 mt-4">{title}</p>
      <ul className="mt-6 ">
        {ingredients.map((ingredient, index) => (
          <li
            key={index}
            className="flex items-center py-4 space-x-3 border-b border-gray-200"
          >
            {/* Radio Button */}
            <input
              type="radio"
              id={`ingredient-${index}`}
              name="ingredient"
              className="w-5 h-5 text-blue-500 focus:ring focus:ring-blue-300 cursor-pointer"
              checked={selected === index}
              onChange={() => handleSelection(index)}
            />
            {/* Label */}
            <label
              htmlFor={`ingredient-${index}`}
              className={`text-gray-700 text-base ${
                selected === index ? "line-through text-gray-400" : ""
              }`}
            >
              {ingredient}
            </label>
          </li>
        ))}
      </ul>
      ;
    </div>
  );
};

const Ingredients = () => {
  return (
    <div className=" mx-auto  bg-white">
      {/* Header */}
      <h2 className="text-2xl font-bold text-gray-800">Ingredients</h2>
      {/* Ingredients List */}
      <IngredintsList title="For main dish" />
      <IngredintsList title="For the sauce" />
    </div>
  );
};

export default Ingredients;
