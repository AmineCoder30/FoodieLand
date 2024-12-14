// File: src/components/RecipeDetails.js

import React from "react";
import { recipes } from "../constants/recipes";
import {
  Ingredients,
  Directions,
  OtherRecipe,
  RecipeInfo,
  NewsletterBanner,
} from "../components/layout";
import { RecipesCards } from "../components/ui";

const RecipeDetails = () => {
  return (
    <div className="max-w-7xl mx-auto px-2 md:px-0 py-6 bg-white">
      <RecipeInfo />
      <div className="flex my-20">
        <div className="flex-1">
          <Ingredients />
          <Directions />
        </div>
        <div>
          <OtherRecipe />
        </div>
      </div>
      <NewsletterBanner />
      <div className="container mx-auto my-20">
        <h2 className="text-4xl mb-5 font-bold text-gray-800 w-full text-center">
          check out the delicious recipes
        </h2>
        <RecipesCards background="white" recipes={recipes.slice(0, 4)} />
      </div>
    </div>
  );
};

export default RecipeDetails;
