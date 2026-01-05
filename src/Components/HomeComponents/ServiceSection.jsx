// /* eslint-disable no-unused-vars */
// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { motion } from "framer-motion";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Lenis from "lenis";

// import img1 from "/src/assets/home/Ser1.png";
// import img2 from "/src/assets/home/Ser2.png";
// import img3 from "/src/assets/home/Ser3.png";
// import img4 from "/src/assets/home/comersial.png";
// import img5 from "/src/assets/home/potography.png";
// import img6 from "/src/assets/home/leadgen.png";
// import img7 from "/src/assets/home/socialone.png";

// // Import SVG images
// import svg1 from "/src/assets/Homeconnect/11.svg";
// import svg2 from "/src/assets/Homeconnect/22.svg";
// import svg3 from "/src/assets/Homeconnect/33.svg";
// import svg4 from "/src/assets/Homeconnect/44.svg";
// import svg5 from "/src/assets/Homeconnect/55.svg";
// import svg6 from "/src/assets/Homeconnect/66.svg";
// import svg7 from "/src/assets/Homeconnect/77.svg";
// import svg8 from "/src/assets/Homeconnect/88.svg";
// import svg9 from "/src/assets/Homeconnect/99.svg";

// gsap.registerPlugin(ScrollTrigger);

// function ServiceSection() {
//   const sectionRef = useRef(null);
//   const contentWrapperRef = useRef(null);
//   const flyTextRef = useRef(null);

//   useEffect(() => {
//     const isMobile = window.innerWidth < 768;

//     // Mobile: let native vertical scroll handle layout
//     if (isMobile) {
//       return;
//     }

//     // Desktop: Lenis smooth scrolling
//     const lenis = new Lenis({ duration: 1.2, smooth: true });
//     let rafId;

//     function raf(time) {
//       lenis.raf(time);
//       rafId = requestAnimationFrame(raf);
//     }
//     rafId = requestAnimationFrame(raf);

//     // Create GSAP context scoped to this component
//     const ctx = gsap.context(() => {
//       const panels = gsap.utils.toArray(".panel");

//       // Get the last panel to calculate proper centering
//       const lastPanel = panels[panels.length - 1];
//       const lastPanelWidth = lastPanel.offsetWidth;
//       const viewportWidth = window.innerWidth;

//       // Calculate the exact scroll distance needed to center the last panel
//       const totalScrollWidth = contentWrapperRef.current.scrollWidth;
//       const scrollX =
//         totalScrollWidth -
//         viewportWidth +
//         (viewportWidth - lastPanelWidth) / 3;

//       // Main horizontal scroll tween that pins the section
//       const mainScrollTween = gsap.to(contentWrapperRef.current, {
//         x: -scrollX,
//         ease: "none",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           pin: true,
//           scrub: 1,
//           end: () => `+=${scrollX}`,
//           // Snap to panels
//           snap: {
//             snapTo: 1 / (panels.length - 1),
//             duration: { min: 0.2, max: 0.35 },
//           },
//         },
//       });

//       // Each panel "zoom in" while in focus
//       panels.forEach((panel) => {
//         const tl = gsap.timeline({
//           scrollTrigger: {
//             trigger: panel,
//             containerAnimation: mainScrollTween,
//             start: "left right",
//             end: "right left",
//             scrub: true,
//           },
//         });

//         tl.fromTo(
//           panel,
//           { scale: 0.92, opacity: 0.6 },
//           { scale: 1, opacity: 1, ease: "power2.inOut" }
//         ).to(panel, {
//           scale: 0.92,
//           opacity: 0.6,
//           ease: "power2.inOut",
//         });
//       });

//       // Marquee / fly text movement synced to horizontal scroll
//       if (flyTextRef.current) {
//         const marqueeWidth = flyTextRef.current.scrollWidth / 2;
//         gsap.to(flyTextRef.current, {
//           x: -marqueeWidth,
//           ease: "none",
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             scrub: 1,
//             start: "top top",
//             end: () => `+=${scrollX}`,
//           },
//         });
//       }
//     }, sectionRef);

//     // Refresh ScrollTrigger on resize
//     const onResize = () => {
//       ScrollTrigger.refresh();
//     };
//     window.addEventListener("resize", onResize);

//     return () => {
//       // Proper cleanup order
//       if (rafId) cancelAnimationFrame(rafId);
//       ctx.revert();
//       if (lenis) lenis.destroy();
//       window.removeEventListener("resize", onResize);
//     };
//   }, []);

//   // Framer Motion variants for mobile entrance animations - FASTER LOADING
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const panelVariants = {
//     hidden: {
//       opacity: 0,
//       y: 50,
//       scale: 0.8,
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: {
//         type: "spring",
//         stiffness: 120,
//         damping: 15,
//       },
//     },
//   };

//   const titleVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut",
//       },
//     },
//   };

//   return (
//     <section
//       ref={sectionRef}
//       className=" min-h-screen overflow-x-hidden pt-8 md:pt-0 hide-scrollbar"
//       style={{
//         backgroundImage:
//           "radial-gradient(ellipse at center, #072a31, #000000)",
//       }}
//     >
//       <motion.div
//         ref={contentWrapperRef}
//         className="flex flex-col md:flex-row h-full items-center md:items-stretch"
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.2 }}
//       >
//         {/* Left Title with 100px font size */}
//         <motion.div
//           className="shrink-0 px-6 sm:px-8 md:px-12 lg:px-20 py-8 md:py-0 text-white uppercase font-light z-10 flex items-center"
//           variants={titleVariants}
//         >
//           <h2 className="text-3xl sm:text-4xl md:text-[100px] leading-tight text-center md:text-left font-worksans font-semibold">
//             OUR <br className="hidden md:block" /> Services
//           </h2>
//         </motion.div>

//         {/* Panels container */}
//         <div className="flex flex-col md:flex-row md:min-h-screen md:h-full items-center gap-6 md:gap-12 p-4 sm:p-6 md:pr-20  md:w-auto pb-8 md:pb-0">
//           {/* Panel 1 - Content Creation */}
//           <motion.div
//             className="panel  sm:w-[90vw] md:w-[410px] h-auto sm:h-auto md:h-[500px] bg-white rounded-2xl sm:rounded-3xl relative p-4 sm:p-6 shadow-lg shrink-0 overflow-hidden flex flex-col justify-between"
//             variants={panelVariants}
//           >
//             <div>
//               <h3 className="text-[#D89F5B] text-2xl sm:text-3xl md:text-3xl font-light mb-3 sm:mb-2 font-worksans">
//                 Content Creation
//               </h3>
//               <p className="text-[#000000] text-xs sm:text-sm md:text-[24px] leading-[150%] line-clamp-2 font-normal font-nunito">
//                 Reels, ad films, corporate AVs, long-form YouTube — stories that
//                 captivate and convert.
//               </p>
//             </div>
//             <div className="flex justify-center mt-4">
//               <img
//                 src={svg1}
//                 alt="Content"
//                 loading="lazy"
//                 className="w-[396px] h-[293px] object-contain"
//               />
//             </div>
//           </motion.div>

//           {/* Panel 2 - Digital Marketing */}
//           <motion.div
//             className="panel  sm:w-[90vw] md:w-[410px] h-auto sm:h-auto md:h-[500px] bg-white rounded-2xl sm:rounded-3xl relative p-4 sm:p-6 shadow-lg shrink-0 overflow-hidden flex flex-col justify-between"
//             variants={panelVariants}
//           >
//             <div>
//               <h3 className="text-[#D89F5B] text-2xl sm:text-3xl md:text-3xl font-light mb-3 sm:mb-2 font-worksans">
//                 Digital Marketing
//               </h3>
//               <p className="text-[#000000] text-xs sm:text-sm md:text-[24px] leading-[150%] line-clamp-2 font-normal font-nunito">
//                 Social strategy, performance campaigns, platform-specific
//                 content that meets people where they are.
//               </p>
//             </div>
//             <div className="flex justify-center mt-4">
//               <img
//                 src={svg2}
//                 alt="Marketing"
//                 loading="lazy"
//                 className="w-[396px] h-[293px] object-contain"
//               />
//             </div>
//           </motion.div>

//           {/* Panel 3 - Brand Storytelling */}
//           <motion.div
//             className="panel  sm:w-[90vw] md:w-[410px] h-auto sm:h-auto md:h-[500px] bg-white rounded-2xl sm:rounded-3xl relative p-4 sm:p-6 shadow-lg shrink-0 overflow-hidden flex flex-col justify-between"
//             variants={panelVariants}
//           >
//             <div>
//               <h3 className="text-[#D89F5B] text-2xl sm:text-3xl md:text-3xl font-light mb-3 sm:mb-2 font-worksans">
//                 Brand Storytelling
//               </h3>
//               <p className="text-[#000000] text-xs sm:text-sm md:text-[24px] leading-[150%] line-clamp-2 font-normal font-nunito">
//                 From positioning and emotional narrative to campaign ideation —
//                 we give your brand a powerful voice.
//               </p>
//             </div>
//             <div className="flex justify-center mt-4">
//               <img
//                 src={svg3}
//                 alt="Storytelling"
//                 loading="lazy"
//                 className="w-[396px] h-[293px] object-contain"
//               />
//             </div>
//           </motion.div>

//           {/* Panel 4 - TV Commercials */}
//           <motion.div
//             className="panel  sm:w-[90vw] md:w-[410px] h-auto sm:h-auto md:h-[500px] bg-white rounded-2xl sm:rounded-3xl relative p-4 sm:p-6 shadow-lg shrink-0 overflow-hidden flex flex-col justify-between"
//             variants={panelVariants}
//           >
//             <div>
//               <h3 className="text-[#D89F5B] text-2xl sm:text-3xl md:text-3xl font-light mb-3 sm:mb-2 font-worksans">
//                 TV Commercials
//               </h3>
//               <p className="text-[#000000] text-xs sm:text-sm md:text-[24px] leading-[150%] line-clamp-2 font-normal font-nunito">
//                 High-impact 30s/60s spots that break through the noise and drive
//                 results.
//               </p>
//             </div>
//             <div className="flex justify-center mt-4">
//               <img
//                 src={svg4}
//                 alt="TV Commercials"
//                 loading="lazy"
//                 className="w-[396px] h-[293px] object-contain"
//               />
//             </div>
//           </motion.div>

//           {/* Panel 5 - Product Photography */}
//           <motion.div
//             className="panel  sm:w-[90vw] md:w-[410px] h-auto sm:h-auto md:h-[500px] bg-white rounded-2xl sm:rounded-3xl relative p-4 sm:p-6 shadow-lg shrink-0 overflow-hidden flex flex-col justify-between"
//             variants={panelVariants}
//           >
//             <div>
//               <h3 className="text-[#D89F5B] text-2xl sm:text-3xl md:text-3xl font-light mb-3 sm:mb-2 font-worksans">
//                 Product Photography
//               </h3>
//               <p className="text-[#000000] text-xs sm:text-sm md:text-[24px] leading-[150%] line-clamp-2 font-normal font-nunito">
//                 Studio-quality product shots that make your offerings
//                 irresistible.
//               </p>
//             </div>
//             <div className="flex justify-center mt-4">
//               <img
//                 src={svg5}
//                 alt="Photography"
//                 loading="lazy"
//                 className="w-[396px] h-[293px] object-contain"
//               />
//             </div>
//           </motion.div>

//           {/* Panel 6 - Lead Generation */}
//           <motion.div
//             className="panel  sm:w-[90vw] md:w-[410px] h-auto sm:h-auto md:h-[500px] bg-white rounded-2xl sm:rounded-3xl relative p-4 sm:p-6 shadow-lg shrink-0 overflow-hidden flex flex-col justify-between"
//             variants={panelVariants}
//           >
//             <div>
//               <h3 className="text-[#D89F5B] text-2xl sm:text-3xl md:text-3xl font-light mb-3 sm:mb-2 font-worksans">
//                 Lead Generation
//               </h3>
//               <p className="text-[#000000] text-xs sm:text-sm md:text-[24px] leading-[150%] line-clamp-2 font-normal font-nunito">
//                 Funnel-optimized landing pages, email sequences, and conversion
//                 funnels that deliver qualified leads.
//               </p>
//             </div>
//             <div className="flex justify-center mt-4">
//               <img
//                 src={svg6}
//                 alt="Lead Generation"
//                 loading="lazy"
//                 className="w-[396px] h-[293px] object-contain"
//               />
//             </div>
//           </motion.div>

//           {/* Panel 7 - Social Media Management */}
//           <motion.div
//             className="panel  sm:w-[90vw] md:w-[410px] h-auto sm:h-auto md:h-[500px] bg-white rounded-2xl sm:rounded-3xl relative p-4 sm:p-6 shadow-lg shrink-0 overflow-hidden flex flex-col justify-between"
//             variants={panelVariants}
//           >
//             <div>
//               <h3 className="text-[#D89F5B] text-2xl sm:text-3xl md:text-3xl font-light mb-3 sm:mb-2 font-worksans">
//                 Social Media Management
//               </h3>
//               <p className="text-[#000000] text-xs sm:text-sm md:text-[24px] leading-[150%] line-clamp-2 font-normal font-nunito">
//                 From positioning and emotional narrative to campaign ideation —
//                 we give your brand a powerful voice.
//               </p>
//             </div>
//             <div className="flex justify-center mt-4">
//               <img
//                 src={svg7}
//                 alt="Social Media Management"
//                 loading="lazy"
//                 className="w-[506px] h-[353px] object-contain"
//               />
//             </div>
//           </motion.div>

//           {/* Panel 8 - Influencer Marketing */}
//           <motion.div
//             className="panel  sm:w-[90vw] md:w-[410px] h-auto sm:h-auto md:h-[500px] bg-white rounded-2xl sm:rounded-3xl relative p-4 sm:p-6 shadow-lg shrink-0 overflow-hidden flex flex-col justify-between"
//             variants={panelVariants}
//           >
//             <div>
//               <h3 className="text-[#D89F5B] text-2xl sm:text-3xl md:text-3xl font-light mb-3 sm:mb-2 font-worksans">
//                 Influencer Marketing
//               </h3>
//               <p className="text-[#000000] text-xs sm:text-sm md:text-[24px] leading-[150%] line-clamp-2 font-normal font-nunito">
//                 Social strategy, performance campaigns, platform-specific
//                 content that meets people where they are.
//               </p>
//             </div>
//             <div className="flex justify-center mt-4">
//               <img
//                 src={svg8}
//                 alt="Influencer Marketing"
//                 loading="lazy"
//                 className="w-[396px] h-[293px] object-contain"
//               />
//             </div>
//           </motion.div>

//           {/* Panel 9 - Personal Branding */}
//           <motion.div
//             className="panel  sm:w-[90vw] md:w-[410px] h-auto sm:h-auto md:h-[500px] bg-white rounded-2xl sm:rounded-3xl relative p-4 sm:p-6 shadow-lg shrink-0 overflow-hidden flex flex-col justify-between"
//             variants={panelVariants}
//           >
//             <div>
//               <h3 className="text-[#D89F5B] text-2xl sm:text-3xl md:text-3xl font-light mb-3 sm:mb-2 font-worksans">
//                 Personal Branding
//               </h3>
//               <p className="text-[#000000] text-xs sm:text-sm md:text-[24px] leading-[150%] line-clamp-2 font-normal font-nunito">
//                 From positioning and emotional narrative to campaign ideation —
//                 we give your brand a powerful voice.
//               </p>
//             </div>
//             <div className="flex justify-center mt-4">
//               <img
//                 src={svg9}
//                 alt="Personal Branding"
//                 loading="lazy"
//                 className="w-[396px] h-[293px] object-contain"
//               />
//             </div>
//           </motion.div>
//         </div>
//       </motion.div>
//     </section>
//   );
// }

// export default ServiceSection;
/* eslint-disable no-unused-vars */











































import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

gsap.registerPlugin(ScrollTrigger);

function ServiceSection() {
  const sectionRef = useRef(null);
  const contentWrapperRef = useRef(null);
  const titleRef = useRef(null);
  const panelsRef = useRef([]);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate(); // Initialize navigate hook

  // Add panel to ref array
  const addToPanelsRef = (el) => {
    if (el && !panelsRef.current.includes(el)) {
      panelsRef.current.push(el);
    }
  };

  // Function to handle panel click
  const handlePanelClick = (serviceSlug) => {
    navigate(`/service/${serviceSlug}`);
  };

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      return mobile;
    };

    // Initial check
    const mobile = checkMobile();

    // Mobile: only use Framer Motion animations
    if (mobile) {
      return;
    }

    // Desktop: Setup smooth scrolling and GSAP animations
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

    // Create GSAP context for proper cleanup
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(".panel");

      // Get the last panel to calculate proper centering
      const lastPanel = panels[panels.length - 1];
      const lastPanelWidth = lastPanel.offsetWidth;
      const viewportWidth = window.innerWidth;

      // Calculate the exact scroll distance needed to center the last panel
      const totalScrollWidth = contentWrapperRef.current.scrollWidth;
      const scrollX =
        totalScrollWidth - viewportWidth - 1300;
      

      // Pin the entire section and create horizontal scroll
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${scrollX}`,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
      });

      // Create horizontal scroll animation for content
      gsap.to(contentWrapperRef.current, {
        x: -scrollX,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${scrollX}`,
          scrub: 1,
          pin: false,
        },
      });

      // Animate title to move up and stay at top
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

      // Simple fade in animation for panels as they enter view
      panels.forEach((panel, index) => {
        // Initial state - panels start slightly transparent
        gsap.set(panel, {
          opacity: 0.9,
        });

        // Create a subtle fade in/out effect based on scroll position
        ScrollTrigger.create({
          trigger: panel,
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

    // Handle resize
    const handleResize = () => {
      checkMobile();
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      // Cleanup
      if (rafId) cancelAnimationFrame(rafId);
      ctx.revert();
      if (lenis) lenis.destroy();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Framer Motion variants for mobile animations
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

  // Panel data for mobile rendering
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
      className="min-h-screen overflow-hidden pt-4 md:pt-0 hide-scrollbar relative bg-black"
    >
      {/* Title section with reduced padding */}
      <div className="relative z-20 pt-10 md:pt-8 pb-4 md:pb-6 px-4 md:px-8">
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

            {/* Caption */}
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
              className="text-3xl ml-20 sm:text-4xl pt-15 italic text-[#f09d01] md:text-[100px] text-center md:text-left font-worksans font-semibold"
            >
              Services
            </h2>

            {/* Caption */}
            <p className="ml-20 mt-4 text-base md:text-lg text-white font-nunito leading-relaxed max-w-3xl">
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
            {panelsData.map((panel, index) => (
              <motion.div
                key={panel.id}
                variants={panelVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2, margin: "-50px" }}
                className="bg-[#141414] rounded-2xl p-6 border overflow-hidden relative group cursor-pointer"
                onClick={() => handlePanelClick(panel.slug)}
              >
                {/* Panel Number - Large in background */}
                <span className="absolute top-2 left-4 opacity-20 font-extrabold italic text-gray-600 text-8xl pointer-events-none">
                  {panel.number}
                </span>

                {/* Arrow Button */}
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

                {/* Title */}
                <h3 className="text-white text-2xl font-light mb-6 font-worksans relative z-10">
                  {panel.title}
                </h3>

                {/* Items Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6 relative z-10">
                  {panel.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="min-h-[42px] px-4 rounded-full border border-[rgba(255,255,255,0.3)] flex items-center justify-center"
                    >
                      <p className="text-white text-sm font-nunito text-center">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Description (Hidden by default, shows on hover/tap) */}
                <div className="mt-4 pt-4 ">
                  <p className="text-gray-300 text-base font-worksans font-light leading-relaxed">
                    {panel.description}
                  </p>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-[#e59300] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      ) : (
        /* DESKTOP LAYOUT - Horizontal Scroll (Original) */
        <div
          ref={contentWrapperRef}
          className="flex items-center h-[calc(100vh-120px)] md:h-[calc(80vh-150px)]"
        >
          {/* Left spacer to center first panel */}
          <div className="shrink-0 w-1/4 md:w-20 h-full" />

          {/* Panels container with horizontal flex */}
          <div className="flex items-center gap-10 md:gap-6 px-4 md:px-8 h-full">
            {/* Group 1: Panels 1-2-3 */}
            <div className="flex items-center gap-10 md:gap-6">
              {/* Panel 1 - Content Creation */}
              <div
                ref={addToPanelsRef}
                className="panel w-[85vw] sm:w-[90vw] md:w-[410px] h-[45vh] md:h-[400px] bg-[#141414] rounded-2xl sm:rounded-3xl relative p-6 sm:p-7 border shrink-0 overflow-hidden group hover:bg-[#e59300] transition-all duration-500 cursor-pointer"
                onClick={() => handlePanelClick("content-creation")}
              >
                {/* Default view - Services list */}
                <div className="z-10 relative h-full flex flex-col justify-between transition-opacity duration-300 group-hover:opacity-0">
                  <div>
                    <div className="flex justify-start mb-2">
                      <button className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-yellow-600 flex items-center justify-center hover:bg-gray-400 transition-colors duration-200">
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white"
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
                    
                    <h3 className="text-white text-2xl sm:text-3xl md:text-3xl font-light mb-6 sm:mb-8 font-worksans">
                      Content Creation
                    </h3>
                  </div> 
                  
                  {/* Fixed grid layout for pill elements */}
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-3">
                      <span className="absolute top-100 left-4 lg:top-50 lg:left-53 opacity-26 font-extrabold italic text-gray-600 text-9xl lg:text-11xl pointer-events-none">
                        01
                      </span>
                      <p className="w-fit min-h-[38px] px-4 rounded-full border border-[rgba(255,255,255,0.3)] flex items-center justify-center text-white text-xs md:text-sm font-nunito whitespace-nowrap">
                        Website Copywriting
                      </p>
                      <p className="w-fit min-h-[38px] px-4 rounded-full border border-[rgba(255,255,255,0.3)] flex items-center justify-center text-white text-xs md:text-sm font-nunito whitespace-nowrap">
                        Social Media Content
                      </p>
                    </div>
                    
                    <div className="flex gap-3">
                      <p className="w-fit min-h-[38px] px-4 rounded-full border border-[rgba(255,255,255,0.3)] flex items-center justify-center text-white text-xs md:text-sm font-nunito whitespace-nowrap">
                        Product Descriptions
                      </p>
                      <p className="w-fit min-h-[38px] px-4 rounded-full border border-[rgba(255,255,255,0.3)] flex items-center justify-center text-white text-xs md:text-sm font-nunito whitespace-nowrap">
                        Newsletters
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hover view - Description */}
                <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-7 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div>
                    <div className="flex justify-start mb-2">
                      <button className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors duration-200">
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#e59300]"
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
                    
                    <h3 className="text-white text-2xl sm:text-3xl md:text-3xl font-light mb-2 font-worksans">
                      Content Creation
                    </h3>
                  </div>
                  
                  <div className="text-white">
                    <span className="absolute top-100 left-4 lg:top-50 lg:left-53 opacity-26 font-extrabold italic text-gray-600 text-9xl lg:text-11xl pointer-events-none">
                      01
                    </span>
                    <p className="text-lg sm:text-xl md:text-1xl font-worksans font-light mb-2">
                      Reels, ad films, corporate AVs, long-form YouTube stories that captivate and convert.
                    </p>
                  </div>
                </div>
              </div>

              {/* Panel 2 - Digital Marketing */}
              <div
                ref={addToPanelsRef}
                className="panel w-[85vw] sm:w-[90vw] font-light md:w-[410px] h-[55vh] md:h-[400px] bg-[#141414] rounded-2xl sm:rounded-3xl relative p-6 sm:p-8 border shrink-0 overflow-hidden group hover:bg-[#e59300] transition-all duration-500 cursor-pointer"
                onClick={() => handlePanelClick("digital-marketing")}
              >
                {/* Default view - Services list */}
                <div className="z-10 relative h-full flex flex-col justify-between transition-opacity duration-300 group-hover:opacity-0">
                  <div>
                    <div className="flex justify-start mb-2">
                      <button className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-yellow-600 flex items-center justify-center hover:bg-gray-400 transition-colors duration-200">
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white"
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
                    
                    <h3 className="text-white text-2xl sm:text-3xl md:text-3xl font-light mb-6 sm:mb-8 font-worksans">
                      Digital Marketing
                    </h3>
                  </div>
                  
                  {/* Fixed layout for Digital Marketing pills */}
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-3">
                      <span className="absolute top-100 left-4 lg:top-1 lg:left-53 opacity-26 font-extrabold italic text-gray-600 text-9xl lg:text-11xl pointer-events-none">
                        02
                      </span>
                      <p className="w-fit min-h-[38px] px-4 rounded-full border border-[rgba(255,255,255,0.3)] flex items-center justify-center text-white text-xs md:text-sm font-nunito whitespace-nowrap">
                        SEO Optimization
                      </p>
                      <p className="w-fit min-h-[38px] px-4 rounded-full border border-[rgba(255,255,255,0.3)] flex items-center justify-center text-white text-xs md:text-sm font-nunito whitespace-nowrap">
                        PPC Campaigns
                      </p>
                    </div>
                    
                    <div className="flex gap-3">
                      <p className="w-fit min-h-[38px] px-4 rounded-full border border-[rgba(255,255,255,0.3)] flex items-center justify-center text-white text-xs md:text-sm font-nunito whitespace-nowrap">
                        Email Marketing
                      </p>
                      <p className="w-fit min-h-[38px] px-4 rounded-full border border-[rgba(255,255,255,0.3)] flex items-center justify-center text-white text-xs md:text-sm font-nunito whitespace-nowrap">
                        Analytics & Reporting
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hover view - Description */}
                <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div>
                    <div className="flex justify-start mb-2">
                      <button className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors duration-200">
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#e59300]"
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
                    
                    <h3 className="text-white text-2xl sm:text-3xl md:text-3xl font-light mb-2 font-worksans">
                      Digital Marketing
                    </h3>
                  </div>
                  
                  <div className="text-white">
                    <span className="absolute top-100 left-4 lg:top-1 lg:left-53 opacity-26 font-extrabold italic text-gray-600 text-9xl lg:text-11xl pointer-events-none">
                      02
                    </span>
                    <p className="text-lg sm:text-xl md:text-1xl font-worksans font-light mb-2">
                      Strategic campaigns that drive traffic, increase conversions and maximize ROI.
                    </p>
                  </div>
                </div>
              </div>

              {/* Panel 3 - Brand Storytelling */}
              <div
                ref={addToPanelsRef}
                className="panel w-[85vw] sm:w-[90vw] md:w-[410px] font-light h-[55vh] md:h-[400px] bg-[#141414] rounded-2xl sm:rounded-3xl relative p-6 sm:p-8 border shrink-0 overflow-hidden group hover:bg-[#e59300] transition-all duration-500 cursor-pointer"
                onClick={() => handlePanelClick("brand-storytelling")}
              >
                {/* Default view - Services list */}
                <div className="z-10 relative h-full flex flex-col justify-between transition-opacity duration-300 group-hover:opacity-0">
                  <div>
                    <div className="flex justify-start mb-2">
                      <button className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-yellow-600 flex items-center justify-center hover:bg-gray-400 transition-colors duration-200">
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white"
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
                    
                    <h3 className="text-white text-2xl sm:text-3xl md:text-3xl font-light mb-6 sm:mb-8 font-worksans">
                      Brand Storytelling
                    </h3>
                  </div>
                  
                  {/* Fixed layout for Brand Storytelling pills */}
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-3">
                      <span className="absolute top-100 left-4 lg:top-50 lg:left-53 opacity-26 font-extrabold italic text-gray-600 text-9xl lg:text-11xl pointer-events-none">
                        03
                      </span>
                      <p className="w-fit min-h-[38px] px-4 rounded-full border border-[rgba(255,255,255,0.3)] flex items-center justify-center text-white text-xs md:text-sm font-nunito whitespace-nowrap">
                        Brand Strategy
                      </p>
                      <p className="w-fit min-h-[38px] px-4 rounded-full border border-[rgba(255,255,255,0.3)] flex items-center justify-center text-white text-xs md:text-sm font-nunito whitespace-nowrap">
                        Creative Direction
                      </p>
                    </div>
                    
                    <div className="flex gap-3">
                      <p className="w-fit min-h-[38px] px-4 rounded-full border border-[rgba(255,255,255,0.3)] flex items-center justify-center text-white text-xs md:text-sm font-nunito whitespace-nowrap">
                        Campaign Ideation
                      </p>
                      <p className="w-fit min-h-[38px] px-4 rounded-full border border-[rgba(255,255,255,0.3)] flex items-center justify-center text-white text-xs md:text-sm font-nunito whitespace-nowrap">
                        Visual Identity
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hover view - Description */}
                <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div>
                    <div className="flex justify-start mb-2">
                      <button className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors duration-200">
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#e59300]"
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
                    
                    <h3 className="text-white text-2xl sm:text-3xl md:text-3xl font-light mb-2 font-worksans">
                      Brand Storytelling
                    </h3>
                  </div>
                  
                  <div className="text-white">
                    <span className="absolute top-100 left-4 lg:top-50 lg:left-53 opacity-26 font-extrabold italic text-gray-600 text-9xl lg:text-11xl pointer-events-none">
                      03
                    </span>
                    <p className="text-lg sm:text-xl md:text-1xl font-worksans font-light mb-2">
                      Crafting compelling narratives that connect  brands with their audience emotionally.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* EXTRA GAP ADDED HERE - Between Group 1 and Group 2 */}
            <div className="shrink-0 w-[120px] md:w-[200px] h-full" />

            {/* Group 2: Panels 4-5-6 */}
            <div className="flex items-center gap-10 md:gap-6">
              {/* Panel 4 - TV Commercials */}
              <div
                ref={addToPanelsRef}
                className="panel w-[85vw] sm:w-[90vw] md:w-[410px] h-[55vh] font-light md:h-[400px] bg-[#141414] rounded-2xl sm:rounded-3xl relative p-6 sm:p-8 border shrink-0 overflow-hidden group hover:bg-[#e59300] transition-all duration-500 cursor-pointer"
                onClick={() => handlePanelClick("tv-commercials")}
              >
                {/* Default view - Services list */}
                <div className="z-10 relative h-full flex flex-col justify-between transition-opacity duration-300 group-hover:opacity-0">
                  <div>
                    <div className="flex justify-start mb-2">
                      <button className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-yellow-600 flex items-center justify-center hover:bg-gray-400 transition-colors duration-200">
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white"
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
                    
                    <h3 className="text-white text-2xl sm:text-3xl md:text-3xl font-light mb-6 sm:mb-8 font-worksans">
                      TV Commercials
                    </h3>
                  </div>
                  
                  {/* Fixed layout for TV Commercials pills */}
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-3">
                      <span className="absolute top-100 left-4 lg:top-1 lg:left-53 opacity-26 font-extrabold italic text-gray-600 text-9xl lg:text-11xl pointer-events-none">
                        04
                      </span>
                      <p className="w-fit min-h-[38px] px-4 rounded-full border border-[rgba(255,255,255,0.3)] flex items-center justify-center text-white text-xs md:text-sm font-nunito whitespace-nowrap">
                        Concept Development
                      </p>
                      <p className="w-fit min-h-[38px] px-4 rounded-full border border-[rgba(255,255,255,0.3)] flex items-center justify-center text-white text-xs md:text-sm font-nunito whitespace-nowrap">
                        Script Writing
                      </p>
                    </div>
                    
                    <div className="flex gap-3">
                      <p className="w-fit min-h-[38px] px-4 rounded-full border border-[rgba(255,255,255,0.3)] flex items-center justify-center text-white text-xs md:text-sm font-nunito whitespace-nowrap">
                        Production
                      </p>
                      <p className="w-fit min-h-[38px] px-4 rounded-full border border-[rgba(255,255,255,0.3)] flex items-center justify-center text-white text-xs md:text-sm font-nunito whitespace-nowrap">
                        Post-Production
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hover view - Description */}
                <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div>
                    <div className="flex justify-start mb-2">
                      <button className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors duration-200">
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#e59300]"
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
                    
                    <h3 className="text-white text-2xl sm:text-3xl md:text-3xl font-light mb-2 font-worksans">
                      TV Commercials
                    </h3>
                  </div>
                  
                  <div className="text-white">
                    <span className="absolute top-100 left-4 lg:top-1 lg:left-53 opacity-26 font-extrabold italic text-gray-600 text-9xl lg:text-11xl pointer-events-none">
                      04
                    </span>
                    <p className="text-lg sm:text-xl md:text-1xl font-worksans font-light mb-2">
                      High-impact television commercials that capture attention and build brand recall.
                    </p>
                  </div>
                </div>
              </div>

              {/* Panel 5 - Product Photography */}
              <div
                ref={addToPanelsRef}
                className="panel w-[85vw] sm:w-[90vw] md:w-[410px] h-[55vh] md:h-[400px] font-light bg-[#141414] rounded-2xl sm:rounded-3xl relative p-6 sm:p-8 border shrink-0 overflow-hidden group hover:bg-[#e59300] transition-all duration-500 cursor-pointer"
                onClick={() => handlePanelClick("product-photography")}
              >
                {/* Default view - Services list */}
                <div className="z-10 relative h-full flex flex-col justify-between transition-opacity duration-300 group-hover:opacity-0">
                  <div>
                    <div className="flex justify-start mb-2">
                      <button className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-yellow-600 flex items-center justify-center hover:bg-gray-400 transition-colors duration-200">
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white"
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
                    
                    <h3 className="text-white text-2xl sm:text-3xl md:text-3xl font-light mb-6 sm:mb-8 font-worksans">
                      Product Photography
                    </h3>
                  </div>
                  
                  {/* Fixed layout for Product Photography pills */}
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-3">
                      <span className="absolute top-100 left-4 lg:top-50 lg:left-53 opacity-26 font-extrabold italic text-gray-600 text-9xl lg:text-11xl pointer-events-none">
                        05
                      </span>
                      <p className="w-fit min-h-[38px] px-4 rounded-full border border-[rgba(255,255,255,0.3)] flex items-center justify-center text-white text-xs md:text-sm font-nunito whitespace-nowrap">
                        Studio Shoots
                      </p>
                      <p className="w-fit min-h-[38px] px-4 rounded-full border border-[rgba(255,255,255,0.3)] flex items-center justify-center text-white text-xs md:text-sm font-nunito whitespace-nowrap">
                        Lifestyle Photography
                      </p>
                    </div>
                    
                    <div className="flex gap-3">
                      <p className="w-fit min-h-[38px] px-4 rounded-full border border-[rgba(255,255,255,0.3)] flex items-center justify-center text-white text-xs md:text-sm font-nunito whitespace-nowrap">
                        E-commerce Images
                      </p>
                      <p className="w-fit min-h-[38px] px-4 rounded-full border border-[rgba(255,255,255,0.3)] flex items-center justify-center text-white text-xs md:text-sm font-nunito whitespace-nowrap">
                        Editing & Retouching
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hover view - Description */}
                <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div>
                    <div className="flex justify-start mb-2">
                      <button className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors duration-200">
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#e59300]"
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
                    
                    <h3 className="text-white text-2xl sm:text-3xl md:text-3xl font-light mb-2 font-worksans">
                      Product Photography
                    </h3>
                  </div>
                  
                  <div className="text-white">
                    <span className="absolute top-100 left-4 lg:top-50 lg:left-53 opacity-26 font-extrabold italic text-gray-600 text-9xl lg:text-11xl pointer-events-none">
                      05
                    </span>
                    <p className="text-lg sm:text-xl md:text-1xl font-worksans font-light mb-2">
                      Professional photography that showcases products in their best light to drive sales.
                    </p>
                  </div>
                </div>
              </div>

              {/* Panel 6 - Lead Generation */}
              <div
                ref={addToPanelsRef}
                className="panel w-[85vw] sm:w-[90vw] md:w-[410px] h-[55vh] md:h-[400px] bg-[#141414] font-light rounded-2xl sm:rounded-3xl relative p-6 sm:p-8 border shrink-0 overflow-hidden group hover:bg-[#e59300] transition-all duration-500 cursor-pointer"
                onClick={() => handlePanelClick("lead-generation")}
              >
                {/* Default view - Services list */}
                <div className="z-10 relative h-full flex flex-col justify-between transition-opacity duration-300 group-hover:opacity-0">
                  <div>
                    <div className="flex justify-start mb-2">
                      <button className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-yellow-600 flex items-center justify-center hover:bg-gray-400 transition-colors duration-200">
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white"
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
                    
                    <h3 className="text-white text-2xl sm:text-3xl md:text-3xl font-light mb-6 sm:mb-8 font-worksans">
                      Lead Generation
                    </h3>
                  </div>
                  
                  {/* Fixed layout for Lead Generation pills */}
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-3">
                      <span className="absolute top-100 left-4 lg:top-1 lg:left-53 opacity-26 font-extrabold italic text-gray-600 text-9xl lg:text-11xl pointer-events-none">
                        06
                      </span>
                      <p className="w-fit min-h-[38px] px-4 rounded-full border border-[rgba(255,255,255,0.3)] flex items-center justify-center text-white text-xs md:text-sm font-nunito whitespace-nowrap">
                        Landing Pages
                      </p>
                      <p className="w-fit min-h-[38px] px-4 rounded-full border border-[rgba(255,255,255,0.3)] flex items-center justify-center text-white text-xs md:text-sm font-nunito whitespace-nowrap">
                        Email Sequences
                      </p>
                    </div>
                    
                    <div className="flex gap-3">
                      <p className="w-fit min-h-[38px] px-4 rounded-full border border-[rgba(255,255,255,0.3)] flex items-center justify-center text-white text-xs md:text-sm font-nunito whitespace-nowrap">
                        Lead Magnets
                      </p>
                      <p className="w-fit min-h-[38px] px-4 rounded-full border border-[rgba(255,255,255,0.3)] flex items-center justify-center text-white text-xs md:text-sm font-nunito whitespace-nowrap">
                        Conversion Optimization
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hover view - Description */}
                <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div>
                    <div className="flex justify-start mb-2">
                      <button className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors duration-200">
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#e59300]"
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
                    
                    <h3 className="text-white text-2xl sm:text-3xl md:text-3xl font-light mb-2 font-worksans">
                      Lead Generation
                    </h3>
                  </div>
                  
                  <div className="text-white">
                    <span className="absolute top-100 left-4 lg:top-1 lg:left-53 opacity-26 font-extrabold italic text-gray-600 text-9xl lg:text-11xl pointer-events-none">
                      06
                    </span>
                    <p className="text-lg sm:text-xl md:text-1xl font-worksans font-light mb-2">
                      Targeted strategies to capture and nurture high-quality leads for your business.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="shrink-0 w-[120px] md:w-[200px] h-full" />

            {/* Group 3: Panels 7-8-9 */}
            <div className="flex items-center gap-10 md:gap-6">
              {/* Panel 7 - Social Media Management */}
              <div
                ref={addToPanelsRef}
                className="panel w-[85vw] sm:w-[90vw] md:w-[410px] h-[55vh] md:h-[400px] bg-[#141414] rounded-2xl font-light sm:rounded-3xl relative p-6 sm:p-8 border shrink-0 overflow-hidden group hover:bg-[#e59300] transition-all duration-500 cursor-pointer"
                onClick={() => handlePanelClick("social-media-management")}
              >
                {/* Default view - Services list */}
                <div className="z-10 relative h-full flex flex-col justify-between transition-opacity duration-300 group-hover:opacity-0">
                  <div>
                    <div className="flex justify-start mb-2">
                      <button className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-yellow-600 flex items-center justify-center hover:bg-gray-400 transition-colors duration-200">
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white"
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
                    
                    <h3 className="text-white text-2xl sm:text-3xl md:text-1xl font-light mb-6 sm:mb-8 font-worksans">
                      Social Media Management
                    </h3>
                  </div>
                  
                  {/* Fixed layout for Social Media Management pills */}
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-3">
                      <span className="absolute top-100 left-4 lg:top-50 lg:left-53 opacity-26 font-extrabold italic text-gray-600 text-9xl lg:text-11xl pointer-events-none">
                        07
                      </span>
                      <p className="w-fit min-h-[38px] px-4 rounded-full border border-[rgba(255,255,255,0.3)] flex items-center justify-center text-white text-xs md:text-sm font-nunito whitespace-nowrap">
                        Content Calendar
                      </p>
                      <p className="w-fit min-h-[38px] px-4 rounded-full border border-[rgba(255,255,255,0.3)] flex items-center justify-center text-white text-xs md:text-sm font-nunito whitespace-nowrap">
                        Community Management
                      </p>
                    </div>
                    
                    <div className="flex gap-3">
                      <p className="w-fit min-h-[38px] px-4 rounded-full border border-[rgba(255,255,255,0.3)] flex items-center justify-center text-white text-xs md:text-sm font-nunito whitespace-nowrap">
                        Analytics Tracking
                      </p>
                      <p className="w-fit min-h-[38px] px-4 rounded-full border border-[rgba(255,255,255,0.3)] flex items-center justify-center text-white text-xs md:text-sm font-nunito whitespace-nowrap">
                        Campaign Management
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hover view - Description */}
                <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div>
                    <div className="flex justify-start mb-2">
                      <button className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors duration-200">
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#e59300]"
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
                    
                    <h3 className="text-white text-2xl sm:text-3xl md:text-1xl font-light mb-2 font-worksans">
                      Social Media Management
                    </h3>
                  </div>
                  
                  <div className="text-white">
                    <span className="absolute top-100 left-4 lg:top-50 lg:left-53 opacity-26 font-extrabold italic text-gray-600 text-9xl lg:text-11xl pointer-events-none">
                      07
                    </span>
                    <p className="text-lg sm:text-xl md:text-1xl font-worksans font-light mb-2">
                      Comprehensive social media strategies to grow your online presence and engagement.
                    </p>
                  </div>
                </div>
              </div>

              {/* Panel 8 - Influencer Marketing */}
              <div
                ref={addToPanelsRef}
                className="panel w-[85vw] sm:w-[90vw] md:w-[410px] h-[55vh] md:h-[400px] bg-[#141414] rounded-2xl sm:rounded-3xl font-light relative p-6 sm:p-8 border shrink-0 overflow-hidden group hover:bg-[#e59300] transition-all duration-500 cursor-pointer"
                onClick={() => handlePanelClick("influencer-marketing")}
              >
                {/* Default view - Services list */}
                <div className="z-10 relative h-full flex flex-col justify-between transition-opacity duration-300 group-hover:opacity-0">
                  <div>
                    <div className="flex justify-start mb-2">
                      <button className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-yellow-600 flex items-center justify-center hover:bg-gray-400 transition-colors duration-200">
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white"
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
                    
                    <h3 className="text-white text-2xl sm:text-3xl md:text-3xl font-light mb-6 sm:mb-8 font-worksans">
                      Influencer Marketing
                    </h3>
                  </div>
                  
                  {/* Fixed layout for Influencer Marketing pills */}
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-3">
                      <span className="absolute top-100 left-4 lg:top-1 lg:left-53 opacity-26 font-extrabold italic text-gray-600 text-9xl lg:text-11xl pointer-events-none">
                        08
                      </span>
                      <p className="w-fit min-h-[38px] px-4 rounded-full border border-[rgba(255,255,255,0.3)] flex items-center justify-center text-white text-xs md:text-sm font-nunito whitespace-nowrap">
                        Influencer Outreach
                      </p>
                      <p className="w-fit min-h-[38px] px-4 rounded-full border border-[rgba(255,255,255,0.3)] flex items-center justify-center text-white text-xs md:text-sm font-nunito whitespace-nowrap">
                        Campaign Strategy
                      </p>
                    </div>
                    
                    <div className="flex gap-3">
                      <p className="w-fit min-h-[38px] px-4 rounded-full border border-[rgba(255,255,255,0.3)] flex items-center justify-center text-white text-xs md:text-sm font-nunito whitespace-nowrap">
                        Content Collaboration
                      </p>
                      <p className="w-fit min-h-[38px] px-4 rounded-full border border-[rgba(255,255,255,0.3)] flex items-center justify-center text-white text-xs md:text-sm font-nunito whitespace-nowrap">
                        Performance Analysis
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hover view - Description */}
                <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div>
                    <div className="flex justify-start mb-2">
                      <button className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors duration-200">
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#e59300]"
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
                    
                    <h3 className="text-white text-2xl sm:text-3xl md:text-3xl font-light mb-2 font-worksans">
                      Influencer Marketing
                    </h3>
                  </div>
                  
                  <div className="text-white">
                    <span className="absolute top-100 left-4 lg:top-1 lg:left-53 opacity-26 font-extrabold italic text-gray-600 text-9xl lg:text-11xl pointer-events-none">
                      08
                    </span>
                    <p className="text-lg sm:text-xl md:text-1xl font-worksans font-light mb-2">
                      Leveraging influencer partnerships to amplify your brand's reach and credibility.
                    </p>
                  </div>
                </div>
              </div>

              {/* Panel 9 - Personal Branding */}
              <div
                ref={addToPanelsRef}
                className="panel w-[85vw] sm:w-[90vw] md:w-[410px] h-[55vh] font-light md:h-[400px] bg-[#141414] rounded-2xl sm:rounded-3xl relative p-6 sm:p-8 border shrink-0 overflow-hidden group hover:bg-[#e59300] transition-all duration-500 cursor-pointer"
                onClick={() => handlePanelClick("personal-branding")}
              >
                {/* Default view - Services list */}
                <div className="z-10 relative h-full flex flex-col justify-between transition-opacity duration-300 group-hover:opacity-0">
                  <div>
                    <div className="flex justify-start mb-2">
                      <button className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-yellow-600 flex items-center justify-center hover:bg-gray-400 transition-colors duration-200">
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white"
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
                    
                    <h3 className="text-white text-2xl sm:text-3xl md:text-3xl font-light mb-6 sm:mb-8 font-worksans">
                      Personal Branding
                    </h3>
                  </div>
                  
                  {/* Fixed layout for Personal Branding pills */}
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-3">
                      <span className="absolute top-100 left-4 lg:top-50 lg:left-53 opacity-26 font-extrabold italic text-gray-600 text-9xl lg:text-11xl pointer-events-none">
                        09
                      </span>
                      <p className="w-fit min-h-[38px] px-4 rounded-full border border-[rgba(255,255,255,0.3)] flex items-center justify-center text-white text-xs md:text-sm font-nunito whitespace-nowrap">
                        Personal Strategy
                      </p>
                      <p className="w-fit min-h-[38px] px-4 rounded-full border border-[rgba(255,255,255,0.3)] flex items-center justify-center text-white text-xs md:text-sm font-nunito whitespace-nowrap">
                        Online Presence
                      </p>
                    </div>
                    
                    <div className="flex gap-3">
                      <p className="w-fit min-h-[38px] px-4 rounded-full border border-[rgba(255,255,255,0.3)] flex items-center justify-center text-white text-xs md:text-sm font-nunito whitespace-nowrap">
                        Content Strategy
                      </p>
                      <p className="w-fit min-h-[38px] px-4 rounded-full border border-[rgba(255,255,255,0.3)] flex items-center justify-center text-white text-xs md:text-sm font-nunito whitespace-nowrap">
                        Brand Positioning
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hover view - Description */}
                <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div>
                    <div className="flex justify-start mb-2">
                      <button className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors duration-200">
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#e59300]"
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
                    
                    <h3 className="text-white text-2xl sm:text-3xl md:text-3xl font-light mb-2 font-worksans">
                      Personal Branding
                    </h3>
                  </div>
                  
                  <div className="text-white">
                    <span className="absolute top-100 left-4 lg:top-50 lg:left-53 opacity-26 font-extrabold italic text-gray-600 text-9xl lg:text-11xl pointer-events-none">
                      09
                    </span>
                    <p className="text-lg sm:text-xl md:text-1xl font-worksans font-light mb-2">
                      Building authentic personal brands that establish authority and attract opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right spacer for the end */}
            <div className="shrink-0 -w-[20px] md:w-1/3 h-full" />
          </div>
        </div>
      )}
    </section>
  );
}

export default ServiceSection;