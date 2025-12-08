// import { motion } from "framer-motion";

// // Map slugs → Display titles
// const SERVICE_TITLES = {
//   "content-creation": "Content Creation",
//   "social-media": "Social Media Marketing",
//   "web-development": "Web Development",
//   "branding": "Branding & Identity",
//   "seo": "SEO Optimization",
//   "performance-marketing": "Performance Marketing",
//   // add more slugs here...
// };

// // Map slugs → Dynamic text for ENGAGING and STORIES
// const SERVICE_HERO_TEXT = {
//   "content-creation": {
//     top: "ENGAGING",
//     bottom: "STORIES"
//   },
//   "social-media": {
//     top: "POWERFUL",
//     bottom: "PRESENCE"
//   },
//   "web-development": {
//     top: "CUTTING-EDGE",
//     bottom: "SOLUTIONS"
//   },
//   "branding": {
//     top: "UNIQUE",
//     bottom: "IDENTITY"
//   },
//   "seo": {
//     top: "TOP",
//     bottom: "RANKINGS"
//   },
//   "performance-marketing": {
//     top: "MAXIMUM",
//     bottom: "RESULTS"
//   },
//   // add more slugs here...
// };

// const Serlanding = ({ slug }) => {
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
//           className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-7xl font-normal font-['Brittany_Signature'] italic whitespace-nowrap opacity-80 mb-[12px] sm:mb-[16px] md:mb-[24px] text-center px-4"
//         >
//           {displayTitle}
//         </motion.span>
//       </motion.div>

//       {/* TOP TEXT (Dynamic) */}
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
//           className="max-w-[95%] z-10 h-[120px] sm:h-[140px] md:h-[160px] lg:h-[220px]"
//           preserveAspectRatio="xMidYMid meet"
//         >
//           <defs>
//             <linearGradient id="halfLetterGradient" x1="0" y1="0" x2="0" y2="1">
//               <stop offset="50%" stopColor="white" />
//               <stop offset="50%" stopColor="orange" />
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
//             fill="url(#halfLetterGradient)"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5, ease: "easeOut", delay: 1.2 }}
//           >
//             {heroText.top}
//           </motion.text>
//         </svg>
//       </motion.div>

//       {/* BOTTOM TEXT (Dynamic) */}
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
//           className="max-w-[95%] z-10 h-[120px] sm:h-[140px] md:h-[160px] lg:h-[220px]"
//           preserveAspectRatio="xMidYMid meet"
//         >
//           <defs>
//             <linearGradient id="letterHalfGradient" x1="0" y1="0" x2="0" y2="1">
//               <stop offset="50%" stopColor="orange" />
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
//             fill="url(#letterHalfGradient)"
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

// export default Serlanding;

// Serlanding.jsx
// // import ethutioneVideo from "../assets/ethuvideo/ethutionevideo.mp4";

// // function Serlanding() {
// //   return (
// //     <div className="relative w-full h-screen bg-black flex items-center justify-center overflow-hidden">
// //       <video
// //         src={ethutioneVideo}
// //         autoPlay
// //         muted
// //         loop
// //         playsInline
// //         className="absolute top-0 left-0 w-full h-full object-cover"
// //         preload="auto"
// //       />
// //     </div>
// //   );
// // }

// // export default Serlanding;

// Landing.jsx
import ethutioneVideo from "../../../assets/ethuvideo/ethutionevideo.mp4";

const Serlanding = ({ slug }) => {
  return (
    <div 
      className="relative w-full bg-black flex items-center justify-center overflow-hidden"
      style={{
        height: '100vh',
        height: '100dvh', // Dynamic viewport height for mobile browsers
        minHeight: '-webkit-fill-available'
      }}
    >
      {/* Video Background - Mobile Optimized */}
      <video
        src={ethutioneVideo}
        autoPlay
        muted
        loop
        playsInline
        webkit-playsinline="true"
        x5-playsinline="true"
        className="absolute top-0 left-0 w-full h-full object-cover"
        preload="auto"
        style={{ 
          minHeight: '100vh',
          minHeight: '100dvh'
        }}
      />
    </div>
  );
};

export default Serlanding;



