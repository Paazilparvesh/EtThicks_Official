// import React from "react";
// import member1 from "/src/assets/home/team/member1.png"
// import member2 from "/src/assets/home/team/member2.png"
// import member3 from "/src/assets/home/team/member3.png"
// import member4 from "/src/assets/home/team/member4.png"
// import member5 from "/src/assets/home/team/member5.png"


// function TeamSection() {
//   return (
//     <div className="w-full h-[800px] bg-black flex flex-col items-center justify-center relative overflow-hidden">
//       {/* Title */}
//       <h2 className="text-white text-4xl font-bold uppercase mb-12">
//         Meet Our Team
//       </h2>

//       {/* Team Members - no gap, perfectly centered */}
    
//     </div>
//   );
// }

// export default TeamSection;

import member1 from "/src/assets/home/team/member1.png";
import member2 from "/src/assets/home/team/member2.png";
import member3 from "/src/assets/home/team/member3.png";
import member4 from "/src/assets/home/team/member4.png";
import member5 from "/src/assets/home/team/member5.png";

function Team() {
  const team = [
    { img: member1, name: "Name", role: "Content Writer" },
    { img: member2, name: "Name", role: "Domain" },
    { img: member3, name: "Name", role: "Domain" },
    { img: member4, name: "Name", role: "Domain" },
    { img: member5, name: "Name", role: "Domain" },
  ];

  return (
    <div className="w-full bg-black flex flex-col items-center justify-center py-12 px-4 overflow-hidden">
      {/* Title */}
      <h2 className="text-[#E69500] text-2xl sm:text-3xl md:text-4xl font-bold uppercase mb-8 md:mb-12 text-center">
        Meet Our Team
      </h2>

      {/* Team Members */}
      <div className="flex flex-col gap-6 sm:flex-col md:flex-row md:flex-wrap lg:flex-row lg:flex-nowrap justify-center items-center w-full">
        {team.map((member, index) => (
          <div
            key={index}
            className="w-full sm:w-[220px] md:w-[200px] lg:w-[18%] h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] relative overflow-hidden shadow-lg"
          >
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-sky-900 to-cyan-600" />

            {/* Name */}
            <div className="absolute top-2 sm:top-3 md:top-4 left-1/2 -translate-x-1/2 text-center text-sm sm:text-lg md:text-xl lg:text-2xl font-bold uppercase text-white">
              {member.name}
            </div>

            {/* Role */}
            <div className="absolute top-[60px] sm:top-[80px] md:top-[100px] left-1 md:left-0 md:origin-top-left md:rotate-90 text-xs sm:text-sm md:text-lg lg:text-xl text-white font-medium">
              {member.role}
            </div>

            {/* Image */}
            <img
              src={member.img}
              alt={member.name}
              className="absolute bottom-0 w-full h-[200px] sm:h-[240px] md:h-[300px] lg:h-[350px] object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;



