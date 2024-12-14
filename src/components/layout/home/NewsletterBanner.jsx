import React from "react";
import banner from "../../../assets/letterbanner.jpg";
const NewsletterBanner = ({ background }) => {
  return (
    <div className="my-20">
      <div
        className={` container mx-auto ${background} lg:bg-transparent  overflow-hidden rounded-[40px]  relative h-96   `}
      >
        {background !== "bg-transparent" && (
          <img
            src={banner}
            alt="banner "
            loading="lazy"
            className=" object-cover hidden lg:block "
          />
        )}
        <div className="w-full  absolute inset-0 flex  flex-col items-center justify-center">
          <h1 className=" text-4xl md:text-5xl font-bold mb-4">
            Deliciousness to your inbox
          </h1>
          <p className="text-gray-600 mb-6 text-center max-w-[440px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad
            minim.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email address..."
              className="flex-grow p-2 border focus:outline-none rounded-l-lg"
            />
            <button className="bg-black text-white px-4 py-2 rounded-r-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterBanner;
