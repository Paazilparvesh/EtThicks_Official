// src/Pages/ServicePages/ServiceMain.jsx
import React, { useEffect, useRef, useLayoutEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { FaRegFileAlt, FaClock, FaRedo, FaUser, FaCheckCircle } from "react-icons/fa";
import { MdOutlineTrendingUp } from "react-icons/md";
import en from "/src/assets/service/end.png";
import { serviceData } from "/src/Data/servicedata.jsx";

gsap.registerPlugin(ScrollTrigger);

function ServiceMain() {
  const { id } = useParams();
  const location = useLocation();
  
  // Debug logging
  console.log("Route ID:", id);
  console.log("Pathname:", location.pathname);
  
  // Get service ID from URL - SIMPLIFIED LOGIC
  let serviceId = 1; // default
  
  if (id && !isNaN(parseInt(id))) {
    // If using /service/:id format
    serviceId = parseInt(id);
  } else {
    // If using /Service1, /Service2 format
    const path = location.pathname;
    const serviceMatch = path.match(/Service(\d+)/);
    if (serviceMatch) {
      serviceId = parseInt(serviceMatch[1]);
    }
  }

  // Ensure serviceId is between 1-7
  serviceId = Math.max(1, Math.min(7, serviceId));
  
  const service = serviceData.find(item => item.id === serviceId);

  console.log("Final Service ID:", serviceId);
  console.log("Found Service:", service);

  // If service not found, show error
  if (!service) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center flex-col p-8">
        <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
        <p className="text-gray-400 mb-2">Requested ID: {serviceId}</p>
        <p className="text-gray-400 mb-2">Available IDs: 1-7</p>
        <p className="text-gray-400 mb-4">Path: {location.pathname}</p>
        <a href="/" className="text-cyan-400 hover:text-cyan-300 underline">
          Return to Homepage
        </a>
      </div>
    );
  }

  return (
    <div className="bg-black">
      <SectionLanding service={service} />
      <Ourservice service={service} />
      <WhyWorkWithUs />
    </div>
  );
}

// SectionLanding Component
function SectionLanding({ service }) {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black flex flex-col justify-center items-center">
      {/* Glassmorphic Background Bar */}
      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        className="absolute top-1/2 left-0 w-full h-[190px] -translate-y-1/2
        bg-[#009BB5]/40 backdrop-blur-md border border-white/20 shadow-lg z-0 origin-center flex items-center justify-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
          className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-normal font-['Brittany_Signature'] italic whitespace-nowrap opacity-80 mb-[24px] text-center px-4 sm:px-0 break-words"
        >
          {service.landingTitle}
        </motion.span>
      </motion.div>

      {/* POWERFUL */}
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="w-full flex justify-center"
      >
        <svg width="100%" height="220" viewBox="0 0 1200 220" className="max-w-[95%] z-10">
          <defs>
            <linearGradient id="halfLetterGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="50%" stopColor="white" />
              <stop offset="50%" stopColor="orange" />
            </linearGradient>
          </defs>

          <motion.text
            x="50%"
            y="55%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="180"
            className="lg:text-[180px] md:text-[140px] sm:text-[100px] xs:text-[60px]"
            fontWeight="bold"
            fill="white"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 1.2 }}
          >
            POWERFUL
          </motion.text>

          <motion.text
            x="50%"
            y="55%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="180"
            className="lg:text-[180px] md:text-[140px] sm:text-[100px] xs:text-[60px]"
            fontWeight="bold"
            fill="url(#halfLetterGradient)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 1.2 }}
          >
            POWERFUL
          </motion.text>
        </svg>
      </motion.div>

      {/* CONTENT */}
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
        className="w-full flex justify-center -mt-8"
      >
        <svg width="100%" height="220" viewBox="0 0 1200 220" className="max-w-[95%] z-10">
          <defs>
            <linearGradient id="letterHalfGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="50%" stopColor="orange" />
              <stop offset="50%" stopColor="white" />
            </linearGradient>
          </defs>

          <motion.text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="180"
            className="lg:text-[180px] md:text-[140px] sm:text-[100px] xs:text-[60px]"
            fontWeight="bold"
            fill="white"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 1.5 }}
          >
            CONTENT
          </motion.text>

          <motion.text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="180"
            className="lg:text-[180px] md:text-[140px] sm:text-[100px] xs:text-[60px]"
            fontWeight="bold"
            fill="url(#letterHalfGradient)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 1.5 }}
          >
            CONTENT
          </motion.text>
        </svg>
      </motion.div>
    </div>
  );
}

// Ourservice Component
function Ourservice({ service }) {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const sections = sectionsRef.current.filter(Boolean);
    
    sections.forEach((el, i) => {
      const image = el.querySelector(".service-image img");
      const content = el.querySelector(".service-text");

      if (!image || !content) return;

      // Hide content initially
      gsap.set(content, { autoAlpha: 0, y: -50 });

      // Timeline for image + content
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "center center",
          scrub: true,
        },
      });

      // Image animation
      tl.fromTo(
        image,
        {
          width: 1259,
          height: 608,
          position: "absolute",
          top: "50%",
          left: "50%",
          xPercent: -50,
          yPercent: -50,
        },
        {
          width: 614,
          height: 300,
          top: "0%",
          left: i % 2 === 0 ? "0%" : "auto",
          right: i % 2 !== 0 ? "0%" : "auto",
          xPercent: 0,
          yPercent: 0,
          duration: 1.5,
          ease: "power2.out",
        }
      );

      // Content animation
      tl.to(
        content,
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        },
        ">0.7"
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [service]);

  return (
    <section className="bg-black text-white py-16 px-6 overflow-hidden">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl font-bold">{service.ourServicesTitle}</h2>
        <p className="text-gray-300 mt-2 leading-relaxed text-xl">
          {service.ourServicesSubtitle}
        </p>
      </div>

      {/* Services */}
      {service.services.map((serviceItem, i) => (
        <div
          key={i}
          ref={(el) => (sectionsRef.current[i] = el)}
          className="relative max-w-6xl mx-auto mb-16 h-[550px]"
        >
          {/* Image */}
          <div className="service-image absolute w-full h-full overflow-hidden rounded-lg z-0">
            <img
              src={en}
              alt={serviceItem.title}
              className="object-cover w-full h-full rounded-lg"
            />
          </div>

          {/* Content */}
          <div
            className={`service-text absolute top-[80%] transform -translate-y-1/2 max-w-3xl px-6 py-9 z-20 opacity-0 leading-relaxed
              ${i % 2 === 0 ? "right-0 md:right-8 text-right" : "left-0 md:left-8 text-left"}`}
          >
            <h3 className="text-yellow-400 text-3xl md:text-4xl mb-2">
              {serviceItem.title}
            </h3>
            <p className="text-gray-300 text-lg md:text-xl">
              {serviceItem.text}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}

// WhyWorkWithUs Component
function WhyWorkWithUs() {
  const features = [
    { icon: <FaRegFileAlt size={28} />, text: "100% Original, Brand-Aligned Content" },
    { icon: <MdOutlineTrendingUp size={28} />, text: "SEO Best Practices Included" },
    { icon: <FaClock size={28} />, text: "Fast Turnaround Times" },
    { icon: <FaUser size={28} />, text: "Native English Writers" },
    { icon: <FaRedo size={28} />, text: "Unlimited Revisions (on most plans)" },
    { icon: <FaCheckCircle size={28} />, text: "Proven Results for Clients in Multiple Industries" },
  ];

  const pinContainerRef = useRef(null);
  const titleRef = useRef(null);
  const gridRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinContainerRef.current,
          pin: true,
          start: "top top",
          end: "+=1500",
          scrub: 1,
        },
      });

      tl.fromTo(
        titleRef.current,
        { scale: 3, y: '30vh', opacity: 1 },
        { scale: 1, y: 0, duration: 1, ease: 'power2.inOut' }
      ).from(
        gridRef.current,
        { scale: 1.5, opacity: 0, duration: 1, ease: 'power2.inOut' },
        "<"
      );
    }, pinContainerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pinContainerRef} className="bg-black py-20 sm:py-24 px-4 sm:px-6 text-center overflow-hidden">
      <h2
        ref={titleRef}
        className="text-white font-sans font-normal text-3xl sm:text-4xl mb-12 sm:mb-16"
      >
        Why Work With Us?
      </h2>

      <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
        {features.map((item, idx) => (
          <div
            key={idx}
            className={`
              flex flex-col items-center justify-center
              bg-gradient-to-b from-[#946500] to-black text-white
              rounded-2xl p-6 shadow-lg shadow-yellow-900/20
              h-[280px] md:h-[320px] w-full
              ${idx % 3 === 1 ? '-translate-y-4 md:-translate-y-6' : ''}
            `}
          >
            <div className="text-cyan-400 mb-4">{item.icon}</div>
            <p className="font-sans font-normal text-lg leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceMain;