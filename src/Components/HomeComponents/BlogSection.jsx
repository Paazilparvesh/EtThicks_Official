import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import yellow from "/src/assets/home/yellowLine.jpg";

function BlogSection() {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const Base_Url = import.meta.env.VITE_API_URL;

  const DEFAULT_IMAGE =
    "https://via.placeholder.com/800x600/D9D9D9/666666?text=No+Image+Available";

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch(`${Base_Url}/api/blogs?populate=*`);
      const result = await response.json();
      setBlogs(result.data || []);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  // ---------- Helpers ----------
  const getImageUrl = (blog) => {
    if (
      blog?.image &&
      Array.isArray(blog.image) &&
      blog.image.length > 0 &&
      blog.image[0]?.url
    ) {
      return `${Base_Url}${blog.image[0].url}`;
    }
    return DEFAULT_IMAGE;
  };

  const getImageAlt = (blog) =>
    blog?.image?.[0]?.alternativeText || blog?.name || "Blog image";

  const handleBlogClick = (blog) => {
    navigate("/blogs/details", { state: { blog } });
  };

  // ---------- Loading ----------
  if (loading) {
    return (
      <div
        className="w-full min-h-screen flex items-center justify-center"
        style={{
          background: "radial-gradient(ellipse at center, #072a31, #000000)",
        }}
      >
        <p className="text-white text-xl">Loading blogs...</p>
      </div>
    );
  }

  if (blogs.length === 0) {
    return (
      <div
        className="w-full min-h-screen flex items-center justify-center"
        style={{
          background: "radial-gradient(ellipse at center, #072a31, #000000)",
        }}
      >
        <p className="text-white text-xl">No blogs available</p>
      </div>
    );
  }

  const latestBlog = blogs[0];
  const otherBlogs = blogs.slice(1, 4);

  // ---------- Image Component ----------
  const BlogImage = ({ blog, className }) => {
    const [error, setError] = useState(false);

    return (
      <img
        src={error ? DEFAULT_IMAGE : getImageUrl(blog)}
        alt={getImageAlt(blog)}
        onError={() => setError(true)}
        className={className}
      />
    );
  };

  return (
    <div
      className="w-full min-h-screen relative overflow-hidden px-6 sm:px-8 md:px-12 py-16"
    // style={{
    //   background: "radial-gradient(ellipse at center, #072a31, #000000)",
    // }}
    >
      {/* Mobile Heading */}
      <h1
        style={{
          backgroundImage: `url(${yellow})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          // backgroundImage: `
          //           linear-gradient(
          //             to bottom,
          //             #ffffff 0%,
          //             #ffffff 40%,
          //             #f8a81c 40%,
          //             #f8a81c 60%,
          //             #ffffff 60%,
          //             #ffffff 100%
          //           )
          //         `
        }}
        className="lg:hidden bg-clip-text text-transparent md:text-center text-3xl md:text-5xl font-medium uppercase mb-10 font-worksans"
      >
        Blog

      </h1>

      {/* ---------- TOP BLOG ---------- */}
      <div className="flex flex-col-reverse lg:flex-row gap-6">
        {/* Left Content */}
        <div
          className="flex-1 cursor-pointer flex flex-col justify-between"
          onClick={() => handleBlogClick(latestBlog)}
        >
          <h1
            className="text-4xl hidden md:block
 md:text-5xl lg:text-6xl xl:text-9xl font-medium font-worksans tracking-wider text-transparent bg-clip-text"
            style={{
              backgroundImage: `
                    linear-gradient(
                      to bottom,
                      #ffffff 0%,
                      #ffffff 40%,
                      #f8a81c 40%,
                      #f8a81c 60%,
                      #ffffff 60%,
                      #ffffff 100%
                    )
                  `,
            }}
          >
            BLOG
          </h1>

          <div>
            <h2 className="text-white text-2xl md:text-3xl xl:text-4xl font-medium font-worksans">
              {latestBlog.name}
            </h2>

            <p className="text-gray-300 text-lg lg:text-sm xl:text-xl mt-4 max-w-2xl font-nunito">
              {(latestBlog.description || "").substring(0, 150)}...
              <span className="text-amber-500 underline ml-1">More</span>
            </p>
            <span
              className="
                absolute
                top-100 left-4
                lg:top-68 lg:left-13
                opacity-26
                text-gray-600
                text-6xl lg:text-8xl
                font-medium
                pointer-events-none
              "
            >
              01
            </span>

          </div>


        </div>

        {/* Right Image */}
        <div
          className="flex-1 w-full h-auto sm:h-72 md:h-96 rounded-2xl overflow-hidden cursor-pointer"
          onClick={() => handleBlogClick(latestBlog)}
        >
          <BlogImage
            blog={latestBlog}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>

      {/* ---------- BOTTOM CARDS ---------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {otherBlogs.map((blog) => (
          <div
            key={blog.documentId}
            onClick={() => handleBlogClick(blog)}
            className="relative h-56 md:h-64 rounded-3xl overflow-hidden cursor-pointer group"
          >
            <BlogImage
              blog={blog}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black to-transparent" />

            <p className="absolute bottom-4 left-4 text-white text-lg font-medium font-nunito">
              {blog.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogSection;
