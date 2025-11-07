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
    // First section animation
    const image1 = imageRef1.current;
    const section1 = sectionRef1.current;

    if (image1 && section1) {
      const rotationAnimation1 = gsap.fromTo(image1,
        {
          rotation: 0,
        },
        {
          rotation: 360,
          ease: "power1.out",
          scrollTrigger: {
            trigger: section1,
            start: "top center",
            end: "bottom center",
            scrub: true,
            markers: false,
          }
        }
      );

      // Clean up for first section
      return () => {
        rotationAnimation1.kill();
      };
    }
  }, []);

  useEffect(() => {
    // Second section animation
    const image2 = imageRef2.current;
    const section2 = sectionRef2.current;

    if (image2 && section2) {
      const rotationAnimation2 = gsap.fromTo(image2,
        {
          rotation: 0,
        },
        {
          rotation: -360, // Rotate counter-clockwise for variety
          ease: "power1.out",
          scrollTrigger: {
            trigger: section2,
            start: "top center",
            end: "bottom center",
            scrub: true,
            markers: false,
          }
        }
      );

      // Clean up for second section
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
        className="flex h-[523px] w-full bg-[#000000] items-center"
      >
        {/* Left Text Section */}
        <div className="w-[50%] flex justify-end">
          <h1 className="text-[#ffffff] text-[20px] leading-relaxed text-right">
            We don't just create content.<br />
            We stage worlds.<br />
            We craft experiences that people feel, remember, and<br />
            carry forward.<br />
            Every frame, every word, every campaign is guided by<br />
            a single principle:
          </h1>
        </div>

        {/* Right Image Section */}
        <div className="w-[50%] flex items-center justify-center">
          <img
            ref={imageRef1}
            src={pac}
            alt="pac"
            className="object-contain w-[50%] h-auto"
          />
        </div>
      </div>

      {/* Section 2 */}
      <div 
        ref={sectionRef2}
        className="h-[637px] w-full bg-[#000000] flex items-center"
      >
        <div className='w-full flex items-center justify-between px-8'>
          {/* Left Image Section */}
          <div className='w-[50%] flex items-center justify-center'>
            <img 
              ref={imageRef2}
              src={red}
              alt="red"
              className='object-contain w-[50%] h-auto'
            />
          </div>
          
          {/* Right Text Section */}
          <div className="w-[50%] flex justify-start">
            <h1 className="text-[#ffffff] text-[20px] leading-relaxed text-left">
              We don't just create content.<br />
              We stage worlds.<br />
              We craft experiences that people feel, remember, and<br />
              carry forward.<br />
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