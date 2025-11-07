// import React from "react";
// import { motion } from "framer-motion";

// const SectionLanding = () => {
//   return (
//     <div className="relative w-full h-screen overflow-hidden bg-black flex flex-col justify-center items-center">

//       {/* Glassmorphic Background Bar */}
//       <motion.div
//         initial={{ opacity: 0, scaleY: 0 }}
//         animate={{ opacity: 1, scaleY: 1 }}
//         transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
//         className="absolute top-1/2 left-0 w-full h-[190px] -translate-y-1/2
//         bg-[#009BB5]/40 backdrop-blur-md border border-white/20 shadow-lg z-0 origin-center flex items-center justify-center"
//       >
//         <motion.span
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
//           className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-normal font-['Brittany_Signature'] italic whitespace-nowrap opacity-80 mb-[24px] text-center px-4 sm:px-0 break-words"
//         >
//           Brand Storytelling
//         </motion.span>
//       </motion.div>

//       {/* POWERFUL */}
//       <motion.div
//         initial={{ y: "-100%" }}
//         animate={{ y: 0 }}
//         transition={{ duration: 1.5, ease: "easeOut" }}
//         className="w-full flex justify-center"
//       >
//         <svg width="100%" height="220" viewBox="0 0 1200 220" className="max-w-[95%] z-10">
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
//             className="lg:text-[180px] md:text-[140px] sm:text-[100px] xs:text-[60px]"
//             fontWeight="bold"
//             fill="white"
//             initial={{ opacity: 1 }}
//             animate={{ opacity: 0 }}
//             transition={{ duration: 0.5, ease: "easeOut", delay: 1.2 }}
//           >
//             POWERFUL
//           </motion.text>

//           <motion.text
//             x="50%"
//             y="55%"
//             textAnchor="middle"
//             dominantBaseline="middle"
//             fontSize="180"
//             className="lg:text-[180px] md:text-[140px] sm:text-[100px] xs:text-[60px]"
//             fontWeight="bold"
//             fill="url(#halfLetterGradient)"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5, ease: "easeOut", delay: 1.2 }}
//           >
//             POWERFUL
//           </motion.text>
//         </svg>
//       </motion.div>

//       {/* CONTENT */}
//       <motion.div
//         initial={{ y: "100%" }}
//         animate={{ y: 0 }}
//         transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
//         className="w-full flex justify-center -mt-8"
//       >
//         <svg width="100%" height="220" viewBox="0 0 1200 220" className="max-w-[95%] z-10">
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
//             className="lg:text-[180px] md:text-[140px] sm:text-[100px] xs:text-[60px]"
//             fontWeight="bold"
//             fill="white"
//             initial={{ opacity: 1 }}
//             animate={{ opacity: 0 }}
//             transition={{ duration: 0.5, ease: "easeOut", delay: 1.5 }}
//           >
//             CONTENT
//           </motion.text>

//           <motion.text
//             x="50%"
//             y="50%"
//             textAnchor="middle"
//             dominantBaseline="middle"
//             fontSize="180"
//             className="lg:text-[180px] md:text-[140px] sm:text-[100px] xs:text-[60px]"
//             fontWeight="bold"
//             fill="url(#letterHalfGradient)"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5, ease: "easeOut", delay: 1.5 }}
//           >
//             CONTENT
//           </motion.text>
//         </svg>
//       </motion.div>
//     </div>
//   );
// };

// export default SectionLanding;
