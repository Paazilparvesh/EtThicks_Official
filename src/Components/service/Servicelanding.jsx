// src/Components/ServiceLanding.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ServiceLanding() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate text fade + slide up
      gsap.from(textRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Vertical wipe overlay (yellow reveal)
      gsap.fromTo(
        overlayRef.current,
        { height: "0%" },
        {
          height: "100%",
          duration: 1.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative flex items-center justify-center h-[190px] bg-[#009BB5] overflow-hidden"
    >
      {/* Text container */}
      <h1
        ref={textRef}
        className="relative text-5xl md:text-7xl font-extrabold text-white leading-tight text-center"
        style={{ fontFamily: "'Work Sans', sans-serif" }}
      >
        {/* Script word */}
        <span
          className="block text-6xl md:text-8xl mb-2"
          style={{ fontFamily: "'Brittany Signature', cursive" }}
        >
          Powerful
        </span>

        {/* Main word with yellow vertical overlay */}
        <span className="relative inline-block">
          Content
          {/* Yellow overlay covers top half of the text, grows vertically */}
          <span
            ref={overlayRef}
            className="absolute left-0 top-0 w-full h-0 overflow-hidden text-yellow-400"
            style={{ fontFamily: "'Work Sans', sans-serif" }}
          >
            Content
          </span>
        </span>
      </h1>
    </section>
  );
}
