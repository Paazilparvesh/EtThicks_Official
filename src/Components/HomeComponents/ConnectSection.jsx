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
  const imagesRef = useRef([]);

  useEffect(() => {
    if (!pinRef.current || !circleRef.current || !textRef.current || !gridRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinRef.current,
          start: "top top",
          end: "+=1700%", // Increased for 3 batches of images
          scrub: true,
          pin: true,
          markers: true,
        },
      });

      // Circle from top → center
      tl.fromTo(
        circleRef.current,
        { yPercent: -200, opacity: 0 },
        { yPercent: 0, opacity: 1, ease: "power2.out", duration: 2 }
      );

      // Pause briefly
      tl.to(circleRef.current, { duration: 0.5 });

      // Circle scales up
      tl.to(circleRef.current, {
        scale: 5,
        ease: "power2.inOut",
        duration: 3,
      });

      // Text appears upward
      tl.fromTo(
        textRef.current,
        { opacity: 0, yPercent: 100 },
        { opacity: 1, yPercent: 0, ease: "power2.out", duration: 2 }
      );

      // Text moves up slightly
      tl.to(textRef.current, { yPercent: -50, duration: 1 });

      // Batch 1: First 3 images appear
      tl.fromTo(
        imagesRef.current.slice(0, 3),
        { 
          opacity: 0, 
          yPercent: 100 
        },
        { 
          opacity: 1, 
          yPercent: 0, 
          ease: "power2.out", 
          duration: 2,
          stagger: 0.1
        }
      );

      // Batch 1: Images move up and fade out
      tl.to(
        imagesRef.current.slice(0, 3),
        {
          yPercent: -150,
          opacity: 0,
          ease: "power2.inOut",
          duration: 3,
          stagger: 0.05
        }
      );

      // Batch 2: Next 3 images appear
      tl.fromTo(
        imagesRef.current.slice(3, 6),
        { 
          opacity: 0, 
          yPercent: 100 
        },
        { 
          opacity: 1, 
          yPercent: 0, 
          ease: "power2.out", 
          duration: 2,
          stagger: 0.1
        }
      );

      // Batch 2: Images move up and fade out
      tl.to(
        imagesRef.current.slice(3, 6),
        {
          yPercent: -150,
          opacity: 0,
          ease: "power2.inOut",
          duration: 3,
          stagger: 0.05
        }
      );

      // Batch 3: Last 3 images appear
      tl.fromTo(
        imagesRef.current.slice(6, 9),
        { 
          opacity: 0, 
          yPercent: 100 
        },
        { 
          opacity: 1, 
          yPercent: 0, 
          ease: "power2.out", 
          duration: 2,
          stagger: 0.1
        }
      );

      // Batch 3: Images move up and fade out
      tl.to(
        imagesRef.current.slice(6, 9),
        {
          yPercent: -150,
          opacity: 0,
          ease: "power2.inOut",
          duration: 3,
          stagger: 0.05
        }
      );

      // Final transition - circle and text fade out
      tl.to(
        [circleRef.current, textRef.current],
        {
          opacity: 0,
          yPercent: -30,
          ease: "power2.in",
          duration: 2
        },
        "-=1"
      );

    }, pinRef);

    return () => ctx.revert();
  }, []);

  // Function to add images to ref array
  const addToRefs = (el) => {
    if (el && !imagesRef.current.includes(el)) {
      imagesRef.current.push(el);
    }
  };

  return (
    <section className="w-full h-[1800vh] bg-black overflow-hidden relative">
      <div
        ref={pinRef}
        className="w-full h-screen flex items-center justify-center relative"
      >
        {/* Orange Circle */}
        <div
          ref={circleRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] rounded-full w-[10vw] h-[10vw] bg-orange-500 shadow-2xl z-10"
        />

        {/* Text */}
        <div
          ref={textRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center px-4 z-20"
        >
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 font-['Nunito']">
            Connect. Build Trust. Grow.
          </h1>
          <p className="text-white text-lg md:text-2xl max-w-3xl mx-auto font-['Nunito']">
            We exist to craft authentic, emotion-driven stories that connect people with brands — building lasting trust and measurable impact.
          </p>
        </div>

        {/* Image Grid - Total 9 images in 3 batches */}
        <div ref={gridRef} className="absolute inset-0 z-60 pointer-events-none">
          
          {/* Batch 1 - First 3 Images */}
          <div
            ref={addToRefs}
            className="absolute w-58 h-80 rounded-2xl overflow-hidden shadow-lg bg-gray-300"
            style={{
              top: "48%",
              left: "43%",
              backgroundImage: `url(https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=500&q=80)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <div
            ref={addToRefs}
            className="absolute w-58 h-80  rounded-2xl overflow-hidden shadow-lg bg-gray-300"
            style={{
              top: "30%",
              left: "74%",
              backgroundImage: `url(https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&w=500&q=80)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <div
            ref={addToRefs}
            className="absolute w-58 h-80 rounded-2xl overflow-hidden shadow-lg bg-gray-300"
            style={{
              top: "28%",
              left: "13%",
              backgroundImage: `url(https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=500&q=80)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* Batch 2 - Next 3 Images (different positions) */}
          <div
            ref={addToRefs}
            className="absolute w-58 h-80  rounded-2xl overflow-hidden shadow-lg bg-gray-300"
            style={{
              top: "25%",
              left: "43%",
              backgroundImage: `url(https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=500&q=80)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <div
            ref={addToRefs}
            className="absolute w-58 h-80  rounded-2xl overflow-hidden shadow-lg bg-gray-300"
            style={{
              top: "35%",
              left: "72%",
              backgroundImage: `url(https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&w=500&q=80)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <div
            ref={addToRefs}
            className="absolute w-58 h-80  rounded-2xl overflow-hidden shadow-lg bg-gray-300"
            style={{
              top: "43%",
              left: "15%",
              backgroundImage: `url(https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=500&q=80)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* Batch 3 - Last 3 Images (different positions) */}
          <div
            ref={addToRefs}
            className="absolute w-58 h-80  rounded-2xl overflow-hidden shadow-lg bg-gray-300"
            style={{
              top: "40%",
              left: "70%",
              backgroundImage: `url(https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=500&q=80)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <div
            ref={addToRefs}
            className="absolute w-58 h-80  rounded-2xl overflow-hidden shadow-lg bg-gray-300"
            style={{
              top: "20%",
              left: "45%",
              backgroundImage: `url(https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&w=500&q=80)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <div
            ref={addToRefs}
            className="absolute w-58 h-80  rounded-2xl overflow-hidden shadow-lg bg-gray-300"
            style={{
              top: "30%",
              left: "15%",
              backgroundImage: `url(https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=500&q=80)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;