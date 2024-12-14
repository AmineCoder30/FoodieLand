import React from "react";
import { FaClock, FaDrumstickBite, FaRegPlayCircle } from "react-icons/fa";
import banner from "../../../assets/chicken.jpg";
import man from "../../../assets/man.jpeg";
import { Link } from "react-router-dom";
const HeroHome = () => {
  return (
    <div className="container my-20 mx-auto rounded-3xl overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Left Content */}
        <div className="flex-1 bg-blue-50 p-10">
          <div className="flex items-center space-x-2 mb-4">
            <span className="px-3 py-1  font-medium bg-white text-black rounded-full">
              Hot Recipes
            </span>
          </div>
          <h2 className="leading-8 text-4xl md:text-5xl lg:text-7xl font-bold mb-4 text-gray-800">
            Spicy delicious chicken wings
          </h2>
          <p className="text-gray-600 my-8 max-w-96">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          {/* Icons and Info */}
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center text-gray-800 space-x-1 py-1 px-3 rounded-md bg-gray-200">
              <FaClock />
              <span>30 Minutes</span>
            </div>
            <div className="flex items-center text-gray-800 space-x-1 py-1 px-3 rounded-md bg-gray-200">
              <FaDrumstickBite />
              <span>Chicken</span>
            </div>
          </div>
          {/* Author */}

          <div className="flex items-center gap-10 mt-16">
            <div className="flex items-center ">
              <img
                src={man}
                alt="Author"
                loading="lazy"
                className="w-12 h-12 object-cover rounded-full mr-3"
              />
              <div>
                <p className="tex-lg font-medium text-gray-700">John Smith</p>
                <p className="text-xs text-gray-500">15 March 2022</p>
              </div>
            </div>
            <a href="#recipe">
              <button className="bg-black text-white px-4 py-2 rounded flex items-center">
                View Recipes <FaRegPlayCircle className="ml-2" />
              </button>
            </a>
          </div>
        </div>
        {/* Right Content */}
        <div className="flex-1">
          <img
            src={banner}
            alt="Chicken Wings"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
