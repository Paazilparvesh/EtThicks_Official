import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaRegFileAlt, FaClock, FaRedo, FaUser, FaCheckCircle } from "react-icons/fa";
import { MdOutlineTrendingUp } from "react-icons/md";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const WhyWorkWithUs = () => {
  const features = [
    { icon: <FaRegFileAlt size={28} />, text: "100% Original, Brand-Aligned Content" },
    { icon: <MdOutlineTrendingUp size={28} />, text: "SEO Best Practices Included" },
    { icon: <FaClock size={28} />, text: "Fast Turnaround Times" },
    { icon: <FaUser size={28} />, text: "Native English Writers" },
    { icon: <FaRedo size={28} />, text: "Unlimited Revisions (on most plans)" },
    { icon: <FaCheckCircle size={28} />, text: "Proven Results for Clients in Multiple Industries" },
  ];

  const pinContainerRef = useRef(null);
  const titleRef = useRef(null);
  const gridRef = useRef(null);

  useLayoutEffect(() => {
    const isMobile = window.innerWidth < 640;
    const isTablet = window.innerWidth >= 640 && window.innerWidth < 1024;
    
    // Responsive initial values
    const initialTitleScale = isMobile ? 1.3 : isTablet ? 2 : 3;
    const initialTitleY = isMobile ? '8vh' : isTablet ? '20vh' : '30vh';
    const initialGridScale = isMobile ? 0.9 : isTablet ? 1.2 : 1.5;
    const scrollEndValue = isMobile ? '+=800' : isTablet ? '+=1200' : '+=1500';

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinContainerRef.current,
          pin: true,
          start: "top top",
          end: scrollEndValue,
          scrub: 1,
        },
      });

      // Animate title
      tl.fromTo(
        titleRef.current,
        { scale: initialTitleScale, y: initialTitleY, opacity: 1 },
        { scale: 1, y: 0, duration: 1, ease: 'power2.inOut' }
      );

      // Animate grid
      tl.from(
        gridRef.current,
        { scale: initialGridScale, opacity: 0, duration: 1, ease: 'power2.inOut' },
        "<"
      );
    }, pinContainerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pinContainerRef} className="bg-black py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 text-center overflow-hidden min-h-screen flex flex-col justify-center">
      
      {/* Title */}
      <h2
        ref={titleRef}
        className="text-white font-sans font-normal text-[22px] sm:text-[26px] md:text-[32px] lg:text-[36px] mb-8 sm:mb-12 md:mb-16 px-4"
      >
        Why Work With Us?
      </h2>

      {/* Feature Cards Grid */}
      <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 max-w-6xl mx-auto place-items-center w-full">
        {features.map((item, idx) => (
          <div
            key={idx}
            className={`
              flex flex-col items-center justify-center
              bg-gradient-to-b from-[#946500] to-black text-white
              rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-6 lg:p-6 shadow-lg shadow-yellow-900/20
              h-[200px] sm:h-[240px] md:h-[280px] lg:h-[340px] w-full max-w-[280px] sm:max-w-[300px] md:max-w-[340px] lg:max-w-[360px]
              ${idx % 3 === 1 ? 'sm:-translate-y-3 md:-translate-y-5' : ''}
            `}
          >
            <div className="text-cyan-400 mb-3 sm:mb-3 md:mb-4">
              {React.cloneElement(item.icon, { 
                size: window.innerWidth < 640 ? 24 : 28 
              })}
            </div>
            <p className="font-sans font-normal text-[13px] sm:text-[15px] md:text-[17px] lg:text-[20px] leading-relaxed text-center px-2">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyWorkWithUs;
