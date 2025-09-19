import React from "react";
import ash from "/src/assets/home/mash.png";
import sat from "/src/assets/home/star.png";
import cur from "/src/assets/home/circ.png";
import luf from "/src/assets/home/left.png";
import gow from "/src/assets/home/Grou.png";

function Whyethitics() {
  return (
    <>
      <div className="self-stretch h-[469px] relative bg-black overflow-hidden flex items-center justify-center">
        {/* Background Shapes */}

        {/* Left Side Half Circle */}
        <img
          src={luf}
          alt="Left shape"
          className="absolute left-0 top-1/2 -translate-y-1/2 w-48 h-48 opacity-10 object-contain"
        />

        {/* Left Flower Shape */}
        <img
          src={sat}
          alt="Background star"
          className="absolute left-[250px] top-1/2 -translate-y-1/2 w-56 h-56 opacity-10 object-contain"
        />

        {/* Center Shape */}
        <img
          src={cur}
          alt="Background circle"
          className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-56 h-56 opacity-10 object-contain"
        />

        {/* Right Shape */}
        <img
          src={ash}
          alt="Background shape"
          className="absolute right-[220px] top-1/2 -translate-y-1/2 w-56 h-56 opacity-10 object-contain"
        />

        {/* Far Right Arrow/Group Shape */}
        <img
          src={gow}
          alt="Background group"
          className="absolute right-0 top-1/2 -translate-y-1/2 w-48 h-48 opacity-10 object-contain"
        />

        {/* Title */}
        <div className="absolute top-[94px] left-1/2 -translate-x-1/2 text-amber-500 text-4xl font-semibold font-['Nunito'] leading-[60px] text-center">
          Why EtThicks Exists
        </div>

        {/* Quote Section */}
        <div className="absolute top-[178px] left-1/2 -translate-x-1/2 w-[695px] text-center">
          <span className="text-white text-3xl font-normal font-['Nunito'] leading-10">
            “I started EtThicks to take brands in every direction possible — not
            just in reach, but in trust. Because when stories are told right,
            they don’t just sell. They live.”
            <br />
          </span>
          <span className="text-white text-2xl font-normal font-['Nunito'] leading-9">
            {" "}
            —{" "}
          </span>
          <span className="text-white text-2xl font-semibold font-['Nunito'] leading-9">
            Lenin, Founder & Content Strategist
          </span>
        </div>
      </div>
    </>
  );
}

export default Whyethitics;
