import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import axios from "axios";

gsap.registerPlugin(ScrollTrigger);

function AboutSection() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const statsRef = useRef(null);
  const numbersRef = useRef([]);
  const textItemsRef = useRef([]);

  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    contents: 0,
  });

  const [targetCounts, setTargetCounts] = useState({
    projects: 30,
    clients: 12,
    contents: 100,
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
        // Use hardcoded values as fallback
        const defaultData = {
          projects: 25,
          clients: 13,
          contents: 20,
        };
        
        // If you have an API endpoint, you can use:
        // const res = await axios.get(`${Base_Url}/api/count`);
        // const apiData = res.data.data;
        
        // For now, use the values from the image
        setTargetCounts({
          projects: defaultData.projects,
          clients: defaultData.clients,
          contents: defaultData.contents,
        });

        setLoading(false);
      } catch (err) {
        console.error("Error fetching count data:", err);
        // Use fallback values if API fails
        setTargetCounts({
         projects: 25,
          clients: 13,
          contents: 20,
        });
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  /* ---------------- GSAP Animations Setup ---------------- */
  useEffect(() => {
    if (loading) return;

    // Animate the main text content
    gsap.fromTo(
      textRef.current,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "bottom 20%",
        },
      }
    );

    // Animate heading elements
    gsap.fromTo(
      headingRef.current,
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          end: "bottom 20%",
        },
      }
    );

    // Animate paragraph
    gsap.fromTo(
      paragraphRef.current,
      {
        y: 40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.4,
        delay: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: "top 85%",
          end: "bottom 20%",
        },
      }
    );

    // Animate stats section with reveal effect
    const statsElements = statsRef.current?.children[0]?.children || [];
    
    // Animate each stat item
    if (statsElements.length > 0) {
      Array.from(statsElements).forEach((stat, index) => {
        // Animate the number
        gsap.fromTo(
          numbersRef.current[index],
          {
            y: 60,
            opacity: 0,
            scale: 0.8,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            delay: index * 0.2,
            ease: "back.out(0.5)",
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 105%",
              end: "bottom 85%",
            },
          }
        );

        // Animate the text
        gsap.fromTo(
          textItemsRef.current[index],
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: index * 0.2 + 0.3,
            ease: "power3.out",
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 155%",
              end: "bottom 25%",
            },
          }
        );
      });
    }

    // Add a subtle scale animation to the entire stats section
    gsap.fromTo(
      statsRef.current,
      {
        scale: 0.95,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 85%",
          end: "bottom 20%",
        },
      }
    );

    // Clean up ScrollTrigger instances
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [loading]);

  /* ---------------- Counter animation ---------------- */
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

    if (statsRef.current) observer.observe(statsRef.current);

    return () => observer.disconnect();
  }, [loading, hasAnimated]);

  /* ---------------- Smooth counter animation ---------------- */
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
        ref={sectionRef}
        className="w-full min-h-screen bg-black flex flex-col items-center justify-center"
      >
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white text-xl">Loading...</p>
        </div>
      </div>
    );
  }

  /* ---------------- Error ---------------- */
  if (error) {
    console.log("Using fallback data due to error:", error);
    // Continue with fallback data instead of showing error
  }

  return (
    <div
      ref={sectionRef}
      className="w-full bg-black flex flex-col items-center justify-center"
    >
      {/* Main Content Section */}
      <div className="w-full min-h-screen -mt-25  flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10">
        {/* Text Section */}
        <div 
          ref={textRef}
          className="text-center w-full max-w-[95%] sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto"
        >
          <div className="mb-2 sm:mb-3 md:mb-2">
            <h4 
              ref={headingRef}
              className="text-[#E69500] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-xl tracking-wide font-nunito"
            >
              ABOUT US
            </h4>
          </div>
          <h2 
            ref={headingRef}
            className="text-xl  sm:text-2xl md:text-xl lg:text-4xl xl:text-5xl font-normal text-white uppercase leading-tight sm:leading-snug md:leading-snug tracking-wider font-worksans"
          >
            Your Brand Has a <span className="text-[#E69500]">Story</span>. We'll <br className="hidden xl:block" />
            Take It <span className="text-[#E69500]">Everywhere</span>
          </h2>
          <p 
            ref={paragraphRef}
            className="text-sm w-fit  sm:text-sm md:text-base lg:text-lg xl:text-xl text-white font-normal leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-9 mt-3 sm:mt-4 md:mt-6 lg:mt-8  font-nunito"
          >
            EtThicks is not just another digital agency — we're a storytelling
            powerhouse rooted in truth, trust, and transformation. Born from the
            Tamil word "Etuthikkum", meaning to reach in all eight directions, we
            specialize in content that carries your brand farther — emotionally,
            culturally, and commercially.
          </p>
        </div>
      </div>

      {/* Desktop Stats Count Section - Keeping your original laptop design exactly as is */}
      <div 
        ref={statsRef}
        className="hidden md:block w-full py-0 mb-15 bg-black"
      >
        <div className="max-w-7xl mx-auto flex sm:flex-row justify-around items-center text-center gap-8 md:gap-12 lg:gap-46">
          {/* Projects - Positioned slightly higher */}
          <div className="flex flex-col items-center relative -mt-4 md:-mt-66">
            <div 
              ref={el => numbersRef.current[0] = el}
              className="flex items-end justify-center"
            >
              <h1 className="text-[#FFAE00] font-medium text-5xl md:text-2xl lg:text-[80px] font-worksans leading-none">
                {counts.projects}
              </h1>
              <span className="text-blue-300 text-4xl md:text-2xl lg:text-4xl font-worksans mb-1 md:mb-2 lg:mb-3">+</span>
            </div>
            <p 
              ref={el => textItemsRef.current[0] = el}
              className="text-white text-lg md:text-xl lg:text-[32px] mt-1 md:mt-2 font-nunito font-normal tracking-wide"
            >
              PROJECTS
            </p>
          </div>

          {/* Content Produced - Also positioned slightly higher */}
          <div className="flex flex-col items-center relative -mt-2 md:-mt-34">
            <div 
              ref={el => numbersRef.current[1] = el}
              className="flex items-end justify-center"
            >
              <h1 className="text-[#FFAE00] text-5xl md:text-2xl font-medium lg:text-[80px] font-worksans leading-none">
                {counts.contents}
              </h1>
              <span className="text-blue-300 text-4xl md:text-2xl  lg:text-4xl font-worksans mb-1 md:mb-2 lg:mb-3">+</span>
            </div>
            <p 
              ref={el => textItemsRef.current[1] = el}
              className="text-white text-lg md:text-xl lg:text-[32px] mt-1 md:mt-2 font-nunito font-normal tracking-wide"
            >
              CONTENT PRODUCED
            </p>
          </div>

          {/* Clients - Positioned slightly higher */}
          <div className="flex flex-col items-center relative -mt-4 md:-mt-66">
            <div 
              ref={el => numbersRef.current[2] = el}
              className="flex items-end justify-center"
            >
              <h1 className="text-[#FFAE00] text-5xl md:text-2xl lg:text-[80px] font-worksans font-medium leading-none">
                {counts.clients}
              </h1>
              <span className="text-blue-300 text-4xl md:text-2xl lg:text-4xl font-worksans mb-1 md:mb-2 lg:mb-3">+</span>
            </div>
            <p 
              ref={el => textItemsRef.current[2] = el}
              className="text-white text-lg md:text-xl lg:text-[32px] mt-1 md:mt-2 pb font-nunito font-semibold tracking-wide"
            >
              CLIENTS
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Stats Count Section - Completely separate mobile design matching the image */}
   <div className="md:hidden w-full bg-black -mt-40 mb-8">
  <div className="flex flex-row items-center justify-center px-4">
    {/* Clients */}
    <div className="flex flex-col items-center w-full -mt-24">
      <div className="flex items-center justify-center">
        <h1 className="text-[#FFAE00] text-xl font-worksans  leading-none">
          {counts.clients}
        </h1>
        <span className="text-blue-300 text-xl font-worksans">+</span>
      </div>
      <p className="text-white font-nunito tracking-wider mt-0 whitespace-nowrap">
        CLIENTS
      </p>
    </div>

    {/* Content Produced - Same position */}
    <div className="flex flex-col items-center w-full -mt-4">
      <div className="flex items-center justify-center">
        <h1 className="text-[#FFAE00] text-xl font-worksans leading-none"> 
          {counts.projects}
        </h1>
        <span className="text-blue-300 text-xl font-worksans">+</span>
      </div>
      <p className="text-white font-nunito tracking-wider mt-0 whitespace-nowrap">
        CONTENT PRODUCED
      </p>
    </div>

    {/* Projects - Same position */}
    <div className="flex flex-col items-center w-full -mt-24">
      <div className="flex items-center justify-center">
        <h1 className="text-[#FFAE00] text-xl font-worksans leading-none">
          {counts.contents}
        </h1>
        <span className="text-blue-300 text-xl font-worksans">+</span>
      </div>
      <p className="text-white font-nunito tracking-wider mt-0 text-center whitespace-nowrap">
        PROJECTS
      </p>
    </div>
  </div>
</div>
    </div>
  );
}

export default AboutSection;