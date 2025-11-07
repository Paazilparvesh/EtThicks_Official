import { useEffect, useState } from "react";
import now from "/src/assets/about/now.png";

function Count() {
  const [counts, setCounts] = useState({ projects: 0, clients: 0, contents: 0 });

  useEffect(() => {
    const target = { projects: 30, clients: 12, contents: 300 };
    const speed = 30;

    const interval = setInterval(() => {
      setCounts((prev) => {
        let done = true;
        const updated = { ...prev };

        for (const key in target) {
          if (prev[key] < target[key]) {
            updated[key] = Math.min(prev[key] + 1, target[key]);
            done = false;
          }
        }

        if (done) clearInterval(interval);
        return updated;
      });
    }, speed);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="w-full bg-cover bg-center py-24"
      style={{
        backgroundImage: `url(${now})`,
      }}
    >
      <div className="max-w-6xl mx-auto flex justify-around items-center text-center">
        {/* Projects */}
        <div>
          <h1 className="text-[#FFAE00] text-[80px] font-[Work Sans]">
            {counts.projects}+
          </h1>
          <p className="text-white text-[32px] font-[Nunito] mt-2">PROJECTS</p>
        </div>

        {/* Clients */}
        <div>
          <h1 className="text-[#FFAE00] text-[80px] font-[Work Sans]">
            {counts.clients}+
          </h1>
          <p className="text-white text-[32px] font-[Nunito] mt-2">CLIENTS</p>
        </div>

        {/* Content Produced */}
        <div>
          <h1 className="text-[#FFAE00] text-[80px] font-[Work Sans]">
            {counts.contents}+
          </h1>
          <p className="text-white text-[32px] font-[Nunito] mt-2">
            CONTENT PRODUCED
          </p>
        </div>
      </div>
    </div>
  );
}

export default Count;
