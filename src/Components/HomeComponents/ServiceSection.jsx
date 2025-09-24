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
import Lenis from "lenis";

import img1 from "/src/assets/home/Ser1.png";
import img2 from "/src/assets/home/Ser2.png";
import img3 from "/src/assets/home/Ser3.png";
import moon from "/src/assets/home/moon.png";

gsap.registerPlugin(ScrollTrigger);

function ServiceSection() {
  const sectionRef = useRef(null);
  const contentWrapperRef = useRef(null);
  const flyTextRef = useRef(null);

  const items = ["Grow with EtThicks", "Grow with EtThicks", "Grow with EtThicks", "Grow with EtThicks"];

  useEffect(() => {
    // Lenis smooth scroll
    const lenis = new Lenis({ duration: 1.2, smooth: true });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(".panel");
      const amountToScroll = contentWrapperRef.current.scrollWidth - window.innerWidth;

      // Main horizontal scroll
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

      // Panels focus zoom
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
          { scale: 0.8, opacity: 0.5 },
          { scale: 1, opacity: 1, ease: "power2.inOut" }
        ).to(panel, { scale: 0.8, opacity: 0.5, ease: "power2.inOut" });
      });

      // ✅ Marquee scroll linked ONLY to horizontal scroll
      if (flyTextRef.current) {
        const marqueeWidth = flyTextRef.current.scrollWidth / 2;

        gsap.to(flyTextRef.current, {
          x: -marqueeWidth,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            scrub: 1,
            start: "top top",
            end: () => `+=${amountToScroll}`, // link to main scroll distance
          },
        });
      }
    }, sectionRef);

    return () => {
      gsap.killTweensOf(flyTextRef.current);
      ScrollTrigger.getAll().forEach((t) => t.kill());
      lenis.destroy();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full h-screen overflow-hidden"
      style={{ backgroundImage: "radial-gradient(ellipse at center, #072a31, #000000)" }}
    >
      {/* Horizontal wrapper */}
      <div ref={contentWrapperRef} className="flex h-full items-center">
        {/* Left Title */}
        <div className="flex-shrink-0 px-6 sm:px-12 md:px-20 text-[#e59300] uppercase font-bold z-10">
          <h2 className="text-4xl sm:text-6xl md:text-[100px] leading-tight md:leading-[110px]">
            OUR
          </h2>
          <h2 className="text-3xl sm:text-5xl md:text-[80px] leading-tight md:leading-[88px]">
            Services
          </h2>
        </div>

        {/* Panels */}
        <div className="flex h-full items-center gap-6 sm:gap-10 md:gap-16 pr-6 sm:pr-10 md:pr-20">
          {/* Panel 1 */}
          <div className="panel w-[280px] sm:w-[400px] md:w-[640px] h-[280px] sm:h-[340px] md:h-96 bg-white rounded-2xl sm:rounded-3xl relative p-4 sm:p-6 shadow-lg flex-shrink-0">
            <h3 className="text-orange-400 text-xl sm:text-2xl md:text-3xl font-semibold mb-2 sm:mb-4">
              Content Creation
            </h3>
            <p className="text-black text-sm sm:text-lg md:text-2xl leading-relaxed">
              Reels, ad films, corporate AVs, long-form YouTube — stories that captivate and convert.
            </p>
            <img src={img1} alt="Content" className="w-28 h-20 sm:w-48 sm:h-36 md:w-80 md:h-60 absolute bottom-4 right-4" />
          </div>

          {/* Panel 2 */}
          <div className="panel w-[280px] sm:w-[400px] md:w-[640px] h-[280px] sm:h-[340px] md:h-96 bg-white rounded-2xl sm:rounded-3xl relative p-4 sm:p-6 shadow-lg flex-shrink-0">
            <h3 className="text-orange-400 text-xl sm:text-2xl md:text-3xl font-semibold mb-2 sm:mb-4">
              Digital Marketing
            </h3>
            <p className="text-black text-sm sm:text-lg md:text-2xl leading-relaxed">
              Social strategy, performance campaigns, platform-specific content that meets people where they are.
            </p>
            <img src={img2} alt="Marketing" className="w-28 h-20 sm:w-48 sm:h-36 md:w-80 md:h-60 absolute bottom-4 right-4" />
          </div>

          {/* Panel 3 */}
          <div className="panel w-[280px] sm:w-[400px] md:w-[640px] h-[280px] sm:h-[340px] md:h-96 bg-white rounded-2xl sm:rounded-3xl relative p-4 sm:p-6 shadow-lg flex-shrink-0">
            <h3 className="text-orange-400 text-xl sm:text-2xl md:text-3xl font-semibold mb-2 sm:mb-4">
              Brand Storytelling
            </h3>
            <p className="text-black text-sm sm:text-lg md:text-2xl leading-relaxed">
              From positioning and emotional narrative to campaign ideation — we give your brand a powerful voice.
            </p>
            <img src={img3} alt="Storytelling" className="w-28 h-20 sm:w-48 sm:h-36 md:w-80 md:h-60 absolute bottom-4 right-4" />
          </div>
        </div>
      </div>

      {/* Bottom Marquee linked to scroll */}
      <div className="absolute bottom-0 w-full h-[40px] sm:h-[48px] md:h-[56px] bg-cyan-700 overflow-hidden z-20">
        <div ref={flyTextRef} className="flex w-max h-full whitespace-nowrap">
          {[...items, ...items].map((text, i) => (
            <div key={i} className="flex items-center gap-2 sm:gap-4 px-3 sm:px-4 shrink-0">
              <img src={moon} alt="" className="w-4 h-5 sm:w-5 sm:h-6 md:w-7 md:h-8" />
              <span className="text-white text-base sm:text-xl md:text-[30px] font-medium">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;

