import { useEffect, useState } from "react";

function TeamSection() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch team data from API
    fetch("http://localhost:1337/api/employees/?populate=*")
      .then((response) => response.json())
      .then((data) => {
        setTeamMembers(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching team data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <p className="text-white text-xl">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4 sm:px-6 md:px-10 lg:px-16">
      {/* Header */}
      <h1
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16"
        style={{ fontFamily: "DeaconTest, sans-serif" }}
      >
        Our Team
      </h1>

      {/* Team Grid - h-812 container */}
      <div className="max-w-7xl mx-auto h-auto lg:min-h-[812px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group relative w-full h-[320px] rounded-xl overflow-hidden bg-zinc-900 hover:scale-105 transition-transform duration-300"
            >
              {/* Image */}
              <div className="w-full h-full">
                {member.image ? (
                  <img
                    src={`http://localhost:1337${member.image.url}`}
                    alt={member.Name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
                    <span className="text-6xl text-zinc-600">
                      {member.Name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                )}
              </div>

              {/* Overlay with Name and Role */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6">
                <h3
                  className="text-xl md:text-2xl font-bold text-orange-400 mb-1"
                  style={{ fontFamily: "DeaconTest, sans-serif" }}
                >
                  {member.Name}
                </h3>
                <p
                  className="text-sm md:text-base text-gray-300"
                  style={{ fontFamily: "anta, sans-serif" }}
                >
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeamSection;
