import React from "react";
import { NewsletterBanner, Directions } from "../components/layout";
import { RecipesCards, SocialMediaIcons } from "../components/ui";
import man from "../assets/man.jpeg";
import chef from "../assets/chef.jpg";
import { recipes } from "../constants/recipes";
function BlogDetails() {
  return (
    <div>
      <div className="container px-2 md:px-0 mx-auto my-20 flex flex-col text-center items-center gap-4">
        <h1 className="text-4xl font-bold text-gray-950">
          Full guide to becoming a prfessional cheg
        </h1>
        <div className="flex items-center mt-4">
          <img
            src={man}
            alt="author cover"
            loading="lazy"
            className="w-8 h-8 rounded-full object-cover mr-3"
          />
          <div className="text-sm text-gray-500">
            <span className="mr-4">Jhon Smith</span> |{" "}
            <span className="ml-4">12 december 2021</span>
          </div>
        </div>
        <p className="max-w-96 ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.", author:
          "Wade Warren
        </p>
        <img
          src={chef}
          className="w-full max-h-[500px] mt-10 rounded-2xl"
          loading="lazy"
          alt="blog image"
        />
      </div>
      <div className="container mx-auto flex gap-10 px-10">
        <Directions />
        <div className="w-96 flex flex-col items-center justify-center gap-4">
          <h4 className="capitalize">share this on:</h4>
          <SocialMediaIcons direction="flex-col" />
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
}

export default BlogDetails;
