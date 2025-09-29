// src/components/FaqSection.jsx
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi"; // arrow icon
import nam from "/src/assets/home/man.png";

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "What does “content-first web design” mean?",
      a: "It means the design process is guided by real content, not dummy text, ensuring better clarity and structure.",
    },
    {
      q: "Do you provide content writing or just design?",
      a: "We provide both — engaging content writing and modern design for a complete solution.",
    },
    {
      q: "How long does a typical project take?",
      a: "Most projects take 4–6 weeks depending on scope and complexity.",
    },
    {
      q: "What platforms do you build on?",
      a: "We build on WordPress, Shopify, Webflow, and custom-coded platforms.",
    },
    {
      q: "Global Experience, Local Relevance",
      a: "We combine international best practices with local insights for maximum impact.",
    },
  ];

  return (
    <div className="self-stretch relative bg-black overflow-hidden py-16">
      {/* ✅ Desktop layout */}
      <div className="hidden lg:flex max-w-[1280px] mx-auto px-8 gap-12 items-center">
        {/* Left side with image */}
        <div className="relative w-96 h-128 rounded-[20px] overflow-hidden flex-shrink-0">
          <img
            src={nam}
            alt="FAQ Illustration"
            className="w-full h-full object-cover rounded-[20px]"
          />
          <div className="w-96 h-36 left-[24px] bottom-6 absolute bg-slate-50 rounded-2xl" />
          <div className="w-80 left-8 bottom-6 absolute text-zinc-800 text-3xl font-medium font-['Nunito'] leading-10">
            Get Answer for All doubts here
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Heading */}
          <h2 className="text-white text-4xl font-semibold font-['Nunito'] leading-[3.5625rem]">
            All of Your Digital Marketing FAQ’s
          </h2>

          {/* Small description */}
          <p className="text-white text-2xl font-light font-['Work_Sans']">
            We blend creativity with performance to help brands grow, convert,
            and dominate their category.
          </p>

          {/* FAQ Questions stacked */}
          <div className="flex flex-col gap-4 mt-4">
            {faqs.map((item, i) => (
              <div
                key={i}
                onClick={() => handleToggle(i)}
                className="bg-white/10 rounded-2xl outline outline-1 outline-zinc-400 cursor-pointer transition-all duration-300"
              >
                <div className="flex items-center justify-between px-6 py-4 relative">
                  {/* Number */}
                  <span className="absolute left-4 text-amber-500 text-3xl font-bold font-['Plus_Jakarta_Sans']">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {/* Question */}
                  <span className="ml-14 text-white text-xl font-normal font-['Work_Sans']">
                    {item.q}
                  </span>
                  {/* Arrow */}
                  <FiChevronDown
                    className={`text-white text-2xl transform transition-transform duration-300 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {/* Answer */}
                {openIndex === i && (
                  <div className="px-14 pb-4 text-white text-base font-light font-['Work_Sans']">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ✅ Mobile & Tablet layout */}
      <div className="block lg:hidden relative w-full px-6 py-10 space-y-8">
        {/* Heading */}
        <h2 className="text-white text-2xl sm:text-3xl font-semibold font-['Nunito'] text-center">
          All of Your Digital Marketing FAQ’s
        </h2>

        {/* Small description */}
        <p className="text-white text-sm sm:text-lg font-light font-['Work_Sans'] text-center">
          We blend creativity with performance to help brands grow, convert,
          and dominate their category.
        </p>

        {/* Image with overlay card */}
        <div className="relative w-full max-w-md mx-auto rounded-2xl overflow-hidden">
          <img
            src={nam}
            alt="FAQ Illustration"
            className="w-full h-64 object-cover rounded-2xl"
          />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] bg-slate-50 rounded-xl px-4 py-3 text-center text-zinc-800 text-base sm:text-lg font-medium font-['Nunito']">
            Get Answer for All doubts here
          </div>
        </div>

        {/* FAQ Questions stacked */}
        <div className="space-y-4">
          {faqs.map((item, i) => (
            <div
              key={i}
              onClick={() => handleToggle(i)}
              className="bg-white/10 rounded-xl border border-zinc-400 px-4 py-3 cursor-pointer"
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <span className="text-amber-500 text-lg sm:text-xl font-bold mr-4">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-white text-sm sm:text-base md:text-lg font-normal">
                    {item.q}
                  </span>
                </div>
                <FiChevronDown
                  className={`text-white text-xl transform transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </div>
              {openIndex === i && (
                <div className="mt-2 text-white text-sm sm:text-base font-light">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FaqSection;
