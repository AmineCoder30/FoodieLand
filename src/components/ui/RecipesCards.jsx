import React from "react";
import { FaClock } from "react-icons/fa";
import { MdFastfood } from "react-icons/md";
function RecipesCards({ recipes, background }) {
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {recipes.map((recipe, index) => (
        <div
          key={index}
          className={`h-80 rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow duration-200 overflow-hidden ${background}`}
        >
          {/* Image Section */}
          <div className="relative h-2/3">
            <img
              src={recipe.image}
              alt={recipe.title}
              loading="lazy"
              className="w-full h-full rounded-lg object-cover"
            />
            <button
              className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition"
              aria-label="Add to Favorites"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 text-red-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21l-1.45-1.294C5.4 15.064 2 11.93 2 8.313 2 5.754 4.015 4 6.5 4 8.11 4 9.4 4.893 10 6.02 10.6 4.893 11.89 4 13.5 4 15.985 4 18 5.754 18 8.313c0 3.618-3.4 6.751-8.55 11.393L12 21z"
                />
              </svg>
            </button>
          </div>
          {/* Content Section */}
          <div className="pb-3 h-1/3 flex flex-col justify-between mt-4">
            <h3 className="font-semibold line-clamp-2">{recipe.title}...</h3>
            <div className="flex items-center text-gray-600">
              <FaClock className="mr-1 text-gray-950" />
              <span>{recipe.time}</span>
              <MdFastfood className="ml-4 mr-1 text-gray-950" />
              <span>{recipe.category}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecipesCards;
