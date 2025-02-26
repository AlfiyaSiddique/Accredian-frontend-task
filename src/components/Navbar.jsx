import { useState } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm relative z-100">
      {/* Top Announcement Bar */}
      <div className="text-center bg-[#1A73E826] p-4 text-xl font-medium">
        Navigate your ideal career path with tailored expert advice
        <span className="text-[#1A73E8] font-semibold ml-4">
          Contact Expert
        </span>
      </div>

      {/* Navbar */}
      <div className="max-w-7xl mx-auto px-4 py-2.5 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo & Left Side */}
          <div className="flex items-center">
            <img className="h-8 w-auto" src={logo} alt="Accredian Logo" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-[#1a73e8] hover:bg-blue-700 cursor-pointer text-white px-4 py-2 rounded-md text-sm font-medium">
              Courses <FaChevronDown className="inline" />
            </button>
            <a
              href="#"
              className="text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Refer & Earn
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Resources
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              About Us
            </a>
            <button className="bg-[#eaedf1] cursor-pointer px-4 py-2 rounded-md text-sm font-medium">
              Login
            </button>
            <button className="bg-[#1a73e8] hover:bg-blue-700 cursor-pointer text-white px-4 py-2 rounded-md text-sm font-medium">
              Try for free
            </button>
          </div>

          <button className="block md:hidden bg-[#1a73e8] hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
            Explore →
          </button>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 hover:text-blue-600"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md absolute w-full left-0 top-[90px]">
          <div className="flex flex-col items-center space-y-4 py-4">
            <a
              href="#"
              className="text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Refer & Earn
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Resources
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              About Us
            </a>
            <button className="bg-[#eaedf1] cursor-pointer px-4 py-2 rounded-md text-sm font-medium">
              Login
            </button>
            <button className="bg-[#1a73e8] hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
              Try for free
            </button>
            <button
              className="bg-red-400 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
