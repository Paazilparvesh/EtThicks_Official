// import React, { useRef, useLayoutEffect } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { FaRegFileAlt, FaClock, FaRedo, FaUser, FaCheckCircle } from "react-icons/fa";
// import { MdOutlineTrendingUp } from "react-icons/md";

// // Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// const WhyWorkWithUs = () => {
//   const features = [
//     { icon: <FaRegFileAlt size={28} />, text: "100% Original, Brand-Aligned Content" },
//     { icon: <MdOutlineTrendingUp size={28} />, text: "SEO Best Practices Included" },
//     { icon: <FaClock size={28} />, text: "Fast Turnaround Times" },
//     { icon: <FaUser size={28} />, text: "Native English Writers" },
//     { icon: <FaRedo size={28} />, text: "Unlimited Revisions (on most plans)" },
//     { icon: <FaCheckCircle size={28} />, text: "Proven Results for Clients in Multiple Industries" },
//   ];

//   const pinContainerRef = useRef(null);
//   const titleRef = useRef(null);
//   const gridRef = useRef(null);

//   useLayoutEffect(() => {
//     const isMobile = window.innerWidth < 768;
//     const initialTitleScale = isMobile ? 1.5 : 3;  // smaller for mobile
//     const initialTitleY = isMobile ? '10vh' : '30vh';
//     const initialGridScale = isMobile ? 1 : 1.5;  // smaller grid scale on mobile

//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: pinContainerRef.current,
//           pin: true,
//           start: "top top",
//           end: "+=1500",
//           scrub: 1,
//         },
//       });

//       // Animate title
//       tl.fromTo(
//         titleRef.current,
//         { scale: initialTitleScale, y: initialTitleY, opacity: 1 },
//         { scale: 1, y: 0, duration: 1, ease: 'power2.inOut' }
//       );

//       // Animate grid
//       tl.from(
//         gridRef.current,
//         { scale: initialGridScale, opacity: 0, duration: 1, ease: 'power2.inOut' },
//         "<"
//       );
//     }, pinContainerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div ref={pinContainerRef} className="bg-black py-20 sm:py-24 px-4 sm:px-6 text-center overflow-hidden">
      
//       {/* Title */}
//       <h2
//         ref={titleRef}
//         className="text-white font-sans font-normal text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] mb-12 sm:mb-16"
//       >
//         Why Work With Us?
//       </h2>

//       {/* Feature Cards Grid */}
//       <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto place-items-center">
//         {features.map((item, idx) => (
//           <div
//             key={idx}
//             className={`
//               flex flex-col items-center justify-center
//               bg-gradient-to-b from-[#946500] to-black text-white
//               rounded-2xl p-4 sm:p-6 shadow-lg shadow-yellow-900/20
//               h-[240px] sm:h-[280px] md:h-[320px] lg:h-[340px] w-full max-w-[320px] sm:max-w-[360px]
//               ${idx % 3 === 1 ? '-translate-y-2 sm:-translate-y-3 md:-translate-y-5' : ''}
//             `}
//           >
//             <div className="text-cyan-400 mb-3 sm:mb-4">{item.icon}</div>
//             <p className="font-sans font-normal text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed">
//               {item.text}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WhyWorkWithUs;
