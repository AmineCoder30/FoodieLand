// File: src/components/Recipes.js

import React from "react";

import { RecipesCards } from "../../ui";
import { recipes } from "../../../constants/recipes";

const Recipes = () => {
  return (
    <div className="container  my-20 mx-auto p-6">
      {/* Header Section */}
      <div className="text-center mb-12 flex flex-col items-center gap-2">
        <h2 className="text-4xl font-bold text-gray-800">
          Simple and tasty recipes
        </h2>
        <p className="text-gray-600 mt-2 max-w-96">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      {/* Recipes Grid */}

      <RecipesCards
        recipes={recipes}
        background="bg-gradient-to-t from-light-blue to-white"
      />
    </div>
  );
};

export default Recipes;
