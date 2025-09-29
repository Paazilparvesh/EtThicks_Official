import Logo from "/src/assets/headerasset/EtThicks1.png";
import Service1 from "/src/assets/home/Ser1.png"
import Service2 from "/src/assets/home/Ser2.png"
import Service3 from "/src/assets/home/Ser3.png"
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50 font-inter text-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img src={Logo} alt="Logo" className="w-auto object-cover" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10 text-md lg:text-lg 2xl:text-xl mr-8">
            <Link to="/" className="hover:text-orange-300 transition-colors">
              Home
            </Link>

            <Link to="/about" className="hover:text-orange-300 transition-colors">
              About
            </Link>

            {/* Services Dropdown for Desktop */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="hover:text-orange-300 focus:outline-none">
                Services
              </button>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute -right-60 top-8 mt-4 bg-gray-900 shadow-lg rounded-xl p-4 w-[100vw] max-w-5xl"
                  >
                    {/* Responsive Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      <Link
                        to="/service1"
                        className="flex flex-col items-center justify-center bg-gray-800 rounded-xl p-4 hover:bg-gray-700 transition"
                      >
                        <img
                          src={Service1}
                          alt="Service 1"
                          className="h-16 w-16 object-contain mb-2"
                        />
                        <p className="text-orange-300 text-lg font-medium">Content Creation</p>
                      </Link>

                      <Link
                        to="/service2"
                        className="flex flex-col items-center justify-center bg-gray-800 rounded-xl p-4 hover:bg-gray-700 transition"
                      >
                        <img
                          src={Service2}
                          alt="Service 2"
                          className="h-16 w-16 object-contain mb-2"
                        />
                        <p className="text-orange-300 text-lg font-medium">Digital Marketing</p>
                      </Link>

                      <Link
                        to="/service3"
                        className="flex flex-col items-center justify-center bg-gray-800 rounded-xl p-4 hover:bg-gray-700 transition"
                      >
                        <img
                          src={Service3}
                          alt="Service 3"
                          className="h-16 w-16 object-contain mb-2"
                        />
                        <p className="text-orange-300 text-lg font-medium">Brand Storytelling</p>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>


            <Link to="/contact" className="hover:text-orange-300 transition-colors">
              Contact
            </Link>
            <Link to="/blog" className="hover:text-orange-300 transition-colors">
              Blogs
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="focus:outline-none"
            >
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with animation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black text-md shadow-lg"
          >
            <Link
              to="/"
              className="block px-4 py-3 hover:bg-gray-800 hover:text-orange-300"
            >
              Home
            </Link>

            {/* Services in Mobile */}
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="w-full text-left px-4 py-3 hover:bg-gray-800 hover:text-orange-300 focus:outline-none flex justify-between items-center"
              >
                Services
                <motion.svg
                  animate={{ rotate: isServicesOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2 text-orange-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </button>
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="pl-4 bg-orange-300 text-black overflow-hidden"
                  >
                    <Link
                      to="/service1"
                      className="block px-4 py-2 hover:bg-gray-800 hover:text-orange-300"
                    >
                      Service 1
                    </Link>
                    <Link
                      to="/service2"
                      className="block px-4 py-2 hover:bg-gray-800 hover:text-orange-300"
                    >
                      Service 2
                    </Link>
                    <Link
                      to="/service3"
                      className="block px-4 py-2 hover:bg-gray-800 hover:text-orange-300"
                    >
                      Service 3
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>


            <Link
              to="/about"
              className="block px-4 py-3 hover:bg-gray-800 hover:text-orange-300"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block px-4 py-3 hover:bg-gray-800 hover:text-orange-300"
            >
              Contact
            </Link>
            <Link
              to="/blog"
              className="block px-4 py-3 hover:bg-gray-800 hover:text-orange-300"
            >
              Blogs
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
