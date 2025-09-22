
import React from "react";
import { FaRegFileAlt, FaClock, FaRedo, FaUser, FaCheckCircle } from "react-icons/fa";
import { MdOutlineTrendingUp } from "react-icons/md";

const WhyWorkWithUs = () => {
  const features = [
    { icon: <FaRegFileAlt size={28} />, text: "100% Original, Brand-Aligned Content" },
    { icon: <MdOutlineTrendingUp size={28} />, text: "SEO Best Practices Included" },
    { icon: <FaClock size={28} />, text: "Fast Turnaround Times" },
    { icon: <FaUser size={28} />, text: "Native English Writers" },
    { icon: <FaRedo size={28} />, text: "Unlimited Revisions (on most plans)" },
    { icon: <FaCheckCircle size={28} />, text: "Proven Results for Clients in Multiple Industries" },
  ];

  return (
    <div className="bg-black py-12 px-6 text-center">
      <h2 className="text-white text-2xl font-semibold mb-10">Why Work With Us?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center bg-gradient-to-b from-yellow-500 to-black text-white rounded-xl p-6 h-48 shadow-lg"
          >
            <div className="text-cyan-400 mb-4">{item.icon}</div>
            <p className="text-sm md:text-base">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyWorkWithUs;
