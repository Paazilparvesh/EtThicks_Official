import Logo from "../assets/headerasset/logo.png";

const Footer = () => {
  return (
    <footer className="w-full h-full bg-black text-white border-t pb-4 md:pb-10 border-gray-800 relative inset-0">
      <div className="mx-auto px-5 sm:px-10 md:-mt-14">
        <div className="flex flex-col md:flex-row gap-8 md:items-end justify-between">

          {/* Left - Logo */}
          <div className="w-full md:w-1/2 flex justify-start items-start">
            <img
              src={Logo}
              alt="Logo"
              className="size-56 md:size-64 xl:size-70 object-cover -ml-7 -mb-12 -mt-10 md:mb-0 md:mt-0"
            />
          </div>

          {/* Center - Contact Info */}
          <div className="text-left w-full md:w-1/3">
            <h3 className="text-white opacity-60 uppercase tracking-widest text-sm mb-2">
              Contact Us
            </h3>
            <p className="text-sm text-white tracking-wider mt-1">+1 891 989-11-91</p>
            <p className="text-sm text-white tracking-wider mt-1">info@logoipsum.com</p>
          </div>

          {/* Right - Social Buttons */}
          <div className="w-full md:w-1/3 flex justify-center pt-5 md:justify-end gap-4">
            <button className="w-full border border-gray-600 rounded-full text-gray-300 px-4 py-1 text-sm md:text-xs hover:bg-gray-800 transition">
              Instagram
            </button>
            <button className="w-full border border-gray-600 rounded-full text-gray-300 px-1 py-1 text-sm md:text-xs hover:bg-gray-800 transition">
              Twitter
            </button>
            <button className="w-full border border-gray-600 rounded-full text-gray-300 px-4 py-1 text-sm md:text-xs hover:bg-gray-800 transition">
              Whatsapp
            </button>

          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center pt-5 md:pt-0 md:absolute md:top-2 md:right-6 text-gray-600 text-sm md:text-xs">
        © 2023 — Copyright
      </div>
    </footer>
  );
};

export default Footer;
