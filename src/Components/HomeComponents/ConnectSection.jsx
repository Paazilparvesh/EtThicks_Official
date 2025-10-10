// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// // import m1 from "/src/assets/home/mission/m1.png";
// // import m2 from "/src/assets/home/mission/m2.png";
// // import m3 from "/src/assets/home/mission/m3.png";
// // import m4 from "/src/assets/home/mission/m4.png";
// // import m5 from "/src/assets/home/mission/m5.png";
// // import m6 from "/src/assets/home/mission/m6.png";
// // import m7 from "/src/assets/home/mission/m7.png";
// // import m8 from "/src/assets/home/mission/m8.png";

// function ConnectSection() {
//   const circleRef = useRef(null);
//   const headingRef = useRef(null);
//   const paraRef = useRef(null);
//   const imagesRef = useRef([]);

//   useEffect(() => {
//     const tl = gsap.timeline();

//     // Circle animation
//     tl.fromTo(
//       circleRef.current,
//       { scale: 0, opacity: 0 },
//       { scale: 1, opacity: 1, duration: 2, ease: "power3.out" }
//     ).to(circleRef.current, {
//       scale: 1.05,
//       duration: 2,
//       ease: "sine.inOut",
//       repeat: -1,
//       yoyo: true,
//     });

//     // Heading
//     tl.fromTo(
//       headingRef.current,
//       { y: 50, opacity: 0 },
//       { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
//       "-=1.5" // overlaps with circle
//     );

//     // Paragraph
//     tl.fromTo(
//       paraRef.current,
//       { y: 50, opacity: 0 },
//       { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
//       "-=0.8"
//     );

//     // Images stagger
//     tl.fromTo(
//       imagesRef.current,
//       { scale: 0, opacity: 0, rotate: -15 },
//       {
//         scale: 1,
//         opacity: 1,
//         rotate: 0,
//         duration: 1,
//         ease: "back.out(1.7)",
//         stagger: 0.3,
//       },
//       "-=0.5"
//     );

//     // Floating effect for all images
//     gsap.to(imagesRef.current, {
//       y: "+=15",
//       duration: 3,
//       yoyo: true,
//       repeat: -1,
//       ease: "sine.inOut",
//     });
//   }, []);

//   return (
//     <div className="w-full h-[800px] relative bg-black overflow-hidden">
//       {/* Circle */}
//       <div
//         ref={circleRef}
//         className="w-[800px] h-[800px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-amber-500 to-orange-400 rounded-full"
//       />

//       {/* Heading */}
//       <div className="w-[577px] h-[91px] left-[425px] top-[277px] absolute overflow-hidden flex items-center justify-center">
//         <h1
//           ref={headingRef}
//           className="text-white text-[40px] font-bold font-['Nunito'] leading-[60px]"
//         >
//           Connect. Build Trust. Grow.
//         </h1>
//       </div>

//       {/* Paragraph */}
//       <div className="w-[826px] h-36 left-[307px] top-[379px] absolute overflow-hidden flex items-center justify-center">
//         <p
//           ref={paraRef}
//           className="w-[767px] py-[9px] text-center text-white text-3xl font-medium font-['Nunito'] leading-10"
//         >
//           We exist to craft authentic, emotion-driven stories that connect people
//           with brands — building lasting trust and measurable impact.
//         </p>
//       </div>

//       {/* Images */}
//       {/* <img
//         ref={(el) => (imagesRef.current[0] = el)}
//         className="w-64 h-80 left-[182px] top-[-745px] absolute rounded-3xl"
//         src={m1}
//       />
//       <img
//         ref={(el) => (imagesRef.current[1] = el)}
//         className="w-64 h-80 left-[1063px] top-[-745px] absolute rounded-3xl"
//         src={m2}
//       />
//       <img
//         ref={(el) => (imagesRef.current[2] = el)}
//         className="w-64 h-80 left-[602px] top-[-350px] absolute rounded-3xl"
//         src={m3}
//       />
//       <img
//         ref={(el) => (imagesRef.current[3] = el)}
//         className="w-64 h-80 left-[111px] top-[76px] absolute rounded-3xl"
//         src={m4}
//       />
//       <img
//         ref={(el) => (imagesRef.current[4] = el)}
//         className="w-64 h-80 left-[884px] top-[1016px] absolute rounded-3xl"
//         src={m5}
//       />
//       <img
//         ref={(el) => (imagesRef.current[5] = el)}
//         className="w-64 h-80 left-[57px] top-[897px] absolute rounded-3xl"
//         src={m6}
//       />
//       <img
//         ref={(el) => (imagesRef.current[6] = el)}
//         className="w-64 h-80 left-[1134px] top-[-172px] absolute rounded-3xl"
//         src={m7}
//       />
//       <img
//         ref={(el) => (imagesRef.current[7] = el)}
//         className="w-64 h-80 left-[432px] top-[462px] absolute rounded-3xl"
//         src={m8}
//       />
//       <img
//         ref={(el) => (imagesRef.current[8] = el)}
//         className="w-64 h-80 left-[813px] top-[246px] absolute rounded-3xl"
//         src={m1}
//       /> */}
//     </div>
//   );
// }

// export default ConnectSection;

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ConnectSection = () => {
  const pinRef = useRef(null);
  const circleRef = useRef(null);
  const gridRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (!pinRef.current || !circleRef.current || !textRef.current || !gridRef.current) return;

    const ctx = gsap.context(() => {
      // Create a timeline with ScrollTrigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinRef.current,
          start: "top top",         // Start when section hits top of viewport
          end: "+=200%",            // Control how long the section stays pinned
          scrub: true,              // Smooth scroll-linked animation
          pin: true,                // Keep the section fixed while animating
          markers: true,           // Set true for debugging
        },
      });

      // Step 1: Circle comes down from top to center
      tl.fromTo(
        circleRef.current,
        { yPercent: -200, opacity: 0 },
        { yPercent: 200, opacity: 1, ease: "power2.out", duration: 2 }
      );

      // Step 2: Pause briefly at the center (optional)
      tl.to(circleRef.current, { duration: 0.5 });

      // Step 3: Circle scales up while pinned in center
      tl.to(circleRef.current, {
        scale: 5,
        ease: "power2.inOut",
        duration: 3,
      });



      tl.fromTo(
        textRef.current,
        { opacity: 0, y: 200 },
        { opacity: 1, y: 0, ease: "power2.out", duration: 2 },
        "-=4" // overlap with circle scaling
      );

      // Step 4: Delay (2s scroll duration equivalent) before showing image grid
      tl.to({}, { duration: 4 }); // acts as a delay inside timeline

      // Step 5: Animate image grid from top (slide-down + fade-in)
      tl.fromTo(
        gridRef.current,
        { yPercent: -100, opacity: 0 },
        { yPercent: -50, opacity: 1, ease: "power2.out", duration: 2 }
      );


    }, pinRef);

    // Cleanup on unmount
    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full h-[300vh] bg-black overflow-hidden relative">

      {/* Oranger Container */}
      <div
        ref={pinRef}
        className="w-full h-screen flex items-center justify-center relative"
      >
        {/* Orange Circle */}
        <div
          ref={circleRef}
          className="absolute top-0 left-1/2 -translate-x-1/2 rounded-full w-[10vw] h-[20vh] bg-orange-500 shadow-2xl"
        />
      </div>

      {/* Text Overlay */}
      <div
        ref={textRef}
        className="absolute top-440 left-1/2 -translate-x-1/2 -translate-y-1/2  text-center px-4">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 font-['Nunito']"> Connect. Build Trust. Grow.</h1>
        <p className="text-white text-lg md:text-2xl max-w-3xl mx-auto font-['Nunito']">
          We exist to craft authentic, emotion-driven stories that connect people with brands — building lasting trust and measurable impact.
        </p>
      </div>

      {/* Image Grid Overlay (Initially Hidden) */}
      <div
        ref={gridRef}
        className="absolute inset-0 flex flex-wrap items-center justify-center gap-4 p-4 pointer-events-none opacity-0"
      >
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="w-32 h-40 bg-white rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105"
            style={{
              backgroundImage: `url(https://via.placeholder.com/150?text=Img+${index + 1
                })`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}
      </div>

    </section>
  );
};

export default ConnectSection;
