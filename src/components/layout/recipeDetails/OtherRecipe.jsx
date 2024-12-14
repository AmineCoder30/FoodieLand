import React from "react";
import ads from "../../../assets/Ads.jpg";
import recipe1 from "../../../assets/recipes/recipe-1.jpg";
import recipe2 from "../../../assets/recipes/recipe-2.jpg";
import recipe3 from "../../../assets/recipes/recipe-3.jpg";
const OtherRecipe = () => {
  // Recipe data
  const recipes = [
    {
      title: "Chicken Meatball with Creamy Cheese",
      author: "Andreas Paula",
      image: recipe1,
    },
    {
      title: "The Creamiest Creamy Chicken and...",
      author: "Andreas Paula",
      image: recipe2,
    },
    {
      title: "The Best Easy One Pot Chicken and Rice",
      author: "Andreas Paula",
      image: recipe3,
    },
  ];

  return (
    <div className="w-96 hidden lg:block sticky top-0 mx-auto p-6 bg-white">
      {/* Header */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Other Recipe</h2>

      {/* Recipes List */}
      <ul className="space-y-6">
        {recipes.map((recipe, index) => (
          <li key={index} className="flex items-center">
            {/* Recipe Image */}
            <img
              src={recipe.image}
              alt={recipe.title}
              loading="lazy"
              className="w-24 h-20 rounded-lg object-cover"
            />
            {/* Recipe Details */}
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {recipe.title}
              </h3>
              <p className="text-sm text-gray-600">By {recipe.author}</p>
            </div>
          </li>
        ))}
      </ul>
      <img className="mt-10" src={ads} loading="lazy" alt="ads image" />
    </div>
  );
};

export default OtherRecipe;
