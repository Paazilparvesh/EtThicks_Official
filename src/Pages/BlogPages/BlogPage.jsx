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
          <h2 className="text-xs lg:text-base text-gray-500 mb-1 font-nunito">
            {new Date(blog.createdAt).toLocaleDateString()}
          </h2>
          <p className="text-lg sm:text-sm lg:text-lg xl:text-xl font-medium text-black font-worksans">
            {blog.name}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full flex flex-col bg-black text-white min-h-screen pt-14 md:pt-0 xl:pt-12">
      {latestBlog && (
        <div className="flex items-center justify-center px-4 sm:px-8 lg:px-10 xl:px-16 mt-10 md:mt-20 xl:mt-10">
          <div
            style={{ backgroundImage: `url('${getImageUrl(latestBlog)}')` }}
            className="relative w-full h-full overflow-hidden rounded-3xl shadow-lg cursor-pointer bg-cover bg-center  flex flex-col items-between gap-20 sm:gap-30 lg:gap-50 xl:gap-60 2xl:gap-70"
            onClick={() => handleBlogClick(latestBlog)}
          >
            <div className=" p-3 z-10">
              <h1
                className="text-6xl sm:text-8xl lg:text-9xl font-medium font-worksans tracking-wider text-transparent bg-clip-text"
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

            <div className="p-4 z-10 flex justify-between items-end">
              <div className="">
                <h2 className="text-xs sm:text-lg lg:text-2xl text-white/80 mb-2 font-nunito">
                  {new Date(latestBlog.createdAt).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </h2>

                <p className="text-xl sm:text-3xl lg:text-6xl xl:text-7xl font-medium text-white font-worksans leading-snug">
                  {latestBlog.name}
                </p>
              </div>
              <div
                className="flex items-center justify-center size-10 sm:size-14 lg:size-20 rounded-full bg-amber-500 text-white transition hover:scale-110 hover:bg-amber-400"
              >
                <ArrowUpRight className="size-6 sm:size-8 lg:size-12" strokeWidth={2.5} />
              </div>
            </div>

            <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-black/80" />


          </div>
        </div>
      )}

      {/* ---------------- Articles Section ---------------- */}
      <div className="w-full p-8 lg:px-10 xl:px-18">
        {/* 🔥 MOBILE FIX HERE */}
        <div className="w-full flex flex-row justify-between items-center mb-6 md:mb-10 gap-8 md:gap-4">
          <h1 className="text-xl sm:text-3xl lg:text-5xl xl:text-6xl font-normal font-worksans whitespace-nowrap">
            Articles
          </h1>

          <div className="flex items-center gap-2 w-full sm:w-1/2 md:w-auto justify-end">
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-6 sm:h-8 lg:h-10 w-full md:w-60 bg-[#D9D9D9] rounded-full px-4 md:px-6 md:py-2 text-black outline-none text-sm sm:text-lg lg:text-xl font-nunito"
            />

            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="h-6 sm:h-8 lg:h-10 bg-[#D9D9D9] rounded-full px-3 md:px-4 md:py-2 text-black outline-none text-sm sm:text-lg lg:text-xl font-nunito"
            >
              <option value="desc">Newest</option>
              <option value="asc">Oldest</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 2xl:gap-12 lg:mt-40">
          {filteredArticles.map((blog, index) => (
            <ArticleCard key={blog.documentId} blog={blog} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
