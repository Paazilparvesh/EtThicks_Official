import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaShieldAlt, FaBrain, FaTrophy, FaHeart, FaChartLine } from "react-icons/fa";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const WhyWorkWithUs = ({ slug }) => {
  // Content based on slug
  const contentMap = {
    "digital-marketing": {
      title: "Why Work With Us?",
      features: [
        { icon: <FaShieldAlt size={28} />, text: "Boosts Trust & Credibility" },
        { icon: <FaBrain size={28} />, text: "Helps People Remember You" },
        { icon: <FaTrophy size={28} />, text: "Sets You Apart in a Crowded Market" },
        { icon: <FaHeart size={28} />, text: "Creates Emotional Connections" },
        { icon: <FaChartLine size={28} />, text: "Increases Conversions & Brand Loyalty" },
      ]
    },
    "content-creation": {
      title: "Why Work With Us?",
      features: [
        { icon: <FaShieldAlt size={28} />, text: "100% Original, Brand-Aligned Content" },
        { icon: <FaChartLine size={28} />, text: "SEO Best Practices Included" },
        { icon: <FaBrain size={28} />, text: "Fast Turnaround Times" },
        { icon: <FaHeart size={28} />, text: "Native English Writers" },
        { icon: <FaTrophy size={28} />, text: "Unlimited Revisions (on most plans)" },
        { icon: <FaShieldAlt size={28} />, text: "Proven Results for Clients in Multiple Industries" },
      ]
    },
    "brand-storytelling": {
      title: "Why Work With Us?",
      features: [
        { icon: <FaShieldAlt size={28} />, text: "Proven Track Record Across Industries" },
        { icon: <FaBrain size={28} />, text: "Transparent Reporting & Weekly Updates" },
        { icon: <FaTrophy size={28} />, text: "Campaigns Focused on ROI — Not Vanity Metrics" },
        { icon: <FaHeart size={28} />, text: "Fast Response Time & Dedicated Support" },
        { icon: <FaChartLine size={28} />, text: "Flexible Plans with Scalable Results" },
        { icon: <FaChartLine size={28} />, text: "Fast Response Time & Dedicated Support" },
      ]
    },
    "social-media-management": {
      title: "Why Work With Us?",
      features: [
        { icon: <FaShieldAlt size={28} />, text: "Tailored Social Strategies for Your Goals" },
        { icon: <FaBrain size={28} />, text: "Decisions Powered by Data and Trends" },
        { icon: <FaTrophy size={28} />, text: "Consistent Creative Posting for Brand Relevance" },
        { icon: <FaHeart size={28} />, text: "Expertise Across All Social Platforms" },
        { icon: <FaChartLine size={28} />, text: "Engaging Communities to Build Loyal Followers" },
        { icon: <FaChartLine size={28} />, text: "Round-the-Clock Monitoring and Support" },
      ]
    },
    "lead-generation": {
      title: "Why Work With Us?",
      features: [
        { icon: <FaShieldAlt size={28} />, text: "Results-Driven Approach for Measurable ROI" },
        { icon: <FaBrain size={28} />, text: "Targeted Campaigns to Reach Audiences" },
        { icon: <FaTrophy size={28} />, text: "Multi-Channel Strategies for Best Results" },
        { icon: <FaHeart size={28} />, text: "High-Quality Leads that Drive Growth" },
        { icon: <FaChartLine size={28} />, text: "Transparent Reporting with Clear Insights" },
        { icon: <FaChartLine size={28} />, text: "Conversion Optimization for Better Results" },
      ]
    },
    "product-photography": {
      title: "Why Work With Us?",
      features: [
        { icon: <FaShieldAlt size={28} />, text: "Creative Direction Aligned with Brand Aesthetic" },
        { icon: <FaBrain size={28} />, text: "High-End Equipment for Flawless Results" },
        { icon: <FaTrophy size={28} />, text: "Versatile Styles for Every Visual Need" },
        { icon: <FaHeart size={28} />, text: "Fast Turnaround for Campaign Readiness" },
        { icon: <FaChartLine size={28} />, text: "Brand Consistency Across Every Visual" },
        { icon: <FaChartLine size={28} />, text: "Conversion-Focused Visuals That Drive Sales" },
      ]
    }
  };

  // Default fallback
  const defaultContent = {
    title: "Why Work With Us?",
    features: [
      { icon: <FaShieldAlt size={28} />, text: "Professional Excellence" },
      { icon: <FaBrain size={28} />, text: "Creative Innovation" },
      { icon: <FaTrophy size={28} />, text: "Proven Track Record" },
      { icon: <FaHeart size={28} />, text: "Client-Focused Approach" },
      { icon: <FaChartLine size={28} />, text: "Results-Driven Solutions" },
    ]
  };

  const content = contentMap[slug] || defaultContent;

  const pinContainerRef = useRef(null);
  const titleRef = useRef(null);
  const gridRef = useRef(null);

  useLayoutEffect(() => {
    const isMobile = window.innerWidth < 640;
    const isTablet = window.innerWidth >= 640 && window.innerWidth < 1024;
    
    // Responsive initial values
    const initialTitleScale = isMobile ? 1.3 : isTablet ? 2 : 3;
    const initialTitleY = isMobile ? '8vh' : isTablet ? '20vh' : '30vh';
    const initialGridScale = isMobile ? 0.9 : isTablet ? 1.2 : 1.5;
    const scrollEndValue = isMobile ? '+=800' : isTablet ? '+=1200' : '+=1500';

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinContainerRef.current,
          pin: true,
          start: "top top",
          end: scrollEndValue,
          scrub: 1,
        },
      });

      // Animate title
      tl.fromTo(
        titleRef.current,
        { scale: initialTitleScale, y: initialTitleY, opacity: 1 },
        { scale: 1, y: 0, duration: 1, ease: 'power2.inOut' }
      );

      // Animate grid
      tl.from(
        gridRef.current,
        { scale: initialGridScale, opacity: 0, duration: 1, ease: 'power2.inOut' },
        "<"
      );
    }, pinContainerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pinContainerRef} className="bg-black py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 text-center overflow-hidden min-h-screen flex flex-col justify-center">
      
      {/* Title */}
      <h2
        ref={titleRef}
        className="text-white font-sans font-normal text-[22px] sm:text-[26px] md:text-[32px] lg:text-[36px] mb-8 sm:mb-12 md:mb-16 px-4"
      >
        {content.title}
      </h2>

      {/* Feature Cards Grid */}
      <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 max-w-6xl mx-auto place-items-center w-full">
        {content.features.map((item, idx) => (
          <div
            key={idx}
            className={`
              flex flex-col items-center justify-center
              bg-gradient-to-b from-[#946500] to-black text-white
              rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-6 lg:p-6 shadow-lg shadow-yellow-900/20
              h-[200px] sm:h-[240px] md:h-[280px] lg:h-[340px] w-full max-w-[280px] sm:max-w-[300px] md:max-w-[340px] lg:max-w-[360px]
              ${idx % 3 === 1 ? 'sm:-translate-y-3 md:-translate-y-5' : ''}
            `}
          >
            <div className="text-cyan-400 mb-3 sm:mb-3 md:mb-4">
              {React.cloneElement(item.icon, { 
                size: window.innerWidth < 640 ? 24 : 28 
              })}
            </div>
            <p className="font-sans font-normal text-[13px] sm:text-[15px] md:text-[17px] lg:text-[20px] leading-relaxed text-center px-2">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyWorkWithUs;
