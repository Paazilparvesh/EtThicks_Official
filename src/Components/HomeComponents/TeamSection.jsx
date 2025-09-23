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
import React from "react";
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
    <div className="w-full h-[800px] bg-black flex flex-col items-center justify-center relative overflow-hidden">
      {/* Title */}
      <h2 className="text-white text-4xl font-bold uppercase mb-12">
        Meet Our Team
      </h2>

      {/* Team Members - no gap, perfectly centered */}
      <div className="flex justify-center items-center">
        {team.map((member, index) => (
          <div
            key={index}
            className="w-64 h-[620px] relative overflow-hidden rounded-2xl shadow-lg"
          >
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-sky-900 to-cyan-600" />

            {/* Name */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 text-center text-white text-3xl font-bold uppercase">
              {member.name}
            </div>

            {/* Role (Rotated) */}
            <div className="absolute top-[120px] left-0 origin-top-left rotate-90 text-white text-2xl font-medium">
              {member.role}
            </div>

            {/* Image */}
            <img
              src={member.img}
              alt={member.name}
              className="absolute bottom-0 w-full h-[400px] object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
