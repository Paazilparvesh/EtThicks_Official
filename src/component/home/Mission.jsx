import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import m1 from "/src/assets/home/mission/m1.png";
import m2 from "/src/assets/home/mission/m2.png";
import m3 from "/src/assets/home/mission/m3.png";
import m4 from "/src/assets/home/mission/m4.png";
import m5 from "/src/assets/home/mission/m5.png";
import m6 from "/src/assets/home/mission/m6.png";
import m7 from "/src/assets/home/mission/m7.png";
import m8 from "/src/assets/home/mission/m8.png";

function Mission() {
  const circleRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const imagesRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline();

    // Circle animation
    tl.fromTo(
      circleRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 2, ease: "power3.out" }
    ).to(circleRef.current, {
      scale: 1.05,
      duration: 2,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    // Heading
    tl.fromTo(
      headingRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=1.5" // overlaps with circle
    );

    // Paragraph
    tl.fromTo(
      paraRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=0.8"
    );

    // Images stagger
    tl.fromTo(
      imagesRef.current,
      { scale: 0, opacity: 0, rotate: -15 },
      {
        scale: 1,
        opacity: 1,
        rotate: 0,
        duration: 1,
        ease: "back.out(1.7)",
        stagger: 0.3,
      },
      "-=0.5"
    );

    // Floating effect for all images
    gsap.to(imagesRef.current, {
      y: "+=15",
      duration: 3,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <div className="w-full h-[800px] relative bg-black overflow-hidden">
      {/* Circle */}
      <div
        ref={circleRef}
        className="w-[800px] h-[800px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-amber-500 to-orange-400 rounded-full"
      />

      {/* Heading */}
      <div className="w-[577px] h-[91px] left-[425px] top-[277px] absolute overflow-hidden flex items-center justify-center">
        <h1
          ref={headingRef}
          className="text-white text-[40px] font-bold font-['Nunito'] leading-[60px]"
        >
          Connect. Build Trust. Grow.
        </h1>
      </div>

      {/* Paragraph */}
      <div className="w-[826px] h-36 left-[307px] top-[379px] absolute overflow-hidden flex items-center justify-center">
        <p
          ref={paraRef}
          className="w-[767px] py-[9px] text-center text-white text-3xl font-medium font-['Nunito'] leading-10"
        >
          We exist to craft authentic, emotion-driven stories that connect people
          with brands — building lasting trust and measurable impact.
        </p>
      </div>

      {/* Images */}
      <img
        ref={(el) => (imagesRef.current[0] = el)}
        className="w-64 h-80 left-[182px] top-[-745px] absolute rounded-3xl"
        src={m1}
      />
      <img
        ref={(el) => (imagesRef.current[1] = el)}
        className="w-64 h-80 left-[1063px] top-[-745px] absolute rounded-3xl"
        src={m2}
      />
      <img
        ref={(el) => (imagesRef.current[2] = el)}
        className="w-64 h-80 left-[602px] top-[-350px] absolute rounded-3xl"
        src={m3}
      />
      <img
        ref={(el) => (imagesRef.current[3] = el)}
        className="w-64 h-80 left-[111px] top-[76px] absolute rounded-3xl"
        src={m4}
      />
      <img
        ref={(el) => (imagesRef.current[4] = el)}
        className="w-64 h-80 left-[884px] top-[1016px] absolute rounded-3xl"
        src={m5}
      />
      <img
        ref={(el) => (imagesRef.current[5] = el)}
        className="w-64 h-80 left-[57px] top-[897px] absolute rounded-3xl"
        src={m6}
      />
      <img
        ref={(el) => (imagesRef.current[6] = el)}
        className="w-64 h-80 left-[1134px] top-[-172px] absolute rounded-3xl"
        src={m7}
      />
      <img
        ref={(el) => (imagesRef.current[7] = el)}
        className="w-64 h-80 left-[432px] top-[462px] absolute rounded-3xl"
        src={m8}
      />
      <img
        ref={(el) => (imagesRef.current[8] = el)}
        className="w-64 h-80 left-[813px] top-[246px] absolute rounded-3xl"
        src={m1}
      />
    </div>
  );
}

export default Mission;
