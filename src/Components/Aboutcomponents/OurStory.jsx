import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image1 from "/src/assets/about/poky.png";

function OurStory() {
  const imageRef = useRef(null);

  useEffect(() => {
    if (!imageRef.current) return;

    // Start exactly at CSS position
    gsap.set(imageRef.current, {
      y: 0,
    });

    // Vertical up & down movement only
    const anim = gsap.to(imageRef.current, {
      y: -40,          // move UP (negative = up)
      duration: 2.5,   // smooth speed
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,      // go back DOWN
    });

    return () => anim.kill();
  }, []);



  return (
    <>
      <div className="w-full bg-black py-12 lg:py-20 lg:pb-32 px-4 md:px-8 lg:px-12 xl:px-0">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-center gap-8 lg:gap-20 xl:gap-40 ">

          {/* Image Section - Mobile first */}
          <div className="w-full lg:w-1/3 order-2 lg:order-1 xl:pt-40">
            <img
              ref={imageRef}
              src={Image1}
              alt="Illustrator"
              className="w-[80%] sm:w-full h-auto object-contain lg:scale-150 mx-auto sm:-ml-16 sm:px-40 lg:px-0"
            />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left order-1 lg:order-2">
            <h1 className="leading-none mb-4 md:mb-6 text-5xl sm:text-7xl lg:text-7xl xl:text-[152px]">
              <span className=" text-[#FFAE00] font-semibold uppercase font-worksans ">
                our{" "}
              </span>
              <span className=" text-[#ffffff] font-semibold uppercase font-worksans">
                story
              </span>
            </h1>

            <h2 className="text-gray-300 text-lg lg:text-xl xl:text-2xl font-normal leading-relaxed tracking-wide max-w-2xl lg:max-w-4xl xl:max-w-8xl mx-auto lg:mx-0 font-nunito">
              It began with a spark. A thought. A question: "What if stories
              could travel?" From that spark, EtThicks came to life. Not in a
              boardroom. Not from a brief. But where creativity meets
              obsession, where curiosity refuses to be silent. Eight directions.
              Eight paths. Eight ways a story can move.
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurStory;
