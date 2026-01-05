import { useEffect, useState } from "react";

function TeamSection() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  const Base_Url = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${Base_Url}/api/employees?populate=image`)
      .then((response) => response.json())
      .then((data) => {
        setTeamMembers(data?.data || []);
        console.log("Team Data:", data?.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching team data:", error);
        setLoading(false);
      });
  }, [Base_Url]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <p className="text-white text-xl">Loading...</p>
      </div>
    );
  }

  return (
    <div className="bg-black text-white py-20 px-4 sm:px-6 md:px-10 lg:px-16">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-center text-[#FFAE00] mb-16 font-worksans">
        Our Team
      </h1>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((member) => {
            const imageUrl = member?.image?.url;

            return (
              <div
                key={member.id}
                className="group relative xl:w-[300px] md:w-[200px] h-72 rounded-xl overflow-hidden bg-zinc-900 hover:scale-105 transition-transform duration-300"
              >
                {imageUrl ? (
                  <img
                    src={`${Base_Url}${imageUrl}`}
                    alt={member?.Name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    No Image
                  </div>
                )}

                {/* Name & Role Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-3">
                  <h3 className="text-lg md:text-xl font-semibold text-orange-400 font-worksans">
                    {member?.Name}
                  </h3>
                  <p className="text-sm text-gray-300 font-nunito">
                    {member?.role}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TeamSection;