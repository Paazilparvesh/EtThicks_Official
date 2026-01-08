import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ash from "/src/assets/home/mash.png";
import sat from "/src/assets/home/star.png";
import cur from "/src/assets/home/Group.png";
import luf from "/src/assets/home/left.png";
import gow from "/src/assets/home/Grou.png";

// Register the GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function QuoteSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const shapes = gsap.utils.toArray(".background-shape");

    const uniqueRotations = [180, -270, 360, 270, -180];

    shapes.forEach((shape, i) => {
      gsap.fromTo(
        shape,
        { rotation: 0 },
        {
          rotation: uniqueRotations[i % uniqueRotations.length],
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1 + i * 0.3,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative bg-black flex items-center justify-center px-4 py-16 md:py-50 overflow-hidden min-h-screen"
    >
      {/* Desktop background shapes layout */}
      <div className="hidden lg:flex absolute inset-0 z-0 items-center justify-between px-4 md:px-8 pointer-events-none">
        <img src={luf} alt="Left shape" className="background-shape w-50 h-50 opacity-16 object-contain" />
        <img src={sat} alt="Background star" className="background-shape w-50 h-50 opacity-16 object-contain" />
        <img src={cur} alt="Background circle" className="background-shape w-65 h-65 opacity-16 object-contain" />
        <img src={ash} alt="Background shape" className="background-shape w-65 h-65 opacity-16 object-contain" />
        <img src={gow} alt="Background group" className="background-shape w-50 h-50 opacity-16 object-contain" />
      </div>

      {/* Mobile & Tablet background shapes layout - EXACTLY like image */}
      <div className="lg:hidden absolute inset-0 z-0 flex items-center justify-center   opacity-20 pointer-events-none">
        {/* Top row */}
        <div className="absolute -top-35 sm:top-20 sm:left-10">
          <img src={ash} alt="Left shape" className="background-shape w-60 h-60 sm:w-20 sm:h-20 object-contain" />
        </div>
        <div className="absolute top-50 sm:top-20  sm:right-10">
          <img src={sat} alt="Background star" className="background-shape w-50 h-50 sm:w-20 sm:h-20 object-contain" />
        </div>
        
        {/* Center shape */}
        {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img src={cur} alt="Background circle" className="background-shape w-60 h-60 sm:w-28 sm:h-28 object-contain" />
        </div> */}
        
        {/* Bottom row */}
        <div className="absolute -bottom-25 sm:right-10  sm:bottom-20 ">
          <img src={cur} alt="Background shape" className="background-shape w-60 h-60 sm:w-20 sm:h-20 object-contain" />
        </div>
        <div className="absolute bottom-55 sm:left-10  sm:bottom-20 ">
          <img src={luf} alt="Background group" className="background-shape w-50 h-50 sm:w-20 sm:h-20 object-contain" />
        </div>
      </div>

      {/* Text content - Adjusted for mobile exactly like image */}
      <div className="relative z-10 text-center px-14 w-full max-w-7xl mx-auto">
        {/* Main heading */}
        <div className="text-amber-500 text-2xl sm:text-3xl md:text-4xl lg:text-5xl  leading-snug  font-worksans mb-6 sm:mb-2">
          Why EtThicks Exists
        </div>
        
        {/* Quote container */}
        <div className="w-full max-w-5xl sm:max-w-5xl mx-auto">
          {/* Quote text */}
          <div className="text-gray-300 text-[16px] sm:text-base md:text-lg lg:text-2xl font-normal leading-relaxed md:leading-10 font-nunito tracking-wide">
            <div className=" ">
              "I started EtThicks to take brands in every direction possible —
            </div>
            <div className="">
              not just in reach, but in trust. Because when stories are told
            </div>
            <div className="mb-4 sm:mb-3">
              right, they don't just sell. They live."
            </div>
          </div>
          
          {/* Author section */}
          <div className="mt-8 sm:mt-12 md:mt-4 text-center">
            <span className="text-white text-sm sm:text-base md:text-lg lg:text-2xl font-normal leading-relaxed">
              —
            </span>
            <div className="inline-flex flex-col sm:flex-row items-center justify-center mt-2">
              <span className="text-white text-base sm:text-lg md:text-2xl lg:text-3xl font-semibold leading-relaxed font-worksans mr-2">
                Lenin,
              </span>
              <span className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-2xl font-normal leading-relaxed font-nunito">
                Founder & Content Strategist
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuoteSection;