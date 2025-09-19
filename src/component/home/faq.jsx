import nam from "/src/assets/home/man.png";

function Faq() {
  return (
    <>
      <div className="self-stretch h-[780px] relative bg-black overflow-hidden">
        {/* Left side with image */}
        <div className="w-[568px] h-[518px] left-[80px] top-[208px] absolute rounded-[20px] overflow-hidden">
          {/* Image */}
          <img
            src={nam}
            alt="FAQ Illustration"
            className="w-full h-full object-cover rounded-[20px]"
          />

          {/* White Card on Image */}
          <div className="w-96 h-36 left-[24px] top-[346px] absolute bg-slate-50 rounded-2xl" />
          <div className="w-80 left-[48px] top-[370px] absolute justify-start text-zinc-800 text-3xl font-medium font-['Nunito'] leading-10">
            Get Answer for All doubts here
          </div>
        </div>

        {/* Right Side - Questions */}
        <div className="w-[664px] h-20 left-[696px] top-[235px] absolute bg-white/10 rounded-[20px] outline outline-1 outline-offset-[-1px] outline-zinc-400 overflow-hidden">
          <div className="left-[71px] top-[22px] absolute justify-start text-white text-2xl font-normal font-['Work_Sans'] leading-9">
            What does “content-first web design” mean?
          </div>
          <div className="left-[16px] top-[19px] absolute justify-start text-amber-500 text-3xl font-bold font-['Plus_Jakarta_Sans'] leading-10">
            01
          </div>
        </div>

        <div className="w-[664px] h-20 left-[696px] top-[331px] absolute bg-white/10 rounded-[20px] outline outline-1 outline-offset-[-1px] outline-zinc-400 overflow-hidden">
          <div className="left-[78px] top-[22px] absolute justify-start text-white text-2xl font-normal font-['Work_Sans'] leading-9">
            Do you provide content writing or just design?
          </div>
          <div className="left-[16px] top-[19px] absolute justify-start text-amber-500 text-3xl font-bold font-['Plus_Jakarta_Sans'] leading-10">
            02
          </div>
        </div>

        <div className="w-[664px] h-20 left-[696px] top-[427px] absolute bg-white/10 rounded-[20px] outline outline-1 outline-offset-[-1px] outline-zinc-400 overflow-hidden">
          <div className="left-[78px] top-[22px] absolute justify-start text-white text-2xl font-normal font-['Work_Sans'] leading-9">
            How long does a typical project take?
          </div>
          <div className="left-[16px] top-[19px] absolute justify-start text-amber-500 text-3xl font-bold font-['Plus_Jakarta_Sans'] leading-10">
            03
          </div>
        </div>

        <div className="w-[664px] h-20 left-[696px] top-[523px] absolute bg-white/10 rounded-[20px] outline outline-1 outline-offset-[-1px] outline-zinc-400 overflow-hidden">
          <div className="left-[79px] top-[22px] absolute justify-start text-white text-2xl font-normal font-['Work_Sans'] leading-9">
            What platforms do you build on?
          </div>
          <div className="left-[16px] top-[19px] absolute justify-start text-amber-500 text-3xl font-bold font-['Plus_Jakarta_Sans'] leading-10">
            04
          </div>
        </div>

        <div className="w-[664px] h-20 left-[696px] top-[619px] absolute bg-white/10 rounded-[20px] outline outline-1 outline-offset-[-1px] outline-zinc-400 overflow-hidden">
          <div className="left-[78px] top-[22px] absolute justify-start text-white text-2xl font-normal font-['Work_Sans'] leading-9">
            Global Experience, Local Relevance
          </div>
          <div className="left-[16px] top-[19px] absolute justify-start text-amber-500 text-3xl font-bold font-['Plus_Jakarta_Sans'] leading-10">
            05
          </div>
        </div>

        {/* Left Heading */}
        <div className="w-[502px] left-[80px] top-[46px] absolute justify-start text-white text-4xl font-semibold font-['Nunito'] leading-[57px]">
          All of Your Digital Marketing
          <br />
          FAQ’s
        </div>

        {/* Right Small Text */}
        <div className="w-[529px] left-[831px] top-[61px] absolute justify-start text-white text-2xl font-light font-['Work_Sans']">
          We blend creativity with performance to help<br></br> brands grow, convert, and
          dominate their<br></br> category.
        </div>
      </div>
    </>
  );
}

export default Faq;
