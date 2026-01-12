import { useEffect, useRef, useState } from "react";
import axios from "axios";

function CountSection() {
  const sectionRef = useRef(null);

  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    contents: 0,
  });

  const [targetCounts, setTargetCounts] = useState({
    projects: 0,
    clients: 0,
    contents: 0,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const Base_Url = import.meta.env.VITE_API_URL;

  /* ---------------- Fetch data ---------------- */
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${Base_Url}/api/count`);
        const apiData = res.data.data;

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ---------------- Scroll trigger ---------------- */
  useEffect(() => {
    if (loading || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startSmoothCounter();
          setHasAnimated(true);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, hasAnimated,]);

  /* ---------------- Smooth animation ---------------- */
  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

  const animateValue = (key, target, duration = 1700) => {
    let start = null;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = easeOutCubic(progress);

      setCounts((prev) => ({
        ...prev,
        [key]: Math.floor(eased * target),
      }));

      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  const startSmoothCounter = () => {
    animateValue("projects", targetCounts.projects);
    animateValue("clients", targetCounts.clients);
    animateValue("contents", targetCounts.contents);
  };

  /* ---------------- Loading ---------------- */
  if (loading) {
    return (
      <div
        className="w-full bg-black py-12 md:py-24 px-4"
      >
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white text-xl">Loading...</p>
        </div>
      </div>
    );
  }

  /* ---------------- Error ---------------- */
  if (error) {
    return (
      <div
        className="w-full bg-black py-12 md:py-24 px-4"
      >
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-red-500 text-xl">Error: {error}</p>
        </div>
      </div>
    );
  }

  /* ---------------- UI ---------------- */
  return (
    <div
      ref={sectionRef}
      className="w-full bg-black pb-20 md:py-24 px-4"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-around items-center text-center gap-10">
        {/* Projects */}
        <div>
          <h1 className="text-[#FFAE00] text-5xl lg:text-[80px] font-worksans">
            {counts.projects}
            <span className="text-[#009BB5] lg:text-6xl">+</span>
          </h1>
          <p className="text-white text-3xl lg:text-[32px] mt-2 font-nunito">
            PROJECTS
          </p>
        </div>

        {/* Content */}
        <div className="hidden sm:block">
          <h1 className="text-[#FFAE00] text-5xl lg:text-[80px] font-worksans">
            {counts.contents}
            <span className="text-[#009BB5] lg:text-6xl">+</span>
          </h1>
          <p className="text-white text-3xl lg:text-[32px] mt-2 font-nunito">
            CONTENT PRODUCED
          </p>
        </div>

        {/* Clients */}
        <div>
          <h1 className="text-[#FFAE00] text-5xl lg:text-[80px] font-worksans">
            {counts.clients}
            <span className="text-[#009BB5] lg:text-6xl">+</span>
          </h1>
          <p className="text-white text-3xl lg:text-[32px] mt-2 font-nunito">
            CLIENTS
          </p>
        </div>

        {/* Content */}
        <div className="sm:hidden">
          <h1 className="text-[#FFAE00] text-5xl lg:text-[80px] font-worksans">
            {counts.contents}
            <span className="text-[#009BB5] lg:text-6xl">+</span>
          </h1>
          <p className="text-white text-3xl lg:text-[32px] mt-2 font-nunito">
            CONTENT PRODUCED
          </p>
        </div>

      </div>
    </div>
  );
}

export default CountSection;
