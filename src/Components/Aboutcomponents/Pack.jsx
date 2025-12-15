import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import pokone from "/src/assets/about/pokone.png";
import poktwo from "/src/assets/about/poktwo.png";
import pokthree from "/src/assets/about/pokthree.png";
import pokfour from "/src/assets/about/pokfour.png";

gsap.registerPlugin(ScrollTrigger);

function Pack() {
  const wrapperRef = useRef(null);
  const imagesRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top center",
          end: "bottom+=1500 center",
          scrub: 2,
          markers: true, // remove in production
        },
      });

      // Phase 1: Move yellow pieces to corners and fade out (0-25%)
      tl.to(".piece", {
        x: (index) => {
          const positions = [
            -window.innerWidth / 2 + 10,  // top-left
            window.innerWidth / 2 - 30,   // top-right
            -window.innerWidth / 2 + 10,  // bottom-left
            window.innerWidth / 2 - 30,   // bottom-right
          ];
          return positions[index];
        },
        y: (index) => {
          const positions = [
            -window.innerHeight / 2 + 10, // top-left
            -window.innerHeight / 2 + 10, // top-right
            window.innerHeight / 2 - 30,  // bottom-left
            window.innerHeight / 2 - 30,  // bottom-right
          ];
          return positions[index];
        },
        opacity: 0,
        ease: "power1.inOut",
        duration: 1,
      }, 0);

      // Phase 2: Bring images from edges to center (25-50%)
      tl.fromTo(".image-piece",
        {
          x: (index) => {
            const positions = [
              -window.innerWidth / 2,  // pokone left
              0,                        // poktwo top
              window.innerWidth / 2,   // pokthree right
              0,                        // pokfour bottom
            ];
            return positions[index];
          },
          y: (index) => {
            const positions = [
              0,                        // pokone left
              -window.innerHeight / 2, // poktwo top
              0,                        // pokthree right
              window.innerHeight / 2,  // pokfour bottom
            ];
            return positions[index];
          },
          opacity: 0,
          scale: 0.5,
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
          scale: 1,
          ease: "power2.out",
          duration: 1.5,
          stagger: 0.1,
        }, 1);

      // Phase 3: Scale up and fade out images (50-65%)
      tl.to(".image-piece", {
        scale: 1.5,
        opacity: 0,
        duration: 0.8,
      }, 2.5);

      // Phase 4: Show and scale text (65-100%)
      tl.fromTo(textRef.current,
        {
          opacity: 0,
          scale: 0.8,
        },
        {
          opacity: 1,
          scale: 1,
          ease: "power2.out",
          duration: 1,
        }, 3.3)
        .to(textRef.current, {
          scale: 1.1,
          ease: "power1.inOut",
          duration: 1,
        }, 4);

    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-screen h-[300vh] flex items-center justify-center bg-black overflow-hidden">
      <div ref={wrapperRef} className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        
        {/* Yellow pack pieces */}
        <div className="pack-wrapper">
          <div className="piece top-left"></div>
          <div className="piece top-right"></div>
          <div className="piece bottom-left"></div>
          <div className="piece bottom-right"></div>
        </div>

        {/* Four images - positioned like in your image */}
        <div ref={imagesRef} className="images-container">
          <img src={pokone} alt="" className="image-piece image-left" />
          <img src={poktwo} alt="" className="image-piece image-top" />
          <img src={pokthree} alt="" className="image-piece image-right" />
          <img src={pokfour} alt="" className="image-piece image-bottom" />
        </div>

        {/* About Us Text */}
        <div ref={textRef} className="text-content">
          <h2 className="text-5xl font-bold text-[#FFD400] mb-6">About Us</h2>
          <p className="text-white text-lg leading-relaxed max-w-3xl">
            EtThicks is not just another digital agency — we're a storytelling powerhouse 
            rooted in truth, trust, and transformation. Born from the Tamil word "Ettuthikkum", 
            meaning to reach in all eight directions, we specialize in content that carries 
            your brand farther — emotionally, culturally, and commercially.
          </p>
        </div>
      </div>

      <style>{`
        .pack-wrapper {
          width: 48px;
          height: 48px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .piece {
          width: 20px;
          height: 20px;
          background: #FFD400;
          position: absolute;
        }

        .top-left {
          top: 0;
          left: 0;
          border-bottom-right-radius: 100%;
        }

        .top-right {
          top: 0;
          right: 0;
          border-bottom-left-radius: 100%;
        }

        .bottom-left {
          bottom: 0;
          left: 0;
          border-top-right-radius: 100%;
        }

        .bottom-right {
          bottom: 0;
          right: 0;
          border-top-left-radius: 100%;
        }

        .images-container {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 300px;
          height: 300px;
        }

        .image-piece {
          position: absolute;
          width: 100px;
          height: 100px;
          object-fit: contain;
        }

        /* pokone - Left */
        .image-left {
          top: 50%;
          left: 0;
          transform: translate(-50%, -50%);
        }

        /* poktwo - Top */
        .image-top {
          top: 0;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        /* pokthree - Right */
        .image-right {
          top: 50%;
          right: 0;
          transform: translate(50%, -50%);
        }

        /* pokfour - Bottom */
        .image-bottom {
          bottom: 0;
          left: 50%;
          transform: translate(-50%, 50%);
        }

        .text-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          opacity: 0;
          padding: 2rem;
        }
      `}</style>
    </div>
  );
}

export default Pack;
