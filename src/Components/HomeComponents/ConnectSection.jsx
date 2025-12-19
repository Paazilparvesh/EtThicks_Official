import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ConnectSection = () => {
  const pinRef = useRef(null);
  const circleRef = useRef(null);
  const gridRef1 = useRef(null);
  const gridRef2 = useRef(null);
  const gridRef3 = useRef(null);
  const h1Ref = useRef(null);
  const pRef = useRef(null);
  const imagesRef = useRef([]);

  useEffect(() => {
    if (!pinRef.current || !circleRef.current || !h1Ref.current || !pRef.current || !gridRef1.current || !gridRef2.current || !gridRef3.current) return;

    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinRef.current,
          start: "top top",
          end: isMobile ? "+=1200%" : "+=1700%",
          scrub: true,
          pin: true,
        },
      });

      // ensure grids start hidden
      gsap.set([gridRef1.current, gridRef2.current, gridRef3.current], {
        autoAlpha: 0,
      });

      // Circle from top → center
      tl.fromTo(
        circleRef.current,
        { yPercent: -200, opacity: 0 },
        { yPercent: 0, opacity: 1, ease: "power2.out", duration: 2 }
      );

      // Pause briefly
      tl.to(circleRef.current, { duration: 0.5 });

      // Circle scales up - mobile fills full width
      tl.to(circleRef.current, {
        scale: isMobile ? 4 : 6,
        ease: "power2.inOut",
        duration: 3,
      });

      // H1 slides in from TOP
      tl.fromTo(
        h1Ref.current,
        { opacity: 0, yPercent: -120 },
        { opacity: 1, yPercent: 0, ease: "power2.out", duration: 2 },
        "-=1"
      );

      // P slides in from BOTTOM (slightly delayed)
      tl.fromTo(
        pRef.current,
        { opacity: 0, yPercent: 120 },
        { opacity: 1, yPercent: 0, ease: "power2.out", duration: 2 },
        "-=1"
      );

      // GRID 1: comes in from left, then exits left
      tl.fromTo(
        gridRef1.current,
        { autoAlpha: 0, yPercent: 50 },
        { autoAlpha: 1, yPercent: 0, duration: 2, ease: "power2.out" }
      ).to(gridRef1.current, {
        autoAlpha: 0,
        yPercent: -50,
        duration: 2,
        ease: "power2.in",
      });

      // GRID 2: comes in from right after grid1 leaves
      tl.fromTo(
        gridRef2.current,
        { autoAlpha: 0, yPercent: 50 },
        { autoAlpha: 1, yPercent: 0, duration: 2, ease: "power2.out" }
      ).to(gridRef2.current, {
        autoAlpha: 0,
        yPercent: -50,
        duration: 2,
        ease: "power2.in",
      });

      // GRID 3: comes in from right after grid2 leaves
      tl.fromTo(
        gridRef3.current,
        { autoAlpha: 0, yPercent: 50 },
        { autoAlpha: 1, yPercent: 0, duration: 2, ease: "power2.out" }
      ).to(gridRef3.current, {
        autoAlpha: 0,
        yPercent: -50,
        duration: 2,
        ease: "power2.in",
      });

      // Final transition - circle and text fade out
      tl.to(
        [circleRef.current, h1Ref.current, pRef.current],
        { opacity: 0, ease: "power2.in", duration: 2 },
        "-=1"
      );

    }, pinRef);

    return () => ctx.revert();
  }, []);

  // Function to add images to ref array
  // const addToRefs = (el) => {
  //   if (el && !imagesRef.current.includes(el)) {
  //     imagesRef.current.push(el);
  //   }
  // };

  return (
    <section className="w-full bg-black overflow-hidden relative">
      <div
        ref={pinRef}
        className="w-full h-screen flex items-center justify-center relative"
      >
        {/* Orange Circle with Gradient - #E59300 to #D89F5B */}
        <div
          ref={circleRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] rounded-full w-[40vw] h-[40vw] md:w-[10vw] md:h-[10vw] shadow-2xl z-10 mt-10"
          style={{
            background: 'linear-gradient(135deg, #E59300 0%, #D89F5B 100%)'
          }}
        />

        {/* Text Container */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center px-4 z-20 w-full h-screen md:max-w-2xl lg:max-w-3xl flex flex-col justify-center items-center gap-5 md:mt-10"
        >
          {/* H1 - Slides from TOP */}
          <h1
            ref={h1Ref}
            className="text-white font-medium text-3xl lg:text-4xl xl:text-6xl"
          >
            Connect. Build Trust. Grow.
          </h1>

          {/* P - Slides from BOTTOM */}
          <p
            ref={pRef}
            className="text-white text-xl xl:text-3xl md:max-w-sm lg:max-w-lg xl:max-w-3xl tracking-wider"
          >
            We exist to craft authentic, emotion-driven stories that connect people with brands building lasting trust and measurable impact.
          </p>
        </div>

        <div
          ref={gridRef1}
          className="absolute inset-0 z-30 pointer-events-none grid grid-cols-4 grid-rows-3 w-full min-h-[calc(100vh-20vh)] mt-20 gap-10 mx-10"
        >
          {/* 1st image: row 1, col 1 */}
          <img
            ref={el => (imagesRef.current[0] = el)}
            src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c"
            alt=""
            className="w-full h-full object-cover row-start-1 col-start-1"
          />

          {/* 2nd image: row 1, col 3 */}
          <img
            ref={el => (imagesRef.current[1] = el)}
            src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c"
            alt=""
            className="w-full h-full object-cover row-start-1 col-start-4"
          />

          {/* 3rd image: row 2, col 2 */}
          <img
            ref={el => (imagesRef.current[2] = el)}
            src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c"
            alt=""
            className="w-full h-full object-cover row-start-2 col-start-3"
          />

          {/* 4th image: row 2, col 2 */}
          <img
            ref={el => (imagesRef.current[3] = el)}
            src="https://images.unsplash.com/photo-1552664730-d307ca884978"
            alt=""
            className="w-full h-full object-cover row-start-3 col-start-1"
          />

        </div>
        <div
          ref={gridRef2}
          className="absolute inset-0 z-30 pointer-events-none grid grid-cols-4 grid-rows-3 w-full min-h-[calc(100vh-20vh)] mt-20 gap-10 mx-10"
        >

          {/* 4th image: row 2, col 1 */}
          <img
            ref={el => (imagesRef.current[3] = el)}
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
            alt=""
            className="w-full h-full object-cover row-start-2 col-start-1"
          />

          {/* 5th image: row 2, col 3 */}
          <img
            ref={el => (imagesRef.current[4] = el)}
            src="https://images.unsplash.com/photo-1535378917042-10a22c95931a"
            alt=""
            className="w-full h-full object-cover row-start-2 col-start-3"
          />

          {/* 6th image: row 3, col 2 */}
          <img
            ref={el => (imagesRef.current[5] = el)}
            src="https://images.unsplash.com/photo-1552664730-d307ca884978"
            alt=""
            className="w-full h-full object-cover row-start-3 col-start-2"
          />
        </div>
        <div
          ref={gridRef3}
          className="absolute inset-0 z-30 pointer-events-none grid grid-cols-4 grid-rows-3 w-full min-h-[calc(100vh-20vh)] mt-20 gap-10 mx-10"
        >


          {/* 7th image: row 3, col 1 */}
          <img
            ref={el => (imagesRef.current[6] = el)}
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0"
            alt=""
            className="w-full h-full object-cover row-start-3 col-start-1"
          />

          {/* 8th image: row 3, col 3 */}
          <img
            ref={el => (imagesRef.current[7] = el)}
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0"
            alt=""
            className="w-full h-full object-cover row-start-3 col-start-3"
          />

          {/* 9th image: wherever you want, e.g. row 1, col 2 */}
          <img
            ref={el => (imagesRef.current[8] = el)}
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
            alt=""
            className="w-full h-full object-cover row-start-1 col-start-2"
          />
        </div>



      </div>
    </section>
  );
};

export default ConnectSection;
