import React from "react";
import img1 from "/src/assets/home/face.png";
import img2 from "/src/assets/home/coles.png";
import img3 from "/src/assets/home/like.png";
import img4 from "/src/assets/home/heat.png";
import img5 from "/src/assets/home/sprt.png";
import img6 from "/src/assets/home/type.png";
import img7 from "/src/assets/home/coke.png";
import img8 from "/src/assets/home/meta.png";
import img9 from "/src/assets/home/pep.png";

function BrandSection() {
  return (
    <div className="w-full relative bg-black overflow-hidden py-12">
      {/* Glowing Background */}
      <div className="hidden lg:block w-[747px] h-[747px] left-[346px] top-[27px] absolute opacity-60 bg-cyan-500 rounded-full blur-[600px]" />

      {/* Desktop (1440px) layout */}
      <div className="hidden lg:block w-full h-[800px] relative">
        <img src={img5} alt="Brand 5" className="w-30 h-36 left-[204px] top-[275px] absolute rounded-[32px] object-cover" />
        <img src={img6} alt="Brand 6" className="w-36 h-60 left-[204px] top-[451px] absolute rounded-[32px] object-cover" />
        <img src={img4} alt="Brand 4" className="w-36 h-64 left-[1076px] top-[275px] absolute rounded-[32px] object-cover" />
        <img src={img9} alt="Brand 9" className="w-36 h-36 left-[1084px] top-[549px] absolute rounded-[32px] object-cover" />

        <img src={img1} alt="Brand 1" className="w-80 h-36 left-[210px] top-[91px] absolute rounded-[32px] object-cover" />
        <img src={img2} alt="Brand 2" className="w-56 h-36 left-[562px] top-[91px] absolute rounded-[32px] object-cover" />
        <img src={img7} alt="Brand 7" className="w-52 h-36 left-[388px] top-[549px] absolute rounded-[32px] object-cover" />
        <img src={img8} alt="Brand 8" className="w-96 h-36 left-[630px] top-[549px] absolute rounded-[32px] object-cover" />
        <img src={img3} alt="Brand 3" className="w-96 h-36 left-[825px] top-[91px] absolute rounded-[32px] object-cover" />

        {/* Outer Rounded Container */}
        <div className="w-[1024px] h-[610px] left-[204px] top-[91px] absolute bg-white/10 rounded-[77px] border border-white/10 backdrop-blur-sm" />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-10 pointer-events-none">
          <h1 className="text-amber-500 text-6xl md:text-7xl font-semibold font-['Nunito'] text-center">
            Brand Personality
          </h1>
          <p className="text-white text-xl md:text-2xl mt-6 text-center max-w-3xl leading-relaxed font-['Nunito']">
            We aim to take brands in all eight directions — expanding their reach
            while making them trusted, impactful, and unforgettable.
          </p>
        </div>
      </div>

      {/* Mobile & Tablet layout */}
      <div className="lg:hidden flex flex-col items-center justify-center gap-6 px-4">
        {/* Text first */}
        <h1 className="text-amber-500 text-3xl sm:text-4xl md:text-5xl font-semibold font-['Nunito'] text-center">
          Brand Personality
        </h1>
        <p className="text-white text-base sm:text-lg md:text-xl mt-4 text-center leading-relaxed font-['Nunito']">
          We aim to take brands in all eight directions — expanding their reach
          while making them trusted, impactful, and unforgettable.
        </p>

        {/* Brands in grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
          <img src={img1} alt="Brand 1" className="w-full h-24 sm:h-28 object-cover rounded-xl" />
          <img src={img2} alt="Brand 2" className="w-full h-24 sm:h-28 object-cover rounded-xl" />
          <img src={img3} alt="Brand 3" className="w-full h-24 sm:h-28 object-cover rounded-xl" />
          <img src={img4} alt="Brand 4" className="w-full h-24 sm:h-28 object-cover rounded-xl" />
          <img src={img5} alt="Brand 5" className="w-full h-24 sm:h-28 object-cover rounded-xl" />
          <img src={img6} alt="Brand 6" className="w-full h-24 sm:h-28 object-cover rounded-xl" />
          <img src={img7} alt="Brand 7" className="w-full h-24 sm:h-28 object-cover rounded-xl" />
          <img src={img8} alt="Brand 8" className="w-full h-24 sm:h-28 object-cover rounded-xl" />
          <img src={img9} alt="Brand 9" className="w-full h-24 sm:h-28 object-cover rounded-xl" />
        </div>
      </div>
    </div>
  );
}

export default BrandSection;
