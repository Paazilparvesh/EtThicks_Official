import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import en from "/src/assets/service/end.png";

gsap.registerPlugin(ScrollTrigger);

export default function Ourservice() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((el, i) => {
      if (!el) return;

      const text = el.querySelector(".service-text");
      const box = el.querySelector(".service-box img");

      // Image: big -> shrink into place
      gsap.fromTo(
        box,
        {
          autoAlpha: 0,
          scale: 1.3, // oversized
          x: i % 2 === 0 ? 150 : -150, // left/right start
        },
        {
          autoAlpha: 1,
          scale: 1,
          x: 0,
          duration: 1.4,
          ease: "expo.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Text: delayed fade + rise from behind
      gsap.fromTo(
        text,
        { autoAlpha: 0, y: 60, zIndex: -1 },
        {
          autoAlpha: 1,
          y: 0,
          zIndex: 10,
          duration: 1,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Extra scroll shrink effect
      gsap.to(box, {
        scale: 0.9,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });
    });
  }, []);

  const services = [
    {
      title: "Website Copywriting",
      text: "Persuasive, brand-aligned content for your homepage, about page, services, and more.",
    },
    {
      title: "Blog & Article Writing",
      text: "SEO-optimized, informative blog content that positions you as an authority and boosts traffic.",
    },
    {
      title: "Social Media Content",
      text: "Captions, campaigns, and content calendars crafted to grow your audience and drive engagement.",
    },
    {
      title: "Product Descriptions",
      text: "Clear, compelling, and benefit-driven copy that drives conversions.",
    },
    {
      title: "Email Copy & Newsletters",
      text: "Nurture your leads and build loyalty with well-written, high-converting email content.",
    },
    {
      title: "Content Strategy Consulting",
      text: "Need help deciding what content to create and when? We’ll guide you with a solid plan.",
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-6">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl font-bold">Our Services</h2>
    <p
  className="text-gray-300 mt-2"
  style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 400, fontSize: "24px" }}
>
  We offer a range of content services tailored to your brand’s voice and business goals.
</p>

      </div>

      {/* Services */}
      {services.map((service, i) => (
        <div
          key={i}
          ref={(el) => (sectionsRef.current[i] = el)}
          className={`max-w-4xl mx-auto mb-24 flex ${
            i % 2 === 0 ? "justify-start" : "justify-end"
          }`}
        >
          <div
            className={`w-full md:w-2/3 relative ${
              i % 2 === 0 ? "text-left" : "text-right"
            }`}
          >
            {/* Image */}
            <div
              className={`overflow-hidden rounded-lg service-box relative z-0  ${
                i % 2 !== 0 ? "ml-auto" : ""
              }`}
            >
              <img
                src={en}
                alt={service.title}
                className="w-full h-56 object-cover rounded-lg"
              />
            </div>

            {/* Text overlay */}
            <div
              className={`mt-6 relative z-10 service-text ${
                i % 2 !== 0 ? "ml-auto" : ""
              }`}
            >
            <h3
  className="text-yellow-400"
  style={{ fontFamily: "'Nunito', sans-serif", fontSize: "40px", fontWeight: 400 }}
>
  {service.title}
</h3>

           <p
  className="text-gray-300 mt-2"
  style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 400, fontSize: "24px" }}
>
  {service.text}
</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
