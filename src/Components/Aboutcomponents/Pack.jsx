import { useEffect, useRef } from "react";
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

function Pack() {
  const wrapperRef = useRef(null);
  const imagesRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top center",
          end: "bottom+=3500 center",
          scrub: 2,
          markers: true,
        },
      });

      /* ===== PACK 1 (OUTWARD) ===== */
      tl.to(".pack1-left", { x: -window.innerWidth / 2, duration: 1 }, 0);
      tl.to(".pack1-top", { y: -window.innerHeight / 2, duration: 1 }, 0);
      tl.to(".pack1-right", { x: window.innerWidth / 2, duration: 1 }, 0);
      tl.to(".pack1-bottom", { y: window.innerHeight / 2, duration: 1 }, 0);

      /* ===== PACK 2 (UNCHANGED) ===== */
      tl.fromTo(".image-left",
        { x: -window.innerWidth / 2 - 100, opacity: 0, scale: 0.5 },
        { x: 0, opacity: 1, scale: 1, duration: 1.5 }, 1
      );

      tl.fromTo(".image-top",
        { y: -window.innerHeight / 2 - 100, opacity: 0, scale: 0.5 },
        { y: 0, opacity: 1, scale: 1, duration: 1.5 }, 1.1
      );

      tl.fromTo(".image-right",
        { x: window.innerWidth / 2 + 100, opacity: 0, scale: 0.5 },
        { x: 0, opacity: 1, scale: 1, duration: 1.5 }, 1.2
      );

      tl.fromTo(".image-bottom",
        { y: window.innerHeight / 2 + 100, opacity: 0, scale: 0.5 },
        { y: 0, opacity: 1, scale: 1, duration: 1.5 }, 1.3
      );

      tl.to(imagesRef.current, { scale: 25, duration: 3 }, 3);

      tl.fromTo(headingRef.current,
        { scale: 0.5, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5 }, 3.5
      );

      tl.fromTo(descriptionRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5 }, 3.8
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-screen h-[450vh] bg-black overflow-hidden">
      <div
        ref={wrapperRef}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full"
      >

        {/* ===== PACK 1 ===== */}
        <div className="pack1-container">
          <img src={pockone} className="pack1 pack1-left" />
          <img src={pocktwo} className="pack1 pack1-top" />
          <img src={pockthree} className="pack1 pack1-right" />
          <img src={pockfour} className="pack1 pack1-bottom" />
        </div>

        {/* ===== PACK 2 ===== */}
        <div ref={imagesRef} className="images-container">
          <img src={pokone} className="image-piece image-left" />
          <img src={poktwo} className="image-piece image-top" />
          <img src={pokthree} className="image-piece image-right" />
          <img src={pokfour} className="image-piece image-bottom" />
        </div>

        {/* ===== TEXT ===== */}
        <div className="text-content">
          <h2 ref={headingRef} className="text-6xl font-bold mb-8 opacity-0">
            <span className="text-white">About </span>
            <span className="text-[#FFA500]">Us</span>
          </h2>

          <p ref={descriptionRef} className="text-white text-xl opacity-0 max-w-4xl">
           EtThicks is not just another digital agency — we're a storytelling powerhouse rooted in truth, trust, and transformation. Born from the Tamil word “Ettuthikkum”, meaning to reach in all eight directions, we specialize in content that carries your brand farther — emotionally, culturally, and commercially..
          </p>
        </div>
      </div>

      <style>{`
        /* ===== PACK 1 (CORRECT CENTER FLOWER) ===== */
        .pack1-container {
          position: absolute;
          width: 56px;
          height: 56px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 10;
        }

        .pack1 {
          position: absolute;
          width: 22px;
          height: 22px;
        }

        .pack1-left   { top: 50%; left: 0; transform: translate(-50%, -50%); }
        .pack1-top    { top: 0; left: 50%; transform: translate(-50%, -50%); }
        .pack1-right  { top: 50%; right: 0; transform: translate(50%, -50%); }
        .pack1-bottom { bottom: 0; left: 50%; transform: translate(-50%, 50%); }

        /* ===== PACK 2 (UNTOUCHED) ===== */
        .images-container {
          position: absolute;
          width: 300px;
          height: 300px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .image-piece {
          position: absolute;
          width: 100px;
          height: 100px;
        }

        .image-left { top: 50%; left: 0; transform: translate(-70%, -50%); }
        .image-top { top: 17%; left: 50%; transform: translate(-50%, -50%); }
        .image-right { top: 50%; right: 0; transform: translate(50%, -50%); }
        .image-bottom { bottom: 0; left: 50%; transform: translate(-50%, 50%); }

        .text-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          z-index: 20;
        }
      `}</style>
    </div>
  );
}

export default Pack;
