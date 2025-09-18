import React from "react";

import img1 from "/src/assets/home/Ser1.png";
import img2 from "/src/assets/home/Ser2.png";
import img3 from "/src/assets/home/Ser3.png";
import moon from "/src/assets/home/moon.png";

function Serve() {
  const items = [
    "Grow with etthicks",
    "Grow with etthicks",
    "Grow with etthicks",
    "Grow with etthicks",
    "Grow with etthicks",
    "Grow with etthicks",
  ];
  return (
    <div>
      <div className=" h-[750px] relative bg-black overflow-hidden">
        <div className="left-[80px] top-[411px] absolute justify-start text-[#e59300] text-[80px] font-bold font-['Nunito'] uppercase leading-[88px]">
          Services
        </div>
        <div className="left-[80px] top-[301px] absolute justify-start text-[#e59300] text-[100px] font-medium font-['Nunito'] uppercase leading-[110px]">
          OUR
        </div>
        <div className="w-[527px] h-64 left-[457px] top-[273px] absolute opacity-50 bg-[#009BB5] rounded-full blur-[200px]" />
        <div className="w-[640px] h-96 left-[704px] top-[184px] absolute opacity-90 bg-white rounded-3xl overflow-hidden">
          <div className="left-[24px] top-[24px] absolute justify-start text-orange-400 text-3xl font-semibold font-['Plus_Jakarta_Sans'] leading-10">
            Content Creation
          </div>
          <div className="w-[557px] left-[24px] top-[78px] absolute justify-start text-black text-2xl font-normal font-['Work_Sans'] leading-9">
            Reels, ad films, corporate AVs, long-form YouTube — stories that
            captivate and convert.
          </div>
          <img
            className="w-80 h-60 left-[162px] top-[189px] absolute"
            src={img1}
          />
        </div>
        <div className="w-[640px] h-96 left-[1376px] top-[184px] absolute opacity-90 bg-white rounded-3xl overflow-hidden">
          <div className="left-[24px] top-[24px] absolute justify-start text-orange-400 text-2xl font-semibold font-['Plus_Jakarta_Sans'] leading-9">
            Digital Marketing
          </div>
          <div className="w-[545px] left-[24px] top-[76px] absolute justify-start text-black text-2xl font-normal font-['Work_Sans'] leading-9">
            Social strategy, performance campaigns, platform-specific content
            that meets people where they are.
          </div>
          <img
            className="w-80 h-60 left-[162px] top-[189px] absolute"
            src={img2}
          />
        </div>
        <div className="w-[640px] h-96 left-[2048px] top-[184px] absolute opacity-90 bg-white rounded-3xl overflow-hidden">
          <div className="left-[24px] top-[24px] absolute justify-start text-orange-400 text-2xl font-semibold font-['Plus_Jakarta_Sans'] leading-9">
            Brand Storytelling
          </div>
          <div className="w-[524px] left-[24px] top-[76px] absolute justify-start text-black text-2xl font-normal font-['Work_Sans'] leading-9">
            From positioning and emotional narrative to campaign ideation — we
            give your brand a powerful voice.
          </div>
          <img
            className="w-80 h-60 left-[162px] top-[189px] absolute"
            src={img3}
          />
        </div>

        <div className="w-full h-[56px]  top-[695px] absolute bg-cyan-700 overflow-hidden">
          {/* Inner scrolling container */}
          <div className="flex w-full h-[56px] animate-marquee whitespace-nowrap">
            {items.map((text, i) => (
              <div key={i} className="flex items-center gap-4 p-2 shrink-0">
                {/* replace with your orange shape */}
                <img src={moon} alt="" className="w-7 h-8" />
                <span className="text-white text-[30px] font-medium font-['Work_Sans']">
                  {text}
                </span>
              </div>
            ))}

            {/* duplicate for seamless looping */}
            {items.map((text, i) => (
              <div
                key={`dup-${i}`}
                className="flex items-center gap-4 mx-8 shrink-0"
              >
                <img src="" alt="" className="w-7 h-8" />
                <span className="text-white text-3xl font-medium font-['Work_Sans']">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Serve;
