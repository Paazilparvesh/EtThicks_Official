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

    ScrollTrigger.matchMedia({
      // ---------------------------------------
      // DESKTOP (sm and above)
      // ---------------------------------------
      "(min-width: 640px)": () => {

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
      },

      // ---------------------------------------
      // MOBILE (below sm)
      // ---------------------------------------
      "(max-width: 639px)": () => {
        shapes.forEach((shape, i) => {
          gsap.fromTo(
            shape,
            { rotation: 0 },
            {
              rotation: uniqueRotations[i % uniqueRotations.length],
              ease: "none",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "bottom 90%",
                end: "+=150%",
                scrub: 0.5,
              },
            }
          );
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative bg-black flex items-center justify-center px-4 py-36 overflow-hidden"
    >
      {/* Desktop background shapes layout */}
      <div className="hidden sm:flex absolute inset-0 z-0 items-center justify-center gap-10 lg:gap-15 xl:gap-20 px-4 md:px-8 pointer-events-none">
        <img src={luf} alt="Left shape" className="background-shape sm:size-28 lg:size-48 xl:size-60 opacity-16 object-contain" />
        <img src={sat} alt="Background star" className="background-shape sm:size-28 lg:size-48 xl:size-60 opacity-16 object-contain" />
        <img src={cur} alt="Background circle" className="background-shape sm:size-28 lg:size-48 xl:size-60 opacity-16 object-contain" />
        <img src={ash} alt="Background shape" className="background-shape sm:size-28 lg:size-48 xl:size-60 opacity-16 object-contain" />
        <img src={gow} alt="Background group" className="background-shape sm:size-28 lg:size-48 xl:size-60 opacity-16 object-contain" />
      </div>

      {/* Mobile background shapes layout - EXACTLY like image */}
      <div className="sm:hidden absolute inset-0 flex flex-col items-center justify-center gap-15 opacity-20 pointer-events-none">
        <img src={ash} alt="Left shape" className="background-shape size-32 object-contain" />
        <img src={sat} alt="Background star" className="background-shape size-32 object-contain" />
        <img src={cur} alt="Background shape" className="background-shape size-32 object-contain" />
        <img src={luf} alt="Background group" className="background-shape size-32 object-contain" />
      </div>

      {/* Text content - Adjusted for mobile exactly like image */}
      <div className="relative z-10 text-center px-1 w-full max-w-7xl mx-auto">
        {/* Main heading */}
        <div className="text-amber-500 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-snug  font-worksans mb-6 sm:mb-2">
          Why EtThicks Exists
        </div>

        {/* Quote container */}
        <div className="w-full max-w-5xl sm:max-w-xl mx-auto sm:mt-10">
          {/* Quote text */}
          <div className="text-gray-300 text-lg sm:text-xl md:text-lg lg:text-2xl font-normal leading-relaxed md:leading-10 font-nunito tracking-wide">
            "I started EtThicks to take brands in every direction possible —
            not just in reach, but in trust. Because when stories are told
            right, they don't just sell. They live."
          </div>

          {/* Author section */}
          <div className="mt-8 sm:mt-12 md:mt-4 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center sm:items-end justify-center mt-2 sm:mt-0">
              <span className="relative text-white text-4xl lg:text-5xl font-light leading-relaxed font-worksans mr-2">
                <span className="mr-2 scale-105 absolute -left-7 -top-3 sm:-top-2.5 lg:-top-3.5 lg:-left-8">_</span>Lenin,
              </span>
              <span className="text-gray-300 text-xl sm:text-lg md:text-lg lg:text-2xl font-medium leading-relaxed font-nunito relative sm:bottom-1 lg:bottom-2">
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