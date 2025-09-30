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
    <div className="w-full bg-black flex flex-col justify-center py-22 px-4 md:px-10 overflow-hidden">
      {/* Title */}
      <h2 className="text-[#E69500] text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold uppercase mb-8 text-center md:text-start">
        Meet Our Team
      </h2>

      {/* Team Members */}
      <div className="flex flex-col gap-6 lg:gap-0  lg:flex-row lg:flex-nowrap justify-center items-center w-full">
        {team.map((member, index) => (
          <div
            key={index}
            className="w-full lg:w-full h-[120px] md:h-[160px] lg:h-[550px] xl:h-[600px] relative overflow-hidden shadow-lg"
          >
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-sky-900 to-cyan-600" />

            {/* Name */}
            <div className="absolute top-7 md:top-14 left-4 md:left-8 lg:right-5 text-center text-lg md:text-3xl lg:text-2xl xl:text-3xl font-bold uppercase text-white">
              {member.name}
            </div>

            {/* Role */}
            <div className="absolute top-15 md:top-22 left-4 md:left-8 lg:origin-top-left lg:rotate-90 text-md md:text-xl lg:text-xl xl:text-2xl text-gray-400 font-medium">
              {member.role}
            </div>

            {/* Image */}
            <img
              src={member.img}
              alt={member.name}
              className="absolute bottom-0 lg:-bottom-35 xl:-bottom-26 right-0 size-32 md:size-40 lg:size-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;



