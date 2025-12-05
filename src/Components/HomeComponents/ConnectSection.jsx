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

    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinRef.current,
          start: "top top",
          end: isMobile ? "+=1200%" : "+=1700%", // Shorter scroll on mobile
          scrub: true,
          pin: true,
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

      // Circle scales up (less scale on mobile)
      tl.to(circleRef.current, {
        scale: isMobile ? 3 : 5,
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
    <section className="w-full h-[1200vh] md:h-[1800vh] bg-black overflow-hidden relative">
      <div
        ref={pinRef}
        className="w-full h-screen flex items-center justify-center relative"
      >
        {/* Orange Circle - Responsive Size */}
        <div
          ref={circleRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] rounded-full 
                     w-[20vw] h-[20vw] md:w-[10vw] md:h-[10vw] 
                     bg-orange-500 shadow-2xl z-10"
        />

        {/* Text - Responsive Sizing */}
        <div
          ref={textRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center px-4 z-20"
        >
          <h1 className="text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4 font-['Nunito']">
            Connect. Build Trust. Grow.
          </h1>
          <p className="text-white text-sm sm:text-base md:text-xl lg:text-2xl max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto font-['Nunito']">
            We exist to craft authentic, emotion-driven stories that connect people with brands — building lasting trust and measurable impact.
          </p>
        </div>

        {/* Image Grid - Mobile Responsive Positions */}
        <div ref={gridRef} className="absolute inset-0 z-30 pointer-events-none">
          
          {/* Batch 1 - First 3 Images */}
          
          {/* Top-Left Image */}
          <div
            ref={addToRefs}
            className="absolute w-[140px] h-[160px] sm:w-[180px] sm:h-[200px] md:w-[280px] md:h-[320px] rounded-xl md:rounded-2xl overflow-hidden shadow-2xl"
            style={{
              top: "12%",
              left: "5%",
              backgroundImage: `url(https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=500&q=80)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* Bottom-Center Image */}
          <div
            ref={addToRefs}
            className="absolute w-[160px] h-[140px] sm:w-[200px] sm:h-[180px] md:w-[320px] md:h-[280px] rounded-xl md:rounded-2xl overflow-hidden shadow-2xl"
            style={{
              top: "60%",
              left: "25%",
              backgroundImage: `url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=80)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* Top-Right Image */}
          <div
            ref={addToRefs}
            className="absolute w-[130px] h-[130px] sm:w-[160px] sm:h-[160px] md:w-[260px] md:h-[260px] rounded-xl md:rounded-2xl overflow-hidden shadow-2xl"
            style={{
              top: "18%",
              left: "65%",
              backgroundImage: `url(https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=500&q=80)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* Batch 2 - Next 3 Images */}
          
          {/* Left Side Image */}
          <div
            ref={addToRefs}
            className="absolute w-[150px] h-[170px] sm:w-[190px] sm:h-[210px] md:w-[300px] md:h-[340px] rounded-xl md:rounded-2xl overflow-hidden shadow-2xl"
            style={{
              top: "25%",
              left: "4%",
              backgroundImage: `url(https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=500&q=80)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* Center Image */}
          <div
            ref={addToRefs}
            className="absolute w-[170px] h-[150px] sm:w-[210px] sm:h-[190px] md:w-[340px] md:h-[300px] rounded-xl md:rounded-2xl overflow-hidden shadow-2xl"
            style={{
              top: "50%",
              left: "28%",
              backgroundImage: `url(https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=500&q=80)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* Right Side Image */}
          <div
            ref={addToRefs}
            className="absolute w-[140px] h-[160px] sm:w-[180px] sm:h-[200px] md:w-[280px] md:h-[320px] rounded-xl md:rounded-2xl overflow-hidden shadow-2xl"
            style={{
              top: "30%",
              left: "67%",
              backgroundImage: `url(https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=500&q=80)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* Batch 3 - Last 3 Images */}
          
          {/* Top-Left Corner */}
          <div
            ref={addToRefs}
            className="absolute w-[145px] h-[165px] sm:w-[185px] sm:h-[205px] md:w-[290px] md:h-[330px] rounded-xl md:rounded-2xl overflow-hidden shadow-2xl"
            style={{
              top: "15%",
              left: "6%",
              backgroundImage: `url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=500&q=80)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* Bottom-Center */}
          <div
            ref={addToRefs}
            className="absolute w-[165px] h-[145px] sm:w-[205px] sm:h-[185px] md:w-[330px] md:h-[290px] rounded-xl md:rounded-2xl overflow-hidden shadow-2xl"
            style={{
              top: "55%",
              left: "26%",
              backgroundImage: `url(https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=500&q=80)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* Top-Right Corner */}
          <div
            ref={addToRefs}
            className="absolute w-[135px] h-[155px] sm:w-[175px] sm:h-[195px] md:w-[270px] md:h-[310px] rounded-xl md:rounded-2xl overflow-hidden shadow-2xl"
            style={{
              top: "20%",
              left: "66%",
              backgroundImage: `url(https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=500&q=80)`,
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
