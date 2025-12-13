import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import pac from "/src/assets/about/pack.png";
import red from "/src/assets/about/red.png";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function Create() {
  const imageRef1 = useRef(null);
  const sectionRef1 = useRef(null);
  const imageRef2 = useRef(null);
  const sectionRef2 = useRef(null);

  useEffect(() => {
    // First section animation - VERY SLOW rotation
    const image1 = imageRef1.current;
    const section1 = sectionRef1.current;

    if (image1 && section1) {
      const rotationAnimation1 = gsap.fromTo(image1, {
        rotation: 0,
      }, {
        rotation: 360,
        ease: "none",
        scrollTrigger: {
          trigger: section1,
          start: "top 80%",
          end: "bottom 20%", // Much longer duration
          scrub: 5, // VERY SLOW scrub
          markers: false,
        }
      });

      return () => {
        rotationAnimation1.kill();
      };
    }
  }, []);

  useEffect(() => {
    // Second section animation - VERY SLOW rotation
    const image2 = imageRef2.current;
    const section2 = sectionRef2.current;

    if (image2 && section2) {
      const rotationAnimation2 = gsap.fromTo(image2, {
        rotation: 0,
      }, {
        rotation: -360,
        ease: "none",
        scrollTrigger: {
          trigger: section2,
          start: "top 80%",
          end: "bottom 20%", // Much longer duration
          scrub: 5, // VERY SLOW scrub
          markers: false,
        }
      });

      return () => {
        rotationAnimation2.kill();
      };
    }
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
        className="flex flex-col lg:flex-row h-[600px] md:h-[700px] lg:h-[523px] w-full bg-[#000000] items-center py-8 lg:py-0 px-4 lg:px-8 xl:px-12"
      >
        {/* Text Section - Top on mobile, Left on desktop */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mb-8 lg:mb-0 order-1">
          <h1 className="text-[#ffffff] text-lg md:text-xl lg:text-[20px] leading-relaxed text-center lg:text-right max-w-lg lg:max-w-none">
            We don't just create content.<br className="hidden md:block" />
            We stage worlds.<br className="hidden md:block" />
            We craft experiences that people feel, remember, and<br className="hidden md:block" />
            carry forward.<br className="hidden md:block" />
            Every frame, every word, every campaign is guided by<br />
            a single principle:
          </h1>
        </div>

        {/* Image Section - Bottom on mobile, Right on desktop */}
        <div className="w-full lg:w-1/2 flex items-center justify-center order-2 lg:order-2">
          <img
            ref={imageRef1}
            src={pac}
            alt="pac"
            className="object-contain w-[60%] md:w-[55%] lg:w-[50%] h-auto max-h-[300px] md:max-h-[400px] lg:max-h-none"
          />
        </div>
      </div>

      {/* Section 2 */}
      <div 
        ref={sectionRef2}
        className="h-[700px] md:h-[650px] lg:h-[637px] w-full bg-[#000000] flex items-center py-8 lg:py-0 px-4 lg:px-8 xl:px-12"
      >
        <div className="w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between h-full gap-8 lg:gap-0">
          {/* Image Section - Top on mobile, Left on desktop */}
          <div className="w-full lg:w-1/2 flex items-center justify-center order-2 lg:order-1 mb-8 lg:mb-0">
            <img 
              ref={imageRef2}
              src={red}
              alt="red"
              className="object-contain w-[60%] md:w-[55%] lg:w-[50%] h-auto max-h-[300px] md:max-h-[400px] lg:max-h-none"
            />
          </div>
          
          {/* Text Section - Bottom on mobile, Right on desktop */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start order-1 lg:order-2">
            <h1 className="text-[#ffffff] text-lg md:text-xl lg:text-[20px] leading-relaxed text-center lg:text-left max-w-lg lg:max-w-none">
              We don't just create content.<br className="hidden md:block" />
              We stage worlds.<br className="hidden md:block" />
              We craft experiences that people feel, remember, and<br className="hidden md:block" />
              carry forward.<br className="hidden md:block" />
              Every frame, every word, every campaign is guided by<br />
              a single principle:
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Create;
