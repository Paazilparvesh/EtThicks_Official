import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import frame from "/src/assets/home/frame.png";
import moon from "/src/assets/home/moon2.gif"; // pacman gif
import face1 from "/src/assets/home/face1.png";
import face2 from "/src/assets/home/face2.png";
import face3 from "/src/assets/home/face3.png";

function HeroSection() {
  const circleRef = useRef(null); // circle + arrow
  const flyTextRef = useRef(null); // marquee text
  const pacmanRef = useRef(null); // gif pacman

  useEffect(() => {
    if (window.innerWidth < 640) return; // disable animations on mobile

    // Rotate the circle + arrow continuously
    gsap.to(circleRef.current, {
      rotation: 360,
      duration: 6,
      repeat: -1,
      ease: "linear",
      transformOrigin: "50% 50%",
    });

    // Animate "Grow with EtThicks"
    const text = flyTextRef.current;
    const pacman = pacmanRef.current;

    if (text && pacman) {
      const endX = pacman.offsetLeft + 40;
      const startX = 120;

      gsap.fromTo(
        text,
        { x: startX, opacity: 1 },
        {
          x: endX,
          duration: 5,
          ease: "linear",
          repeat: -1,
          onRepeat: () => gsap.set(text, { opacity: 1 }),
          onUpdate: function () {
            const textX = gsap.getProperty(text, "x");
            if (textX >= endX - 10) {
              gsap.to(text, { opacity: 0, duration: 0.3 });
            }
          },
        }
      );
    }
  }, []);

  return (
    <div className="w-full relative bg-black overflow-hidden">
      {/* Background container */}
      <div className="w-full h-[600px] sm:h-[680px] md:h-[720px] lg:h-[754px] 2xl:h-[900px] relative bg-black overflow-hidden">
        <div className="w-full h-full rounded-bl-[60px] sm:rounded-bl-[80px] md:rounded-bl-[128px] bg-[#e59300] rounded-br-[60px] sm:rounded-br-[80px] md:rounded-br-[128px] overflow-hidden">
          <div className="w-full h-full bg-[#111111] rounded-bl-[60px] sm:rounded-bl-[80px] md:rounded-bl-[112.5px] rounded-br-[60px] sm:rounded-br-[80px] md:rounded-br-[112.5px] z-10" />

          {/* Frame */}
          <img
            src={frame}
            className="absolute origin-top-left -rotate-30 overflow-hidden 
                       w-[600px] sm:w-[800px] md:w-[1377px] 
                       h-[400px] sm:h-[500px] md:h-[762px] 
                       left-[-30px] sm:left-[-50px] md:left-[-89px] 
                       top-[350px] sm:top-[400px] md:top-[458px]"
          />

          {/* Target line */}
          <div className="hidden sm:block w-[1500px] md:w-[2170px] h-6 md:h-9 left-[80px] md:left-[161px] top-[540px] md:top-[592px] absolute bg-black rounded-2xl" />

          {/* Rotating Circle + Arrow (hidden on mobile) */}
          <div
            ref={circleRef}
            className="hidden sm:flex absolute flex-row items-center justify-center 
                       w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 
                       left-[40px] sm:left-[60px] md:left-[75px] 
                       top-[480px] sm:top-[500px] md:top-[508px]"
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
                fontSize="20"
                className="sm:text-[28px] md:text-[33px]"
                fontWeight="500"
                letterSpacing="2px"
              >
                <textPath
                  xlinkHref="#circlePath"
                  startOffset="0"
                  textAnchor="middle"
                >
                  EXPLORE MORE • EXPLORE MORE • EXPLORE MORE
                </textPath>
              </text>
            </svg>

            {/* Center Arrow */}
            <div className="relative">
              <div className="w-0 h-0 border-l-[8px] sm:border-l-[10px] md:border-l-[12px] 
                              border-r-[8px] sm:border-r-[10px] md:border-r-[12px] 
                              border-t-[12px] sm:border-t-[15px] md:border-t-[18px] 
                              border-l-transparent border-r-transparent border-t-yellow-600"></div>
            </div>
          </div>

          {/* Marquee flying text (hidden on mobile) */}
          <div
            ref={flyTextRef}
            className="hidden sm:block text-white font-bold text-sm sm:text-lg md:text-xl 
                       absolute top-[560px] sm:top-[580px] md:top-[600px] 
                       left-[120px]"
          >
            Grow with EtThicks
          </div>

          {/* Faces & Stats */}
          <div
            className="absolute flex sm:flex-row flex-col items-center gap-2 sm:gap-3 
                          left-[20px] sm:left-[60%] md:left-[935px] 
                          top-[360px] sm:top-[400px] md:top-[433px]"
          >
            <div className="flex">
              <img className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full" src={face1} />
              <img
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full outline-[1.5px] outline-neutral-900 -ml-2"
                src={face2}
              />
              <img
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full outline-[1.5px] outline-neutral-900 -ml-2"
                src={face3}
              />
            </div>
            <div className="text-[#ECECEC] text-base sm:text-2xl md:text-[36px] font-medium">
              2k<span className="ml-1 text-sm sm:text-lg md:text-[28px]">+</span>
            </div>
            <div className="text-[#828282] text-sm sm:text-base md:text-lg font-medium">
              Happy Clients
            </div>
          </div>

          {/* Pac-Man Gif (hidden on mobile) */}
          <img
            ref={pacmanRef}
            className="hidden sm:block absolute transform scale-x-[-1] 
                       w-[80px] sm:w-[110px] md:w-[143px] 
                       h-[60px] sm:h-[90px] md:h-[107px] 
                       left-[70%] sm:left-[75%] md:left-[1290px] 
                       top-[520px] sm:top-[540px] md:top-[554px]"
            src={moon}
          />
        </div>

        {/* Heading */}
        <div className="absolute left-[20px] sm:left-[40px] md:left-[75px] 
                        top-[100px] sm:top-[150px] md:top-[181px] 
                        w-[90%] sm:w-[600px] md:w-[768px]">
          <span className="text-white text-2xl sm:text-4xl md:text-6xl font-semibold uppercase leading-snug sm:leading-[60px] md:leading-[80px] tracking-wider">
            Ettuthikkum
          </span>{" "}
          <span className="text-white text-2xl sm:text-4xl md:text-6xl font-medium leading-snug sm:leading-[60px] md:leading-[70px] tracking-wide">
            comes
          </span>{" "}
          <span className="text-[#e59300] text-2xl sm:text-4xl md:text-6xl font-semibold uppercase leading-snug sm:leading-[60px] md:leading-[80px] tracking-wider">
            EtThicks
          </span>{" "}
          <span className="text-white text-2xl sm:text-4xl md:text-6xl font-bold leading-snug sm:leading-[60px] md:leading-[80px] tracking-wider">
            — stories that reach everywhere.
          </span>
        </div>

        {/* Button & Description */}
        <div className="absolute left-[20px] sm:left-[60%] md:left-[935px] 
                        top-[220px] sm:top-[220px] md:top-[195px] 
                        w-[90%] sm:w-[350px] md:w-96">
          <div className="text-zinc-500 text-xs sm:text-base md:text-lg font-medium">
            Our team of creatives, strategists, and storytellers works closely
            with clients to turn ideas into impactful media that connects with
            real people.
          </div>
          <div className="mt-4 sm:mt-6">
            <button className="px-4 sm:px-8 py-2 sm:py-3 bg-amber-500 rounded-3xl text-white text-sm sm:text-lg md:text-xl font-semibold">
              Let’s Create Together
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
