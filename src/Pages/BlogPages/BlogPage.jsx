import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

function Blogs() {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("desc");

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
      setBlogs(result.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setLoading(false);
    }
  };

  const handleBlogClick = (blog) => {
    navigate("/blogs/details", { state: { blog } });
  };

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

  if (loading) {
    return (
      <div className="w-full min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-xl">Loading blogs...</p>
      </div>
    );
  }

  const latestBlog = blogs.length > 0 ? blogs[0] : null;

  const sortByDate = (a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);
    return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
  };

  const filteredArticles = [...blogs]
    .filter((a) => {
      const searchLower = search.toLowerCase();
      return (
        a.name.toLowerCase().includes(searchLower) ||
        a.description.toLowerCase().includes(searchLower)
      );
    })
    .sort(sortByDate);

  const ArticleCard = ({ blog, index }) => {
    const [imageError, setImageError] = useState(false);
    const translateClass =
      index % 3 === 1
        ? "lg:-translate-y-12 xl:-translate-y-6 2xl:-translate-y-12"
        : "";

    return (
      <div
        onClick={() => handleBlogClick(blog)}
        className={`w-full rounded-xl flex flex-col overflow-hidden cursor-pointer hover:scale-105 transition transform ${translateClass}`}
      >
        <img
          src={imageError ? DEFAULT_IMAGE : getImageUrl(blog)}
          alt={blog.image?.[0]?.alternativeText || blog.name}
          onError={() => setImageError(true)}
          className="flex-1 w-full h-auto object-cover"
        />

        <div className="bg-gray-50 p-4">
          <h2 className="text-xs text-gray-500 mb-1 font-nunito">
            {new Date(blog.createdAt).toLocaleDateString()}
          </h2>
          <p className="text-lg md:text-sm xl:text-lg font-medium text-black font-worksans">
            {blog.name}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full flex flex-col bg-black text-white min-h-screen pt-14 md:pt-0 xl:pt-12">
      {latestBlog && (
        <div className="flex items-center justify-center p-4 md:p-6 lg:p-1 mt-10 md:mt-20 xl:mt-6">
          <div
            className="relative w-full max-w-[1280px] h-[400px] md:h-[500px] lg:h-[644px] overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            onClick={() => handleBlogClick(latestBlog)}
          >
            <img
              src={getImageUrl(latestBlog)}
              alt={latestBlog.name}
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />

            <div className="absolute top-4 md:top-6 lg:top-8 left-4 md:left-6 lg:left-8">
              <h1
                className="text-4xl md:text-5xl lg:text-6xl xl:text-9xl font-medium font-worksans tracking-wider text-transparent bg-clip-text"
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
            </div>
          </div>
        </div>
      )}

      {/* ---------------- Articles Section ---------------- */}
      <div className="w-full p-8 sm:p-6 md:p-8 lg:p-10 xl:p-12">
        {/* 🔥 MOBILE FIX HERE */}
        <div className="w-full flex flex-row md:flex-row justify-between items-center mb-6 md:mb-10 gap-2 md:gap-4">
          <h1 className="text-2xl md:text-5xl lg:pl-20 lg:text-4xl font-normal font-worksans whitespace-nowrap">
            Articles
          </h1>

          <div className="flex items-center gap-2 lg:pr-20 w-full md:w-auto justify-end">
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-9 md:h-auto w-full    md:w-60 bg-[#D9D9D9] rounded-full px-4 md:px-6 md:py-2 text-black outline-none text-xs md:text-sm font-nunito"
            />

            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="h-9 md:h-auto bg-[#D9D9D9] rounded-full px-3 md:px-4 md:py-2 text-black outline-none text-xs md:text-sm font-nunito"
            >
              <option value="desc">Newest</option>
              <option value="asc">Oldest</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4 lg:mt-40">
          {filteredArticles.map((blog, index) => (
            <ArticleCard key={blog.documentId} blog={blog} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
