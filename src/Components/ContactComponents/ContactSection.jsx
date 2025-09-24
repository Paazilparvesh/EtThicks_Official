import React, { useRef, useEffect } from "react";
import grid from "/src/assets/ContactImage/grid.png";
import Pacman from "/src/assets/ContactImage/Pacman.png";

const ContactSection = () => {



  return (
    <div className="w-full min-h-screen relative overflow-hidden flex flex-col md:flex-row items-center  justify-center bg-black py-20">
      {/* Background Grid */}
      <img
        src={grid}
        alt="Background Grid"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
      />

      {/* Main Content */}
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center w-full relative z-10">
        {/* Left Side: Pac-Man */}
        <div className="w-1/2 flex-1 flex justify-center">
          <img
            src={Pacman}
            alt="Pacman"
            className="md:-ml-40 md:-mt-40 object-contain"
          />
        </div>
        {/* Right Side */}
       <div className="w-full md:w-1/2">
  <h1 className="mb-6 text-5xl md:text-9xl font-bold text-white font-['Nunito'] md:scale-110 py-10 flex flex-wrap justify-center md:justify-start">
    <span className="inline-block transform -rotate-9">L</span>
    <span className="inline-block transform rotate-5">e</span>
    <span className="inline-block transform -rotate-4">t</span>
    <span className="inline-block transform -rotate-9">’</span>
    <span className="inline-block transform rotate-5">s</span>
    <span className="inline-block w-6 md:w-3" />
    <span className="inline-block transform rotate-4">t</span>
    <span className="inline-block transform -rotate-8">a</span>
    <span className="inline-block transform rotate-7">l</span>
    <span className="inline-block transform -rotate-2">k</span>
    <span className="inline-block transform rotate-6">!</span>
  </h1>


       <div
  style={{
    clipPath:
      "polygon(0 0, 67% 0, 90% 26%, 91% 100%, 0 100%, 0% 50%)",
  }}
  className="w-full md:w-auto flex-1 bg-white/90 rounded-xl shadow-lg relative z-20 flex flex-col items-start"
>
  {/* <p className="text-gray-700 text-sm leading-relaxed max-w-xs md:max-w-md font-['Nunito'] px-4 md:pl-10 md:pt-10 pt-4">
    If you have any questions, just fill in the contact form, and we
    will answer you shortly. If you are living nearby, come visit at
    one of our comfortable offices.
  </p> */}
  <p className="text-gray-700 text-sm leading-relaxed max-w-xs md:max-w-md font-['Nunito'] px-4 md:pl-10 md:pt-10 pt-4">
  If you have any questions,<span className="block md:hidden"></span> 
   just fill in thecontact form,<span className="block md:hidden"></span> 
   and we will answer you shortly.<span className="block md:hidden"></span> If you are living nearby, come visit at one of our comfortable offices.
</p>


  <form className="flex flex-col gap-4 mt-6 w-full px-4 md:px-0">
    <input
      type="text"
      placeholder="Name"
      className="w-full border-b-2 border-[#e2250c] focus:border-[#e2250c] outline-none py-2"
    />
    <input
      type="email"
      placeholder="Email address"
      className="w-full border-b-2 border-[#e2250c] focus:border-[#e2250c]   outline-none py-2"
    />
    <textarea
      placeholder="Message"
      rows="3"
      className="w-full border-b-2 border-[#e2250c] focus:border-[#e2250c] outline-none py-4 md:py-8 resize-none"
    />
    <button
      type="submit"
      className="mt-4 bg-[#e59300] text-white font-bold py-4 md:py-8 hover:bg-orange-500 transition w-full"
    >
      Send
    </button>
  </form>
</div>

        </div>
      </div>

      {/* Scrollable EtThicks Ribbon */}
      {/* <div className="absolute bottom-16 left-0 w-full overflow-hidden -rotate-6 z-0">
        <div
          ref={ribbonRef}
          className="flex items-center gap-6 bg-[#00788a] py-3 whitespace-nowrap"
        >
          {/* Repeat content to make scroll seamless 
          {[...Array(5)].map((_, i) => (
            <React.Fragment key={i}>
              <img src={Pacman} alt="Pacman" className="w-9 h-9" />
              <span className="text-white font-bold text-lg">EtThicks</span>
            </React.Fragment>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default ContactSection;
