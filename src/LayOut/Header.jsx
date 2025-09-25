import ethi from "/src/assets/headerasset/EtThicks1.png";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";

function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const closeTimeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 300); // delay 300ms before closing
  };

  return (
    <header className="bg-black text-white shadow-md sticky top-0 z-50 font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img src={ethi} alt="Logo" className="w-auto object-cover" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 text-[20px]">
            <Link to="/">Home</Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="focus:outline-none">Services</button>

              {isServicesOpen && (
                <div className="absolute left-0 mt-2 w-44 bg-gray-900 shadow-lg rounded-lg py-2 transition-all duration-500 ease-out z-50">
                  <Link
                    to="/service1"
                    className="block px-6 py-3"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    Service 1
                  </Link>
                  <Link
                    to="/service2"
                    className="block px-6 py-3"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    Service 2
                  </Link>
                  <Link
                    to="/service3"
                    className="block px-6 py-3"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    Service 3
                  </Link>
                </div>
              )}
            </div>

            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/blog">Blogs</Link>
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

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black text-[20px]">
          <Link
            to="/"
            className="block px-4 py-3"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>

          <div className="relative">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="w-full text-left px-4 py-3 focus:outline-none"
            >
              Services
            </button>
            {isServicesOpen && (
              <div className="pl-4 bg-gray-900 transition-all duration-500 ease-out">
                <Link
                  to="/service1"
                  className="block px-6 py-3"
                  onClick={() => {
                    setIsServicesOpen(false);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Service 1
                </Link>
                <Link
                  to="/service2"
                  className="block px-6 py-3"
                  onClick={() => {
                    setIsServicesOpen(false);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Service 2
                </Link>
                <Link
                  to="/service3"
                  className="block px-6 py-3"
                  onClick={() => {
                    setIsServicesOpen(false);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Service 3
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/about"
            className="block px-4 py-3"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="block px-4 py-3"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="/blog"
            className="block px-4 py-3"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Blogs
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
