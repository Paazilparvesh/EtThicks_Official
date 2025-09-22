// import React from 'react'

// const Service2 = () => {
//   return (
//     <div className='bg-black h-screen'>
//       <h1 className='text-white text-4xl text-center'>Why Work With Us?</h1>
//       </div>

//   )
// }

// export default Service2
// import React from "react";
// import { MessageCircle, Star, Clock, PenTool, Infinity, Globe } from "lucide-react";

// const features = [
//   {
//     icon: <MessageCircle className="w-8 h-8 text-cyan-400" />,
//     title: "100% Original, Brand-Aligned Content",
//   },
//   {
//     icon: <Star className="w-8 h-8 text-cyan-400" />,
//     title: "SEO Best Practices Included",
//   },
//   {
//     icon: <Clock className="w-8 h-8 text-cyan-400" />,
//     title: "Fast Turnaround Times",
//   },
//   {
//     icon: <PenTool className="w-8 h-8 text-cyan-400" />,
//     title: "Native English Writers",
//   },
//   {
//     icon: <Infinity className="w-8 h-8 text-cyan-400" />,
//     title: "Unlimited Revisions (on most plans)",
//   },
//   {
//     icon: <Globe className="w-8 h-8 text-cyan-400" />,
//     title: "Proven Results for Clients in Multiple Industries",
//   },
// ];

// export default function WhyWorkWithUs() {
//   return (
//     <section className="bg-black text-white py-16 flex flex-col items-center">
   
//       <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12">
//         Why Work With Us?
//       </h2>

     
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl w-full px-6">
//         {features.map((feature, index) => (
//           <div
//             key={index}
//             className="rounded-2xl bg-gradient-to-b from-[#A76C14] to-black p-6 shadow-lg flex flex-col gap-4 items-start"
//           >
//             {feature.icon}
//             <p className="text-base font-medium leading-snug">
//               {feature.title}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
import React from "react";
import { MessageCircle, Star, Clock, PenTool, Infinity, Globe } from "lucide-react";

const features = [
  {
    icon: <MessageCircle className="w-6 h-6 text-cyan-400" />,
    title: "100% Original, Brand-Aligned Content",
  },
  {
    icon: <Star className="w-6 h-6 text-cyan-400" />,
    title: "SEO Best Practices Included",
  },
  {
    icon: <Clock className="w-6 h-6 text-cyan-400" />,
    title: "Fast Turnaround Times",
  },
  {
    icon: <PenTool className="w-6 h-6 text-cyan-400" />,
    title: "Native English Writers",
  },
  {
    icon: <Infinity className="w-6 h-6 text-cyan-400" />,
    title: "Unlimited Revisions (on most plans)",
  },
  {
    icon: <Globe className="w-6 h-6 text-cyan-400" />,
    title: "Proven Results for Clients in Multiple Industries",
  },
];

export default function WhyWorkWithUs() {
  return (
    <section className="bg-black min-h-screen flex flex-col items-center justify-center">
      {/* Heading */}
      <h2 className="text-white text-lg md:text-xl font-medium text-center mb-12">
        Why Work With Us?
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 md:px-0 max-w-5xl">
        {features.map((feature, index) => (
          <div
            key={index}
            className="rounded-xl bg-gradient-to-b from-[#D18A1F] to-black p-6 shadow-xl flex flex-col justify-between min-h-[150px] transition-transform hover:scale-105"
          >
            <div>{feature.icon}</div>
            <p className="text-white text-sm mt-4">{feature.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
