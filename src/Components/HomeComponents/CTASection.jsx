import teg from "/src/assets/home/icon2.png";

function CTASection() {
  return (
    <div className="w-full min-h-screen bg-black flex flex-col items-center justify-center px-4">
      {/* Icon box */}
      <div className="w-28 h-28 bg-amber-500 rounded-2xl shadow-[0px_-3px_5px_0px_rgba(255,174,0,0.09),0px_12px_13px_0px_rgba(255,174,0,0.17),0px_4px_6px_0px_rgba(255,174,0,0.12),0px_-12px_30px_0px_rgba(255,174,0,0.12),0px_54px_55px_0px_rgba(255,174,0,0.25)] flex items-center justify-center mb-8">
        <img src={teg} alt="icon" className="w-20 h-20 object-contain" />
      </div>

      {/* Heading */}
      <h1 className="text-white text-6xl md:text-8xl font-medium font-['Nunito'] text-center mb-6">
        Get Started
      </h1>

      {/* Description */}
      <p className="text-neutral-500 text-center text-lg md:text-xl font-medium font-['Nunito'] leading-relaxed max-w-2xl mb-10">
        Reach out today — we’d love to hear your story and explore how design can amplify your message.
      </p>

      {/* Input + Button */}
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <div className="w-80 sm:w-96 h-14 rounded-2xl outline-1 outline-amber-500 px-5 flex items-center">
          <span className="text-neutral-500 text-lg sm:text-2xl font-medium font-['Nunito']">
            Enter Your E-mail
          </span>
        </div>
        <button className="px-6 py-3 bg-amber-500 rounded-3xl text-white text-lg sm:text-2xl font-medium font-['Nunito'] hover:bg-amber-600 transition">
          Send
        </button>
      </div>
    </div>
  );
}

export default CTASection;
