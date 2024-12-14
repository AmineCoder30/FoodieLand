import React from "react";
import { FaArrowRight } from "react-icons/fa";
import chefprom from "../../../assets/chefpromo.svg";

const ChefPromo = () => {
  return (
    <div className="container mx-auto p-4 md:p-8 rounded-lg flex flex-col gap-5 md:gap-0 md:flex-row items-center">
      <div className="w-full md:w-1/2 mb-6 md:mb-0">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Everyone can be a chef <br /> in their own kitchen
        </h1>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
        <button className="bg-black text-white px-4 py-2 mt-20 rounded flex items-center">
          Learn More <FaArrowRight className="ml-2" />
        </button>
      </div>
      <div className="w-full md:w-1/2">
        <img
          src={chefprom}
          alt="Chef Promo"
          loading="lazy"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default ChefPromo;
