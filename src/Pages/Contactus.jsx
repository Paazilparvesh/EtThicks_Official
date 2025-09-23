
import React from "react";
import grid from "/src/assets/ContactImage/grid.png"; // adjust path

const Contactus = () => {
  return (
    <div>
    <div className="w-full h-screen bg-black relative overflow-hidden">
      <img
        src={grid}
        alt="Background"
        className="w-full h-full object-cover"
      />
    </div>
    <div><h1 className="text-white justify-end text-4xl">Let's talk</h1></div>
    </div>
    
  );
};

export default Contactus;
