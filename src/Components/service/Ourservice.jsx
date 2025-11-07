// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import en from "/src/assets/service/end.png";

// gsap.registerPlugin(ScrollTrigger);

// export default function Ourservice() {
//   const sectionsRef = useRef([]);

//   const services = [
//     { title: "Website Copywriting", text: "Persuasive, brand-aligned content for your homepage, about page, services, and more." },
//     { title: "Blog & Article Writing", text: "SEO-optimized, informative blog content that positions you as an authority and boosts traffic." },
//     { title: "Social Media Content", text: "Captions, campaigns, and content calendars crafted to grow your audience and drive engagement." },
//     { title: "Product Descriptions", text: "Clear, compelling, and benefit-driven copy that drives conversions." },
//     { title: "Email Copy & Newsletters", text: "Nurture your leads and build loyalty with well-written, high-converting email content." },
//     { title: "Content Strategy Consulting", text: "Need help deciding what content to create and when? We’ll guide you with a solid plan." },
//   ];

//   useEffect(() => {
//     sectionsRef.current.forEach((el, i) => {
//       if (!el) return;

//       const image = el.querySelector(".service-image img");
//       const content = el.querySelector(".service-text");

//       // Hide content initially
//       gsap.set(content, { autoAlpha: 0, y: -50 });

//       // Timeline for image + content
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: el,
//           start: "top 80%",
//           end: "center center",
//           scrub: true,
//         },
//       });

//       // Image animation
//       tl.fromTo(
//         image,
//         {
//           width: 1259,
//           height: 608,
//           position: "absolute",
//           top: "50%",
//           left: "50%",
//           xPercent: -50,
//           yPercent: -50,
//         },
//         {
//           width: 614,
//           height: 300,
//           top: "0%",
//           left: i % 2 === 0 ? "0%" : "auto",
//           right: i % 2 !== 0 ? "0%" : "auto",
//           xPercent: 0,
//           yPercent: 0,
//           duration: 1.5,
//           ease: "power2.out",
//         }
//       );

//       // Content animation: fade in from top
//       tl.to(
//         content,
//         {
//           autoAlpha: 1,
//           y: 0,
//           duration: 1,
//           ease: "power3.out",
//         },
//         ">0.7"
//       );

//       // Reset content & image when scrolling back
//       ScrollTrigger.create({
//         trigger: el,
//         start: "top bottom",
//         end: "bottom top",
//         onLeaveBack: () => {
//           gsap.set(image, {
//             width: 1259,
//             height: 608,
//             top: "50%",
//             left: "50%",
//             xPercent: -50,
//             yPercent: -50,
//           });
//           gsap.set(content, { autoAlpha: 0, y: -50 });
//         },
//       });
//     });

//     return () => ScrollTrigger.getAll().forEach((t) => t.kill());
//   }, []);

//   return (
//     <section className="bg-black text-white py-16 px-6 overflow-hidden">
//       {/* Heading */}
//       <div className="text-center max-w-2xl mx-auto mb-12">
//         <h2 className="text-3xl font-bold">Our Services</h2>
//         <p
//           className="text-gray-300 mt-2 leading-relaxed"
//           style={{
//             fontFamily: "'Work Sans', sans-serif",
//             fontWeight: 400,
//             fontSize: "24px",
//           }}
//         >
//           We offer a range of content services tailored to your brand’s voice and business goals.
//         </p>
//       </div>

//       {/* Services */}
//       {services.map((service, i) => (
//         <div
//           key={i}
//           ref={(el) => (sectionsRef.current[i] = el)}
//           className="relative max-w-6xl mx-auto mb-16 h-[550px]"
//         >
//           {/* Image */}
//           <div className="service-image absolute w-full h-full overflow-hidden rounded-lg z-0">
//             <img
//               src={en}
//               alt={service.title}
//               className="object-cover w-full h-full rounded-lg"
//             />
//           </div>

//           {/* Content (slightly lower than center) */}
//           <div
//             className={`service-text absolute top-[80%] transform -translate-y-1/2 max-w-3xl px-6 py-9 z-20 opacity-0 leading-relaxed
//               ${i % 2 === 0 ? "right-0 md:right-8 text-right" : "left-0 md:left-8 text-left"}`}
//           >
//             <h3
//               className="text-yellow-400 text-3xl md:text-4xl mb-2"
//               style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400 }}
//             >
//               {service.title}
//             </h3>
//             <p
//               className="text-gray-300 text-lg md:text-xl"
//               style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 400 }}
//             >
//               {service.text.split(". ").map((line, idx) => (
//                 <span key={idx}>
//                   {line}.
//                   <br />
//                   <br />
//                 </span>
//               ))}
//             </p>
//           </div>
//         </div>
//       ))}
//     </section>
//   );
// }
