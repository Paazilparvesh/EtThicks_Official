// import pack from "/src/assets/Gif/Pacman.gif";

// function Creative() {
//     return (
//         <>
//             <section
//                 className="relative w-full min-h-[calc(100vh-18vh)]  flex flex-col items-center overflow-hidden"
//                 style={{
//                     background: 'radial-gradient(ellipse at center, #072a31, #000000)'
//                 }}
//             >
//                 {/* Main Content Area with Pacman GIFs */}
//                 <div className="relative w-full flex-1 flex items-strecth justify-center px-4 sm:px-0">

//                     {/* Left Pacman GIF with Blur Effect */}
//                     <div className="absolute -top-10 left-0 lg:-left-80 opacity-24 md:top-1/2 -translate-y-1/2 lg:block rotate-90 md:rotate-0 ">
//                         <div className="relative">
//                             <img
//                                 src={pack}
//                                 alt="Pacman Left"
//                                 className="size-120 md:size-70 lg:size-110 xl:size-130 object-contain scale-150 relative z-10"
//                             />
//                         </div>
//                     </div>

//                     {/* Center Content Container */}
//                     <div className="flex-1 relative flex flex-col items-center justify-center z-10 w-full mx-auto text-center space-y-4 sm:space-y-6 px-4 sm:px-6  ">

//                         {/* Main Heading */}
//                         <h1 className="text-white font-normal text-3xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-5xl leading-tight font-worksans">
//                             To Be the <span className="text-[#D89F5B]">Creative</span> Force Behind Brands<br className="hidden sm:block" />
//                             That <span className="text-[#D89F5B]">Travel the World</span>
//                         </h1>

//                         {/* Description */}
//                         <p className="text-white  font-light text-md sm:text-lg md:text-xl lg:text-2xl leading-relaxed tracking-wider max-w-xl  mx-auto font-nunito">
//                             We aim to take brands in all eight directions expanding
//                             their reach while making them trusted, impactful, and
//                             unforgettable.
//                         </p>
//                     </div>

//                     {/* Right Pacman GIF with Blur Effect */}
//                     <div className="absolute -bottom-128 md:bottom-0 lg:-bottom-50 xl:-bottom-45 opacity-24 right-0 lg:-right-80 md:top-1/2 -translate-y-1/2 -rotate-90 md:rotate-0 ">
//                         <div className="relative">
//                             {/* Blur background layer */}
//                             <img
//                                 src={pack}
//                                 alt="Pacman Right"
//                                 className="size-120 md:size-70 lg:size-110 xl:size-130 object-contain md:scale-x-[-1.5] transform scale-150 relative z-10"
//                             />
//                         </div>
//                     </div>

//                 </div>
//             </section>

//         </>
//     );
// }

// export default Creative;
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ash from "/src/assets/home/mash.png";
import sat from "/src/assets/home/star.png";
import cur from "/src/assets/home/Group.png";
import luf from "/src/assets/home/left.png";
import gow from "/src/assets/home/Grou.png";

// Register the GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function Creative() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const shapes = gsap.utils.toArray(".background-shape");

        const uniqueRotations = [180, -270, 360, 270, -180];

        ScrollTrigger.matchMedia({
            // ---------------------------------------
            // DESKTOP (sm and above)
            // ---------------------------------------
            "(min-width: 640px)": () => {
                shapes.forEach((shape, i) => {
                    gsap.fromTo(
                        shape,
                        { rotation: 0 },
                        {
                            rotation: uniqueRotations[i % uniqueRotations.length],
                            ease: "none",
                            scrollTrigger: {
                                trigger: sectionRef.current,
                                start: "top bottom",
                                end: "bottom top",
                                scrub: 1 + i * 0.3,
                            },
                        }
                    );
                });
            },

            // ---------------------------------------
            // MOBILE (below sm)
            // ---------------------------------------
            "(max-width: 639px)": () => {
                shapes.forEach((shape, i) => {
                    gsap.fromTo(
                        shape,
                        { rotation: 0 },
                        {
                            rotation: uniqueRotations[i % uniqueRotations.length],
                            ease: "none",
                            scrollTrigger: {
                                trigger: sectionRef.current,
                                start: "bottom 90%",
                                end: "+=150%",
                                scrub: 0.5,
                            },
                        }
                    );
                });
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <>
            <section
                ref={sectionRef}
                className="relative w-full min-h-[calc(100vh-18vh)] flex flex-col items-center justify-center overflow-hidden"
                style={{
                    background: 'radial-gradient(ellipse at center, #072a31, #000000)'
                }}
            >
                {/* Animated background shapes - Desktop layout */}
                <div className="hidden sm:flex absolute inset-0 z-0 items-center justify-center gap-10 lg:gap-15 xl:gap-20 px-4 md:px-8 pointer-events-none">
                    <img src={luf} alt="Left shape" className="background-shape sm:size-28 lg:size-48 xl:size-60 opacity-16 object-contain" />
                    <img src={sat} alt="Background star" className="background-shape sm:size-28 lg:size-48 xl:size-60 opacity-16 object-contain" />
                    <img src={cur} alt="Background circle" className="background-shape sm:size-28 lg:size-48 xl:size-60 opacity-16 object-contain" />
                    <img src={ash} alt="Background shape" className="background-shape sm:size-28 lg:size-48 xl:size-60 opacity-16 object-contain" />
                    <img src={gow} alt="Background group" className="background-shape sm:size-28 lg:size-48 xl:size-60 opacity-16 object-contain" />
                </div>

                {/* Animated background shapes - Mobile layout */}
                <div className="sm:hidden absolute inset-0 flex flex-col items-center justify-center gap-15 opacity-20 pointer-events-none">
                    <img src={ash} alt="Left shape" className="background-shape size-32 object-contain" />
                    <img src={sat} alt="Background star" className="background-shape size-32 object-contain" />
                    <img src={cur} alt="Background shape" className="background-shape size-32 object-contain" />
                    <img src={luf} alt="Background group" className="background-shape size-32 object-contain" />
                </div>

                {/* Center Content Container */}
                <div className="relative z-10 flex-1 flex flex-col items-center justify-center w-full mx-auto text-center space-y-4 sm:space-y-6 px-4 sm:px-6">
                    {/* Main Heading */}
                    <h1 className="text-white font-normal text-3xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-5xl leading-tight font-worksans">
                        To Be the <span className="text-[#D89F5B]">Creative</span> Force Behind Brands<br className="hidden sm:block" />
                        That <span className="text-[#D89F5B]">Travel the World</span>
                    </h1>

                    {/* Description */}
                    <p className="text-white font-light text-md sm:text-lg md:text-xl lg:text-2xl leading-relaxed tracking-wider max-w-xl mx-auto font-nunito">
                        We aim to take brands in all eight directions expanding
                        their reach while making them trusted, impactful, and
                        unforgettable.
                    </p>
                </div>
            </section>
        </>
    );
}

export default Creative;