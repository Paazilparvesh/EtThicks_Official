import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import frame from "/src/assets/home/frame.png";
import moon from "/src/assets/home/moon2.png";
import face1 from "/src/assets/home/face1.png";
import face2 from "/src/assets/home/face2.png";
import face3 from "/src/assets/home/face3.png";

function Hero2() {
  const circleRef = useRef(null); // circle + arrow
  const flyTextRef = useRef(null); // marquee text

  useEffect(() => {
    // Rotate the circle + arrow continuously
    gsap.to(circleRef.current, {
      rotation: 360,
      duration: 6,
      repeat: -1,
      ease: "linear",
      transformOrigin: "50% 50%",
    });

    // Get circle position
    const rect = circleRef.current.getBoundingClientRect();

    // Animate text continuously like a marquee
    gsap.to(flyTextRef.current, {
      x: 700, // horizontal movement distance
      repeat: -1, // infinite loop
      duration: 3,
      ease: "linear",
      yoyo: false,
      
    });
  }, []);
  

  return (
    <div>
      {/* Background container */}
      <div className="w-full h-[754px] relative bg-black overflow-hidden">
        {/* Decorative elements */}
        <div className="w-full h-[672px] rounded-bl-[128px] bg-[#e59300] rounded-br-[128px] overflow-hidden">
          <div className="w-full h-[708px] bg-[#111111] rounded-bl-[112.50px] rounded-br-[112.50px] z-10" />
          <img
            src={frame}
            className="w-[1377px] h-[762px] left-[-89.25px] top-[458.17px] absolute origin-top-left -rotate-30 overflow-hidden"
          />

          {/* Target line */}
          <div className="w-[2170px] h-9 left-[161px] top-[592px] absolute bg-black rounded-2xl" />

          {/* Rotating Circle + Arrow */}
          <div
            ref={circleRef}
            className="w-32 h-32 left-[75px] top-[508.75px] absolute flex flex-row items-center justify-center"
          >
            <div className="absolute inset-0 bg-sky-900 rounded-full"></div>

            {/* Circular Text */}
            <svg viewBox="0 0 200 200" className="absolute w-full h-full">
              <defs>
                <path
                  id="circlePath"
                  d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                />
              </defs>
              <text
                fill="white"
                fontSize="33"
                fontWeight="500"
                letterSpacing="2px"
              >
                <textPath xlinkHref="#circlePath" startOffset="0" textAnchor="middle">
                  EXPLORE MORE • EXPLORE MORE • EXPLORE MORE
                </textPath>
              </text>
            </svg>

            {/* Center Arrow */}
            <div className="relative">
              <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-t-[18px] border-l-transparent border-r-transparent border-t-yellow-600"></div>
            </div>
          </div>

          {/* Marquee flying text */}
          <div
            ref={flyTextRef}
            className="text-white font-bold text-xl absolute transform transform translate-y-150 transform transform translate-x-40"
            style={{
              left: circleRef.current
                ? circleRef.current.getBoundingClientRect().right + 10
                : 0,
              top: circleRef.current
                ? circleRef.current.getBoundingClientRect().top +
                  circleRef.current.getBoundingClientRect().height / 2 -
                  12
                : 0,
            }}
          >
            Grow with EtThicks
          </div>

          {/* Faces & Stats */}
          <div className="w-[935px] h-[433] left-[935px] top-[433px] absolute">
            <div className="w-32 h-12 left-0 flex">
              <img className="w-12 h-12 rounded-full" src={face1} />
              <img
                className="w-12 h-12 rounded-full outline outline-[1.69px] outline-offset-[-0.84px] outline-neutral-900 -ml-2"
                src={face2}
              />
              <img
                className="w-12 h-12 rounded-full outline outline-[1.69px] outline-offset-[-0.84px] outline-neutral-900 -ml-2"
                src={face3}
              />
            </div>
            <div className="absolute left-[136.51px] top-0 flex text-[#ECECEC] text-[36px] font-medium">
              2k<span className="ml-1 text-[28px]">+</span>
            </div>
            <div className="w-44 h-7 left-[14.25px] top-[68.25px] absolute">
              <div className="absolute left-[15px] text-[#828282] text-lg font-medium">
                Happy Clients
              </div>
              <div className="w-2 h-2 left-0 top-[9.75px] absolute bg-[#FFAE00] rounded-full" />
            </div>
          </div>

          <img
            className="w-[143px] h-[107px] left-[1290px] top-[554px] absolute origin-top-left rotate-360"
            src={moon}
          />
        </div>

        {/* Heading */}
        <div className="w-[768px] left-[75px] top-[181px] absolute justify-start">
          <span className="text-white text-6xl font-semibold font-['Work_Sans'] uppercase leading-[80px] tracking-wider">
            Ettuthikkum
          </span>
          <span className="text-neutral-50 text-6xl font-bold font-['Nunito'] uppercase leading-[80px]">
            {" "}
          </span>
          <span className="text-white text-6xl font-medium font-['Nunito'] leading-[70px] tracking-wide">
            comes
          </span>
          <span className="text-neutral-50 text-6xl font-bold font-['Nunito'] leading-[80px] tracking-wider">
            {" "}
          </span>
          <span className="text-[#e59300] text-6xl font-semibold font-['Work_Sans'] uppercase leading-[80px] tracking-wider">
            EtThicks
          </span>
          <span className="text-neutral-50 text-6xl font-bold font-['Nunito'] leading-[80px] tracking-wider">
            {" "}
          </span>
          <span className="text-white text-6xl font-bold font-['Nunito'] leading-[80px] tracking-wider">
            —{" "}
          </span>
          <span className="text-white text-6xl font-medium font-['Nunito'] leading-[70px] tracking-wide">
            stories that reach everywhere.
          </span>
        </div>

        {/* Button & Description */}
        <div className="w-96 h-44 left-[935px] top-[195px] absolute">
          <div className="w-96 h-14 left-0 top-[128px] absolute">
            <div className="px-9 py-3.5 left-[0.25px] top-[-0.25px] absolute bg-amber-500 rounded-3xl inline-flex justify-center items-center gap-2">
              <div className="justify-start text-white text-xl font-semibold font-['Nunito']">
                Let’s Create Together
              </div>
            </div>
          </div>
          <div className="w-96 left-0 top-0 absolute justify-start text-zinc-500 text-lg font-medium font-['Poppins']">
            Our team of creatives, strategists, and storytellers works closely
            with clients to turn ideas into impactful media that connects with
            real people.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero2;
