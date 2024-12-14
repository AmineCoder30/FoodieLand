// File: src/components/BlogList.js

import React from "react";
import { Link } from "react-router-dom";
import blogPosts from "../../../constants/posts";

const BlogList = () => {
  return (
    <div className="flex-1  px-4 py-8">
      {blogPosts.map((post, index) => (
        <Link
          to="/blogDetails"
          key={index}
          className="flex items-center flex-col sm:flex-row gap-5 mb-6 border-b pb-6 last:border-none"
        >
          {/* Post Image */}
          <div className="w-full sm:w-1/3 flex-shrink-0 mr-6">
            <img
              src={post.image}
              alt={post.title}
              loading="lazy"
              className="rounded-lg object-cover w-full h-32 md:h-40"
            />
          </div>

          {/* Post Details */}
          <div className="flex-grow">
            <h3 className="text-lg font-semibold text-gray-800 hover:underline">
              {post.title}
            </h3>
            <p className="text-sm text-gray-500 mt-2">{post.description}</p>

            {/* Author and Date */}
            <div className="flex items-center mt-4">
              <img
                src={post.avatar}
                alt={post.author}
                loading="lazy"
                className="w-8 h-8 rounded-full object-cover mr-3"
              />
              <div className="text-sm text-gray-500">
                <span>{post.author}</span> &middot; <span>{post.date}</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogList;
