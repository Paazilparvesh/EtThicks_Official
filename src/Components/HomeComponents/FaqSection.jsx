import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import nam from "/src/assets/home/man.png";

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "What services does your company offer?",
      a: "We provide end-to-end creative and marketing solutions, including Content Creation, Digital Marketing, Brand Storytelling, Social Media Management, Lead Generation, Product Photography, TV Commercials, Influencer Marketing, and Personal Branding.",
    },
    {
      q: "Who can benefit from your services?",
      a: "Our services are designed for startups, small and medium businesses, entrepreneurs, influencers, and established brands looking to grow their online presence, strengthen their brand identity, and increase sales or engagement.",
    },
    {
      q: "What does Content Creation include?",
      a: "Content Creation includes creating high-quality visuals, videos, graphics, captions, blogs, and marketing content tailored to your brand’s voice and target audience across digital platforms",
    },
    {
      q: "How does your Digital Marketing service help businesses grow?",
      a: "Our Digital Marketing services focus on increasing visibility, traffic, and conversions through strategies like paid ads, SEO, email campaigns, and performance marketing, all driven by data and measurable results.",
    },
    {
      q: "What is Brand Storytelling and why is it important?",
      a: "Brand Storytelling helps communicate your brand’s values, mission, and personality in a compelling way. It builds emotional connections with your audience, increases trust, and makes your brand memorable.",
    },
  ];

  return (
    <div className="bg-black py-16 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* ✅ Top Row: Heading + Description */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-2">
          <h2 className="w-full lg:w-1/2 xl:w-full text-white md:text-center lg:text-left text-2xl md:text-4xl lg:text-3xl xl:text-5xl font-normal leading-snug tracking-wider font-worksans">
            All of Your Digital Marketing <br className="hidden xl:block" /> FAQ’s
          </h2>
          <p className="w-full lg:w-1/2 text-gray-300 md:text-center lg:text-right text-lg lg:text-lg xl:text-2xl font-light lg:pl-30 xl:pl-0 font-nunito">
            We blend creativity with performance to help brands grow, convert,
            and dominate their category.
          </p>
        </div>

        {/* ✅ Bottom Row: Image + FAQ List */}
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Left: Image with overlay */}
          <div className="relative w-full lg:max-w-sm mx-auto lg:mx-0">
            <img
              src={nam}
              alt="FAQ Illustration"
              className="w-full h-auto md:h-96 lg:h-[420px] object-cover rounded-2xl"
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[85%] bg-white rounded-xl px-4 py-3 text-center text-zinc-800 text-base sm:text-lg font-medium shadow-lg font-nunito">
              Get Answer for All doubts here
            </div>
          </div>

          {/* Right: FAQ List */}
          <div className="w-full flex-1 flex flex-col gap-4 lg:mt-4">
            {faqs.map((item, i) => (
              <div
                key={i}
                onClick={() => handleToggle(i)}
                className="bg-zinc-900 rounded-xl border border-gray-200 cursor-pointer transition-all duration-300 px-2 md:px-4 py-2 lg:py-3 flex flex-col"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1 md:gap-2">
                    <span className="text-[#FFAE00] text-lg sm:text-base lg:text-xl xl:text-3xl font-bold px-2 py-1 rounded-full">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-white text-sm sm:text-lg xl:text-xl font-normal font-worksans">
                      {item.q}
                    </span>
                  </div>
                  <FiChevronDown
                    className={`text-white text-xl transform transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""
                      }`}
                  />
                </div>
                {openIndex === i && (
                  <div className="mt-3 px-2 text-white text-sm sm:text-base font-light font-nunito">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FaqSection;
