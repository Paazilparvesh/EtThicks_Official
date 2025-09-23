// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Lenis from "@studio-freight/lenis";

// import img1 from "/src/assets/home/Ser1.png";
// import img2 from "/src/assets/home/Ser2.png";
// import img3 from "/src/assets/home/Ser3.png";
// import moon from "/src/assets/home/moon.png";

// gsap.registerPlugin(ScrollTrigger); // ✅ Keep this

// function Serve() {
//   const sectionRef = useRef(null);
//   const panelsContainerRef = useRef(null);
//   const contentWrapperRef = useRef(null);

//   const items = [
//     "Grow with etthicks",
//     "Grow with etthicks",
//     "Grow with etthicks",
//     "Grow with etthicks",
//   ];

//   useEffect(() => {
//     const lenis = new Lenis({
//       duration: 1.2,
//       smooth: true,
//     });

//     function raf(time) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }
//     requestAnimationFrame(raf);

//     const panels = gsap.utils.toArray(".panel");
//     const amountToScroll =
//       contentWrapperRef.current.scrollWidth - window.innerWidth;

//     // ✅ Main animation: horizontal scroll effect
//     const mainScrollTween = gsap.to(contentWrapperRef.current, {
//       x: -amountToScroll,
//       ease: "none",
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         pin: true,
//         scrub: 1,
//         end: () => `+=${amountToScroll}`,
//         snap: {
//           snapTo: 1 / (panels.length - 1),
//           duration: { min: 0.2, max: 0.3 },
//         },
//       },
//     });

//     // ✅ Zoom/fade focus effect for each panel
//     panels.forEach((panel) => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: panel,
//           containerAnimation: mainScrollTween,
//           start: "left right",
//           end: "right left",
//           scrub: true,
//         },
//       });

//       tl.fromTo(
//         panel,
//         { scale: 0.7, opacity: 0.5 },
//         { scale: 1, opacity: 1, ease: "power2.in" }
//       ).to(panel, { scale: 0.7, opacity: 0.5, ease: "power2.out" });
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//       lenis.destroy();
//     };
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="w-full h-screen bg-black overflow-hidden"
//     >
//       {/* Horizontal wrapper */}
//       <div ref={contentWrapperRef} className="flex h-full items-center">
//         {/* Left Title */}
//         <div className="flex-shrink-0 px-20 text-[#e59300] uppercase font-bold z-10">
//           <h2 className="text-[100px] leading-[110px]">OUR</h2>
//           <h2 className="text-[80px] leading-[88px]">Services</h2>
//         </div>

//         {/* Panels */}
//         <div
//           ref={panelsContainerRef}
//           className="flex h-full items-center gap-16 pr-20"
//         >
//           {/* Panel 1 */}
//           <div className="panel w-[640px] h-96 bg-white rounded-3xl relative p-6 shadow-lg flex-shrink-0">
//             <h3 className="text-orange-400 text-3xl font-semibold mb-4">
//               Content Creation
//             </h3>
//             <p className="text-black text-2xl leading-9">
//               Reels, ad films, corporate AVs, long-form YouTube — stories that
//               captivate and convert.
//             </p>
//             <img
//               src={img1}
//               alt="Content"
//               className="w-80 h-60 absolute bottom-6 right-6"
//             />
//           </div>

//           {/* Panel 2 */}
//           <div className="panel w-[640px] h-96 bg-white rounded-3xl relative p-6 shadow-lg flex-shrink-0">
//             <h3 className="text-orange-400 text-3xl font-semibold mb-4">
//               Digital Marketing
//             </h3>
//             <p className="text-black text-2xl leading-9">
//               Social strategy, performance campaigns, platform-specific content
//               that meets people where they are.
//             </p>
//             <img
//               src={img2}
//               alt="Marketing"
//               className="w-80 h-60 absolute bottom-6 right-6"
//             />
//           </div>

//           {/* Panel 3 */}
//           <div className="panel w-[640px] h-96 bg-white rounded-3xl relative p-6 shadow-lg flex-shrink-0">
//             <h3 className="text-orange-400 text-3xl font-semibold mb-4">
//               Brand Storytelling
//             </h3>
//             <p className="text-black text-2xl leading-9">
//               From positioning and emotional narrative to campaign ideation — we
//               give your brand a powerful voice.
//             </p>
//             <img
//               src={img3}
//               alt="Storytelling"
//               className="w-80 h-60 absolute bottom-6 right-6"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Bottom Marquee */}
//       <div className="absolute bottom-0 w-full h-[56px] bg-cyan-700 overflow-hidden z-20">
//         <div className="flex w-full h-[56px] animate-marquee whitespace-nowrap">
//           {items.map((text, i) => (
//             <div key={i} className="flex items-center gap-4 p-2 shrink-0">
//               <img src={moon} alt="" className="w-7 h-8" />
//               <span className="text-white text-[30px] font-medium">{text}</span>
//             </div>
//           ))}
//           {/* Duplicate for seamless loop */}
//           {items.map((text, i) => (
//             <div key={`dup-${i}`} className="flex items-center gap-4 p-2 shrink-0">
//               <img src={moon} alt="" className="w-7 h-8" />
//               <span className="text-white text-[30px] font-medium">{text}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Serve;
// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Lenis from "@studio-freight/lenis";

// import img1 from "/src/assets/home/Ser1.png";
// import img2 from "/src/assets/home/Ser2.png";
// import img3 from "/src/assets/home/Ser3.png";
// import moon from "/src/assets/home/moon.png";

// gsap.registerPlugin(ScrollTrigger); // ✅ Keep this

// function Serve() {
//   const sectionRef = useRef(null);
//   const panelsContainerRef = useRef(null);
//   const contentWrapperRef = useRef(null);
//    const flyTextRef = useRef(null);

//   const items = [
//     "Grow with etthicks",
//     "Grow with etthicks",
//     "Grow with etthicks",
//     "Grow with etthicks",
//   ];

//   useEffect(() => {
//     const lenis = new Lenis({
//       duration: 1.2,
//       smooth: true,
//     });

//     function raf(time) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }
//     requestAnimationFrame(raf);

//     const panels = gsap.utils.toArray(".panel");
//     const amountToScroll =
//       contentWrapperRef.current.scrollWidth - window.innerWidth;

//     // ✅ Main animation: horizontal scroll effect
//     const mainScrollTween = gsap.to(contentWrapperRef.current, {
//       x: -amountToScroll,
//       ease: "none",
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         pin: true,
//         scrub: 1,
//         end: () => `+=${amountToScroll}`,
//         snap: {
//           snapTo: 1 / (panels.length - 1),
//           duration: { min: 0.2, max: 0.3 },
//         },
//       },
//     });

//     // ✅ Zoom/fade focus effect for each panel
//     panels.forEach((panel) => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: panel,
//           containerAnimation: mainScrollTween,
//           start: "left right",
//           end: "right left",
//           scrub: true,
//         },
//       });
      

//       tl.fromTo(
//         panel,
//         { scale: 0.7, opacity: 0.5 },
//         { scale: 1, opacity: 1, ease: "power2.in" }
//       ).to(panel, { scale: 0.7, opacity: 0.5, ease: "power2.out" });
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//       lenis.destroy();
//     };
//   }, []);
//     gsap.to(flyTextRef.current, {
//       x: 700, // horizontal movement distance
//       repeat: -1, // infinite loop
//       duration: 3,
//       ease: "linear",
//       yoyo: false,
//     });

//   return (
//     <section
//       ref={sectionRef}
//       className="w-full h-screen bg-black overflow-hidden"
//     >
//       {/* Horizontal wrapper */}
//       <div ref={contentWrapperRef} className="flex h-full items-center">
//         {/* Left Title */}
//         <div className="flex-shrink-0 px-20 text-[#e59300] uppercase font-bold z-10">
//           <h2 className="text-[100px] leading-[110px]">OUR</h2>
//           <h2 className="text-[80px] leading-[88px]">Services</h2>
//         </div>

//         {/* Panels */}
//         <div
//           ref={panelsContainerRef}
//           className="flex h-full items-center gap-16 pr-20"
//         >
//           {/* Panel 1 */}
//           <div className="panel w-[640px] h-96 bg-white rounded-3xl relative p-6 shadow-lg flex-shrink-0">
//             <h3 className="text-orange-400 text-3xl font-semibold mb-4">
//               Content Creation
//             </h3>
//             <p className="text-black text-2xl leading-9">
//               Reels, ad films, corporate AVs, long-form YouTube — stories that
//               captivate and convert.
//             </p>
//             <img
//               src={img1}
//               alt="Content"
//               className="w-80 h-60 absolute bottom-6 right-6"
//             />
//           </div>

//           {/* Panel 2 */}
//           <div className="panel w-[640px] h-96 bg-white rounded-3xl relative p-6 shadow-lg flex-shrink-0">
//             <h3 className="text-orange-400 text-3xl font-semibold mb-4">
//               Digital Marketing
//             </h3>
//             <p className="text-black text-2xl leading-9">
//               Social strategy, performance campaigns, platform-specific content
//               that meets people where they are.
//             </p>
//             <img
//               src={img2}
//               alt="Marketing"
//               className="w-80 h-60 absolute bottom-6 right-6"
//             />
//           </div>

//           {/* Panel 3 */}
//           <div className="panel w-[640px] h-96 bg-white rounded-3xl relative p-6 shadow-lg flex-shrink-0">
//             <h3 className="text-orange-400 text-3xl font-semibold mb-4">
//               Brand Storytelling
//             </h3>
//             <p className="text-black text-2xl leading-9">
//               From positioning and emotional narrative to campaign ideation — we
//               give your brand a powerful voice.
//             </p>
//             <img
//               src={img3}
//               alt="Storytelling"
//               className="w-80 h-60 absolute bottom-6 right-6"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Bottom Marquee */}
//       <div className="absolute bottom-0 w-full h-[56px] bg-cyan-700 overflow-hidden z-20">
//         <div className="flex w-full h-[56px] animate-marquee whitespace-nowrap">
//           {items.map((text, i) => (
//             <div key={i} className="flex items-center gap-4 p-2 shrink-0">
//               <img src={moon} alt="" className="w-7 h-8" />
//               <span className="text-white text-[30px] font-medium">{text}</span>
//             </div>
//           ))}
//           {/* Duplicate for seamless loop */}
//           {items.map((text, i) => (
//             <div key={`dup-${i}`} className="flex items-center gap-4 p-2 shrink-0">
//               <img src={moon} alt="" className="w-7 h-8" />
//               <span className="text-white text-[30px] font-medium">{text}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Serve;
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

import img1 from "/src/assets/home/Ser1.png";
import img2 from "/src/assets/home/Ser2.png";
import img3 from "/src/assets/home/Ser3.png";
import moon from "/src/assets/home/moon.png";

gsap.registerPlugin(ScrollTrigger);

function Serve() {
  const sectionRef = useRef(null);
  const panelsContainerRef = useRef(null);
  const contentWrapperRef = useRef(null);
  const flyTextRef = useRef(null);

  const items = [
    "Grow with etthicks",
    "Grow with etthicks",
    "Grow with etthicks",
    "Grow with etthicks",
  ];

  useEffect(() => {
    // Smooth scrolling with Lenis
    const lenis = new Lenis({ duration: 1.2, smooth: true });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Horizontal scroll setup for panels
    const panels = gsap.utils.toArray(".panel");
    const amountToScroll =
      contentWrapperRef.current.scrollWidth - window.innerWidth;

    const mainScrollTween = gsap.to(contentWrapperRef.current, {
      x: -amountToScroll,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        scrub: 1,
        end: () => `+=${amountToScroll}`,
        snap: {
          snapTo: 1 / (panels.length - 1),
          duration: { min: 0.2, max: 0.3 },
        },
      },
    });

    // Focus zoom for each panel
    panels.forEach((panel) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          containerAnimation: mainScrollTween,
          start: "left right",
          end: "right left",
          scrub: true,
        },
      });

      tl.fromTo(
        panel,
        { scale: 0.7, opacity: 0.5 },
        { scale: 1, opacity: 1, ease: "power2.in" }
      ).to(panel, { scale: 0.7, opacity: 0.5, ease: "power2.out" });
    });

    // Marquee animation: LEFT TO RIGHT
    if (flyTextRef.current) {
      gsap.set(flyTextRef.current, { xPercent: -50 }); // Start offset
      gsap.to(flyTextRef.current, {
        xPercent: 0, // Move right
        repeat: -1,  // Infinite loop
        duration: 10,
        ease: "linear",
        modifiers: {
          xPercent: gsap.utils.wrap(-50, 0), // Seamless loop
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      lenis.destroy();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full h-screen bg-black overflow-hidden"
    >
      {/* Horizontal wrapper */}
      <div ref={contentWrapperRef} className="flex h-full items-center">
        {/* Left Title */}
        <div className="flex-shrink-0 px-20 text-[#e59300] uppercase font-bold z-10">
          <h2 className="text-[100px] leading-[110px]">OUR</h2>
          <h2 className="text-[80px] leading-[88px]">Services</h2>
        </div>

        {/* Panels */}
        <div
          ref={panelsContainerRef}
          className="flex h-full items-center gap-16 pr-20"
        >
          {/* Panel 1 */}
          <div className="panel w-[640px] h-96 bg-white rounded-3xl relative p-6 shadow-lg flex-shrink-0">
            <h3 className="text-orange-400 text-3xl font-semibold mb-4">
              Content Creation
            </h3>
            <p className="text-black text-2xl leading-9">
              Reels, ad films, corporate AVs, long-form YouTube — stories that
              captivate and convert.
            </p>
            <img
              src={img1}
              alt="Content"
              className="w-80 h-60 absolute bottom-6 right-6"
            />
          </div>

          {/* Panel 2 */}
          <div className="panel w-[640px] h-96 bg-white rounded-3xl relative p-6 shadow-lg flex-shrink-0">
            <h3 className="text-orange-400 text-3xl font-semibold mb-4">
              Digital Marketing
            </h3>
            <p className="text-black text-2xl leading-9">
              Social strategy, performance campaigns, platform-specific content
              that meets people where they are.
            </p>
            <img
              src={img2}
              alt="Marketing"
              className="w-80 h-60 absolute bottom-6 right-6"
            />
          </div>

          {/* Panel 3 */}
          <div className="panel w-[640px] h-96 bg-white rounded-3xl relative p-6 shadow-lg flex-shrink-0">
            <h3 className="text-orange-400 text-3xl font-semibold mb-4">
              Brand Storytelling
            </h3>
            <p className="text-black text-2xl leading-9">
              From positioning and emotional narrative to campaign ideation — we
              give your brand a powerful voice.
            </p>
            <img
              src={img3}
              alt="Storytelling"
              className="w-80 h-60 absolute bottom-6 right-6"
            />
          </div>
        </div>
      </div>

      {/* Bottom Marquee */}
      <div className="absolute bottom-0 w-full h-[56px] bg-cyan-700 overflow-hidden z-20">
        <div
          ref={flyTextRef}
          className="flex w-max h-[56px] whitespace-nowrap"
        >
          {items.map((text, i) => (
            <div key={i} className="flex items-center gap-4 p-2 shrink-0">
              <img src={moon} alt="" className="w-7 h-8" />
              <span className="text-white text-[30px] font-medium">{text}</span>
            </div>
          ))}
          {items.map((text, i) => (
            <div key={`dup-${i}`} className="flex items-center gap-4 p-2 shrink-0">
              <img src={moon} alt="" className="w-7 h-8" />
              <span className="text-white text-[30px] font-medium">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Serve;
