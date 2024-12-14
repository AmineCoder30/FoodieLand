import React from "react";
import { NewsletterBanner, ContactForm } from "../components/layout/";
import { RecipesCards } from "../components/ui";
import { recipes } from "../constants/recipes";
function Contact() {
  return (
    <div className="px-2 md:px-0">
      <ContactForm />
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

export default Contact;
