import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import blogImg from "/src/assets/Blog/blow.png";
import { ArrowUpRight } from "lucide-react";
import { articlesData } from "/src/Data/Data.jsx";

function Blogs() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("desc"); // default → Newest first

  // Find latest blog (highest id)
  const latestBlog = articlesData.reduce((prev, current) =>
    prev.id > current.id ? prev : current
  );

  // Sort by date helper
  const sortByDate = (a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
  };

  // Filter & sort
  const filteredArticles = [...articlesData]
    .filter((a) => {
      const searchLower = search.toLowerCase();
      return (
        a.title.toLowerCase().includes(searchLower) ||
        a.date.toLowerCase().includes(searchLower)
      );
    })
    .sort(sortByDate);

  const ArticleCard = ({ id, date, title, image, heightClass, index }) => {
    // Only 2nd column moves up
    const translateClass =
      index % 3 === 1
        ? "lg:-translate-y-6 xl:-translate-y-6 2xl:-translate-y-12"
        : "";

    return (
      <div
        onClick={() => navigate(`/blog/${id}`)}
        className={`w-full ${heightClass} bg-[#D9D9D9] rounded-xl flex flex-col overflow-hidden cursor-pointer hover:scale-105 transition transform ${translateClass}`}
      >
        {/* 👇 Blog Image */}
        <img
          src={image}
          alt={title}
          className="flex-1 w-full  object-fit"
        />

        {/* Blog Info */}
        <div className="bg-white p-4">
          <h2 className="text-sm text-gray-500 mb-1">{date}</h2>
          <p className="text-xl font-medium text-black">{title}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* ---------------- BlogLanding Section ---------------- */}
      <div className="flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10">
        <div
          className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px] xl:h-[644px] overflow-hidden rounded-2xl shadow-lg cursor-pointer"
          onClick={() => navigate(`/blog/${latestBlog.id}`)}
        >
          <img
            src={blogImg}
            alt="Blog"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between">
            <div className="mb-4 sm:mb-0">
              <h2
                className="text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl font-normal"
                style={{ fontFamily: "'Work Sans', sans-serif" }}
              >
                {latestBlog.title}
              </h2>
              <p
                className="text-gray-300 mt-1 text-sm sm:text-base md:text-lg lg:text-xl"
                style={{ fontFamily: "'Work Sans', sans-serif" }}
              >
                {latestBlog.description}
              </p>
            </div>

            <button
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-yellow-500 flex items-center justify-center shadow-lg hover:bg-yellow-400 transition"
              onClick={() => navigate(`/blog/${latestBlog.id}`)}
            >
              <ArrowUpRight className="text-white w-5 sm:w-6 h-5 sm:h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* ---------------- Articles Section ---------------- */}
      <div className="p-4 sm:p-6 md:p-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-12 gap-4 sm:gap-0">
          <h1
            className="text-2xl sm:text-3xl md:text-4xl font-normal"
            style={{ fontFamily: "'Work Sans', sans-serif" }}
          >
            Articles
          </h1>
          <div className="flex flex-row items-center gap-2 sm:gap-4">
            {/* Search Box */}
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-10 sm:h-[49px] w-full sm:w-[175px] bg-[#D9D9D9] rounded-2xl px-3 sm:px-4 text-black outline-none text-sm sm:text-base"
            />
            {/* Sort Dropdown */}
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="h-10 sm:h-[49px] bg-[#D9D9D9] rounded-2xl px-3 sm:px-4 text-black outline-none text-sm sm:text-base"
            >
              <option value="desc">Newest First</option>
              <option value="asc">Oldest First</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {filteredArticles.map((article, index) => (
            <ArticleCard
              key={article.id}
              id={article.id}
              date={article.date}
              title={article.title}
              image={article.image}
              index={index}
              heightClass={
                index % 3 === 1
                  ? "h-[470px] sm:h-[480px] md:h-[470px] lg:h-[470px]"
                  : "h-[400px] sm:h-[420px] md:h-[400px] lg:h-[400px]"
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
