// src/components/ContactSection.jsx
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import grid from "/src/assets/ContactImage/grid.png";
import Pacman from "/src/assets/ContactImage/pacman.png";

const ContactSection = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    emailjs
      .sendForm(
        "service_6t1wjag",         // Your Service ID
        "template_wzuocj8",        // Your Template ID
        formRef.current,
        "4AnXDmbIUVcrm3tHZ"       // ✅ Your Public Key
      )
      .then(
        (result) => {
          setLoading(false);
          setSuccessMsg("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          setLoading(false);
          setErrorMsg("Oops! Something went wrong, please try again.");
          console.error("EmailJS error:", error.text);
        }
      );
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
        {/* Left Side: Pac-Man */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={Pacman}
            alt="Pacman"
            className="md:-ml-40 md:-mt-40 object-contain"
          />
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-1/2 bg-white/90 rounded-xl shadow-lg p-6 md:p-10 relative z-20 flex flex-col">
          <h2 className="text-gray-800 text-2xl md:text-3xl font-semibold mb-4">
            Let’s Talk!
          </h2>
          <p className="text-gray-700 text-sm md:text-base mb-6">
            If you have any questions, just fill in the contact form and we
            will answer you shortly. If you are living nearby, come visit at
            one of our comfortable offices.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="w-full border-b-2 border-[#e2250c] focus:border-[#e2250c] outline-none py-2"
            />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              required
              className="w-full border-b-2 border-[#e2250c] focus:border-[#e2250c] outline-none py-2"
            />
            <textarea
              name="message"
              placeholder="Message"
              required
              rows="4"
              className="w-full border-b-2 border-[#e2250c] focus:border-[#e2250c] outline-none py-4 resize-none"
            />
            <button
              type="submit"
              disabled={loading}
              className="mt-4 bg-[#e59300] text-white font-bold py-4 md:py-6 hover:bg-orange-500 transition w-full disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>

          {/* Success & Error Messages */}
          {successMsg && (
            <p className="mt-4 text-green-600 font-medium">{successMsg}</p>
          )}
          {errorMsg && (
            <p className="mt-4 text-red-600 font-medium">{errorMsg}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
