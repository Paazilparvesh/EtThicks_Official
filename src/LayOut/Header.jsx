
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo / Brand */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              MyWebsite
            </Link>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600">
              About Us
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-blue-600">
              Blogs
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </Link>
            <Link to="/service1" className="text-gray-700 hover:text-blue-600">
              Service 1
            </Link>
            <Link to="/service2" className="text-gray-700 hover:text-blue-600">
              Service 2
            </Link>
            <Link to="/service3" className="text-gray-700 hover:text-blue-600">
              Service 3
            </Link>
          </nav>

          {/* Call to Action Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
