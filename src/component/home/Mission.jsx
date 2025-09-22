import React, { useEffect, useRef } from "react";
import { gsap } from "https://cdn.skypack.dev/gsap";
import { ScrollTrigger } from "https://cdn.skypack.dev/gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Placeholder images since we can't use local files
const placeholderImages = [
  "https://placehold.co/256x320/FFC107/FFFFFF?text=Image+1",
  "https://placehold.co/256x320/F44336/FFFFFF?text=Image+2",
  "https://placehold.co/256x320/9C27B0/FFFFFF?text=Image+3",
  "https://placehold.co/256x320/3F51B5/FFFFFF?text=Image+4",
  "https://placehold.co/256x320/00BCD4/FFFFFF?text=Image+5",
  "https://placehold.co/256x320/4CAF50/FFFFFF?text=Image+6",
  "https://placehold.co/256x320/FF9800/FFFFFF?text=Image+7",
  "https://placehold.co/256x320/795548/FFFFFF?text=Image+8",
];

const App = () => {
  const containerRef = useRef(null);
  const circleRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const imagesRef = useRef([]);

  useEffect(() => {
    // Context to revert all animations when component unmounts
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom center",
          scrub: 1,
          pin: true,
          pinSpacing: false,
        },
      });

      // Circle and text animation
      tl.to(circleRef.current, {
        scale: 1,
        duration: 1.5,
      })
      .fromTo(
        [headingRef.current, paraRef.current],
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.2 },
        "<"
      )
      .to(circleRef.current, {
        scale: 0.5,
        duration: 2,
      }, "+=1");
      
      // Images reveal and animation
      gsap.fromTo(
        imagesRef.current,
        { scale: 0, opacity: 0, rotate: -15 },
        {
          scale: 1,
          opacity: 1,
          rotate: 0,
          duration: 1,
          ease: "back.out(1.7)",
          stagger: 0.3,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "bottom center",
            scrub: 1,
          },
        }
      );

      // Floating effect for all images on scroll
      gsap.to(imagesRef.current, {
        y: "random(-50, 50)",
        x: "random(-50, 50)",
        duration: 3,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        stagger: {
          each: 0.5,
          from: "random"
        },
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });

    }, containerRef); // <- scope!

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full h-screen relative bg-black overflow-hidden flex items-center justify-center">
      {/* Circle */}
      <div
        ref={circleRef}
        className="w-0 h-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-amber-500 to-orange-400 rounded-full"
      />

      {/* Heading */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center z-10">
        <h1
          ref={headingRef}
          className="text-white text-[40px] font-bold font-['Nunito'] leading-[60px] opacity-0"
        >
          Connect. Build Trust. Grow.
        </h1>
        {/* Paragraph */}
        <p
          ref={paraRef}
          className="max-w-[767px] py-[9px] text-center text-white text-3xl font-medium font-['Nunito'] leading-10 opacity-0 mt-4"
        >
          We exist to craft authentic, emotion-driven stories that connect people
          with brands — building lasting trust and measurable impact.
        </p>
      </div>

      {/* Images */}
      <img
        ref={(el) => (imagesRef.current[0] = el)}
        className="w-64 h-80 absolute rounded-3xl z-0 top-[20%] left-[10%]"
        src={placeholderImages[0]}
      />
      <img
        ref={(el) => (imagesRef.current[1] = el)}
        className="w-64 h-80 absolute rounded-3xl z-0 top-[15%] right-[10%]"
        src={placeholderImages[1]}
      />
      <img
        ref={(el) => (imagesRef.current[2] = el)}
        className="w-64 h-80 absolute rounded-3xl z-0 top-[50%] left-[20%]"
        src={placeholderImages[2]}
      />
      <img
        ref={(el) => (imagesRef.current[3] = el)}
        className="w-64 h-80 absolute rounded-3xl z-0 top-[50%] right-[20%]"
        src={placeholderImages[3]}
      />
      <img
        ref={(el) => (imagesRef.current[4] = el)}
        className="w-64 h-80 absolute rounded-3xl z-0 bottom-[10%] left-[15%]"
        src={placeholderImages[4]}
      />
      <img
        ref={(el) => (imagesRef.current[5] = el)}
        className="w-64 h-80 absolute rounded-3xl z-0 bottom-[5%] right-[15%]"
        src={placeholderImages[5]}
      />
      <img
        ref={(el) => (imagesRef.current[6] = el)}
        className="w-64 h-80 absolute rounded-3xl z-0 top-[30%] left-[40%]"
        src={placeholderImages[6]}
      />
      <img
        ref={(el) => (imagesRef.current[7] = el)}
        className="w-64 h-80 absolute rounded-3xl z-0 bottom-[30%] right-[40%]"
        src={placeholderImages[7]}
      />
    </div>
  );
}

export default App;
