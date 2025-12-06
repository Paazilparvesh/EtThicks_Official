import { useEffect, useState } from "react";
import axios from "axios";
import now from "/src/assets/about/now.png";

function Count() {
  const [counts, setCounts] = useState({ projects: 0, clients: 0, contents: 0 });
  const [targetCounts, setTargetCounts] = useState({ projects: 0, clients: 0, contents: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from Strapi API
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:1337/api/count");
        
        // Extract data from Strapi response
        const apiData = response.data.data;
        
        setTargetCounts({
          projects: apiData.projects || 0,
          clients: apiData.clients || 0,
          contents: apiData.Content_Produced || 0,
        });
        
        setLoading(false);
      } catch (err) {
        console.error("Error fetching count data:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Animate counter once data is loaded
  useEffect(() => {
    if (loading) return; // Don't start animation until data is loaded

    const speed = 30;

    const interval = setInterval(() => {
      setCounts((prev) => {
        let done = true;
        const updated = { ...prev };

        for (const key in targetCounts) {
          if (prev[key] < targetCounts[key]) {
            updated[key] = Math.min(prev[key] + 1, targetCounts[key]);
            done = false;
          }
        }

        if (done) clearInterval(interval);
        return updated;
      });
    }, speed);

    return () => clearInterval(interval);
  }, [targetCounts, loading]);

  if (loading) {
    return (
      <div
        className="w-full bg-cover bg-center py-12 sm:py-16 md:py-24 px-4 sm:px-6"
        style={{
          backgroundImage: `url(${now})`,
        }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white text-xl sm:text-2xl">Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="w-full bg-cover bg-center py-12 sm:py-16 md:py-24 px-4 sm:px-6"
        style={{
          backgroundImage: `url(${now})`,
        }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-red-500 text-xl sm:text-2xl">Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="w-full bg-cover bg-center py-12 sm:py-16 md:py-24 px-4 sm:px-6"
      style={{
        backgroundImage: `url(${now})`,
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-around items-center text-center gap-8 sm:gap-12">
        {/* Projects */}
        <div>
          <h1 className="text-[#FFAE00] text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-[Work Sans]">
            {counts.projects}+
          </h1>
          <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-[32px] font-[Nunito] mt-2">PROJECTS</p>
        </div>

        {/* Clients */}
        <div>
          <h1 className="text-[#FFAE00] text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-[Work Sans]">
            {counts.clients}+
          </h1>
          <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-[32px] font-[Nunito] mt-2">CLIENTS</p>
        </div>

        {/* Content Produced */}
        <div>
          <h1 className="text-[#FFAE00] text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-[Work Sans]">
            {counts.contents}+
          </h1>
          <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-[32px] font-[Nunito] mt-2">
            CONTENT PRODUCED
          </p>
        </div>
      </div>
    </div>
  );
}

export default Count;
