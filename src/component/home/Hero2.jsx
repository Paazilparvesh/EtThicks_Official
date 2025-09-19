import React from "react";
import frame from "/src/assets/home/frame.png";
import moon from "/src/assets/home/moon2.png";
import face1 from "/src/assets/home/face1.png";
import face2 from "/src/assets/home/face2.png";
import face3 from "/src/assets/home/face3.png";
import exp from "/src/assets/home/exp.png";

function Hero2() {
  return (
    <div>
        {/* // Background container */}
      <div className="w-full h-[754px] relative bg-black overflow-hidden">
        {/* Decorative and informational elements */}
        <div className="w-full h-[672px] rounded-bl-[128px] bg-[#e59300] rounded-br-[128px] overflow-hidden">

          <div className="w-full h-[708px] bg-[#111111] rounded-bl-[112.50px] rounded-br-[112.50px] z-10"  />
        <img src={frame} className="w-[1377px] h-[762px]  from-neutral-900 via-white/0 to-neutral-900 left-[-89.25px] top-[458.17px] absolute origin-top-left -rotate-30  overflow-hidden "/>"
          
          <div className="w-[1170px] h-9 left-[161px] top-[592px] absolute bg-black" />
          <div className="w-[935px] h-[433] left-[935px] top-[433px] absolute">
            <div className="w-[201.01px] h-[53.25px] left-0" >
              <div className="w-32 h-12 left-0 ">
                <div className="w-12 h-12 left-0 top-0  ">
                  <img
                    className="w-12 h-12 left-0 top-0 absolute rounded-full"
                    src={face1}
                  />
                </div>
                <div className="w-12 h-12 left-[40.45px] top-0 absolute">
                  <img
                    className="w-12 h-12 left-0 top-0 absolute rounded-full outline outline-[1.69px] outline-offset-[-0.84px] outline-neutral-900"
                    src={face2}
                  />
                </div>
                <div className="w-12 h-12 left-[80.90px] top-0 absolute">
                  <img
                    className="w-12 h-12 left-0 top-0 absolute rounded-full outline outline-[1.69px] outline-offset-[-0.84px] outline-neutral-900"
                    src={face3}
                  />
                </div>
              </div>
              <div className="left-[136.51px] top-0  flex absolute ">
                <span class="text-[#ECECEC] text-[36px]  gap-1 font-medium font-['Poppins']">
                  2k
                </span>
                <span class="text-[#ECECEC] text-[28px] ml-1 font-medium font-['Poppins']">
                  +
                </span>
              </div>
            </div>
            <div className="w-44 h-7 left-[14.25px] top-[68.25px] absolute">
              <div className="left-[15px] top-0 absolute justify-start text-[#828282] text-lg font-medium font-['Poppins']">
                Happy Clients
              </div>
              <div className="w-2 h-2 left-0 top-[9.75px] absolute bg-[#FFAE00]   rounded-full" />
            </div>
          </div>

          <img
            className="w-[143px] h-[107] left-[1290px] top-[554px]  absolute origin-top-left rotate-360"
            src={moon}
          />
          <div className="w-32 h-32 left-[75px] top-[508.75px] absolute">
            <div className="w-[120.75px] h-[120.75px]  left-0 top-0 absolute bg-sky-900 rounded-full" />
            <img
              className="w-[101px] h-[101px] left-[9.80px] top-[9.80px] absolute"
              src={exp}
            />
          </div>
        </div>


        <div className="w-[768px] left-[75px] top-[181px] absolute justify-start">
          <span class="text-white text-6xl font-semibold font-['Work_Sans'] uppercase leading-[80px] tracking-wider">
            Ettuthikkum
          </span>
          <span class="text-neutral-50 text-6xl font-bold font-['Nunito'] uppercase leading-[80px] tracking-wider">
            {" "}
          </span>
          <span class="text-white text-6xl font-medium font-['Nunito'] leading-[70px] tracking-wide">
            comes
          </span>
          <span class="text-neutral-50 text-6xl font-bold font-['Nunito'] leading-[80px] tracking-wider">
            {" "}
          </span>
          <span class="text-[#e59300] text-6xl font-semibold font-['Work_Sans'] uppercase leading-[80px] tracking-wider">
            EtThicks
          </span>
          <span class="text-neutral-50 text-6xl font-bold font-['Nunito'] uppercase leading-[80px] tracking-wider">
            {" "}
          </span>
          <span class="text-white text-6xl font-bold font-['Nunito'] leading-[80px] tracking-wider">
            —{" "}
          </span>
          <span class="text-white text-6xl font-medium font-['Nunito'] leading-[70px] tracking-wide">
            stories that reach everywhere.
          </span>
        </div>
        <div className="w-96 h-44 left-[935px] top-[195px] absolute">
          <div className="w-96 h-14 left-0 top-[128px] absolute">
            <div className="px-9 py-3.5 left-[0.25px] top-[-0.25px] absolute bg-amber-500 rounded-3xl inline-flex justify-center items-center gap-2">
              <div className="justify-start text-white text-xl font-semibold font-['Nunito']">
                Let’s Create Together
              </div>
            </div>
          </div>
          <div className="w-96 left-0 top-0 absolute justify-start text-zinc-500 text-lg font-medium font-['Poppins']">
            Our team of creatives, strategists, and storytellers works closely
            with clients to turn ideas into impactful media that connects with
            real people.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero2;
