// /* eslint-disable no-unused-vars */
// import { motion } from "framer-motion";

// // Map slugs → Display titles
// const SERVICE_TITLES = {
//   "content-creation": "Content Creation",
//   "social-media-management": "Social Media Management",
//   "lead-generation": "lead generation",
//   "brand-storytelling": "brand storytelling",
//   "seo": "SEO Optimization",
//   "tv-commercials": "tv commercials",
//   "influencer-marketing": "influencer marketing",
//   "product-photography": "product photography",
//   "personal-branding": "personal-branding",
//   // add more slugs here...
// };

// // Map slugs → Dynamic text for ENGAGING and STORIES
// const SERVICE_HERO_TEXT = {
//   "content-creation": {
//     top: "ENGAGING",
//     bottom: "STORIES"
//   },
//   "social-media-management": {
//     top: "STRAGIC ",
//     bottom: "PRESENCE"
//   },
//   "lead-generation": {
//     top: "QUALIFED ",
//     bottom: "PRODPECTS"
//   },
//   "product-photography": {
//     top: "VISUAL ",
//     bottom: "APPEAL"
//   },
//   "tv-commercials": {
//     top: "CAPTIVATING",
//     bottom: "BROADCASTS"
//   },
//   "brand-storytelling": {
//     top: "IMPACT",
//     bottom: "PATNERSHIP"
//   },
//   "influencer-marketing": {
//     top: "INFLUENENCE",
//     bottom: "AMPLIFIED"
//   },
//   "personal-branding": {
//     top: "BRAND",
//     bottom: "YOU"
//   },
//   // add more slugs here...
// };

// const Landing = ({ slug }) => {
//   const displayTitle = SERVICE_TITLES[slug] || "Our Services";
//   const heroText = SERVICE_HERO_TEXT[slug] || { top: "ENGAGING", bottom: "STORIES" };

//   return (
//     <div className="relative w-full h-screen overflow-hidden bg-black flex flex-col justify-center items-center">
//       {/* Glassmorphic Background Bar */}
//       <motion.div
//         initial={{ opacity: 0, scaleY: 0 }}
//         animate={{ opacity: 1, scaleY: 1 }}
//         transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
//         className="absolute top-1/2 left-0 w-full h-[90px] sm:h-[100px] md:h-[190px] -translate-y-1/2
//         bg-[#009BB5]/40 backdrop-blur-md border border-white/20 shadow-lg z-0 origin-center flex items-center justify-center"
//       >
//         <motion.span
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
//           className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-7xl font-normal font-['Brittany_Signature'] italic whitespace-nowrap opacity-80 mb-3 sm:mb-4 md:mb-6 text-center px-4"
//         >
//           {displayTitle}
//         </motion.span>
//       </motion.div>

//       {/* TOP TEXT (ENGAGING) - White top, Yellow bottom */}
//       <motion.div
//         initial={{ y: "-100%" }}
//         animate={{ y: 0 }}
//         transition={{ duration: 1.5, ease: "easeOut" }}
//         className="w-full flex justify-center"
//       >
//         <svg
//           width="100%"
//           height="auto"
//           viewBox="0 0 1200 220"
//           className="max-w-[95%] z-10 h-[120px] sm:h-[140px] md:h-40 lg:h-[220px]"
//           preserveAspectRatio="xMidYMid meet"
//         >
//           <defs>
//             <linearGradient id="topVerticalGradient" x1="0" y1="0" x2="0" y2="1">
//               <stop offset="50%" stopColor="white" />
//               <stop offset="50%" stopColor="#FFAE00" />
//             </linearGradient>
//           </defs>

//           <motion.text
//             x="50%"
//             y="55%"
//             textAnchor="middle"
//             dominantBaseline="middle"
//             fontSize="180"
//             fontWeight="bold"
//             fill="white"
//             initial={{ opacity: 1 }}
//             animate={{ opacity: 0 }}
//             transition={{ duration: 0.5, ease: "easeOut", delay: 1.2 }}
//           >
//             {heroText.top}
//           </motion.text>

//           <motion.text
//             x="50%"
//             y="55%"
//             textAnchor="middle"
//             dominantBaseline="middle"
//             fontSize="180"
//             fontWeight="bold"
//             fill="url(#topVerticalGradient)"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5, ease: "easeOut", delay: 1.2 }}
//           >
//             {heroText.top}
//           </motion.text>
//         </svg>
//       </motion.div>

//       {/* BOTTOM TEXT (STORIES) - Yellow top, White bottom */}
//       <motion.div
//         initial={{ y: "100%" }}
//         animate={{ y: 0 }}
//         transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
//         className="w-full flex justify-center -mt-4 sm:-mt-6 md:-mt-8"
//       >
//         <svg
//           width="100%"
//           height="auto"
//           viewBox="0 0 1200 220"
//           className="max-w-[95%] z-10 h-[120px] sm:h-[140px] md:h-40 lg:h-[220px]"
//           preserveAspectRatio="xMidYMid meet"
//         >
//           <defs>
//             <linearGradient id="bottomVerticalGradient" x1="0" y1="0" x2="0" y2="1">
//               <stop offset="50%" stopColor="#FFAE00" />
//               <stop offset="50%" stopColor="white" />
//             </linearGradient>
//           </defs>

//           <motion.text
//             x="50%"
//             y="50%"
//             textAnchor="middle"
//             dominantBaseline="middle"
//             fontSize="180"
//             fontWeight="bold"
//             fill="white"
//             initial={{ opacity: 1 }}
//             animate={{ opacity: 0 }}
//             transition={{ duration: 0.5, ease: "easeOut", delay: 1.5 }}
//           >
//             {heroText.bottom}
//           </motion.text>

//           <motion.text
//             x="50%"
//             y="50%"
//             textAnchor="middle"
//             dominantBaseline="middle"
//             fontSize="180"
//             fontWeight="bold"
//             fill="url(#bottomVerticalGradient)"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5, ease: "easeOut", delay: 1.5 }}
//           >
//             {heroText.bottom}
//           </motion.text>
//         </svg>
//       </motion.div>
//     </div>
//   );
// };

// export default Landing;





import React, { useEffect, useRef } from 'react'

// Map slugs → Display titles
const SERVICE_TITLES = {
  "content-creation": "Content Creation",
  "social-media-management": "Social Media Management",
  "lead-generation": "lead generation",
  "brand-storytelling": "brand storytelling",
  "seo": "SEO Optimization",
  "tv-commercials": "tv commercials",
  "influencer-marketing": "influencer marketing",
  "product-photography": "product photography",
  "personal-branding": "Personal Branding",
  "digital-marketing": "Digital Marketing"
};

// Map slugs → Dynamic text for ENGAGING and STORIES
const SERVICE_HERO_TEXT = {
  "content-creation": {
    top: "ENGAGING",
    bottom: "STORIES"
  },
  "social-media-management": {
    top: "STRATEGIC ",
    bottom: "PRESENCE"
  },
  "lead-generation": {
    top: "QUALIFED ",
    bottom: "PROSPECTS"
  },
  "product-photography": {
    top: "VISUAL ",
    bottom: "APPEAL"
  },
  "tv-commercials": {
    top: "CAPTIVATING",
    bottom: "BROADCASTS"
  },
  "brand-storytelling": {
    top: "IMPACT",
    bottom: "PARTNERSHIP"
  },
  "influencer-marketing": {
    top: "INFLUENENCE",
    bottom: "AMPLIFIED"
  },
  "personal-branding": {
    top: "BRAND",
    bottom: "YOU"
  },
  "digital-marketing": {
    top: "AUTHENTIC",
    bottom: "IDENTITY"
  },
  // add more slugs here...
};

const Landing = ({ slug }) => {
  const whiteLayerRef = useRef(null)
  const displayTitle = SERVICE_TITLES[slug] || "Our Services";
  const heroText = SERVICE_HERO_TEXT[slug];

  useEffect(() => {
    if (whiteLayerRef.current) {
      whiteLayerRef.current.classList.add('animate-paddingGrow')
    }
  }, [])

  return (
    <>
      <div className="relative min-h-screen bg-black flex justify-center items-center overflow-hidden">
        {/* Black layer (always full height, behind white layer) */}
        <div className="absolute top-1/4 left-0 w-full min-h-[50%] bg-black text-white flex flex-col justify-center items-center gap-24 z-30">
          <h1 className="animate-[top-text_1.5s_ease-out_0.5s_forwards] block text-5xl md:text-9xl md:scale-200 -mt-50 opacity-0 font-bold">{heroText.top}</h1>
          <h1 className="animate-[bottom-text_1.5s_ease-out_0.5s_forwards] text-sm md:text-9xl md:scale-200 -mb-50 opacity-0 font-bold">{heroText.bottom}</h1>
        </div>

        {/* White layer (padding animates from py-0 to py-50) */}
        <div
          ref={whiteLayerRef}
          className="absolute top-1/2 left-0 w-full  bg-[#009BB5] flex flex-col justify-center items-center gap-24 z-40 py-0 -translate-y-1/2 animate-[paddingGrow_1.5s_ease-out_1s_forwards] overflow-hidden"
        >
          <h1 className="animate-[top-text_1.5s_ease-out_0.5s_forwards] block text-6xl md:text-9xl md:scale-200 -mt-50 text-[#FFAE00] font-bold">{heroText.top}</h1>
          <h1 className="animate-[bottom-text_1.5s_ease-out_0.5s_forwards] text-6xl md:text-9xl md:scale-200 -mb-50 text-[#FFAE00] font-bold">{heroText.bottom}</h1>
        </div>

        <div className="absolute top-1/2 left-0 w-full text-white flex flex-col justify-center items-center -mt-8 z-50">
          <h1 className="text-6xl text-black font-normal font-['Brittany_Signature'] italic whitespace-nowrap">{displayTitle}</h1>
        </div>
      </div>

      <style jsx>{`
        @keyframes paddingGrow {
          from {
            padding-top: -120px;
            padding-bottom: 0;
          }
          to {
            padding-top: 6.5rem;  /* py-50 = 12.5rem (200px) */
            padding-bottom: 6.5rem;
          }
        }
        /* Correct: use transform: translateY(), not translateY: */
        @keyframes top-text {
          from {
            transform: translateY(-150px);
            opacity: 0;
          }
          to {
            transform: translateY(0px);
            opacity: 1;
          }
        }

        @keyframes bottom-text {
          from {
            transform: translateY(150px);
            opacity: 0;
          }
          to {
            transform: translateY(0px);
            opacity: 1;
          }
        }
      `}</style>
    </>
  )
}

export default Landing