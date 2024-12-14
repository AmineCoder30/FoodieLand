import React from "react";
import {
  HeroHome,
  Categories,
  Recipes,
  ChefPromo,
  FoodieLandPromo,
  RecipeCollection,
  NewsletterBanner,
} from "../components/layout";
function Home() {
  return (
    <div className="px-2 md:px-0">
      <HeroHome />
      <Categories />
      <Recipes />
      <ChefPromo />
      <FoodieLandPromo />
      <RecipeCollection />
      <NewsletterBanner background="bg-light-blue" />
    </div>
  );
}

export default Home;
