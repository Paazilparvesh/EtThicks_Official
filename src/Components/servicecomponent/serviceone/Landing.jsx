import { motion } from "framer-motion";

// Map slugs → Display titles
const SERVICE_TITLES = {
  "content-creation": "Content Creation",
  "social-media-management": "Social Media Management",
  "lead-generation": "lead generation",
  "brand-storytelling": "brand storytelling",
  "seo": "SEO Optimization",
  "tv-commercials":"tv commercials",
  "influencer-marketing":"influencer marketing",
  "product-photography": "product photography",
   "personal-branding": "personal-branding",
  // add more slugs here...
};

// Map slugs → Dynamic text for ENGAGING and STORIES
const SERVICE_HERO_TEXT = {
  "content-creation": {
    top: "ENGAGING",
    bottom: "STORIES"
  },
  "social-media-management": {
    top: "STRAGIC ",
    bottom: "PRESENCE"
  },
  "lead-generation": {
    top: "QUALIFED ",
    bottom: "PRODPECTS"
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
    bottom: "PATNERSHIP"
  },
  "influencer-marketing": {
    top: "INFLUENENCE",
    bottom: "AMPLIFIED"
  },
   "personal-branding": {
    top: "BRAND",
    bottom: "YOU"
  },
  // add more slugs here...
};

const Landing = ({ slug }) => {
  const displayTitle = SERVICE_TITLES[slug] || "Our Services";
  const heroText = SERVICE_HERO_TEXT[slug] || { top: "ENGAGING", bottom: "STORIES" };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black flex flex-col justify-center items-center">
      {/* Glassmorphic Background Bar */}
      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        className="absolute top-1/2 left-0 w-full h-[90px] sm:h-[100px] md:h-[190px] -translate-y-1/2
        bg-[#009BB5]/40 backdrop-blur-md border border-white/20 shadow-lg z-0 origin-center flex items-center justify-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
          className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-7xl font-normal font-['Brittany_Signature'] italic whitespace-nowrap opacity-80 mb-[12px] sm:mb-[16px] md:mb-[24px] text-center px-4"
        >
          {displayTitle}
        </motion.span>
      </motion.div>

      {/* TOP TEXT (ENGAGING) - White top, Yellow bottom */}
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="w-full flex justify-center"
      >
        <svg 
          width="100%" 
          height="auto" 
          viewBox="0 0 1200 220" 
          className="max-w-[95%] z-10 h-[120px] sm:h-[140px] md:h-[160px] lg:h-[220px]"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="topVerticalGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="50%" stopColor="white" />
              <stop offset="50%" stopColor="#FFAE00" />
            </linearGradient>
          </defs>

          <motion.text
            x="50%"
            y="55%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="180"
            fontWeight="bold"
            fill="white"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 1.2 }}
          >
            {heroText.top}
          </motion.text>

          <motion.text
            x="50%"
            y="55%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="180"
            fontWeight="bold"
            fill="url(#topVerticalGradient)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 1.2 }}
          >
            {heroText.top}
          </motion.text>
        </svg>
      </motion.div>

      {/* BOTTOM TEXT (STORIES) - Yellow top, White bottom */}
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
        className="w-full flex justify-center -mt-4 sm:-mt-6 md:-mt-8"
      >
        <svg 
          width="100%" 
          height="auto" 
          viewBox="0 0 1200 220" 
          className="max-w-[95%] z-10 h-[120px] sm:h-[140px] md:h-[160px] lg:h-[220px]"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="bottomVerticalGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="50%" stopColor="#FFAE00" />
              <stop offset="50%" stopColor="white" />
            </linearGradient>
          </defs>

          <motion.text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="180"
            fontWeight="bold"
            fill="white"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 1.5 }}
          >
            {heroText.bottom}
          </motion.text>

          <motion.text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="180"
            fontWeight="bold"
            fill="url(#bottomVerticalGradient)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 1.5 }}
          >
            {heroText.bottom}
          </motion.text>
        </svg>
      </motion.div>
    </div>
  );
};

export default Landing;


// Serlanding.jsx
// import ethutioneVideo from "../assets/ethuvideo/ethutionevideo.mp4";

// function Serlanding() {
//   return (
//     <div className="relative w-full h-screen bg-black flex items-center justify-center overflow-hidden">
//       <video
//         src={ethutioneVideo}
//         autoPlay
//         muted
//         loop
//         playsInline
//         className="absolute top-0 left-0 w-full h-full object-cover"
//         preload="auto"
//       />
//     </div>
//   );
// }

// export default Serlanding;

Landing.jsx
// import { useEffect, useRef, useState } from "react";
// import ethutioneVideo from "../../../assets/ethuvideo/ethutionevideo.mp4";

// const Serlanding = ({ slug }) => {
//   const videoRef = useRef(null);
//   const containerRef = useRef(null);
//   const [scale, setScale] = useState(1);
//   const [isMobile, setIsMobile] = useState(false);

//   // Detect if device is mobile
//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     // Initial check
//     checkMobile();

//     // Add resize listener
//     window.addEventListener('resize', checkMobile);
    
//     return () => {
//       window.removeEventListener('resize', checkMobile);
//     };
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!containerRef.current) return;

//       const container = containerRef.current;
//       const containerTop = container.getBoundingClientRect().top;
//       const containerHeight = container.offsetHeight;
//       const windowHeight = window.innerHeight;

//       // Calculate scroll progress (0 to 1)
//       let scrollProgress = 0;
      
//       if (containerTop <= windowHeight && containerTop >= -containerHeight) {
//         scrollProgress = (windowHeight - containerTop) / (windowHeight + containerHeight);
//       }

//       // Different scale values for mobile and desktop
//       let newScale;
//       if (isMobile) {
//         // Mobile: Very subtle zoom effect (1.1x to 1x) - only 10% zoom
//         newScale = 1.1 - (scrollProgress * 0.1);
//         setScale(Math.max(1, Math.min(1.1, newScale)));
//       } else {
//         // Desktop: More zoom effect (1.5x to 1x)
//         newScale = 1.5 - (scrollProgress * 0.5);
//         setScale(Math.max(1, Math.min(1.5, newScale)));
//       }
//     };

//     // Initial check
//     handleScroll();

//     // Add scroll listener
//     window.addEventListener('scroll', handleScroll, { passive: true });
    
//     // Cleanup
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [isMobile]);

//   return (
//     <div 
//       ref={containerRef}
//       className="relative w-full bg-black flex items-center justify-center overflow-hidden mt-6"
//       style={{
//         height: '100vh',
//         height: '100dvh',
//         minHeight: '-webkit-fill-available'
//       }}
//     >
//       {/* Video Background with Scale Transform */}
//       <video
//         ref={videoRef}
//         src={ethutioneVideo}
//         autoPlay
//         muted
//         playsInline
//         webkit-playsinline="true"
//         x5-playsinline="true"
//         className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-75 ease-out"
//         preload="auto"
//         style={{ 
//           minHeight: '100vh',
//           minHeight: '100dvh',
//           transform: `scale(${scale})`,
//           transformOrigin: 'center center',
//           willChange: 'transform'
//         }}
//       />

//       {/* Optional: Add content overlay */}
//       <div className="relative z-10 text-white text-center px-4">
//         {/* Your content here */}
//       </div>
//     </div>
//   );
// };

// export default Serlanding;





