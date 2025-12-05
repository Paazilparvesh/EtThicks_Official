// src/Pages/BlogPages/InnerBlog.jsx
import React from "react";
import { useLocation, Link, Navigate } from "react-router-dom";
import end from "/src/assets/service/end.png";

function InnerBlog() {
  const location = useLocation();
  const blog = location.state?.blog;

  if (!blog) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="bg-black text-white min-h-screen flex flex-col pt-20">
      {/* Top Banner Image */}
      <div className="w-full flex justify-center">
        <img
          src={end}
          alt="Top Banner"
          className="w-full md:h-[400px] xl:h-[500px] object-contain"
        />
      </div>

      {/* Blog Content */}
      <div className="w-full p-8 text-sm lg:text-lg flex-1 max-w-4xl xl:max-w-5xl mx-auto">
        <Link
          to="/blog"
          className="text-yellow-400 mb-6 inline-block hover:underline"
        >
          ← Back to Blogs
        </Link>

        <h1
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          style={{ fontFamily: "'Work Sans', sans-serif" }}
        >
          {blog.name}
        </h1>

        <p className="text-gray-400 mb-6">
          {new Date(blog.createdAt).toLocaleDateString()}
        </p>

        {/* Blog Image */}
        {blog.image && (
          <img
            src={`http://localhost:1337${blog.image.url}`}
            alt={blog.image.alternativeText || blog.name}
            className="w-full h-auto rounded-2xl mb-8 object-cover"
          />
        )}

        <p
          className="text-white text-lg"
          style={{
            fontFamily: "'Work Sans', sans-serif",
            lineHeight: "1.8",
          }}
        >
          {blog.description}
        </p>
      </div>
    </div>
  );
}

export default InnerBlog;
