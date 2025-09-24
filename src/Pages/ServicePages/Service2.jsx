import React from 'react';
import { FaRegFileAlt, FaClock, FaRedo, FaUser, FaCheckCircle } from "react-icons/fa";
import { MdOutlineTrendingUp } from "react-icons/md";

const WhyWorkWithUs = () => {
  // Data for the feature cards
  const features = [
    { icon: <FaRegFileAlt size={32} />, text: "100% Original, Brand-Aligned Content" },
    { icon: <MdOutlineTrendingUp size={32} />, text: "SEO Best Practices Included" },
    { icon: <FaClock size={32} />, text: "Fast Turnaround Times" },
    { icon: <FaUser size={32} />, text: "Native English Writers" },
    { icon: <FaRedo size={32} />, text: "Unlimited Revisions (on most plans)" },
    { icon: <FaCheckCircle size={32} />, text: "Proven Results for Clients in Multiple Industries" },
  ];

  return (
    <div className="bg-black py-24 px-4 sm:px-6 text-center">
      <h2 className="text-white text-3xl sm:text-4xl font-bold mb-20">
        Why Work With Us?
      </h2>
      
      {/* Grid container for the cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto place-items-center">
        {features.map((item, idx) => (
          <div
            key={idx}
            // Base classes for all cards
            className={`
              flex flex-col items-center justify-center
              bg-gradient-to-b from-[#946500] to-black text-white
              rounded-2xl p-6 shadow-lg shadow-yellow-900/20
              h-[353px] w-full max-w-[384px]
              
              // This is the new logic for the STATIC upwards transform on the SECOND column ONLY
              ${idx % 3 === 1 ? '-translate-y-5' : ''}
            `}
          >
            <div className="text-cyan-400 mb-6">{item.icon}</div>
            <p className="text-lg font-medium leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyWorkWithUs;