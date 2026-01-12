import { useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from "framer-motion";
import pac from "/src/assets/about/pack.png";
import red from "/src/assets/about/red.png";

/* ---------------- TYPEWRITER HELPERS ---------------- */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.025, // typing speed
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.02 },
  },
};

const TypewriterText = ({ text, className }) => {
  const words = text.split(" ");

  return (
    <motion.h1
      className={`${className} text-center`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {words.map((word, wordIndex) => (
        <span
          key={wordIndex}
          className="inline-block whitespace-nowrap mr-2"
        >
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              variants={letterVariants}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.h1>
  );
};

function AboutSection() {
  /* ---------------- SECTION 1 ---------------- */
  const sectionRef1 = useRef(null);

  const { scrollYProgress: scroll1 } = useScroll({
    target: sectionRef1,
    offset: ["start 75%", "start 40%"],
  });

  const rotateImg1 = useTransform(scroll1, [0, 1], [0, 25]);

  /* ---------------- SECTION 2 ---------------- */
  const sectionRef2 = useRef(null);

  const { scrollYProgress: scroll2 } = useScroll({
    target: sectionRef2,
    offset: ["start 75%", "start 40%"],
  });

  const rotateImg2 = useTransform(scroll2, [0, 1], [0, -25]);

  return (
    <>
      {/* ================= SECTION 1 ================= */}
      <div
        ref={sectionRef1}
        className="flex flex-col-reverse md:flex-row w-full bg-black items-center justify-center gap-20 pt-16 sm:py-20 md:pt-0 px-4 lg:px-10 xl:px-10"
      >
        {/* TEXT */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <TypewriterText
            text="We don't just create content. We stage worlds. We craft experiences that people feel, remember, and carry forward. Every frame, every word, every campaign is guided by a single principle:"
            align="right"
            className="text-gray-200 lg:text-end text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-xl lg:max-w-none font-worksans"
          />
        </div>

        {/* IMAGE */}
        <div className="w-full md:w-1/3 flex items-center justify-center">
          <motion.img
            src={pac}
            alt="pac"
            className="object-contain w-[60%] sm:w-[40%] lg:w-[80%] 2xl:w-[60%] h-auto"
            style={{ rotate: rotateImg1 }}
          />
        </div>
      </div>

      {/* ================= SECTION 2 ================= */}
      <div
        ref={sectionRef2}
        className="flex flex-col md:flex-row-reverse lg:flex-row w-full bg-black items-center justify-center gap-20 py-20 px-4 lg:px-10 xl:px-10"
      >
        {/* IMAGE */}
        <div className="w-full lg:w-1/3 flex items-center justify-center">
          <motion.img
            src={red}
            alt="red"
            className="object-contain w-[60%] sm:w-[40%] lg:w-[80%] 2xl:w-[60%] h-auto"
            style={{ rotate: rotateImg2 }}
          />
        </div>

        {/* TEXT */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <TypewriterText
            text="We started small: ideas sketched on paper, reels on screens, dreams in our minds. Yet every story found its journey. A small retailer became unforgettable. A reel travelled from a casual scroll to a shared moment across millions of feeds."
            className="text-gray-300 text-center lg:text-start text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-xl lg:max-w-none font-worksans"
          />
        </div>
      </div>
    </>
  );
}

export default AboutSection;
