
// import React from "react";
// import { motion } from "framer-motion";

// const SectionLanding = () => {
//   return (
//     <div className="relative w-full h-screen overflow-hidden bg-black flex flex-col justify-center items-center">
      
//       {/* Glassmorphic Background Bar */}
//       <motion.div
//         initial={{ opacity: 0, scaleX: 0 }}
//         animate={{ opacity: 1, scaleX: 1 }}
//         transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
//         className="absolute top-1/2 left-0 w-full h-[14rem] -translate-y-1/2 
//         bg-[#009BB5]/40 backdrop-blur-md border border-white/20 shadow-lg z-0 origin-center"
//       />

//       {/* Brand Storytelling */}
//       <motion.span
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
//         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
//         text-white text-5xl md:text-7xl font-[Brittany Signature] italic z-20 whitespace-nowrap opacity-80"
//       >
//         Brand Storytelling
//       </motion.span>

//       {/* POWERFUL */}
//       <motion.div
//         initial={{ y: "-100%" }}
//         animate={{ y: 0 }}
//         transition={{ duration: 1.5, ease: "easeOut" }}
//         className="w-full flex justify-center"
//       >
//         <svg
//           width="100%"
//           height="220"
//           viewBox="0 0 1200 220"
//           className="max-w-[95%] z-10"
//         >
//           <defs>
//             <linearGradient id="halfLetterGradient" x1="0" y1="0" x2="0" y2="1">
//               <stop offset="50%" stopColor="white" />
//               <stop offset="50%" stopColor="orange" />
//             </linearGradient>
//           </defs>

//           <text
//             x="50%"
//             y="55%"
//             textAnchor="middle"
//             dominantBaseline="middle"
//             fontSize="180"   
//             fontWeight="bold"
//             fill="url(#halfLetterGradient)"
//           >
//             POWERFUL
//           </text>
//         </svg>
//       </motion.div>

//       {/* CONTENT */}
//       <motion.div
//         initial={{ y: "100%" }}
//         animate={{ y: 0 }}
//         transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
//         className="w-full flex justify-center -mt-8"
//       >
//         <svg
//           width="100%"
//           height="220"
//           viewBox="0 0 1200 220"
//           className="max-w-[95%] z-10"
//         >
//           <defs>
//             <linearGradient id="letterHalfGradient" x1="0" y1="0" x2="0" y2="1">
//               <stop offset="50%" stopColor="orange" />
//               <stop offset="50%" stopColor="white" />
//             </linearGradient>
//           </defs>

//           <text
//             x="50%"
//             y="50%"
//             textAnchor="middle"
//             dominantBaseline="middle"
//             fontSize="180"   
//             fontWeight="bold"
//             fill="url(#letterHalfGradient)"
//           >
//             CONTENT
//           </text>
//         </svg>
//       </motion.div>
//     </div>
//   );
// };

// export default SectionLanding;
// import React from "react";
// import { motion } from "framer-motion";

// const SectionLanding = () => {
//   return (
//     <div className="relative w-full h-screen overflow-hidden bg-black flex flex-col justify-center items-center">
//       {/* Glassmorphic Background Bar */}
//       <motion.div
//         initial={{ opacity: 0, scaleX: 0 }}
//         animate={{ opacity: 1, scaleX: 1 }}
//         transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
//         className="absolute top-1/2 left-0 w-full h-[14rem] -translate-y-1/2 
//         bg-[#009BB5]/40 backdrop-blur-md border border-white/20 shadow-lg z-0 origin-center"
//       />

//       {/* Brand Storytelling */}
//       <motion.span
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
//         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
//         text-white text-5xl md:text-7xl font-[Brittany Signature] italic z-20 whitespace-nowrap opacity-80"
//       >
//         Brand Storytelling
//       </motion.span>

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

//           {/* White during animation */}
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
//             POWERFUL
//           </motion.text>

//           {/* Gradient after it settles */}
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

//           {/* White during animation */}
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
//             CONTENT
//           </motion.text>

//           {/* Gradient after it settles */}
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
//             CONTENT
//           </motion.text>
//         </svg>
//       </motion.div>
//     </div>
//   );
// };

// export default SectionLanding;
import React from "react";
import { motion } from "framer-motion";

const SectionLanding = () => {
  return (
    <div>
    <div className="relative w-full h-screen overflow-hidden bg-black flex flex-col justify-center items-center">
      
      {/* Glassmorphic Background Bar */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        className="absolute top-1/2 left-0 w-full h-[12rem] -translate-y-[60%] 
        bg-[#009BB5]/40 backdrop-blur-md border border-white/20 shadow-lg z-0 origin-center"
      />

      {/* Brand Storytelling */}
      <motion.span
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
        text-white text-5xl md:text-7xl font-[Brittany Signature] italic z-20 whitespace-nowrap opacity-80"
      >
        Brand Storytelling
      </motion.span>

      {/* POWERFUL */}
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="w-full flex justify-center"
      >
        <svg width="100%" height="220" viewBox="0 0 1200 220" className="max-w-[95%] z-10">
          <defs>
            <linearGradient id="halfLetterGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="50%" stopColor="white" />
              <stop offset="50%" stopColor="orange" />
            </linearGradient>
          </defs>

          {/* White during animation */}
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
            POWERFUL
          </motion.text>

          {/* Gradient after it settles */}
          <motion.text
            x="50%"
            y="55%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="180"
            fontWeight="bold"
            fill="url(#halfLetterGradient)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 1.2 }}
          >
            POWERFUL
          </motion.text>
        </svg>
      </motion.div>

      {/* CONTENT */}
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
        className="w-full flex justify-center -mt-8"
      >
        <svg width="100%" height="220" viewBox="0 0 1200 220" className="max-w-[95%] z-10">
          <defs>
            <linearGradient id="letterHalfGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="50%" stopColor="orange" />
              <stop offset="50%" stopColor="white" />
            </linearGradient>
          </defs>

          {/* White during animation */}
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
            CONTENT
          </motion.text>

          {/* Gradient after it settles */}
          <motion.text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="180"
            fontWeight="bold"
            fill="url(#letterHalfGradient)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 1.5 }}
          >
            CONTENT
          </motion.text>
        </svg>
      </motion.div>
       <div><h1 className="text-white text-3xl">That Converts — Crafted for Your Brand</h1></div></div>
    </div>
   
  );
};

export default SectionLanding;
