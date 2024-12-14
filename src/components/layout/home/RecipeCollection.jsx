import React from "react";
import { RecipesCards } from "../../ui";
import { recipes } from "../../../constants/recipes";
const RecipeCollection = () => {
  return (
    <div id="recipe" className=" container mx-auto my-20">
      <div className="text-center mb-12 flex flex-col items-center gap-2">
        <h2 className="text-4xl font-bold text-gray-800">
          Simple and tasty recipes
        </h2>
        <p className="text-gray-600 mt-2 max-w-96">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <RecipesCards recipes={recipes.slice(0, 8)} background="bg-white" />
    </div>
  );
};

export default RecipeCollection;
