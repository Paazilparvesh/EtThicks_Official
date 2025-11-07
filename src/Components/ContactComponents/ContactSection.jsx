// src/components/ContactSection.jsx
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import grid from "/src/assets/ContactImage/grid.png";
import Subtract from "/src/assets/ContactImage/Subtract.svg";
import Pacman from "/src/assets/pacman.gif"; // pacman gif

const ContactSection = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [dotsPosition, setDotsPosition] = useState(0);
  const [totalChars, setTotalChars] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    emailjs
      .sendForm(
        "service_6t1wjag", // Your Service ID
        "template_wzuocj8", // Your Template ID
        formRef.current,
        "4AnXDmbIUVcrm3tHZ" // ✅ Your Public Key
      )
      .then(
        () => {
          setLoading(false);
          setSuccessMsg("Message sent successfully!");
          formRef.current.reset();
          setTotalChars(0);
          setDotsPosition(0);
        },
        (error) => {
          setLoading(false);
          setErrorMsg("Oops! Something went wrong, please try again.");
          console.error("EmailJS error:", error.text);
        }
      );
  };

  const handleInputChange = (e) => {
    const formData = new FormData(formRef.current);
    let charCount = 0;
    
    // Count characters from all form fields
    for (let value of formData.values()) {
      charCount += value.toString().length;
    }
    
    setTotalChars(charCount);
    // Move dots based on character count (adjust the multiplier for speed)
    setDotsPosition(charCount * 10);
  };

  return (
    <div className="w-full min-h-screen relative overflow-hidden flex flex-col md:flex-row items-center justify-center bg-black py-20">
      {/* Background Grid */}
      <img
        src={grid}
        alt="Background Grid"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
      />

      {/* Main Content */}
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center w-full relative z-10 gap-10 px-4 md:px-20">
        {/* Left Side: Pac-Man with Animated Dots */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src={Pacman}
            alt="Pacman"
            className="w-30 h-30 md:w-64 md:h-54 md:-ml-20 md:-mt-20 object-contain z-10 relative"
          />

          {/* Animated Orange Dots Container */}
          <div className="flex items-center ml-9 -mt-20 overflow-hidden relative">
            <div 
              className="flex gap-14"
              style={{ 
                transform: `translateX(-${dotsPosition}px)`,
                transition: 'transform 0.3s ease-out'
              }}
            >
              {/* Generate enough dots to cover the movement */}
              {[...Array(1050)].map((_, i) => (
                <div
                  key={i}
                  className="w-4 h-4 md:w-6 md:h-6 bg-orange-500 rounded-full flex-shrink-0"
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Heading + Form */}
        <div className="w-full md:w-1/2 flex flex-col items-start">
          {/* Playful "Let's talk!" heading with Nunito font */}
          <h2
            className="text-white text-5xl md:text-6xl font-extrabold mb-8 flex gap-[2px] md:gap-[4px] leading-none"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            <span className="inline-block transform rotate-[-10deg]">L</span>
            <span className="inline-block transform rotate-[-5deg]">e</span>
            <span className="inline-block transform rotate-[3deg]">t</span>
            <span className="inline-block transform rotate-[-3deg]">'</span>
            <span className="inline-block transform rotate-[6deg]">s</span>
            <span className="inline-block w-2 md:w-3"></span>
            <span className="inline-block transform rotate-[-8deg]">t</span>
            <span className="inline-block transform rotate-[4deg]">a</span>
            <span className="inline-block transform rotate-[-6deg]">l</span>
            <span className="inline-block transform rotate-[8deg]">k</span>
            <span className="inline-block transform rotate-[-2deg]">!</span>
          </h2>

          {/* Form Box */}
<div className="relative bg-white shadow-lg overflow-hidden [clip-path:polygon(0_0,calc(100%-90px)_0,100%_90px,100%_100%,0_100%)] ">
            <div className="p-8 md:p-10">
              <p className="text-gray-700 text-sm md:text-base mb-8 leading-relaxed">
                If you have any questions, just fill in the contact form, and we
                will answer you shortly. If you are living nearby, come visit at
                one of our comfortable offices.
              </p>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="flex flex-col gap-8"
                onChange={handleInputChange}
              >
                {/* Name */}
                <div className="flex flex-col">
                  <label className="text-[#e2250c] text-sm font-medium mb-1">
                    Name:
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="border-b border-[#e2250c] outline-none py-2 text-gray-700 placeholder:text-gray-400 focus:border-[#e2250c]"
                    onChange={handleInputChange}
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col">
                  <label className="text-[#e2250c] text-sm font-medium mb-1">
                    Email address:
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="border-b border-[#e2250c] outline-none py-2 text-gray-700 placeholder:text-gray-400 focus:border-[#e2250c]"
                    onChange={handleInputChange}
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col">
                  <label className="text-[#e2250c] text-sm font-medium mb-1">
                    Message:
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="4"
                    className="border-b border-[#e2250c] outline-none py-2 resize-none text-gray-700 placeholder:text-gray-400 focus:border-[#e2250c]"
                    onChange={handleInputChange}
                  ></textarea>
                </div>
              </form>
            </div>

            {/* Full-width orange Send Button */}
            <button
              type="submit"
              form={formRef.current ? formRef.current.id : undefined}
              disabled={loading}
              onClick={handleSubmit}
              className="bg-[#f8a81c] text-white font-semibold text-lg py-4 w-full hover:bg-[#f29b00] transition disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send"}
            </button>

            {/* Success & Error Messages */}
            {successMsg && (
              <p className="text-center mt-4 text-green-600 font-medium">
                {successMsg}
              </p>
            )}
            {errorMsg && (
              <p className="text-center mt-4 text-red-600 font-medium">
                {errorMsg}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* ⬇ Full-width tilted line with animated ETTHICKS + Subtract.svg */}
      <div className="absolute bottom-40 left-0 w-screen h-[42px] mt-16 flex items-center justify-center rotate-[-5deg] overflow-hidden">
        {/* Static blue background */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{ backgroundColor: "#007388" }}
        ></div>
        
        {/* Animated content */}
        <div className="relative w-full h-full flex items-center overflow-hidden">
          <div className="animate-scroll-text flex items-center justify-center gap-8 px-10 h-full w-max">
            {/* Double the content for seamless looping */}
            {[...Array(4)].map((_, setIndex) => (
              <React.Fragment key={setIndex}>
                {Array(5).fill("ETTHICKS").map((word, i) => (
                  <React.Fragment key={`${setIndex}-${i}`}>
                    <span className="text-white text-lg font-semibold tracking-wide whitespace-nowrap">
                      {word}
                    </span>
                    {i !== 9 && (
                      <img
                        src={Subtract}
                        alt="divider"
                        className="w-10 h-auto opacity-80 flex-shrink-0"
                      />
                    )}
                  </React.Fragment>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Add custom CSS for the animations */}
      <style jsx>{`
        @keyframes scrollText {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-text {
          animation: scrollText 40s linear infinite;
          display: flex;
          align-items: center;
        }
        .animate-scroll-text:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default ContactSection;