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
    projects: 0,
    clients: 0,
    contents: 0,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const Base_Url = import.meta.env.VITE_API_URL;

  /* ---------------- Fetch data from API ---------------- */
  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await axios.get(`${Base_Url}/api/count`, {
          signal: abortController.signal
        });

        // Extract data from API response
        const apiData = res.data.data;

        // Map API data correctly to state
        setTargetCounts({
          projects: apiData.projects || 0,
          clients: apiData.clients || 0,
          contents: apiData.Content_Produced || 0,
        });

        setLoading(false);
      } catch (err) {
        if (err.name !== 'AbortError') {
          console.error("Error fetching count data:", err);
          setError(err.message);
          
          // Fallback values if API fails
          setTargetCounts({
            projects: 25,
            clients: 13,
            contents: 20,
          });
          
          setLoading(false);
        }
      }
    };

    fetchData();

    // Cleanup function to cancel API request on unmount
    return () => abortController.abort();
  }, [Base_Url]);

  /* ---------------- GSAP Animations Setup ---------------- */
  useEffect(() => {
    if (loading) return;

    const ctx = gsap.context(() => {
      // Animate the main text content
      gsap.fromTo(
        textRef.current,
        {
          y: 50,
          opacity: 0,
        },
<<<<<<< HEAD
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

    // Only animate stats for desktop (md and above)
    const isMobile = window.innerWidth < 768;
    
    if (!isMobile) {
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
=======
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
>>>>>>> d16331f2407f5580986d6381525236e1e8527c9f
            start: "top 85%",
            end: "bottom 20%",
          },
        }
      );
<<<<<<< HEAD
    }
=======
>>>>>>> d16331f2407f5580986d6381525236e1e8527c9f

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

      // Animate stats section
      const statsElements = statsRef.current?.children[0]?.children || [];
      
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

      // Scale animation to entire stats section
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
    }, sectionRef);

    // Clean up GSAP context and ScrollTriggers
    return () => ctx.revert();
  }, [loading]);

<<<<<<< HEAD
  /* ---------------- Counter animation (Desktop only) ---------------- */
=======
  /* ---------------- Counter animation with IntersectionObserver ---------------- */
>>>>>>> d16331f2407f5580986d6381525236e1e8527c9f
  useEffect(() => {
    if (loading || hasAnimated) return;

    // Only run counter animation for desktop
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      // Set static values for mobile immediately
      setCounts({
        projects: targetCounts.projects,
        clients: targetCounts.clients,
        contents: targetCounts.contents,
      });
      setHasAnimated(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startSmoothCounter();
          setHasAnimated(true);
        }
      },
      { threshold: 0.4 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

<<<<<<< HEAD
    return () => observer.disconnect();
=======
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
>>>>>>> d16331f2407f5580986d6381525236e1e8527c9f
  }, [loading, hasAnimated, targetCounts]);

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

  /* ---------------- Loading State ---------------- */
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

  return (
    <div
      ref={sectionRef}
      className="w-full bg-black flex flex-col items-center justify-center"
    >
      {/* Main Content Section */}
<<<<<<< HEAD
      <div className="
        w-full min-h-screen
        -mt-[200px]        /* mobile */
        sm:-mt-[100px]     /* small devices */
        md:-mt-[80px]      /* tablets */
        lg:-mt-[60px]      /* laptops */
        xl:-mt-[100px]     /* large screens */
        flex flex-col items-center justify-center
        px-4 sm:px-6 md:px-8 lg:px-10
      ">
=======
      <div className="w-full min-h-screen -mt-25 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10">
>>>>>>> d16331f2407f5580986d6381525236e1e8527c9f
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
<<<<<<< HEAD
            ref={headingRef}
=======
>>>>>>> d16331f2407f5580986d6381525236e1e8527c9f
            className="text-xl sm:text-2xl md:text-xl lg:text-4xl xl:text-5xl font-normal text-white uppercase leading-tight sm:leading-snug md:leading-snug tracking-wider font-worksans"
          >
            Your Brand Has a <span className="text-[#E69500]">Story</span>. We'll <br className="hidden xl:block" />
            Take It <span className="text-[#E69500]">Everywhere</span>
          </h2>
          <p 
            ref={paragraphRef}
            className="text-sm w-fit sm:text-sm md:text-base lg:text-lg xl:text-xl text-white font-normal leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-9 mt-3 sm:mt-4 md:mt-6 lg:mt-8 font-nunito"
          >
            EtThicks is not just another digital agency — we're a storytelling
            powerhouse rooted in truth, trust, and transformation. Born from the
            Tamil word "Etuthikkum", meaning to reach in all eight directions, we
            specialize in content that carries your brand farther — emotionally,
            culturally, and commercially.
          </p>
        </div>
      </div>

<<<<<<< HEAD
      {/* Desktop Stats Count Section - With animations */}
=======
      {/* Desktop Stats Count Section */}
>>>>>>> d16331f2407f5580986d6381525236e1e8527c9f
      <div 
        ref={statsRef}
        className="hidden md:block w-full py-0 mb-15 bg-black"
      >
        <div className="max-w-7xl mx-auto flex sm:flex-row justify-around items-center text-center gap-8 md:gap-12 lg:gap-46">
          {/* Projects */}
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

          {/* Clients */}
          <div className="flex flex-col items-center relative -mt-2 md:-mt-34">
            <div 
              ref={el => numbersRef.current[1] = el}
              className="flex items-end justify-center"
            >
              <h1 className="text-[#FFAE00] text-5xl md:text-2xl font-medium lg:text-[80px] font-worksans leading-none">
                {counts.clients}
              </h1>
              <span className="text-blue-300 text-4xl md:text-2xl lg:text-4xl font-worksans mb-1 md:mb-2 lg:mb-3">+</span>
            </div>
            <p 
              ref={el => textItemsRef.current[1] = el}
              className="text-white text-lg md:text-xl lg:text-[32px] mt-1 md:mt-2 font-nunito font-normal tracking-wide"
            >
              CLIENTS
            </p>
          </div>

          {/* Content Produced */}
          <div className="flex flex-col items-center relative -mt-4 md:-mt-66">
            <div 
              ref={el => numbersRef.current[2] = el}
              className="flex items-end justify-center"
            >
              <h1 className="text-[#FFAE00] text-5xl md:text-2xl lg:text-[80px] font-worksans font-medium leading-none">
                {counts.contents}
              </h1>
              <span className="text-blue-300 text-4xl md:text-2xl lg:text-4xl font-worksans mb-1 md:mb-2 lg:mb-3">+</span>
            </div>
            <p 
              ref={el => textItemsRef.current[2] = el}
              className="text-white text-lg md:text-xl lg:text-[32px] mt-1 md:mt-2 font-nunito font-semibold tracking-wide"
            >
              CONTENT PRODUCED
            </p>
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* Mobile Stats Count Section - Static (no animations) */}
      <div className="md:hidden w-full bg-black -mt-40 mb-8">
        <div className="flex flex-row items-center justify-center px-4">
          {/* Clients */}
          <div className="flex flex-col items-center w-full -mt-44">
            <div className="flex items-center justify-center">
              <h1 className="text-[#FFAE00] text-xl font-worksans leading-none">
                {targetCounts.clients}
=======
      {/* Mobile Stats Count Section */}
      <div className="md:hidden w-full bg-black -mt-40 mb-8">
        <div className="flex flex-row items-center justify-center px-4">
          {/* Projects */}
          <div className="flex flex-col items-center w-full -mt-24">
            <div className="flex items-center justify-center">
              <h1 className="text-[#FFAE00] text-xl font-worksans leading-none">
                {counts.projects}
>>>>>>> d16331f2407f5580986d6381525236e1e8527c9f
              </h1>
              <span className="text-blue-300 text-xl font-worksans">+</span>
            </div>
            <p className="text-white font-nunito tracking-wider mt-0 whitespace-nowrap">
<<<<<<< HEAD
              CLIENTS
            </p>
          </div>

          {/* Content Produced - Same position */}
          <div className="flex flex-col items-center w-full -mt-24">
            <div className="flex items-center justify-center">
              <h1 className="text-[#FFAE00] text-xl font-worksans leading-none"> 
                {targetCounts.projects}
=======
              PROJECTS
            </p>
          </div>

          {/* Clients */}
          <div className="flex flex-col items-center w-full -mt-4">
            <div className="flex items-center justify-center">
              <h1 className="text-[#FFAE00] text-xl font-worksans leading-none">
                {counts.clients}
>>>>>>> d16331f2407f5580986d6381525236e1e8527c9f
              </h1>
              <span className="text-blue-300 text-xl font-worksans">+</span>
            </div>
            <p className="text-white font-nunito tracking-wider mt-0 whitespace-nowrap">
<<<<<<< HEAD
              CONTENT PRODUCED
            </p>
          </div>

          {/* Projects - Same position */}
          <div className="flex flex-col items-center w-full -mt-44">
            <div className="flex items-center justify-center">
              <h1 className="text-[#FFAE00] text-xl font-worksans leading-none">
                {targetCounts.contents}
=======
              CLIENTS
            </p>
          </div>

          {/* Content Produced */}
          <div className="flex flex-col items-center w-full -mt-24">
            <div className="flex items-center justify-center">
              <h1 className="text-[#FFAE00] text-xl font-worksans leading-none">
                {counts.contents}
>>>>>>> d16331f2407f5580986d6381525236e1e8527c9f
              </h1>
              <span className="text-blue-300 text-xl font-worksans">+</span>
            </div>
            <p className="text-white font-nunito tracking-wider mt-0 text-center whitespace-nowrap">
<<<<<<< HEAD
              PROJECTS
=======
              CONTENT PRODUCED
>>>>>>> d16331f2407f5580986d6381525236e1e8527c9f
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
