import React from "react";
import ima from "/src/assets/home/img1.png";
import imy from "/src/assets/home/grape.png";
import imr from "/src/assets/home/pad.png";
import ino from "/src/assets/home/note.png";

function BlogSection() {
  return (
    <div className="w-full min-h-screen bg-black relative overflow-hidden px-6 sm:px-8 md:px-12 py-16">
      {/* Glowing background circle (furthest back) */}
      <div className="w-[747px] h-[747px] absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 bg-cyan-500 rounded-full blur-[600px] -z-20" />

      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12 relative">
        {/* Left Content */}
        <div className="flex-1 relative w-full">
          {/* Blog Heading */}
          <h1 className="text-white text-[100px] sm:text-[120px] md:text-[160px] font-medium font-['Work_Sans'] uppercase leading-none relative z-10">
            Blog
          </h1>

          {/* Blog Title */}
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-medium font-['Work_Sans'] mt-6 relative z-10">
            Why Quality Content is Still King in 2025
          </h2>

          {/* Blog Description */}
          <p className="text-white text-base sm:text-lg md:text-xl font-normal font-['Work_Sans'] leading-relaxed mt-4 max-w-full md:max-w-2xl relative z-10">
            Explore why high-quality, authentic content continues to outperform
            clickbait and AI-generated fluff. This post can include insights
            into Google’s evolving algorithm{" "}
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
        <div className="w-full md:w-[499px] h-60 sm:h-72 md:h-96 bg-black/20 rounded-2xl overflow-hidden relative z-10">
          <img
            src={ima}
            alt="Main blog"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>

      {/* Bottom Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
        {[imy, imr, ino].map((img, idx) => (
          <div
            key={idx}
            className="relative w-full md:w-96 h-48 sm:h-56 md:h-64 rounded-3xl overflow-hidden"
          >
            <img
              src={img}
              alt={`Blog ${idx + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
            <p className="absolute bottom-4 left-4 text-white text-base sm:text-lg md:text-xl font-medium font-['Work_Sans'] leading-snug">
              From Idea to Impact: The Content Creation Process Explained
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogSection;
