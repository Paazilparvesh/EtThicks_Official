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
      width: "100%",        // expand to full width
      height: "75vh",       // expand height
      borderRadius: "0px",  // remove corners
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
      className="w-full min-h-[150vh] bg-black flex flex-col items-center pt-24 px-6"
    >
      {/* Text Section */}
      <div className="text-center ">
        <div className="mb-4">
          <h4 className="text-amber-500 text-lg font-bold uppercase tracking-wide">
            About Us
          </h4>
        </div>
        <h2 className="text-4xl md:text-5xl font-normal font-['Nunito'] text-white uppercase leading-snug max-w-4xl">
          Your Brand Has a <span className="text-orange-400">Story</span>. We’ll
          Take It <span className="text-orange-400">Everywhere</span>
        </h2>
        <p className="text-white text-xl md:text-2xl font-normal font-['Nunito'] leading-9 max-w-5xl mt-">
          EtThicks is not just another digital agency — we're a storytelling
          powerhouse rooted in truth, trust, and transformation. Born from the
          Tamil word “Ettuthikkum”, meaning to reach in all eight directions, we
          specialize in content that carries your brand farther — emotionally,
          culturally, and commercially.
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full flex-grow flex justify-center items-start">
        <div
          ref={imageContainerRef}
          // Initial state: small (520x405) and centered
          className="w-[520px] h-[405px] rounded-3xl overflow-hidden transform -translate-y-[] "
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
