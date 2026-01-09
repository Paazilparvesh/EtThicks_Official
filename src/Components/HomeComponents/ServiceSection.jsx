import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

function ServiceSection() {
  const sectionRef = useRef(null);
  const contentWrapperRef = useRef(null);
  const titleRef = useRef(null);
  const panelsRef = useRef([]);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  const addToPanelsRef = (el) => {
    if (el && !panelsRef.current.includes(el)) {
      panelsRef.current.push(el);
    }
  };

  const handlePanelClick = (serviceSlug) => {
    navigate(`/service/${serviceSlug}`);
  };

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      return mobile;
    };

    const mobile = checkMobile();

    if (mobile) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    let rafId;

    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(".panel");
      const totalScrollWidth = contentWrapperRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;

      let scrollX;
      if (window.innerWidth <= 1024) {
        scrollX = totalScrollWidth - viewportWidth + 1800;
      } else if (window.innerWidth <= 1240) {
        scrollX = totalScrollWidth - viewportWidth + 80;
      } else {
        scrollX = totalScrollWidth - viewportWidth - 1300;
      }

      // Main horizontal scroll animation with snap to groups
      gsap.to(contentWrapperRef.current, {
        x: -scrollX,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${scrollX}`,
          scrub: 1,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          snap: {
            snapTo: 1 / 2, // 3 groups = 2 intervals (0, 0.5, 1)
            duration: { min: 0.3, max: 0.8 },
            delay: 0.1,
            ease: "power1.inOut",
            directional: true
          },
        },
      });

      // Title fade animation
      gsap.to(titleRef.current, {
        y: -2,
        opacity: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=150",
          scrub: 1,
        },
      });

      // Panel opacity animations
      panels.forEach((panel) => {
        gsap.set(panel, {
          opacity: 0.9,
        });

        ScrollTrigger.create({
          trigger: panel,
          containerAnimation: gsap.getById("horizontalScroll"),
          start: "left 80%",
          end: "right 20%",
          onEnter: () => {
            gsap.to(panel, {
              opacity: 1,
              duration: 0.6,
              ease: "power2.out",
            });
          },
          onLeave: () => {
            gsap.to(panel, {
              opacity: 0.9,
              duration: 0.6,
              ease: "power2.in",
            });
          },
          onEnterBack: () => {
            gsap.to(panel, {
              opacity: 1,
              duration: 0.6,
              ease: "power2.out",
            });
          },
          onLeaveBack: () => {
            gsap.to(panel, {
              opacity: 0.9,
              duration: 0.6,
              ease: "power2.in",
            });
          },
        });
      });
    }, sectionRef);

    const handleResize = () => {
      checkMobile();
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      ctx.revert();
      if (lenis) lenis.destroy();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const panelVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 0.8,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const panelsData = [
    {
      id: 1,
      title: "Content Creation",
      number: "01",
      description: "Reels, ad films, corporate AVs, long-form YouTube stories that captivate and convert.",
      items: ["Website Copywriting", "Social Media Content", "Product Descriptions", "Newsletters"],
      slug: "content-creation"
    },
    {
      id: 2,
      title: "Digital Marketing",
      number: "02",
      description: "Strategic campaigns that drive traffic, increase conversions and maximize ROI.",
      items: ["SEO Optimization", "PPC Campaigns", "Email Marketing", "Analytics & Reporting"],
      slug: "digital-marketing"
    },
    {
      id: 3,
      title: "Brand Storytelling",
      number: "03",
      description: "Crafting compelling narratives that connect brands with their audience emotionally.",
      items: ["Brand Strategy", "Creative Direction", "Campaign Ideation", "Visual Identity"],
      slug: "brand-storytelling"
    },
    {
      id: 4,
      title: "TV Commercials",
      number: "04",
      description: "High-impact television commercials that capture attention and build brand recall.",
      items: ["Concept Development", "Script Writing", "Production", "Post-Production"],
      slug: "tv-commercials"
    },
    {
      id: 5,
      title: "Product Photography",
      number: "05",
      description: "Professional photography that showcases products in their best light to drive sales.",
      items: ["Studio Shoots", "Lifestyle Photography", "E-commerce Images", "Editing & Retouching"],
      slug: "product-photography"
    },
    {
      id: 6,
      title: "Lead Generation",
      number: "06",
      description: "Targeted strategies to capture and nurture high-quality leads for your business.",
      items: ["Landing Pages", "Email Sequences", "Lead Magnets", "Conversion Optimization"],
      slug: "lead-generation"
    },
    {
      id: 7,
      title: "Social Media Management",
      number: "07",
      description: "Comprehensive social media strategies to grow your online presence and engagement.",
      items: ["Content Calendar", "Community Management", "Analytics Tracking", "Campaign Management"],
      slug: "social-media-management"
    },
    {
      id: 8,
      title: "Influencer Marketing",
      number: "08",
      description: "Leveraging influencer partnerships to amplify your brand's reach and credibility.",
      items: ["Influencer Outreach", "Campaign Strategy", "Content Collaboration", "Performance Analysis"],
      slug: "influencer-marketing"
    },
    {
      id: 9,
      title: "Personal Branding",
      number: "09",
      description: "Building authentic personal brands that establish authority and attract opportunities.",
      items: ["Personal Strategy", "Online Presence", "Content Strategy", "Brand Positioning"],
      slug: "personal-branding"
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="min-h-screen overflow-hidden pt-4 lg:pt-0 hide-scrollbar relative bg-black"
    >
      {/* Title section */}
      <div className="relative z-20 pt-10 lg:pt-8 pb-4 lg:pb-6 px-4 lg:px-8">
        {isMobile ? (
          <>
            <motion.h2
              variants={titleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="text-4xl italic text-[#f09d01] pt-10 text-center font-worksans font-semibold uppercase"
            >
              Services
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-base text-center text-gray-300 font-nunito leading-relaxed px-4"
            >
              We help brands and individuals build a strong and consistent presence
              through strategic creativity and digital execution.
            </motion.p>
          </>
        ) : (
          <>
            <h2
              ref={titleRef}
              className="text-3xl ml-20 sm:text-4xl pt-15 italic text-[#f09d01] lg:text-[70px] xl:text-[100px] text-center lg:text-left font-worksans font-semibold"
            >
              Services
            </h2>

            <p className="ml-20 mt-4 text-sm lg:text-base xl:text-lg text-white font-nunito leading-relaxed max-w-3xl">
              We help brands and individuals build a strong and consistent presence
              through strategic creativity and digital execution.
            </p>
          </>
        )}
      </div>

      {/* MOBILE LAYOUT - Vertical Scroll */}
      {isMobile ? (
        <div className="px-4 pb-20">
          <div className="space-y-6">
            {panelsData.map((panel) => (
              <motion.div
                key={panel.id}
                variants={panelVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2, margin: "-50px" }}
                className="bg-[#141414] rounded-2xl p-6 border overflow-hidden relative group cursor-pointer"
                onClick={() => handlePanelClick(panel.slug)}
              >
                <span className="absolute top-2 left-45 opacity-20 font-extrabold italic text-[#464646] text-8xl pointer-events-none">
                  {panel.number}
                </span>

                <div className="flex justify-start mb-4 relative z-10">
                  <button className="w-12 h-12 rounded-full bg-yellow-600 flex items-center justify-center hover:bg-gray-400 transition-colors duration-200">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 17L17 7M17 7H9M17 7V15"
                      />
                    </svg>
                  </button>
                </div>

                <h3 className="text-white text-2xl font-light mb-6 font-worksans relative z-10">
                  {panel.title}
                </h3>

                <div className="grid grid-cols-2 gap-3 mb-6 relative z-10">
                  {panel.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="min-h-[42px] px-4 rounded-full border border-[rgba(255,255,255,0.3)] flex items-center justify-center"
                    >
                      <p className="text-white text-[12px] font-nunito text-center">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4">
                  <p className="text-gray-300 text-base font-worksans font-light leading-relaxed">
                    {panel.description}
                  </p>
                </div>

                <div className="absolute inset-0 bg-[#e59300] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      ) : (
        /* DESKTOP LAYOUT - Horizontal Scroll with Snap */
        <div
          ref={contentWrapperRef}
          className="flex items-center h-[calc(100vh-120px)] lg:h-[calc(80vh-150px)]"
        >
          <div className="shrink-0 w-1/4 lg:w-20 h-full" />

          <div className="flex items-center gap-10 lg:gap-5 xl:gap-6 px-4 lg:px-8 h-full">
            {/* Group 1: Panels 1-2-3 */}
            <div className="flex items-center gap-10 lg:gap-5 xl:gap-6">
              {panelsData.slice(0, 3).map((panel) => (
                <div
                  key={panel.id}
                  ref={addToPanelsRef}
                  className="panel w-[85vw] sm:w-[90vw] lg:w-[286px] xl:w-[410px]  bg-[#141414] rounded-2xl sm:rounded-3xl relative p-5 sm:p-6 lg:p-4 xl:p-7 border shrink-0 overflow-hidden group hover:bg-[#e59300] transition-all duration-500 cursor-pointer"
                  onClick={() => handlePanelClick(panel.slug)}
                >
                  {/* Default view */}
                  <div className="z-10 relative h-full flex flex-col justify-between transition-opacity duration-300 xl:gap-10 group-hover:opacity-0">
                    <div>
                      <div className="flex justify-start mb-2">
                        <button className="w-8 h-8 sm:w-10 sm:h-10 lg:w-7 lg:h-7 xl:w-12 xl:h-12 rounded-full bg-yellow-600 flex items-center justify-center hover:bg-gray-400 transition-colors duration-200">
                          <svg
                            className="w-4 h-4 sm:w-5 sm:h-5 lg:w-3.5 lg:h-3.5 xl:w-6 xl:h-6 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M7 17L17 7M17 7H9M17 7V15"
                            />
                          </svg>
                        </button>
                      </div>

                      <h3 className="text-white text-2xl sm:text-3xl lg:text-base xl:text-3xl font-light mb-4 sm:mb-6 lg:mb-3 xl:mb-8 font-worksans">
                        {panel.title}
                      </h3>
                    </div>

                    <div className="flex flex-col gap-3 lg:gap-1.5 xl:gap-4">
                      <div className="flex gap-2 lg:gap-1.5 xl:gap-3">
                        <span className="absolute top-2 right-4 lg:top-1 lg:right-3 xl:top-4 xl:right-6 opacity-20 font-extrabold italic text-[#464646] text-7xl lg:text-5xl xl:text-9xl pointer-events-none">
                          {panel.number}
                        </span>
                        <p className="w-fit min-h-[34px] lg:min-h-[24px] xl:min-h-[38px] px-3 lg:px-2 xl:px-4 rounded-full border border-[rgba(255,255,255,0.3)] flex items-center justify-center text-white text-xs lg:text-[8px] xl:text-sm font-nunito whitespace-nowrap">
                          {panel.items[0]}
                        </p>
                        <p className="w-fit min-h-[34px] lg:min-h-[24px] xl:min-h-[38px] px-3 lg:px-2 xl:px-4 rounded-full border border-[rgba(255,255,255,0.3)] flex items-center justify-center text-white text-xs lg:text-[8px] xl:text-sm font-nunito whitespace-nowrap">
                          {panel.items[1]}
                        </p>
                      </div>

                      <div className="flex gap-2 lg:gap-1.5 xl:gap-3">
                        <p className="w-fit min-h-[34px] lg:min-h-[24px] xl:min-h-[38px] px-3 lg:px-2 xl:px-4 rounded-full border border-[rgba(255,255,255,0.3)] flex items-center justify-center text-white text-xs lg:text-[8px] xl:text-sm font-nunito whitespace-nowrap">
                          {panel.items[2]}
                        </p>
                        <p className="w-fit min-h-[34px] lg:min-h-[24px] xl:min-h-[38px] px-3 lg:px-2 xl:px-4 rounded-full border border-[rgba(255,255,255,0.3)] flex items-center justify-center text-white text-xs lg:text-[8px] xl:text-sm font-nunito whitespace-nowrap">
                          {panel.items[3]}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Hover view */}
                  <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-6 lg:p-4 xl:p-7 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div>
                      <div className="flex justify-start mb-2">
                        <button className="w-8 h-8 sm:w-10 sm:h-10 lg:w-7 lg:h-7 xl:w-12 xl:h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors duration-200">
                          <svg
                            className="w-4 h-4 sm:w-5 sm:h-5 lg:w-3.5 lg:h-3.5 xl:w-6 xl:h-6 text-[#e59300]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M7 17L17 7M17 7H9M17 7V15"
                            />
                          </svg>
                        </button>
                      </div>

                      <h3 className="text-white text-2xl sm:text-3xl lg:text-base xl:text-3xl font-light mb-2 font-worksans">
                        {panel.title}
                      </h3>
                    </div>

                    <div className="text-white">
                      <span className="absolute top-2 right-4 lg:top-1 lg:right-3 xl:top-4 xl:right-6 opacity-20 font-extrabold italic text-[#464646] text-7xl lg:text-5xl xl:text-9xl pointer-events-none">
                        {panel.number}
                      </span>
                      <p className="text-base sm:text-lg lg:text-[10px] xl:text-lg font-worksans font-light mb-2 leading-snug lg:leading-tight xl:leading-normal">
                        {panel.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="shrink-0 w-[120px] lg:w-20 xl:w-[200px] h-full" />

            {/* Group 2: Panels 4-5-6 */}
            <div className="flex items-center gap-10 lg:gap-5 xl:gap-6">
              {panelsData.slice(3, 6).map((panel) => (
                <div
                  key={panel.id}
                  ref={addToPanelsRef}
                  className="panel w-[85vw] sm:w-[90vw] lg:w-[286px] xl:w-[410px] bg-[#141414] rounded-2xl sm:rounded-3xl relative p-5 sm:p-6 lg:p-4 xl:p-8 border shrink-0 overflow-hidden group hover:bg-[#e59300] transition-all duration-500 cursor-pointer"
                  onClick={() => handlePanelClick(panel.slug)}
                >
                  <div className="z-10 relative h-full flex flex-col justify-between transition-opacity duration-300 gap-10 group-hover:opacity-0">
                    <div>
                      <div className="flex justify-start mb-2">
                        <button className="w-8 h-8 sm:w-10 sm:h-10 lg:w-7 lg:h-7 xl:w-12 xl:h-12 rounded-full bg-yellow-600 flex items-center justify-center hover:bg-gray-400 transition-colors duration-200">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-3.5 lg:h-3.5 xl:w-6 xl:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H9M17 7V15" />
                          </svg>
                        </button>
                      </div>
                      <h3 className="text-white text-2xl sm:text-3xl lg:text-base xl:text-3xl font-light mb-4 sm:mb-6 lg:mb-3 xl:mb-8 font-worksans">{panel.title}</h3>
                    </div>

                    <div className="flex flex-col gap-3 lg:gap-1.5 xl:gap-4">
                      <div className="flex gap-2 lg:gap-1.5 xl:gap-3">
                        <span className="absolute top-2 right-4 lg:top-1 lg:right-3 xl:top-4 xl:right-6 opacity-20 font-extrabold italic text-[#464646] text-7xl lg:text-5xl xl:text-9xl pointer-events-none">{panel.number}</span>
                        <p className="w-fit min-h-[34px] lg:min-h-[24px] xl:min-h-[38px] px-3 lg:px-2 xl:px-4 rounded-full border border-[rgba(255,255,255,0.3)] flex items-center justify-center text-white text-xs lg:text-[8px] xl:text-sm font-nunito whitespace-nowrap">{panel.items[0]}</p>
                        <p className="w-fit min-h-[34px] lg:min-h-[24px] xl:min-h-[38px] px-3 lg:px-2 xl:px-4 rounded-full border border-[rgba(255,255,255,0.3)] flex items-center justify-center text-white text-xs lg:text-[8px] xl:text-sm font-nunito whitespace-nowrap">{panel.items[1]}</p>
                      </div>
                      <div className="flex gap-2 lg:gap-1.5 xl:gap-3">
                        <p className="w-fit min-h-[34px] lg:min-h-[24px] xl:min-h-[38px] px-3 lg:px-2 xl:px-4 rounded-full border border-[rgba(255,255,255,0.3)] flex items-center justify-center text-white text-xs lg:text-[8px] xl:text-sm font-nunito whitespace-nowrap">{panel.items[2]}</p>
                        <p className="w-fit min-h-[34px] lg:min-h-[24px] xl:min-h-[38px] px-3 lg:px-2 xl:px-4 rounded-full border border-[rgba(255,255,255,0.3)] flex items-center justify-center text-white text-xs lg:text-[8px] xl:text-sm font-nunito whitespace-nowrap">{panel.items[3]}</p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-6 lg:p-4 xl:p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div>
                      <div className="flex justify-start mb-2">
                        <button className="w-8 h-8 sm:w-10 sm:h-10 lg:w-7 lg:h-7 xl:w-12 xl:h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors duration-200">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-3.5 lg:h-3.5 xl:w-6 xl:h-6 text-[#e59300]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H9M17 7V15" />
                          </svg>
                        </button>
                      </div>
                      <h3 className="text-white text-2xl sm:text-3xl lg:text-base xl:text-3xl font-light mb-2 font-worksans">{panel.title}</h3>
                    </div>
                    <div className="text-white">
                      <span className="absolute top-2 right-4 lg:top-1 lg:right-3 xl:top-4 xl:right-6 opacity-20 font-extrabold italic text-[#464646] text-7xl lg:text-5xl xl:text-9xl pointer-events-none">{panel.number}</span>
                      <p className="text-base sm:text-lg lg:text-[10px] xl:text-lg font-worksans font-light mb-2 leading-snug lg:leading-tight xl:leading-normal">{panel.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="shrink-0 w-[120px] lg:w-[140px] xl:w-[200px] h-full" />

            {/* Group 3: Panels 7-8-9 */}
            <div className="flex items-center gap-10 lg:gap-5 xl:gap-6 lg:mx-auto">
              {panelsData.slice(6, 9).map((panel) => (
                <div
                  key={panel.id}
                  ref={addToPanelsRef}
                  className="panel w-[85vw] sm:w-[90vw] lg:w-[286px] xl:w-[410px] bg-[#141414] rounded-2xl sm:rounded-3xl relative p-5 sm:p-6 lg:p-4 xl:p-8 border shrink-0 overflow-hidden group hover:bg-[#e59300] transition-all duration-500 cursor-pointer"
                  onClick={() => handlePanelClick(panel.slug)}
                >
                  <div className="z-10 relative h-full flex flex-col justify-between transition-opacity duration-300 gap-10 group-hover:opacity-0">
                    <div>
                      <div className="flex justify-start mb-2">
                        <button className="w-8 h-8 sm:w-10 sm:h-10 lg:w-7 lg:h-7 xl:w-12 xl:h-12 rounded-full bg-yellow-600 flex items-center justify-center hover:bg-gray-400 transition-colors duration-200">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-3.5 lg:h-3.5 xl:w-6 xl:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H9M17 7V15" />
                          </svg>
                        </button>
                      </div>
                      <h3 className="text-white text-2xl sm:text-3xl lg:text-base xl:text-3xl font-light mb-4 sm:mb-6 lg:mb-3 xl:mb-8 font-worksans">{panel.title}</h3>
                    </div>

                    <div className="flex flex-col gap-3 lg:gap-1.5 xl:gap-4">
                      <div className="flex gap-2 lg:gap-1.5 xl:gap-3">
                        <span className="absolute top-2 right-4 lg:top-1 lg:right-3 xl:top-4 xl:right-6 opacity-20 font-extrabold italic text-[#464646] text-7xl lg:text-5xl xl:text-9xl pointer-events-none">{panel.number}</span>
                        <p className="w-fit min-h-[34px] lg:min-h-6 xl:min-h-[38px] px-3 lg:px-2 xl:px-4 rounded-full border border-[rgba(255,255,255,0.3)] flex items-center justify-center text-white text-xs lg:text-[8px] xl:text-sm font-nunito whitespace-nowrap">{panel.items[0]}</p>
                        <p className="w-fit min-h-[34px] lg:min-h-6 xl:min-h-[38px] px-3 lg:px-2 xl:px-4 rounded-full border border-[rgba(255,255,255,0.3)] flex items-center justify-center text-white text-xs lg:text-[8px] xl:text-sm font-nunito whitespace-nowrap">{panel.items[1]}</p>
                      </div>
                      <div className="flex gap-2 lg:gap-1.5 xl:gap-3">
                        <p className="w-fit min-h-[34px] lg:min-h-6 xl:min-h-[38px] px-3 lg:px-2 xl:px-4 rounded-full border border-[rgba(255,255,255,0.3)] flex items-center justify-center text-white text-xs lg:text-[8px] xl:text-sm font-nunito whitespace-nowrap">{panel.items[2]}</p>
                        <p className="w-fit min-h-[34px] lg:min-h-6 xl:min-h-[38px] px-3 lg:px-2 xl:px-4 rounded-full border border-[rgba(255,255,255,0.3)] flex items-center justify-center text-white text-xs lg:text-[8px] xl:text-sm font-nunito whitespace-nowrap">{panel.items[3]}</p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-6 lg:p-4 xl:p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div>
                      <div className="flex justify-start mb-2">
                        <button className="w-8 h-8 sm:w-10 sm:h-10 lg:w-7 lg:h-7 xl:w-12 xl:h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors duration-200">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-3.5 lg:h-3.5 xl:w-6 xl:h-6 text-[#e59300]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H9M17 7V15" />
                          </svg>
                        </button>
                      </div>
                      <h3 className="text-white text-2xl sm:text-3xl lg:text-base xl:text-3xl font-light mb-2 font-worksans">{panel.title}</h3>
                    </div>
                    <div className="text-white">
                      <span className="absolute top-2 right-4 lg:top-1 lg:right-3 xl:top-4 xl:right-6 opacity-20 font-extrabold italic text-[#464646] text-7xl lg:text-5xl xl:text-9xl pointer-events-none">{panel.number}</span>
                      <p className="text-base sm:text-lg lg:text-[10px] xl:text-lg font-worksans font-light mb-2 leading-snug lg:leading-tight xl:leading-normal">{panel.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="shrink-0 w-5 lg:w-20 xl:w-1/3 h-full" />
          </div>
        </div>
      )}
    </section>
  );
}

export default ServiceSection;
