import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import iem from "/src/assets/home/IM.png";

gsap.registerPlugin(ScrollTrigger);

function AboutSection() {
  const sectionRef = useRef(null);
  const imageContainerRef = useRef(null);

  useEffect(() => {
    const animation = gsap.to(imageContainerRef.current, {
      width: "100%", // expand to full width
      height: "70vh", // expand height
      borderRadius: "0px", // remove corners
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full min-h-[150vh] bg-black flex flex-col items-center pt-16 sm:pt-20 md:pt-24 px-4 sm:px-6 md:px-10"
    >
      {/* Text Section */}
      <div className="text-center max-w-[95%] sm:max-w-2xl md:max-w-4xl lg:max-w-5xl">
        <div className="mb-3 sm:mb-4">
          <h4 className="text-amber-500 text-xs md:text-md lg:text-lg xl:text-xl font-bold uppercase tracking-wide">
            About Us
          </h4>
        </div>
        <h2 className="text-lg md:text-3xl lg:text-4xl xl:text-6xl font-normal font-['Nunito'] text-white uppercase leading-snug sm:leading-tight md:leading-snug">
          Your Brand Has a <span className="text-orange-400">Story</span>. We’ll
          Take It <span className="text-orange-400">Everywhere</span>
        </h2>
        <p className="text-sm md:text-md lg:text-lg xl:text-xl text-white font-normal font-['Nunito'] leading-relaxed lg:leading-9 mt-4 sm:mt-6 md:mt-8">
          EtThicks is not just another digital agency — we're a storytelling
          powerhouse rooted in truth, trust, and transformation. Born from the
          Tamil word “Ettuthikkum”, meaning to reach in all eight directions, we
          specialize in content that carries your brand farther — emotionally,
          culturally, and commercially.
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full flex-grow flex justify-center items-start mt-6 sm:mt-10 md:mt-12">
        <div
          ref={imageContainerRef}
          // Initial state: responsive size with rounded corners
          className="w-[90%] sm:w-[420px] md:w-[520px] 
                     h-[240px] sm:h-[320px] md:h-[405px] 
                     rounded-2xl sm:rounded-3xl 
                     overflow-hidden"
        >
          <img
            src={iem}
            alt="EtThicks"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
