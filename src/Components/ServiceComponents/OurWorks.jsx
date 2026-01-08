
import { useState, useEffect, useRef } from 'react';
import log from "/src/assets/servone/Portfolis.png";

const Base_Url = import.meta.env.VITE_API_URL;

const PORTFOLIO_API_MAP = {
  "content-creation": `${Base_Url}/api/portfolios?populate=*`,
  "digital-marketing": `${Base_Url}/api/protfolio-2s?populate=*`,
  "web-development": `${Base_Url}/api/portfolio-3s?populate=*`,
  "branding": `${Base_Url}/api/portfolio-4s?populate=*`,
  "seo": `${Base_Url}/api/portfolio-5s?populate=*`,
  "performance-marketing": `${Base_Url}/api/portfolio-6s?populate=*`,
};

function OurWorks({ category }) {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const carouselRef = useRef(null);

  /* ================= FETCH DATA ================= */
  useEffect(() => {
    const fetchPortfolio = async () => {
      setLoading(true);
      try {
        const apiUrl =
          PORTFOLIO_API_MAP[category] ||
          PORTFOLIO_API_MAP["content-creation"];

        const response = await fetch(apiUrl);
        const data = await response.json();

        const formatted = data.data.map((item) => {
          const imageUrl = item.image?.url
            ? `${Base_Url}${item.image.url}`
            : item.image?.[0]?.url
            ? `${Base_Url}${item.image[0].url}`
            : "https://via.placeholder.com/400x300?text=No+Image";

          return {
            id: item.id,
            documentId: item.documentId,
            image: imageUrl,
            title: item.name || "Project Name",
            url: item.url || "#",
          };
        });

        setPortfolioItems(formatted);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolio();
  }, [category]);

  /* ================= AUTO SCROLL LOOP ================= */
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel || portfolioItems.length === 0) return;

    let animationFrame;
    const speed = 0.8; // 🔥 adjust speed here

    const scroll = () => {
      carousel.scrollLeft += speed;

      // 🔁 When half scrolled → reset seamlessly
      if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
        carousel.scrollLeft = 0;
      }

      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrame);
  }, [portfolioItems]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-white text-xl">
        Loading...
      </div>
    );
  }

  if (portfolioItems.length === 0) {
    return (
      <div
        style={{
          backgroundImage: `url(${log})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="min-h-[500px] flex items-center justify-center"
      >
        <h2 className="text-white text-3xl">No portfolio items found</h2>
      </div>
    );
  }

  /* 🔁 DUPLICATE ITEMS FOR LOOP */
  const loopItems = [...portfolioItems, ...portfolioItems];

  return (
    <div
      style={{
        backgroundImage: `url(${log})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="py-10 px-6 md:px-16 rounded-4xl"
    >
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 font-worksans">
        OUR WORKS
      </h1>

      <div className="overflow-hidden">
        <div
          ref={carouselRef}
          className="flex gap-4 overflow-x-hidden hide-scrollbar"
        >
          {loopItems.map((item, index) => (
            <a
              key={`${item.documentId}-${index}`}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 w-[250px] md:w-[320px] bg-[#212121] rounded-3xl shadow-lg hover:shadow-2xl transition"
            >
              <div className="h-[270px] md:h-[400px] overflow-hidden rounded-3xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover p-2 rounded-3xl"
                />
              </div>
              <div className="px-4 py-3">
                <h3 className="text-white text-lg font-bold font-nunito line-clamp-2">
                  {item.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}

export default OurWorks;
