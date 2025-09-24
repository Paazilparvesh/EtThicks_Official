import nam from "/src/assets/home/man.png";

function FaqSection() {
  return (
    <>
      <div className="self-stretch relative bg-black overflow-hidden min-h-[780px]">
        {/* ✅ Desktop layout (unchanged) */}
        <div className="hidden lg:block relative w-full h-[780px]">
          {/* Left side with image */}
          <div className="w-[568px] h-[518px] left-[80px] top-[208px] absolute rounded-[20px] overflow-hidden">
            <img
              src={nam}
              alt="FAQ Illustration"
              className="w-full h-full object-cover rounded-[20px]"
            />
            <div className="w-96 h-36 left-[24px] top-[346px] absolute bg-slate-50 rounded-2xl" />
            <div className="w-80 left-[48px] top-[370px] absolute justify-start text-zinc-800 text-3xl font-medium font-['Nunito'] leading-10">
              Get Answer for All doubts here
            </div>
          </div>

          {/* Right Side - Questions */}
          <div className="w-[664px] h-20 left-[696px] top-[235px] absolute bg-white/10 rounded-[20px] outline outline-1 outline-offset-[-1px] outline-zinc-400">
            <div className="left-[71px] top-[22px] absolute text-white text-2xl font-normal font-['Work_Sans'] leading-9">
              What does “content-first web design” mean?
            </div>
            <div className="left-[16px] top-[19px] absolute text-amber-500 text-3xl font-bold font-['Plus_Jakarta_Sans'] leading-10">
              01
            </div>
          </div>

          <div className="w-[664px] h-20 left-[696px] top-[331px] absolute bg-white/10 rounded-[20px] outline outline-1 outline-offset-[-1px] outline-zinc-400">
            <div className="left-[78px] top-[22px] absolute text-white text-2xl font-normal font-['Work_Sans'] leading-9">
              Do you provide content writing or just design?
            </div>
            <div className="left-[16px] top-[19px] absolute text-amber-500 text-3xl font-bold font-['Plus_Jakarta_Sans'] leading-10">
              02
            </div>
          </div>

          <div className="w-[664px] h-20 left-[696px] top-[427px] absolute bg-white/10 rounded-[20px] outline outline-1 outline-offset-[-1px] outline-zinc-400">
            <div className="left-[78px] top-[22px] absolute text-white text-2xl font-normal font-['Work_Sans'] leading-9">
              How long does a typical project take?
            </div>
            <div className="left-[16px] top-[19px] absolute text-amber-500 text-3xl font-bold font-['Plus_Jakarta_Sans'] leading-10">
              03
            </div>
          </div>

          <div className="w-[664px] h-20 left-[696px] top-[523px] absolute bg-white/10 rounded-[20px] outline outline-1 outline-offset-[-1px] outline-zinc-400">
            <div className="left-[79px] top-[22px] absolute text-white text-2xl font-normal font-['Work_Sans'] leading-9">
              What platforms do you build on?
            </div>
            <div className="left-[16px] top-[19px] absolute text-amber-500 text-3xl font-bold font-['Plus_Jakarta_Sans'] leading-10">
              04
            </div>
          </div>

          <div className="w-[664px] h-20 left-[696px] top-[619px] absolute bg-white/10 rounded-[20px] outline outline-1 outline-offset-[-1px] outline-zinc-400">
            <div className="left-[78px] top-[22px] absolute text-white text-2xl font-normal font-['Work_Sans'] leading-9">
              Global Experience, Local Relevance
            </div>
            <div className="left-[16px] top-[19px] absolute text-amber-500 text-3xl font-bold font-['Plus_Jakarta_Sans'] leading-10">
              05
            </div>
          </div>

          {/* Left Heading */}
          <div className="w-[502px] left-[80px] top-[46px] absolute text-white text-4xl font-semibold font-['Nunito'] leading-[57px]">
            All of Your Digital Marketing
            <br />
            FAQ’s
          </div>

          {/* Right Small Text */}
          <div className="w-[529px] left-[831px] top-[61px] absolute text-white text-2xl font-light font-['Work_Sans']">
            We blend creativity with performance to help
            <br /> brands grow, convert, and dominate their
            <br /> category.
          </div>
        </div>

        {/* ✅ Mobile & Tablet responsive layout */}
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
            {[
              "What does “content-first web design” mean?",
              "Do you provide content writing or just design?",
              "How long does a typical project take?",
              "What platforms do you build on?",
              "Global Experience, Local Relevance",
            ].map((q, i) => (
              <div
                key={i}
                className="flex items-center bg-white/10 rounded-xl border border-zinc-400 px-4 py-3"
              >
                <span className="text-amber-500 text-lg sm:text-xl font-bold mr-4">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-white text-sm sm:text-base md:text-lg font-normal">
                  {q}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default FaqSection;
