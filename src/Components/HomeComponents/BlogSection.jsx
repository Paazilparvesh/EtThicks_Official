// src/Components/Home/BlogSection.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { articlesData } from "/src/Data/Data.jsx";

function BlogSection() {
  const navigate = useNavigate();

  // Take latest blog (highest id OR newest date)
  const latestBlog = articlesData.reduce((prev, current) =>
    new Date(prev.date) > new Date(current.date) ? prev : current
  );

  // Take next 3 blogs for cards
  const otherBlogs = articlesData
    .filter((b) => b.id !== latestBlog.id)
    .slice(0, 3);

  return (
    <div className="w-full min-h-screen bg-black relative overflow-hidden px-6 sm:px-8 md:px-12 py-16">
      {/* Glowing background circle */}
      <div className="w-[747px] h-[747px] absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 bg-cyan-500 rounded-full blur-[600px] -z-20" />

      <h1 className="lg:hidden text-white text-2xl md:text-5xl font-medium font-['Work_Sans'] uppercase leading-none relative z-10 mb-10">
        Blog
      </h1>

      {/* -------- Top Section (Latest Blog) -------- */}
      <div className="flex flex-col-reverse lg:flex-row justify-between items-start gap-6 relative">
        {/* Left Content */}
        <div className="flex-1 relative w-full cursor-pointer"
          onClick={() => navigate(`/blog/${latestBlog.id}`)}>
          {/* Blog Heading */}
          <h1 className="hidden lg:flex text-white text-8xl font-semibold font-['Work_Sans'] uppercase leading-none relative z-10 mb-10">
            Blog
          </h1>

          {/* Blog Title */}
          <h2 className="text-white text-2xl md:text-4xl font-medium font-['Work_Sans']  relative z-10">
            {latestBlog.title}
          </h2>

          {/* Blog Description */}
          <p className="text-gray-500 text-base md:text-xl font-normal font-['Work_Sans'] leading-relaxed mt-4 max-w-full md:max-w-2xl relative z-10">
            {latestBlog.description}{" "}
            <span className="text-amber-500 underline">More</span>
          </p>

          {/* Subheading Number */}
          <span
            className="absolute top-0 left-0 text-white/10 text-[60px] sm:text-[80px] md:text-[100px] lg:text-[120px] font-bold font-['Work_Sans'] uppercase z-0 pointer-events-none"
            aria-hidden="true"
          >
            01
          </span>
        </div>

        {/* Right Image */}
        <div
          className="w-full lg:w-[499px] h-60 sm:h-72 md:h-96 bg-black/20 rounded-2xl overflow-hidden relative z-10 cursor-pointer"
          onClick={() => navigate(`/blog/${latestBlog.id}`)}
        >
          <img
            src={latestBlog.image}
            alt={latestBlog.title}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>

      {/* -------- Bottom Blog Cards -------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {otherBlogs.map((blog, idx) => (
          <div
            key={blog.id}
            onClick={() => navigate(`/blog/${blog.id}`)}
            className="relative w-full h-48 sm:h-56 md:h-64 rounded-3xl overflow-hidden cursor-pointer group"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
            <p className="absolute bottom-4 left-4 text-white text-base sm:text-lg md:text-xl font-medium font-['Work_Sans'] leading-snug">
              {blog.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogSection;
