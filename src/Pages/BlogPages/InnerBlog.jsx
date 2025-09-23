// src/Pages/InnerBlog.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { articlesData } from "/src/Data/Data.jsx";
import end from "/src/assets/service/end.png";

function InnerBlog() {
  const { id } = useParams();
  const blog = articlesData.find((item) => item.id === parseInt(id));

  if (!blog) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        Blog Not Found
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* Top Banner Image */}
      <div className="w-full flex justify-center">
        <img
          src={end}
          alt="Top Banner"
          className="w-full max-w-[1400px] h-[400px] object-cover"
        />
      </div>

      {/* Blog Content */}
      <div className="p-8 flex-1 max-w-4xl mx-auto">
        <Link
          to="/blog"
          className="text-yellow-400 mb-6 inline-block hover:underline"
        >
          ← Back to Blogs
        </Link>

        <h1
          className="text-4xl font-bold mb-4"
          style={{ fontFamily: "'Work Sans', sans-serif" }}
        >
          {blog.title}
        </h1>

        <p className="text-gray-400 mb-6">{blog.date}</p>

        <p
          className="text-white"
          style={{
            fontFamily: "'Work Sans', sans-serif",
            fontSize: "20px",
            lineHeight: "1.8",
          }}
        >
          {blog.description ||
            "This blog currently doesn’t have a full description, but stay tuned for updates!"}
        </p>
      </div>
    </div>
  );
}

export default InnerBlog;
