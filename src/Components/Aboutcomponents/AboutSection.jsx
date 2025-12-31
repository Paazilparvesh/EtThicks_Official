import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import pac from "/src/assets/about/pack.png";
import red from "/src/assets/about/red.png";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function AboutSection() {
  const imageRef1 = useRef(null);
  const sectionRef1 = useRef(null);
  const imageRef2 = useRef(null);
  const sectionRef2 = useRef(null);
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);

  // Animation for first section
  useEffect(() => {
    const img = imageRef1.current;
    const section = sectionRef1.current;
    const textContainer = textRef1.current;
    
    if (!img || !section || !textContainer) return;

    // Reset states
    gsap.set(img, {
      rotation: 0,
      transformOrigin: "center center",
    });

    // Split text into words for word-by-word animation
    const originalText = textContainer.innerText;
    const words = originalText.split(' ');
    
    textContainer.innerHTML = words
      .map(word => `<span class="word opacity-0 inline-block mr-1">${word}</span>`)
      .join(' ');

    const wordElements = textContainer.querySelectorAll('.word');
    
    // Text reveal animation with precise timing
    const textTl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "top 40%",
        toggleActions: "play none none reverse",
        once: true,
      }
    });

    // Word-by-word animation with smooth timing
    textTl.to(wordElements, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      stagger: 0.05,
      ease: "power2.out"
    }, 0);

    // Image tilt animation - starts slightly after text begins
    const imgAnim = gsap.to(img, {
      rotation: 15,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top 75%",
        end: "top 45%",
        scrub: 1.2,
      },
    });

    return () => {
      imgAnim.kill();
      textTl.kill();
    };
  }, []);

  // Animation for second section
  useEffect(() => {
    const img = imageRef2.current;
    const section = sectionRef2.current;
    const textContainer = textRef2.current;
    
    if (!img || !section || !textContainer) return;

    // Reset states
    gsap.set(img, {
      rotation: 0,
      transformOrigin: "center center",
    });

    // Split text into words for word-by-word animation
    const originalText = textContainer.innerText;
    const words = originalText.split(' ');
    
    textContainer.innerHTML = words
      .map(word => `<span class="word opacity-0 inline-block mr-1">${word}</span>`)
      .join(' ');

    const wordElements = textContainer.querySelectorAll('.word');
    
    // Text reveal animation
    const textTl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "top 40%",
        toggleActions: "play none none reverse",
        once: true,
      }
    });

    // Word-by-word animation
    textTl.to(wordElements, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      stagger: 0.05,
      ease: "power2.out"
    }, 0);

    // Image tilt animation
    const imgAnim = gsap.to(img, {
      rotation: -15,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top 75%",
        end: "top 45%",
        scrub: 1.2,
      },
    });

    return () => {
      imgAnim.kill();
      textTl.kill();
    };
  }, []);

  // Clean up all ScrollTriggers on component unmount
  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      {/* Section 1 */}
      <div
        ref={sectionRef1}
        className="flex flex-col-reverse md:flex-row w-full bg-black items-center justify-center gap-12 pt-16 md:pt-0 px-4 md:px-10 xl:px-10"
      >
        {/* Text Section - Top on mobile, Left on desktop */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mb-5 lg:mb-0">
          <h1 
            ref={textRef1}
            className="text-gray-200 text-xl md:text-base lg:text-2xl leading-relaxed text-center md:text-right max-w-lg lg:max-w-none font-worksans"
          >
            We don't just create content.
            We stage worlds.
            We craft experiences that people feel, remember, and
            carry forward.
            Every frame, every word, every campaign is guided by
            a single principle:
          </h1>
        </div>

        {/* Image Section - Bottom on mobile, Right on desktop */}
        <div className="w-full md:w-1/2 flex items-center justify-center order-2">
          <img
            ref={imageRef1}
            src={pac}
            alt="pac"
            className="object-contain w-[60%] md:w-[85%] lg:w-[50%] h-auto max-h-[300px] md:max-h-[400px] lg:max-h-none"
          />
        </div>
      </div>

      {/* Section 2 */}
      <div
        ref={sectionRef2}
        className="flex flex-col-reverse md:flex-row-reverse lg:flex-row lg:h-[523px] w-full bg-[#000000] items-center justify-center gap-12 py-16 lg:py-0 px-4 lg:px-8 xl:px-10"
      >
        {/* Image Section - Top on mobile, Left on desktop */}
        <div className="w-full lg:w-1/2 flex items-center justify-center order-2 lg:order-1 lg:mb-0">
          <img
            ref={imageRef2}
            src={red}
            alt="red"
            className="object-contain w-[60%] md:w-[75%] lg:w-[50%] h-auto max-h-[300px] md:max-h-[400px] lg:max-h-none"
          />
        </div>

        {/* Text Section - Bottom on mobile, Right on desktop */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start order-1 lg:order-2">
          <h1 
            ref={textRef2}
            className="text-gray-300 text-xl md:text-base lg:text-2xl leading-relaxed text-center md:text-left max-w-lg lg:max-w-none font-worksans"
          >
            We started small: ideas sketched on paper, reels on screens, dreams in our minds.
            Yet every story found its journey.
            A small retailer became unforgettable.
            A reel travelled from a casual scroll to a shared moment across millions of feeds.
          </h1>
        </div>
      </div>
    </>
  );
}

export default AboutSection;