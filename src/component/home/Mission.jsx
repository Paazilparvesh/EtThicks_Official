import React from "react";
import m1 from "/src/assets/home/mission/m1.png"
import m2 from "/src/assets/home/mission/m2.png"
import m3 from "/src/assets/home/mission/m3.png"
import m4 from "/src/assets/home/mission/m4.png"
import m5 from "/src/assets/home/mission/m5.png"
import m6 from "/src/assets/home/mission/m6.png"
import m7 from "/src/assets/home/mission/m7.png"
import m8 from "/src/assets/home/mission/m8.png"


function Mission() {
  return (
    <>
      <div className="w-full h-[800px] relative  bg-black overflow-hidden">
        <div className="w-[800px] h-[800px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2   bg-gradient-to-b from-amber-500 to-orange-400 rounded-full" />
        <div className="w-[577px] h-[91] left-[425px] top-[277px] absolute overflow-hidden flex items-center justify-center">
          <h1 className=" text-white text-[40px] font-bold font-['Nunito'] leading-[60px]">
            Connect. Build Trust. Grow.
          </h1>
        </div>
        <div className="w-[826px] h-36 left-[307px] top-[379px] absolute overflow-hidden flex items-center justify-center">
          <p className="w-[767px] py-[9px] text-center  text-white text-3xl font-medium font-['Nunito'] leading-10">
            We exist to craft authentic, emotion-driven stories that connect
            people with brands — building lasting trust and measurable impact.
          </p>
        </div>
        <img
          className="w-64 h-80 left-[182px] top-[-745px]  absolute rounded-3xl"
          src={m1}
        />
        <img
          className="w-64 h-80 left-[1063px] top-[-745px] absolute rounded-3xl"
          src={m2}
        />
        <img
          className="w-64 h-80 left-[602px] top-[-350px] absolute rounded-3xl"
          src={m3}
        />
        <img
          className="w-64 h-80 left-[111px] top-[76px] absolute rounded-3xl"
          src={m4}
        />
        <img
          className="w-64 h-80 left-[884px] top-[1016px] absolute rounded-3xl"
          src={m5}
        />
        <img
          className="w-64 h-80 left-[57px] top-[897px] absolute rounded-3xl"
          src={m6}
        />
        <img
          className="w-64 h-80 left-[1134px] top-[-172px] absolute rounded-3xl"
          src={m7}
        />
        {/* {down} */}
        <img
          className="w-64 h-80 left-[432px] top-[462px] absolute rounded-3xl "
          src={m8}
        />
        <img
          className="w-64 h-80 left-[813px] top-[246px] absolute rounded-3xl"
          src={m1}
        />
      </div>
    </>
  );
}

export default Mission;
