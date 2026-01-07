import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// 🔹 Image imports
import img1 from "/src/assets/Homeconnect/1.png";
import img2 from "/src/assets/Homeconnect/2.png";
import img3 from "/src/assets/Homeconnect/3.png";
import img4 from "/src/assets/Homeconnect/4.png";
import img5 from "/src/assets/Homeconnect/5.png";
import img6 from "/src/assets/Homeconnect/6 .png";
import img7 from "/src/assets/Homeconnect/7.png";
import img8 from "/src/assets/Homeconnect/8.png";
import img9 from "/src/assets/Homeconnect/9.png";
import img10 from "/src/assets/Homeconnect/10.png";

gsap.registerPlugin(ScrollTrigger);

const ConnectSection = () => {
  const pinRef = useRef(null);
  const circleRef = useRef(null);
  const gridRef1 = useRef(null);
  const gridRef2 = useRef(null);
  const gridRef3 = useRef(null);
  const h1Ref = useRef(null);
  const pRef = useRef(null);

  useEffect(() => {
    if (
      !pinRef.current ||
      !circleRef.current ||
      !h1Ref.current ||
      !pRef.current ||
      !gridRef1.current ||
      !gridRef2.current ||
      !gridRef3.current
    )
      return;

    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinRef.current,
          start: "top 200",
          end: isMobile ? "+=150%" : "+=600%",
          scrub: true,
          pin: true,
        },
      });

      gsap.set([gridRef1.current, gridRef2.current, gridRef3.current], {
        autoAlpha: 0,
      });

      tl.fromTo(
        circleRef.current,
        { yPercent: -200, opacity: 0 },
        { yPercent: -40, opacity: 1, ease: "power2.out", duration: 2 }
      );

      tl.to(circleRef.current, { duration: 0.5 });

      tl.to(circleRef.current, {
        scale: isMobile ? 4 : 6,
        ease: "power2.inOut",
        duration: 3,
      });

      tl.fromTo(
        h1Ref.current,
        { opacity: 0, yPercent: -120 },
        { opacity: 1, yPercent: 0, ease: "power2.out", duration: 2 },
        "-=1"
      );

      tl.fromTo(
        pRef.current,
        { opacity: 0, yPercent: 120 },
        { opacity: 1, yPercent: 0, ease: "power2.out", duration: 2 },
        "-=1"
      );

      tl.fromTo(
        gridRef1.current,
        { autoAlpha: 0, yPercent: 50 },
        { autoAlpha: 1, yPercent: 0, duration: 2, ease: "power2.out" }
      ).to(gridRef1.current, {
        autoAlpha: 0,
        yPercent: -50,
        duration: 2,
        ease: "power2.in",
      });

      tl.fromTo(
        gridRef2.current,
        { autoAlpha: 0, yPercent: 50 },
        { autoAlpha: 1, yPercent: 0, duration: 2, ease: "power2.out" }
      ).to(gridRef2.current, {
        autoAlpha: 0,
        yPercent: -50,
        duration: 2,
        ease: "power2.in",
      });

      tl.fromTo(
        gridRef3.current,
        { autoAlpha: 0, yPercent: 50 },
        { autoAlpha: 1, yPercent: 0, duration: 2, ease: "power2.out" }
      ).to(gridRef3.current, {
        autoAlpha: 0,
        yPercent: -50,
        duration: 2,
        ease: "power2.in",
      });

      tl.to(
        [circleRef.current, h1Ref.current, pRef.current],
        { opacity: 0, ease: "power2.in", duration: 2 },
        "-=0"
      );
    }, pinRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full -mb-50 bg-black overflow-hidden relative">
      <div
        ref={pinRef}
        className="w-full min-h-screen flex items-center justify-center relative"
      >
        <div
          ref={circleRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[160%] rounded-full w-[40vw] h-[40vw] md:w-[10vw] md:h-[10vw] shadow-2xl z-10 mt-10"
          style={{
            background: "linear-gradient(135deg, #E59300 0%, #D89F5B 100%)",
          }}
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[75%] text-center px-4 z-20 w-full h-screen md:max-w-2xl lg:max-w-3xl flex flex-col justify-center items-center gap-5 md:mt-10">
          <h1
            ref={h1Ref}
            className="text-white font-medium text-3xl lg:text-4xl xl:text-5xl font-worksans"
          >
            Connect. Build Trust. Grow.
          </h1>

          <p
            ref={pRef}
            className="text-white text-xl xl:text-3xl md:max-w-sm lg:max-w-lg xl:max-w-3xl tracking-wider font-nunito"
          >
            We exist to craft authentic, emotion-driven stories that connect
            people with brands building lasting trust and measurable impact.
          </p>
        </div>

        {/* GRID 1 */}
        <div
          ref={gridRef1}
          className="absolute inset-0 z-30 pointer-events-none grid grid-cols-4 grid-rows-3 w-full min-h-[calc(120vh-20vh)] mt-20 gap-10 mx-10"
        >
          <img
            src={img1}
            className="
              max-w-full h-auto object-contain
              row-start-1 col-start-1
              scale-[1.6] md:scale-100
              translate-x-[20px] translate-y-[-10px]
              sm:translate-x-[40px] sm:translate-y-[-20px]
              md:translate-x-[60px] md:translate-y-[-30px]
              lg:translate-x-[120px] lg:translate-y-[-40px]
              xl:translate-x-[260px] xl:translate-y-[-50px]
            "
          />

          <img
            src={img2}
            className="
              max-w-full h-auto object-contain
              row-start-1 col-start-1
              scale-[1.7] md:scale-100
              translate-x-[260px] translate-y-[40px]
              sm:translate-x-[420px] sm:translate-y-[480px]
              md:translate-x-[490px] md:translate-y-[120px]
              lg:translate-x-[620px] lg:translate-y-[260px]
              xl:translate-x-[1080px] xl:translate-y-[500px]
            "
          />

          <img
            src={img3}
            className="
              max-w-full h-auto object-contain
              row-start-1 col-start-1
              scale-[2.4] md:scale-100
              translate-x-[40px] translate-y-[340px]
              sm:translate-x-[80px] sm:translate-y-[520px]
              md:translate-x-[420px] md:translate-y-[-15px]
              lg:translate-x-[580px] lg:translate-y-[-20px]
              xl:translate-x-[434px] xl:translate-y-[525px]
            "
          />

          <img
            src={img4}
            className="
              max-w-full h-auto object-contain
              row-start-1 col-start-1
              scale-[2.5] md:scale-100
              translate-x-[230px] translate-y-[480px]
              sm:translate-x-[410px] sm:translate-y-[60px]
              md:translate-x-[90px] md:translate-y-[300px]
              lg:translate-x-[120px] lg:translate-y-[420px]
              xl:translate-x-[1050px] xl:translate-y-[40px]
            "
          />
        </div>

        {/* GRID 2 */}
        <div
          ref={gridRef2}
          className="absolute inset-0 z-30 rounded-full pointer-events-none grid grid-cols-4 grid-rows-3 w-full min-h-[calc(100vh-20vh)] mt-20 gap-10 mx-10"
        >
       <img
  src={img5}
  className="
    max-w-full h-auto object-contain
    rounded-2xl
    row-start-1 col-start-1
    scale-[2.1] md:scale-100
    translate-x-[40px] translate-y-[410px]
    sm:translate-x-[320px] sm:translate-y-[-20px]
    md:translate-x-[100px] md:translate-y-[-30px]
    lg:translate-x-[280px] lg:translate-y-[-40px]
    xl:translate-x-[420px] xl:translate-y-[-50px]
  "
/>


          <img
            src={img6}
            className="
              max-w-full h-auto object-contain
              row-start-1 col-start-1
              scale-[2.3] md:scale-100
              translate-x-[230px] translate-y-[480px]
              sm:translate-x-[90px] sm:translate-y-[560px]
              md:translate-x-[480px] md:translate-y-[50px]
              lg:translate-x-[200px] lg:translate-y-[320px]
              xl:translate-x-[1058px] xl:translate-y-[150px]
            "
          />

          <img
            src={img7}
            className="
              max-w-full h-auto object-contain
              row-start-1 col-start-1
              scale-[2.2] md:scale-100
              translate-x-[110px] translate-y-[20px]
              sm:translate-x-[440px] sm:translate-y-[540px]
              md:translate-x-[160px] md:translate-y-[360px]
              lg:translate-x-[700px] lg:translate-y-[80px]
              xl:translate-x-[640px] xl:translate-y-[400px]
            "
          />
        </div>

        {/* GRID 3 */}
        <div
          ref={gridRef3}
          className="absolute inset-0 z-30 pointer-events-none grid grid-cols-4 grid-rows-3 w-full min-h-[calc(100vh-20vh)] mt-20 gap-10 mx-10"
        >
          <img
            src={img8}
            className="
              max-w-full h-auto object-contain
              row-start-1 col-start-1
              scale-[2.4] md:scale-100
              translate-x-[20px] translate-y-[5px]
              sm:translate-x-[340px] sm:translate-y-[15px]
              md:translate-x-[420px] md:translate-y-[30px]
              lg:translate-x-[220px] lg:translate-y-[45px]
              xl:translate-x-[1000px] xl:translate-y-[60px]
            "
          />

          <img
            src={img9}
            className="
              max-w-full h-auto object-contain
              row-start-1 col-start-1
              scale-[2.8] md:scale-100
              translate-x-[110px] translate-y-[440px]
              sm:translate-x-[390px] sm:translate-y-[520px]
              md:translate-x-[10px] md:translate-y-[100px]
              lg:translate-x-[440px] lg:translate-y-[430px]
              xl:translate-x-[580px] xl:translate-y-[460px]
            "
          />

          <img
            src={img10}
            className="
              max-w-full h-auto object-contain
              row-start-1 col-start-1
              scale-[2] md:scale-100 sm:scale-150
              translate-x-[240px] translate-y-[-70px]
              sm:translate-x-[40px] sm:translate-y-[515px]
              md:translate-x-[360px] md:translate-y-[350px]
              lg:translate-x-[700px] lg:translate-y-[-25px]
              xl:translate-x-[224px] xl:translate-y-[-30px]
            "
          />
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;