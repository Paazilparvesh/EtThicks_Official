import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

function Abouthead() {
  const mainRef = useRef(null);
  const canvasRef = useRef(null);
  const lenisRef = useRef(null);
  const tickerCallbackRef = useRef(null);

  const frameCount = 387; // 00216386 - 00216000 + 1
  const startFrame = 216000;

  useEffect(() => {
    // Init Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
    });

    lenisRef.current = lenis;

    // Sync Lenis with ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Ticker callback (store reference for cleanup)
    const tickerCallback = (time) => {
      lenis.raf(time * 1000);
    };
    tickerCallbackRef.current = tickerCallback;

    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const context = canvas.getContext("2d");

      const setCanvasSize = () => {
        const pixelRatio = window.devicePixelRatio || 1;
        canvas.width = window.innerWidth * pixelRatio;
        canvas.height = window.innerHeight * pixelRatio;
        canvas.style.width = window.innerWidth + "px";
        canvas.style.height = window.innerHeight + "px";
        context.setTransform(1, 0, 0, 1, 0, 0);
        context.scale(pixelRatio, pixelRatio);
      };

      setCanvasSize();

      // Frame path generator
      const currentFrame = (index) =>
        `/frames/Timeline 1_${(startFrame + index)
          .toString()
          .padStart(8, "0")}.png`;

      const images = [];
      const videoFrames = { frame: 0 };

      const render = () => {
        const pixelRatio = window.devicePixelRatio || 1;
        const canvasWidth = canvas.width / pixelRatio;
        const canvasHeight = canvas.height / pixelRatio;

        context.clearRect(0, 0, canvas.width, canvas.height);
        const img = images[videoFrames.frame];

        if (img?.complete && img.naturalWidth > 0) {
          const imageAspect = img.naturalWidth / img.naturalHeight;
          const canvasAspect = canvasWidth / canvasHeight;

          let drawWidth, drawHeight, drawX, drawY;

          if (imageAspect > canvasAspect) {
            drawHeight = canvasHeight;
            drawWidth = drawHeight * imageAspect;
            drawX = (canvasWidth - drawWidth) / 2;
            drawY = 0;
          } else {
            drawWidth = canvasWidth;
            drawHeight = drawWidth / imageAspect;
            drawX = 0;
            drawY = (canvasHeight - drawHeight) / 2;
          }

          context.drawImage(img, drawX, drawY, drawWidth, drawHeight);
        }
      };

      // Load first frame
      const firstImage = new Image();
      firstImage.src = currentFrame(0);
      firstImage.onload = () => {
        images[0] = firstImage;
        render();
      };

      // Preload remaining frames
      for (let i = 1; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        img.onload = () => {
          images[i] = img;
        };
      }

      // ScrollTrigger for scrubbing frames
      const scrollTriggerInstance = ScrollTrigger.create({
        trigger: mainRef.current,
        start: "top top",
        end: `+=${frameCount * 10}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        pinSpacing: true, // Important for proper cleanup
        fastScrollEnd: true, // Better performance on fast scrolls
        onUpdate: (self) => {
          const targetFrame = Math.min(
            frameCount - 1,
            Math.floor(self.progress * (frameCount - 1))
          );
          videoFrames.frame = targetFrame;
          render();
        },
      });

      // Resize handler
      const handleResize = () => {
        setCanvasSize();
        render();
        ScrollTrigger.refresh();
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        // Kill the specific ScrollTrigger instance
        if (scrollTriggerInstance) {
          scrollTriggerInstance.kill();
        }
      };
    }, mainRef);

    return () => {
      // Revert GSAP context first (kills ST instances in this component)
      ctx.revert();

      // Kill all ScrollTriggers to prevent blocking navigation
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      // Destroy Lenis
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }

      // Remove ticker callback safely
      if (tickerCallbackRef.current) {
        gsap.ticker.remove(tickerCallbackRef.current);
        tickerCallbackRef.current = null;
      }

      // Reset scroll position and refresh ScrollTrigger
      window.scrollTo(0, 0);
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <div ref={mainRef} className="w-full px-2 sm:px-4 md:px-6 lg:px-8 xl:px-0">
      <section className="relative w-full h-[70vh] sm:h-[80vh] md:h-[90vh] lg:h-[100svh] flex overflow-hidden bg-black mx-auto max-w-6xl sm:max-w-7xl">
        <canvas 
          ref={canvasRef} 
          className="z-10 w-full h-full max-w-[95vw] sm:max-w-[90vw] md:max-w-none"
        ></canvas>

        {/* Main Content */}
        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none px-4 sm:px-6 md:px-8">
          <div className="text-center text-white w-full max-w-xs sm:max-w-md md:max-w-lg pt-[120px] sm:pt-[200px] md:pt-[280px] lg:pt-[384px]">
            <h2
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-semibold mb-3 sm:mb-4 font-font-semibold px-2 sm:px-4 leading-tight"
              style={{ fontFamily: "DeaconTest, sans-serif" }}
            >
              {/* heading text */}
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Abouthead;
