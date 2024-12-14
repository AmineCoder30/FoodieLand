// File: src/components/ContactForm.js

import React from "react";
import image from "../../../assets/chefpromo.svg";
const ContactForm = () => {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between p-8 lg:p-16">
      {/* Left Side Image */}
      <div className="w-full lg:w-1/3 mb-8 lg:mb-0 flex justify-center">
        <img
          src={image}
          alt="Chef giving thumbs up"
          className="rounded-lg  w-72 lg:w-auto"
          loading="lazy"
        />
      </div>

      {/* Contact Form */}
      <div className="w-full lg:w-2/3   p-6 lg:p-12">
        <h2 className="text-3xl font-bold text-center mb-6">Contact us</h2>
        <form className="space-y-4">
          {/* Name and Email Fields */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name..."
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your email address..."
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500"
              />
            </div>
          </div>

          {/* Subject and Enquiry Type */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Enter subject..."
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500"
              />
            </div>
            <div>
              <label
                htmlFor="enquiry"
                className="block text-sm font-medium text-gray-700"
              >
                Enquiry Type
              </label>
              <select
                id="enquiry"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500"
              >
                <option>Advertising</option>
                <option>Support</option>
                <option>Feedback</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Messages
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Enter your messages..."
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500"
            />
          </div>

          {/* Submit Button */}
          <div className="">
            <button
              type="submit"
              className="px-6 py-2 bg-black text-white font-bold rounded-md shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
