import React from "react";
import member1 from "/src/assets/home/team/member1.png"
import member2 from "/src/assets/home/team/member2.png"
import member3 from "/src/assets/home/team/member3.png"
import member4 from "/src/assets/home/team/member4.png"
import member5 from "/src/assets/home/team/member5.png"


function TeamSection() {
  return (
    <>
      <div className="w-full h-[800px] relative bg-black overflow-hidden">
        <div className="left-[80px] top-[58px] absolute justify-start text-white text-4xl font-bold font-['Nunito'] uppercase leading-[60px]">
          Meet Our team
        </div>
        <div className="w-full h-[800px] left-[347px] top-[633px] absolute bg-r[#00C4E5] rounded-full blur-[600px]" />
        <div className="w-64 h-[620px] left-[80px] top-[134px] absolute overflow-hidden">
          <div className="w-64 h-[621px] left-0 top-0 absolute bg-gradient-to-r from-sky-900 to-cyan-600" />
          <div className="left-[121px] top-[14px] absolute text-right justify-start text-white text-4xl font-bold font-['Nunito'] uppercase leading-[60px]">
            Name
          </div>
          <div className="left-[44px] top-[118px] absolute origin-top-left rotate-90 justify-start text-white text-2xl font-medium font-['Work_Sans'] leading-9">
            Content Writer
          </div>
          <img
            className="w-[256px] h-[400px]  top-[220px] absolute"
            src={member1}
          />
        </div>
        <div className="w-64 h-[620px] left-[336px] top-[134px] absolute overflow-hidden">
          <div className="w-64 h-[621px] left-0 top-0 absolute bg-gradient-to-r from-sky-900 to-cyan-600" />
          <div className="left-[121px] top-[14px] absolute justify-start text-white text-4xl font-bold font-['Nunito'] uppercase leading-[60px]">
            Name
          </div>
          <div className="left-[44px] top-[118px] absolute origin-top-left rotate-90 justify-start text-white text-2xl font-medium font-['Work_Sans'] leading-9">
            Domain
          </div>
          <img
            className="w-[256px] h-[349px]  top-[272px] absolute"
            src={member2}
          />
        </div>
        <div className="w-64 h-[620px] left-[592px] top-[134px] absolute overflow-hidden">
          <div className="w-64 h-[621px] left-0 top-0 absolute bg-gradient-to-r from-sky-900 to-cyan-600" />
          <div className="left-[121px] top-[14px] absolute justify-start text-white text-4xl font-bold font-['Nunito'] uppercase leading-[60px]">
            Name
          </div>
          <div className="left-[44px] top-[118px] absolute origin-top-left rotate-90 justify-start text-white text-2xl font-medium font-['Work_Sans'] leading-9">
            Domain
          </div>
          <img
            className="w-[256px] h-[400px]  top-[225px] absolute"
            src={member3}
          />
        </div>
        <div className="w-64 h-[620px] left-[848px] top-[134px] absolute overflow-hidden">
          <div className="w-64 h-[621px] left-0 top-0 absolute bg-gradient-to-r from-sky-900 to-cyan-600" />
          <div className="left-[121px] top-[14px] absolute justify-start text-white text-4xl font-bold font-['Nunito'] uppercase leading-[60px]">
            Name
          </div>
          <div className="left-[44px] top-[118px] absolute origin-top-left rotate-90 justify-start text-white text-2xl font-medium font-['Work_Sans'] leading-9">
            Domain
          </div>
          <img
            className="w-[256px] h-[400px]  top-[225px] absolute"
            src={member4}
          />
        </div>
        <div className="w-64 h-[620px] left-[1104px] top-[134px] absolute overflow-hidden">
          <div className="w-64 h-[621px] left-0 top-0 absolute bg-gradient-to-r from-sky-900 to-cyan-600" />
          <div className="left-[121px] top-[14px] absolute justify-start text-white text-4xl font-bold font-['Nunito'] uppercase leading-[60px]">
            Name
          </div>
          <div className="left-[44px] top-[118px] absolute origin-top-left rotate-90 justify-start text-white text-2xl font-medium font-['Work_Sans'] leading-9">
            Domain
          </div>
          <img
            className="w-[256px] h-[400px]  top-[225px] absolute"
            src={member5}
          />
        </div>
      </div>
    </>
  );
}

export default TeamSection;
