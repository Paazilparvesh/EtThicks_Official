import ethi from "/src/assets/headerasset/EtThicks1.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          
          {/* Left - Logo */}
          <div className="flex justify-start items-center">
            <img
              src={ethi}
              alt="Logo"
              className="w-[282px] h-[282px] object-contain"
            />
          </div>

          {/* Center - Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-gray-400 uppercase tracking-widest text-sm mb-2">
              Contact Us
            </h3>
            <p className="font-inter text-[14px]">+1 891 989-11-91</p>
            <p className="font-inter text-[14px]">info@logoipsum.com</p>
          </div>

          {/* Right - Social Buttons */}
          <div className="flex justify-center md:justify-end space-x-4">
            <button className="border border-gray-400 rounded-full px-4 py-1 text-[12px] font-inter hover:bg-gray-800 transition">
              Instagram
            </button>
            <button className="border border-gray-400 rounded-full px-4 py-1 text-[12px] font-inter hover:bg-gray-800 transition">
              Whatsapp
            </button>
            <button className="border border-gray-400 rounded-full px-4 py-1 text-[12px] font-inter hover:bg-gray-800 transition">
              Twitter
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="absolute bottom-2 right-6 text-gray-400 text-sm">
        © 2023 — Copyright
      </div>
    </footer>
  );
};

export default Footer;
