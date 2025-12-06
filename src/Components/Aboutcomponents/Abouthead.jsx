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
    // Detect mobile device
    const isMobile = window.innerWidth < 768;

    // Init Lenis with mobile-optimized settings
    const lenis = new Lenis({
      duration: isMobile ? 1.0 : 1.2, // Faster on mobile
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: !isMobile, // Disable smooth scroll on mobile for native feel
      smoothTouch: false, // Keep native touch scroll
      touchMultiplier: 2, // Better touch sensitivity on mobile
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

      // Mobile-responsive ScrollTrigger configuration using matchMedia
      const mm = gsap.matchMedia();

      // Desktop configuration (unchanged)
      mm.add("(min-width: 768px)", () => {
        ScrollTrigger.create({
          trigger: mainRef.current,
          start: "top top",
          end: `+=${frameCount * 10}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            const targetFrame = Math.min(
              frameCount - 1,
              Math.floor(self.progress * (frameCount - 1))
            );
            videoFrames.frame = targetFrame;
            render();
          },
        });
      });

      // Mobile configuration (optimized)
      mm.add("(max-width: 767px)", () => {
        ScrollTrigger.create({
          trigger: mainRef.current,
          start: "top top",
          end: `+=${frameCount * 8}`, // Shorter scroll distance on mobile
          scrub: 0.5, // Smoother scrubbing on mobile
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true, // Better for mobile orientation changes
          onUpdate: (self) => {
            const targetFrame = Math.min(
              frameCount - 1,
              Math.floor(self.progress * (frameCount - 1))
            );
            videoFrames.frame = targetFrame;
            render();
          },
        });
      });

      // Debounced resize handler for better mobile performance
      let resizeTimeout;
      const handleResize = () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
          setCanvasSize();
          render();
          ScrollTrigger.refresh();
        }, 150); // 150ms debounce
      };

      window.addEventListener("resize", handleResize);
      window.addEventListener("orientationchange", handleResize); // Handle mobile orientation

      return () => {
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("orientationchange", handleResize);
        clearTimeout(resizeTimeout);
        mm.revert(); // Clean up matchMedia
      };
    }, mainRef);

    return () => {
      // Revert GSAP context (kills ST instances in this component)
      ctx.revert();

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
    };
  }, []);

  return (
    <div ref={mainRef}>
      <section className="relative w-full h-[100svh] flex overflow-hidden bg-black">
        <canvas ref={canvasRef} className="z-10 touch-none"></canvas>

        {/* Main Content */}
        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
          <div className="text-center text-white pt-[384px] md:pt-0 px-4">
            <h2
              className="text-4xl md:text-6xl font-semibold mb-4 font-font-semibold"
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
