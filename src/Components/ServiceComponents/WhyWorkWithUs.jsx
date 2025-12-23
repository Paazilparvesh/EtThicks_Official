import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaShieldAlt,
  FaBrain,
  FaTrophy,
  FaHeart,
  FaChartLine,
} from "react-icons/fa";

import icoone from "/src/assets/icons/iconone.png";
import icontwo from "/src/assets/icons/icontwo.png";
import iconthree from "/src/assets/icons/iconthre.png";
import iconfour from "/src/assets/icons/iconfour.png";
import iconfive from "/src/assets/icons/iconfive.png";
import iconsix from "/src/assets/icons/iconsix.png";
import iconseven from "/src/assets/icons/iconseven.png"
import iconeight from "/src/assets/icons/iconeight.png"
import iconnine from "/src/assets/icons/iconnine.png"
import iconten from "/src/assets/icons/iconten.png"
import iconeleven from "/src/assets/icons/iconeleven.png"

gsap.registerPlugin(ScrollTrigger);

const WhyWorkWithUs = ({ slug }) => {
  const contentMap = {
    "digital-marketing": {
      title: "Why Work With Us?",
      features: [
       {
    icon: (
      <img
        src={iconseven}
        alt="Trust & Credibility"
        className="w-7 h-7"
      />
    ),
    text: "Boosts Trust & Credibility",
  },
  {
    icon: (
      <img
        src={iconeight}
        alt="Brand Recall"
        className="w-7 h-7"
      />
    ),
    text: "Helps People Remember You",
  },
  {
    icon: (
      <img
        src={iconnine}
        alt="Market Differentiation"
        className="w-7 h-7"
      />
    ),
    text: "Sets You Apart in a Crowded Market",
  },
  {
    icon: (
      <img
        src={iconten}
        alt="Emotional Connection"
        className="w-7 h-7"
      />
    ),
    text: "Creates Emotional Connections",
  },
  {
    icon: (
      <img
        src={iconeleven}
        alt="Conversions & Loyalty"
        className="w-7 h-7"
      />
    ),
    text: "Increases Conversions & Brand Loyalty",
  },
      ],
    },

    // ✅ CONTENT CREATION WITH IMAGE ICONS
    "content-creation": {
      title: "Why Work With Us?",
      features: [
        {
          icon: <img src={icoone} alt="Original content" className="w-10 h-10" />,
          text: "100% Original, Brand-Aligned Content",
        },
        {
          icon: <img src={icontwo} alt="SEO best practices" className="w-10 h-10" />,
          text: "SEO Best Practices Included",
        },
        {
          icon: <img src={iconthree} alt="Fast turnaround" className="w-10 h-10" />,
          text: "Fast Turnaround Times",
        },
        {
          icon: <img src={iconfour} alt="Native writers" className="w-10 h-10" />,
          text: "Native English Writers",
        },
        {
          icon: <img src={iconfive} alt="Unlimited revisions" className="w-10 h-10" />,
          text: "Unlimited Revisions (on most plans)",
        },
        {
          icon: <img src={iconsix} alt="Proven results" className="w-10 h-10" />,
          text: "Proven Results for Clients in Multiple Industries",
        },
      ],
    },

    "brand-storytelling": {
      title: "Why Work With Us?",
      features: [
        {
          icon: <FaShieldAlt size={28} />,
          text: "Proven Track Record Across Industries",
        },
        {
          icon: <FaBrain size={28} />,
          text: "Transparent Reporting & Weekly Updates",
        },
        {
          icon: <FaTrophy size={28} />,
          text: "Campaigns Focused on ROI — Not Vanity Metrics",
        },
        {
          icon: <FaHeart size={28} />,
          text: "Fast Response Time & Dedicated Support",
        },
        {
          icon: <FaChartLine size={28} />,
          text: "Flexible Plans with Scalable Results",
        },
      ],
    },

    "social-media-management": {
      title: "Why Work With Us?",
      features: [
        {
          icon: <FaShieldAlt size={28} />,
          text: "Tailored Social Strategies for Your Goals",
        },
        {
          icon: <FaBrain size={28} />,
          text: "Decisions Powered by Data and Trends",
        },
        {
          icon: <FaTrophy size={28} />,
          text: "Consistent Creative Posting for Brand Relevance",
        },
        {
          icon: <FaHeart size={28} />,
          text: "Expertise Across All Social Platforms",
        },
        {
          icon: <FaChartLine size={28} />,
          text: "Engaging Communities to Build Loyal Followers",
        },
        {
          icon: <FaChartLine size={28} />,
          text: "Round-the-Clock Monitoring and Support",
        },
      ],
    },

    "lead-generation": {
      title: "Why Work With Us?",
      features: [
        {
          icon: <FaShieldAlt size={28} />,
          text: "Results-Driven Approach for Measurable ROI",
        },
        {
          icon: <FaBrain size={28} />,
          text: "Targeted Campaigns to Reach Audiences",
        },
        {
          icon: <FaTrophy size={28} />,
          text: "Multi-Channel Strategies for Best Results",
        },
        {
          icon: <FaHeart size={28} />,
          text: "High-Quality Leads that Drive Growth",
        },
        {
          icon: <FaChartLine size={28} />,
          text: "Transparent Reporting with Clear Insights",
        },
        {
          icon: <FaChartLine size={28} />,
          text: "Conversion Optimization for Better Results",
        },
      ],
    },

    "product-photography": {
      title: "Why Work With Us?",
      features: [
        {
          icon: <FaShieldAlt size={28} />,
          text: "Creative Direction Aligned with Brand Aesthetic",
        },
        {
          icon: <FaBrain size={28} />,
          text: "High-End Equipment for Flawless Results",
        },
        {
          icon: <FaTrophy size={28} />,
          text: "Versatile Styles for Every Visual Need",
        },
        {
          icon: <FaHeart size={28} />,
          text: "Fast Turnaround for Campaign Readiness",
        },
        {
          icon: <FaChartLine size={28} />,
          text: "Brand Consistency Across Every Visual",
        },
        {
          icon: <FaChartLine size={28} />,
          text: "Conversion-Focused Visuals That Drive Sales",
        },
      ],
    },
  };

  const defaultContent = {
    title: "Why Work With Us?",
    features: [
      { icon: <FaShieldAlt size={28} />, text: "Professional Excellence" },
      { icon: <FaBrain size={28} />, text: "Creative Innovation" },
      { icon: <FaTrophy size={28} />, text: "Proven Track Record" },
      { icon: <FaHeart size={28} />, text: "Client-Focused Approach" },
      { icon: <FaChartLine size={28} />, text: "Results-Driven Solutions" },
    ],
  };

  const content = contentMap[slug] || defaultContent;
  const rawFeatures = content.features;

  const displayFeatures =
    rawFeatures.length === 5
      ? [rawFeatures[0], { isPlaceholder: true }, ...rawFeatures.slice(1)]
      : rawFeatures;

  const pinContainerRef = useRef(null);
  const titleRef = useRef(null);
  const gridRef = useRef(null);

  useLayoutEffect(() => {
    const isMobile = window.matchMedia("(max-width: 639px)").matches;
    if (isMobile) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinContainerRef.current,
          start: "clamp(top top)",
          end: "clamp(+=2500)",
          pin: true,
          scrub: 1.5,
        },
      });

      tl.fromTo(
        titleRef.current,
        { scale: 2.5, y: "25vh" },
        { scale: 1, y: 0, ease: "power2.out" }
      )
        .fromTo(
          gridRef.current,
          { scale: 1.1, opacity: 0 },
          { scale: 1, opacity: 1, ease: "power2.out" },
          "<"
        )
        .from(
          gridRef.current?.querySelectorAll(".why-card") || [],
          {
            y: 60,
            opacity: 0,
            stagger: 0.02,
            ease: "power2.out",
          },
          ">0.1"
        );
    }, pinContainerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={pinContainerRef}
      className="bg-black py-20 md:py-0 md:pt-20 lg:py-24 sm:px-6 md:px-8 text-center overflow-hidden min-h-screen flex flex-col justify-center"
    >
      <h2
        ref={titleRef}
        className="text-white font-normal text-3xl sm:text-[26px] md:text-[32px] lg:text-[36px] mb-8 sm:mb-12 md:mb-1 px-4 font-worksans"
      >
        {content.title}
      </h2>

      <div
        ref={gridRef}
        className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 max-w-6xl mx-auto place-items-center w-full px-8 ${
          rawFeatures.length === 6 ? "md:mt-40" : ""
        }`}
      >
        {displayFeatures.map((item, idx) => {
          if (item.isPlaceholder) {
            return (
              <div
                key={`empty-${idx}`}
                className="w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[300px]"
              />
            );
          }

          return (
            <div
              key={idx}
              className={`why-card flex flex-col items-start justify-start gap-4 bg-linear-to-b from-[#946500] to-black text-white rounded-xl sm:rounded-2xl p-6 sm:p-6 md:p-6 lg:p-6 shadow-lg shadow-yellow-900/20 h-64 sm:h-60 md:h-[280px] lg:h-[300px] w-full sm:max-w-[300px] md:max-w-[340px] lg:max-w-[360px] ${
                idx % 3 === 1 ? "md:-translate-y-35" : ""
              } ${rawFeatures.length === 6 ? "md:-translate-y-15" : ""}`}
            >
              <div className="text-cyan-400 mb-3 sm:mb-3 md:mb-4">
                {/* React icons already have size; img icons use className size */}
                {React.isValidElement(item.icon) &&
                typeof item.icon.type === "string" ? (
                  item.icon
                ) : (
                  React.cloneElement(item.icon, { size: 38 })
                )}
              </div>
              <p className="font-normal text-2xl md:text-[17px] lg:text-2xl leading-relaxed text-left px-2 font-nunito">
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhyWorkWithUs;
