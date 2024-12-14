import React from "react";
import logo from "../../assets/Foodieland.svg";
import { SocialMediaIcons } from "../ui";
const Footer = () => {
  return (
    <footer className="bg-white container mx-auto py-6 px-2 md:px-0 ">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo and Description */}
        <div className="text-center flex flex-col md:items-start items-center md:text-left mb-4 md:mb-0">
          <img src={logo} alt="foodieland logo" loading="lazy" />
          <p className="text-sm text-gray-500 mt-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 text-sm text-gray-800">
          <a href="#" className="hover:text-gray-800">
            Recipes
          </a>
          <a href="#" className="hover:text-gray-800">
            Blog
          </a>
          <a href="#" className="hover:text-gray-800">
            Contact
          </a>
          <a href="#" className="hover:text-gray-800">
            About us
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-6 border-t border-gray-200 pt-4 flex">
        <div className="flex-1 text-center mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          {/* Copyright */}
          <p className="text-center md:text-left mb-4 md:mb-0">
            © 2020 Flowbase. Powered by{" "}
            <a
              href="https://webflow.com"
              className="text-orange-500 hover:underline"
            >
              Webflow
            </a>
          </p>

          {/* Social Links */}
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-800">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-gray-800">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-gray-800">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <SocialMediaIcons />
      </div>
    </footer>
  );
};

export default Footer;
