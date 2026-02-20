import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Pack 1 (Small pieces)
import pockone from "/src/assets/about/pocky one.png";
import pocktwo from "/src/assets/about/pocktwo.png";
import pockthree from "/src/assets/about/pokythree.png";
import pockfour from "/src/assets/about/poky four.png";

// Pack 2 (Big images)
import pokone from "/src/assets/about/pokone.png";
import poktwo from "/src/assets/about/poktwo.png";
import pokthree from "/src/assets/about/pokthree.png";
import pokfour from "/src/assets/about/pokfour.png";

gsap.registerPlugin(ScrollTrigger);

function EntranceAnimation() {
    const wrapperRef = useRef(null);
    const imagesRef = useRef(null);
    const imagesRef2 = useRef(null);
    const circleRef = useRef(null); // circle + arrow
    const flyTextRef = useRef(null); // marquee text

    const [visible, setVisible] = useState(true);

    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    useEffect(() => {
        // Rotate circle
        gsap.to(circleRef.current, {
            rotation: 360,
            duration: 10,
            repeat: -1,
            ease: "linear",
            transformOrigin: "50% 50%",
        });

        // Marquee animation (LEFT ➜ RIGHT)
        const marquee = flyTextRef.current;

        if (marquee) {
            const totalWidth = marquee.scrollWidth / 2;

            // Start off-screen left
            gsap.set(marquee, { x: -totalWidth });

            gsap.to(marquee, {
                x: 0,
                duration: 40,
                ease: "linear",
                repeat: -1,
            });
        }
    }, []);

    // useEffect(() => {
    //     if (!wrapperRef.current) return;
    //     const mm = gsap.matchMedia();

    //     mm.add(
    //         {
    //             isDesktop: "(min-width: 1024px)",
    //             isTablet: "(min-width: 768px) and (max-width: 1023px)",
    //             isMobile: "(max-width: 767px)",
    //         },
    //         (context) => {
    //             const { isDesktop, isTablet } = context.conditions;
    //             const tl = gsap.timeline({
    //                 scrollTrigger: {
    //                     trigger: wrapperRef.current,
    //                     start: isDesktop ? "top top" : isTablet ? "top top" : "top top", // mobile
    //                     end: isDesktop
    //                         ? "bottom center"
    //                         : isTablet
    //                             ? "bottom center"
    //                             : "bottom center",
    //                     pin: true,
    //                 },
    //             });

    //             gsap.set(".pack1-left", {
    //                 rotation: -225,
    //                 transformOrigin: "50% 50%",
    //                 ease: "power2.inOut",
    //             });

    //             gsap.set(".pack1-top", {
    //                 rotation: 145,
    //                 transformOrigin: "50% 50%",
    //                 ease: "power2.inOut",
    //             });

    //             gsap.set(".pack1-bottom", {
    //                 rotation: -125,
    //                 transformOrigin: "50% 50%",
    //                 ease: "power2.inOut",
    //             });

    //             gsap.set(".pack1-right", {
    //                 rotation: 45,
    //                 transformOrigin: "50% 50%",
    //                 ease: "power2.inOut",
    //             });

    //             const moveX = isDesktop ? 1 : 2;
    //             const moveY = isDesktop ? 2 : 1;

    //             /* ===== PACK 1 (OUTWARD) ===== */
    //             // For Mobile
    //             tl.to(
    //                 ".pack1-left",
    //                 { x: (-window.innerWidth * moveX) / 10, duration: 2, scale: 2 },
    //                 1,
    //             );
    //             tl.to(
    //                 ".pack1-top",
    //                 { y: (-window.innerHeight * moveY) / 10, duration: 2, scale: 2 },
    //                 1,
    //             );
    //             tl.to(
    //                 ".pack1-right",
    //                 { x: (window.innerWidth * moveX) / 10, duration: 2, scale: 2 },
    //                 1,
    //             );
    //             tl.to(
    //                 ".pack1-bottom",
    //                 { y: (window.innerHeight * moveY) / 10, duration: 2, scale: 2 },
    //                 1,
    //             );

    //             gsap.to(".pack1-left", {
    //                 rotation: -45,
    //                 transformOrigin: "50% 50%",
    //                 duration: 1,
    //                 ease: "power2.inOut",
    //             });

    //             gsap.to(".pack1-top", {
    //                 rotation: -45,
    //                 transformOrigin: "50% 50%",
    //                 duration: 1,
    //                 ease: "power2.inOut",
    //             });

    //             gsap.to(".pack1-bottom", {
    //                 rotation: 45,
    //                 transformOrigin: "50% 50%",
    //                 duration: 1,
    //                 ease: "power2.inOut",
    //             });

    //             gsap.to(".pack1-right", {
    //                 rotation: -140,
    //                 transformOrigin: "50% 50%",
    //                 duration: 1,
    //                 ease: "power2.inOut",
    //             });

    //             /* ===== PACK 2 (COME IN) ===== */
    //             tl.fromTo(
    //                 ".image-left",
    //                 { x: -window.innerWidth / 2 - 100, opacity: 0, scale: 1 },
    //                 { x: 0, opacity: 1, scale: 1, duration: 2 },
    //                 1,
    //             );

    //             tl.fromTo(
    //                 ".image-top",
    //                 { y: -window.innerHeight / 2 - 100, opacity: 0, scale: 0.5 },
    //                 { y: 0, opacity: 1, scale: 1, duration: 2 },
    //                 1,
    //             );

    //             tl.fromTo(
    //                 ".image-right",
    //                 { x: window.innerWidth / 2 + 100, opacity: 0, scale: 0.5 },
    //                 { x: 0, opacity: 1, scale: 1, duration: 2 },
    //                 1,
    //             );

    //             tl.fromTo(
    //                 ".image-bottom",
    //                 { y: window.innerHeight / 2 + 100, opacity: 0, scale: 0.5 },
    //                 { y: 0, opacity: 1, scale: 1, duration: 2 },
    //                 1,
    //             );

    //             /* ===== SCALE UP ===== */
    //             tl.to(imagesRef.current, { scale: 25, duration: 3 }, 3);

    //             tl.to(imagesRef2.current, { scale: 25, duration: 3 }, 3);

    //             gsap.to(wrapperRef.current, {
    //                 opacity: 0,
    //                 duration: 1,
    //                 delay: 4,
    //                 onComplete: () => setVisible(false),
    //             });

    //             return () => {
    //                 tl.kill();
    //             };
    //         },
    //         wrapperRef,
    //     );

    //     return () => mm.revert();
    // }, []);

    useEffect(() => {
        if (!wrapperRef.current) return;

        const tl = gsap.timeline({
            onComplete: () => {
                gsap.to(wrapperRef.current, {
                    opacity: 0,
                    duration: 0.8,
                    onComplete: () => {
                        document.body.style.overflow = "auto";
                        setVisible(false);
                    },
                });
            },
        });

        // const tl = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: wrapperRef.current,
        //         start: isDesktop ? "top top" : isTablet ? "top top" : "top top", // mobile
        //         end: isDesktop
        //             ? "bottom center"
        //             : isTablet
        //                 ? "bottom center"
        //                 : "bottom center",
        //         pin: true,
        //     },
        // });

        gsap.set(".pack1-left", {
            rotation: -225,
            transformOrigin: "50% 50%",
            ease: "power2.inOut",
        });

        gsap.set(".pack1-top", {
            rotation: 145,
            transformOrigin: "50% 50%",
            ease: "power2.inOut",
        });

        gsap.set(".pack1-bottom", {
            rotation: -125,
            transformOrigin: "50% 50%",
            ease: "power2.inOut",
        });

        gsap.set(".pack1-right", {
            rotation: 45,
            transformOrigin: "50% 50%",
            ease: "power2.inOut",
        });

        // const moveX = isDesktop ? 1 : 2;
        // const moveY = isDesktop ? 2 : 1;

        const moveX = 1;
        const moveY = 2;

        /* ===== PACK 1 (OUTWARD) ===== */
        // For Mobile
        tl.to(
            ".pack1-left",
            { x: (-window.innerWidth * moveX) / 10, duration: 2, scale: 2 },
            1,
        );
        tl.to(
            ".pack1-top",
            { y: (-window.innerHeight * moveY) / 10, duration: 2, scale: 2 },
            1,
        );
        tl.to(
            ".pack1-right",
            { x: (window.innerWidth * moveX) / 10, duration: 2, scale: 2 },
            1,
        );
        tl.to(
            ".pack1-bottom",
            { y: (window.innerHeight * moveY) / 10, duration: 2, scale: 2 },
            1,
        );

        gsap.to(".pack1-left", {
            rotation: -45,
            transformOrigin: "50% 50%",
            duration: 1,
            ease: "power2.inOut",
        });

        gsap.to(".pack1-top", {
            rotation: -45,
            transformOrigin: "50% 50%",
            duration: 1,
            ease: "power2.inOut",
        });

        gsap.to(".pack1-bottom", {
            rotation: 45,
            transformOrigin: "50% 50%",
            duration: 1,
            ease: "power2.inOut",
        });

        gsap.to(".pack1-right", {
            rotation: -140,
            transformOrigin: "50% 50%",
            duration: 1,
            ease: "power2.inOut",
        });

        /* ===== PACK 2 (COME IN) ===== */
        tl.fromTo(
            ".image-left",
            { x: -window.innerWidth / 2 - 100, opacity: 0, scale: 1 },
            { x: 0, opacity: 1, scale: 1, duration: 2 },
            1,
        );

        tl.fromTo(
            ".image-top",
            { y: -window.innerHeight / 2 - 100, opacity: 0, scale: 0.5 },
            { y: 0, opacity: 1, scale: 1, duration: 2 },
            1,
        );

        tl.fromTo(
            ".image-right",
            { x: window.innerWidth / 2 + 100, opacity: 0, scale: 0.5 },
            { x: 0, opacity: 1, scale: 1, duration: 2 },
            1,
        );

        tl.fromTo(
            ".image-bottom",
            { y: window.innerHeight / 2 + 100, opacity: 0, scale: 0.5 },
            { y: 0, opacity: 1, scale: 1, duration: 2 },
            1,
        );

        /* ===== SCALE UP ===== */
        tl.to(imagesRef.current, { scale: 25, duration: 3 }, 3);

        tl.to(imagesRef2.current, { scale: 25, duration: 3 }, 3);

        gsap.to(wrapperRef.current, {
            opacity: 0,
            duration: 2,
            delay: 2.5,
            onComplete: () => setVisible(false),
        });

        return () => {
            tl.kill();
        };
        // },
        //     wrapperRef,
        // );

        // return () => mm.revert();
    }, []);



    if (!visible) return null;


    return (
        <div className="fixed inset-0 z-999 overflow-hidden h-screen w-full">
            <div
                ref={wrapperRef}
                className="w-full min-h-screen relative overflow-hidden"
            >
                {/* ===== PACK 1 ===== */}
                <div
                    ref={imagesRef2}
                    className="pack1-container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-12 h-12 rotate-45"
                >
                    <img
                        src={pockone}
                        className="pack1 pack1-left absolute origin-center size-6"
                        alt="Pack piece 1"
                    />
                    <img
                        src={pocktwo}
                        className="pack1 pack1-top absolute origin-center size-6"
                        alt="Pack piece 2"
                    />
                    <img
                        src={pockthree}
                        className="pack1 pack1-right absolute origin-center size-6"
                        alt="Pack piece 3"
                    />
                    <img
                        src={pockfour}
                        className="pack1 pack1-bottom absolute origin-center size-6"
                        alt="Pack piece 4"
                    />
                </div>

                {/* ===== PACK 2 ===== */}
                <div
                    ref={imagesRef}
                    className="images-container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px]"
                >
                    <img
                        src={pokone}
                        className="image-piece image-left absolute "
                        alt="Image piece 1"
                    />
                    <img
                        src={poktwo}
                        className="image-piece image-top absolute"
                        alt="Image piece 2"
                    />
                    <img
                        src={pokthree}
                        className="image-piece image-right absolute"
                        alt="Image piece 3"
                    />
                    <img
                        src={pokfour}
                        className="image-piece image-bottom absolute"
                        alt="Image piece 4"
                    />
                </div>
            </div>

            <style>{`
        .pack1-left {
          top: 50%;
          left: 0;
          transform: translate(-50%, -50%);
        }
        .pack1-top {
          top: 0;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .pack1-right {
          top: 50%;
          right: 0;
          transform: translate(50%, -50%);
        }
        .pack1-bottom {
          bottom: 0;
          left: 50%;
          transform: translate(-50%, 50%);
        }

        /* ===== PACK 2 ===== */
        .image-left {
          top: 50%;
          left: 0;
          transform: translate(-70%, -50%);
        }
        .image-top {
          top: 17%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .image-right {
          top: 50%;
          right: 0;
          transform: translate(50%, -50%);
        }
        .image-bottom {
          bottom: 0;
          left: 50%;
          transform: translate(-50%, 50%);
        }
      `}</style>
        </div>
    );
}

export default EntranceAnimation;
