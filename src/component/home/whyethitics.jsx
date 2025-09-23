import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ash from "/src/assets/home/mash.png";
import sat from "/src/assets/home/star.png";
import cur from "/src/assets/home/circ.png";
import luf from "/src/assets/home/left.png";
import gow from "/src/assets/home/Grou.png";
import Bauhaus from "/src/assets/home/Bauhaus.png";

// Register the GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function Whyethitics() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const shapes = gsap.utils.toArray(".background-shape");

    // ✅ Create an array of unique rotation values for each shape
    const uniqueRotations = [180, -270, 360, 270, -180];

    // Animate each shape with its own unique rotation
    shapes.forEach((shape, i) => {
      gsap.fromTo(
        shape,
        { rotation: 0 }, // Start all shapes at 0 degrees rotation
        {
          rotation: uniqueRotations[i], // ✅ Use the unique rotation value for this specific shape
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1 + i * 0.3, // ✅ Add a slight variation in scrub speed for a more dynamic effect
          },
        }
      );
    });

    // Cleanup GSAP animations on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <div
        ref={sectionRef}
        className="self-stretch h-[469px] relative bg-black flex items-center justify-center px-4 overflow-hidden"
      >
        {/* Container for All Background Shapes using Flexbox */}
        <div className="absolute inset-0 z-0 flex items-center justify-between px-4 md:px-8">
          <img
            src={luf}
            alt="Left shape"
            className="background-shape w-40 h-40 opacity-10 object-contain"
          />
          <img
            src={sat}
            alt="Background star"
            className="background-shape w-40 h-40 opacity-10 object-contain"
          />
          <img
            src={cur}
            alt="Background circle"
            className="background-shape w-40 h-40 opacity-10 object-contain"
          />
          <img
            src={ash}
            alt="Background shape"
            className="background-shape w-40 h-40 opacity-10 object-contain"
          />
          <img
            src={gow}
            alt="Background group"
            className="background-shape w-40 h-40 opacity-10 object-contain"
          />
          <img
            src={Bauhaus}
            alt="Background group"
            className="background-shape w-40 h-40 opacity-10 object-contain"
          />
        </div>

        {/* Text content layered on top */}
        <div className="relative z-10 text-center">
          <div className="text-amber-500 text-4xl font-semibold font-['Nunito'] leading-[60px]">
            Why EtThicks Exists
          </div>
          <div className="mt-4 w-full max-w-[695px]">
            <span className="text-white text-3xl font-normal font-['Nunito'] leading-10">
              “I started EtThicks to take brands in every direction possible —
              not just in reach, but in trust. Because when stories are told
              right, they don’t just sell. They live.”
              <br />
            </span>
            <span className="text-white text-2xl font-normal font-['Nunito'] leading-9">
              {" "}
              —{" "}
            </span>
            <span className="text-white text-2xl font-semibold font-['Nunito'] leading-9">
              Lenin, Founder & Content Strategist
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Whyethitics;