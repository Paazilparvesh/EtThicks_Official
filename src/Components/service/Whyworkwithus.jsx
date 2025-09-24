import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaRegFileAlt, FaClock, FaRedo, FaUser, FaCheckCircle } from "react-icons/fa";
import { MdOutlineTrendingUp } from "react-icons/md";

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

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

  const pinContainerRef = useRef(null);
  const titleRef = useRef(null);
  const gridRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinContainerRef.current,
          pin: true,
          start: "top top",
          end: "+=1500",
          scrub: 1,
        }
      });
      tl.fromTo(titleRef.current, 
        { scale: 3, y: '30vh', opacity: 1 },
        { scale: 1, y: 0, duration: 1, ease: 'power2.inOut' }
      );
      tl.from(gridRef.current, 
        { scale: 1.5, opacity: 0, duration: 1, ease: 'power2.inOut' }, 
        "<" 
      );
    }, pinContainerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pinContainerRef} className="bg-black py-24 px-4 sm:px-6 text-center overflow-hidden">
      
      {/* Title with updated font styles */}
      <h2 
        ref={titleRef} 
        className="text-white font-sans font-normal text-[32px] mb-20"
      >
        Why Work With Us?
      </h2>
      
      <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto place-items-center">
        {features.map((item, idx) => (
          <div
            key={idx}
            className={`
              flex flex-col items-center justify-center
              bg-gradient-to-b from-[#946500] to-black text-white
              rounded-2xl p-6 shadow-lg shadow-yellow-900/20
              h-[353px] w-full max-w-[384px]
              ${idx % 3 === 1 ? '-translate-y-5' : ''}
            `}
          >
            <div className="text-cyan-400 mb-6">{item.icon}</div>
            {/* Card text with updated font styles */}
            <p className="font-sans font-normal text-[24px] leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyWorkWithUs;