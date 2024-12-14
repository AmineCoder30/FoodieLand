import React from "react";
import { FaClock, FaPrint, FaShareAlt } from "react-icons/fa";
import { MdFastfood } from "react-icons/md";
import { info } from "../../../constants/recipeinfo";
import cover from "../../../assets/cover.jpg";
import man from "../../../assets/man.jpeg";
function RecipeInfo() {
  return (
    <div>
      {/* Header Section */}
      <div className=" mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Health Japanese Fried Rice
        </h1>
        <div className="flex items-center mt-4">
          <img
            src={man}
            alt="John Smith"
            loading="lazy"
            className="w-10 h-10 rounded-full"
          />
          <div className="ml-3">
            <p className="font-semibold text-gray-800">John Smith</p>
            <p className="text-sm text-gray-500">15 March 2022</p>
          </div>
        </div>
        {/* Metadata */}
        <div className=" flex items-center mt-6 text-gray-600 space-x-8 text-sm">
          <div className="flex items-center space-x-2 ">
            <FaClock />
            <span>Prep Time: 15 Minutes</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaClock />
            <span>Cook Time: 15 Minutes</span>
          </div>
          <div className="flex items-center space-x-2">
            <MdFastfood />
            <span>Chicken</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-5">
        {/* Recipe Image with Video Button */}
        <div className="relative flex-1">
          <img
            src={cover}
            alt="Health Japanese Fried Rice"
            loading="lazy"
            className="w-full rounded-lg"
          />
          <button
            className="absolute inset-0 m-auto w-16 h-16 flex items-center justify-center bg-white shadow-lg rounded-full hover:scale-105 transition-transform"
            aria-label="Play Video"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-8 h-8 text-blue-500"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>

        {/* Nutrition Sidebar */}
        <div className="w-full lg:w-96  bg-blue-50 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Nutrition Information
          </h2>
          <ul className="text-gray-700 text-sm space-y-2">
            {info.map((item, index) => (
              <li
                key={index}
                className="flex justify-between py-4 border-b border-gray-200"
              >
                <span>{item.label}</span>
                <span>{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Description */}
      <div className="mt-12">
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-4 mt-6">
        <button className="flex items-center px-4 py-2 bg-gray-100 rounded-lg text-gray-600 hover:bg-gray-200 transition">
          <FaPrint className="mr-2" />
          Print
        </button>
        <button className="flex items-center px-4 py-2 bg-gray-100 rounded-lg text-gray-600 hover:bg-gray-200 transition">
          <FaShareAlt className="mr-2" />
          Share
        </button>
      </div>
    </div>
  );
}

export default RecipeInfo;
