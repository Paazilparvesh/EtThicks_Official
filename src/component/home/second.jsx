import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import iem from "/src/assets/home/IM.png";

// Register the GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function Second() {
  // Create refs for the elements we want to animate or use as triggers
  const sectionRef = useRef(null);
  const imageContainerRef = useRef(null);

  useEffect(() => {
    // Set up the GSAP animation inside the useEffect hook
    const animation = gsap.to(imageContainerRef.current, {
      // Final state of the animation
      width: "100%",
      borderRadius: "0px",
      ease: "none",
      // Configure the scroll trigger
      scrollTrigger: {
        trigger: sectionRef.current, // The element that triggers the animation
        start: "top top",            // Start the animation when the top of the trigger hits the top of the viewport
        end: "bottom bottom",      // End the animation when the bottom of the trigger hits the bottom of the viewport
        scrub: 1,                    // Smoothly link the animation progress to the scrollbar
      },
    });

    // Cleanup function to kill the animation when the component unmounts
    return () => {
      animation.kill();
    };
  }, []);

  return (
    // The main container that will act as the scroll trigger
    // Increased min-height to provide enough scrolling distance for the animation
    <div ref={sectionRef} className="w-full min-h-[150vh] bg-black flex flex-col items-center pt-24 px-6">
      
      {/* Container for all the text, which remains static */}
      <div className="text-center mb-16">
        <div className="mb-4">
          <h4 className="text-amber-500 text-lg font-bold uppercase tracking-wide">
            About Us
          </h4>
        </div>
        <h2 className="text-4xl md:text-5xl font-normal font-['Nunito'] text-white uppercase leading-snug max-w-4xl">
          Your Brand Has a <span className="text-orange-400">Story</span>. We’ll
          Take It <span className="text-orange-400">Everywhere</span>
        </h2>
        <p className="text-white text-xl md:text-2xl font-normal font-['Nunito'] leading-9 max-w-5xl mt-8">
          EtThicks is not just another digital agency — we're a storytelling
          powerhouse rooted in truth, trust, and transformation. Born from the
          Tamil word “Ettuthikkum”, meaning to reach in all eight directions, we
          specialize in content that carries your brand farther — emotionally,
          culturally, and commercially.
        </p>
      </div>

      {/* The image container that will be animated */}
      <div className="w-full flex-grow flex justify-center items-center">
        <div
          ref={imageContainerRef}
          // Initial state of the container: smaller width and rounded corners
          className="w-[85vw] md:w-[70vw] h-[75vh] rounded-3xl overflow-hidden"
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

export default Second;