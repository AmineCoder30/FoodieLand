import React from "react";
import { FaInstagram } from "react-icons/fa";
import post from "../../../assets/post.jpg";
import post1 from "../../../assets/post-1.jpg";
import post2 from "../../../assets/post-2.jpg";
import post3 from "../../../assets/post-3.jpg";

const FoodieLandPromo = () => {
  return (
    <div className="py-20 bg-gradient-to-t from-light-blue to-white ">
      <div className=" container mx-auto rounded-lg flex flex-col justify-center items-center gap-4  text-center">
        <h1 className="text-5xl font-bold mb-4">
          Check out @foodieland on Instagram
        </h1>
        <p className="text-gray-600 mb-6 max-w-96">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
        <div className="my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-6">
          <img src={post} loading="lazy" alt="post 1" />
          <img src={post1} loading="lazy" alt="post 3" />
          <img src={post2} loading="lazy" alt="post 4" />
          <img src={post3} loading="lazy" alt="post 5" />
        </div>
        <button className="bg-black text-white px-4 py-2 rounded flex items-center">
          Visit Our Instagram <FaInstagram className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default FoodieLandPromo;
