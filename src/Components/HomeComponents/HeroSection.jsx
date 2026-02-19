
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextReveal from "/src/Hooks/TextRevealHook.jsx";

gsap.registerPlugin(ScrollTrigger);

function AboutHero() {

  return (
    <div className="w-full h-[450vh] sm:h-auto md:h-[500vh] xl:h-auto bg-black overflow-hidden">
      <div
        className="w-full min-h-screen relative overflow-hidden"
      >

        {/* ===== Whole Content ===== */}
        <div className="text-content w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10">
        <TextReveal animateOnScroll={false} delay={0}>
          <h2
            className="text-5xl sm:text-7xl 2xl:text-8xl font-bold mb-8">
            <span className="text-white font-worksans font-medium">About </span>
            <span className="text-[#FFA500] font-worksans font-medium">Us</span>
          </h2>
          </TextReveal>

        <TextReveal animateOnScroll={false} delay={0.6}>
          <p
            className="text-white text-xl 2xl:text-3xl 2xl:w-350  xl:w-240  lg:w-180   mx-4 lg:mx-auto tracking-wider font-nunito">
            EtThicks is not just another digital agency — we're a storytelling
            powerhouse rooted in truth, trust, and transformation. Born from the
            Tamil word "Ettuthikkum", meaning to reach in all eight directions,
            we specialize in content that carries your brand farther —
            emotionally, culturally, and commercially.
          </p>
          </TextReveal>
        </div>
      </div>
    </div>
  );
}

export default AboutHero;
