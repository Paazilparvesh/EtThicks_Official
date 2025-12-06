import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

import img1 from "/src/assets/home/Ser1.png";
import img2 from "/src/assets/home/Ser2.png";
import img3 from "/src/assets/home/Ser3.png";
import img4 from "/src/assets/home/comersial.png";
import img5 from "/src/assets/home/potography.png";
import img6 from "/src/assets/home/leadgen.png";

gsap.registerPlugin(ScrollTrigger);

function ServiceSection() {
  const sectionRef = useRef(null);
  const contentWrapperRef = useRef(null);
  const flyTextRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    // ✅ Mobile: Skip horizontal scroll, use native vertical scroll
    if (isMobile) {
      return; // Exit early - no GSAP animations on mobile
    }

    // ✅ Desktop: Lenis smooth scroll + horizontal animations
    const lenis = new Lenis({ duration: 1.2, smooth: true });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(".panel");
      let multiplier = 1;

      if (window.innerWidth >= 1440) {
        multiplier = 1.3;
      } else if (window.innerWidth >= 1024) {
        multiplier = 1.08;
      } else if (window.innerWidth >= 768) {
        multiplier = 1;
      }

      const scrollX =
        (contentWrapperRef.current.scrollWidth - window.innerWidth) * multiplier;

      // Main horizontal scroll
      const mainScrollTween = gsap.to(contentWrapperRef.current, {
        x: -scrollX,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          end: () => `+=${scrollX}`,
          snap: { snapTo: 1 / (panels.length - 1), duration: { min: 0.2, max: 0.3 } },
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

      // Marquee scroll linked to horizontal scroll
      if (flyTextRef.current) {
        const marqueeWidth = flyTextRef.current.scrollWidth / 2;

        gsap.to(flyTextRef.current, {
          x: -marqueeWidth,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            scrub: 1,
            start: "top top",
            end: () => `+=${scrollX}`,
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
      className="w-full min-h-screen overflow-x-hidden"
      style={{ backgroundImage: "radial-gradient(ellipse at center, #072a31, #000000)" }}
    >
      {/* Horizontal wrapper for desktop, vertical stack for mobile */}
      <div 
        ref={contentWrapperRef} 
        className="flex flex-col md:flex-row h-full items-center md:items-stretch"
      >
        {/* Left Title */}
        <div className="flex-shrink-0 px-6 sm:px-8 md:px-12 lg:px-20 py-20 md:py-0 text-[#e59300] uppercase font-medium z-10 flex items-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight text-center md:text-left">
            OUR <br className="hidden md:block" /> Services
          </h2>
        </div>

        {/* Panels - 6 panels total, reduced gap on mobile */}
        <div className="flex flex-col md:flex-row md:min-h-screen md:h-full items-center gap-2 md:gap-12 lg:gap-16 p-4 sm:p-6 md:pr-20 w-full md:w-auto">
          {/* Panel 1 */}
          <div className="panel w-full max-w-md sm:max-w-lg md:w-[520px] lg:w-[640px] h-[320px] sm:h-[360px] md:h-96 bg-white rounded-2xl sm:rounded-3xl relative p-4 sm:p-5 md:p-6 shadow-lg flex-shrink-0">
            <h3 className="text-orange-400 text-xl sm:text-2xl md:text-3xl lg:text-[36px] xl:text-[36px] font-semibold mb-1 sm:mb-2 md:mb-3 md:mb-4">
              Content Creation
            </h3>
            <p className="text-gray-700 text-xs sm:text-sm md:text-base lg:text-lg xl:text-[24px] leading-relaxed max-w-xs">
              Reels, ad films, corporate AVs, long-form YouTube — stories that captivate and convert.
            </p>
            <img 
              src={img1} 
              alt="Content" 
              className="w-32 h-28 sm:w-36 sm:h-32 md:w-44 sm:h-36 md:w-64 md:h-48 lg:w-80 lg:h-60 absolute bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-4 md:right-4 object-contain" 
            />
          </div>

          {/* Panel 2 */}
          <div className="panel w-full max-w-md sm:max-w-lg md:w-[520px] lg:w-[640px] h-[320px] sm:h-[360px] md:h-96 bg-white rounded-2xl sm:rounded-3xl relative p-4 sm:p-5 md:p-6 shadow-lg flex-shrink-0">
            <h3 className="text-orange-400 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-1 sm:mb-2 md:mb-3 md:mb-4">
              Digital Marketing
            </h3>
            <p className="text-gray-700 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed max-w-xs">
              Social strategy, performance campaigns, platform-specific content that meets people where they are.
            </p>
            <img 
              src={img2} 
              alt="Marketing" 
              className="w-32 h-28 sm:w-36 sm:h-32 md:w-44 sm:h-36 md:w-64 md:h-48 lg:w-80 lg:h-60 absolute bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-4 md:right-4 object-contain" 
            />
          </div>

          {/* Panel 3 */}
          <div className="panel w-full max-w-md sm:max-w-lg md:w-[520px] lg:w-[640px] h-[320px] sm:h-[360px] md:h-96 bg-white rounded-2xl sm:rounded-3xl relative p-4 sm:p-5 md:p-6 shadow-lg flex-shrink-0">
            <h3 className="text-orange-400 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-1 sm:mb-2 md:mb-3 md:mb-4">
              Brand Storytelling
            </h3>
            <p className="text-gray-700 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed max-w-xs">
              From positioning and emotional narrative to campaign ideation — we give your brand a powerful voice.
            </p>
            <img 
              src={img3} 
              alt="Storytelling" 
              className="w-32 h-28 sm:w-36 sm:h-32 md:w-44 sm:h-36 md:w-64 md:h-48 lg:w-80 lg:h-60 absolute bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-4 md:right-4 object-contain" 
            />
          </div>

          {/* Panel 4 - NEW */}
          <div className="panel w-full max-w-md sm:max-w-lg md:w-[520px] lg:w-[640px] h-[320px] sm:h-[360px] md:h-96 bg-white rounded-2xl sm:rounded-3xl relative p-4 sm:p-5 md:p-6 shadow-lg flex-shrink-0">
            <h3 className="text-orange-400 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-1 sm:mb-2 md:mb-3 md:mb-4">
              TV Commercials
            </h3>
            <p className="text-gray-700 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed max-w-xs">
              From positioning and emotional narrative to campaign ideation — we give your brand a powerful voice.
            </p>
            <img 
              src={img4} 
              alt="TV Commercials" 
              className="w-32 h-28 sm:w-36 sm:h-32 md:w-44 sm:h-36 md:w-64 md:h-48 lg:w-80 lg:h-60 absolute bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-4 md:right-4 object-contain" 
            />
          </div>

          {/* Panel 5 - NEW */}
          <div className="panel w-full max-w-md sm:max-w-lg md:w-[520px] lg:w-[640px] h-[320px] sm:h-[360px] md:h-96 bg-white rounded-2xl sm:rounded-3xl relative p-4 sm:p-5 md:p-6 shadow-lg flex-shrink-0">
            <h3 className="text-orange-400 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-1 sm:mb-2 md:mb-3 md:mb-4">
              Product Photography
            </h3>
            <p className="text-gray-700 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed max-w-xs">
              From positioning and emotional narrative to campaign ideation — we give your brand a powerful voice.
            </p>
            <img 
              src={img5} 
              alt="Photography" 
              className="w-32 h-28 sm:w-36 sm:h-32 md:w-44 sm:h-36 md:w-64 md:h-48 lg:w-80 lg:h-60 absolute bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-4 md:right-4 object-contain" 
            />
          </div>

          {/* Panel 6 - NEW */}
          <div className="panel w-full max-w-md sm:max-w-lg md:w-[520px] lg:w-[640px] h-[320px] sm:h-[360px] md:h-96 bg-white rounded-2xl sm:rounded-3xl relative p-4 sm:p-5 md:p-6 shadow-lg flex-shrink-0">
            <h3 className="text-orange-400 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-1 sm:mb-2 md:mb-3 md:mb-4">
              Lead Generation
            </h3>
            <p className="text-gray-700 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed max-w-xs">
              From positioning and emotional narrative to campaign ideation — we give your brand a powerful voice.
            </p>
            <img 
              src={img6} 
              alt="Lead Generation" 
              className="w-32 h-28 sm:w-36 sm:h-32 md:w-44 sm:h-36 md:w-64 md:h-48 lg:w-80 lg:h-60 absolute bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-4 md:right-4 object-contain" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
