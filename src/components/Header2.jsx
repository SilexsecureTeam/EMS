import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import newlogo from '../assets/newlogo.png';
import vector from '../assets/vector.png';
import { Menu, X } from 'lucide-react'; // Optional: install lucide-react for icons

const Header2 = () => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-5">
        {/* Logo */}
        <img src={newlogo} alt="logo" className="h-10" />

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 items-center font-semibold text-[#333]">
          {/* Home Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsSubmenuOpen(true)}
            onMouseLeave={() => setIsSubmenuOpen(false)}
          >
            <button className="flex items-center gap-1 text-[#C3AA8C]">
              Home <img src={vector} alt="vector" className="w-3 h-3 pt-1" />
            </button>
            {isSubmenuOpen && (
              <ul className="absolute top-full left-0 mt-2 w-32 bg-white rounded shadow z-50">
                <li><NavLink to="/" className="block px-4 py-2 hover:bg-[#C3AA8C]">Home 1</NavLink></li>
                <li><NavLink to="/home2" className="block px-4 py-2 hover:bg-[#C3AA8C]">Home 2</NavLink></li>
                <li><NavLink to="/home3" className="block px-4 py-2 hover:bg-[#C3AA8C]">Home 3</NavLink></li>
              </ul>
            )}
          </div>

          <NavLink to="/about" className="hover:text-[#C3AA8C]">About</NavLink>
          <NavLink to="/programs" className="hover:text-[#C3AA8C]">Programs</NavLink>
          <NavLink to="/services" className="hover:text-[#C3AA8C]">Services</NavLink>
          <NavLink to="/testimonials" className="hover:text-[#C3AA8C]">Testimonials</NavLink>
          <NavLink to="/news" className="hover:text-[#C3AA8C]">News</NavLink>
        </nav>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-4">
          <NavLink to="/account" className="font-medium hover:text-[#C3AA8C]">My Account</NavLink>
          <button className="bg-[#C3AA8C] text-white px-4 py-2 rounded-md hover:bg-[#b09175]">
            Enroll Now
          </button>
        </div>

        {/* Hamburger - Mobile */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white px-4 py-4 shadow-lg">
          <NavLink to="/" className="block py-2">Home</NavLink>
          <NavLink to="/about" className="block py-2">About</NavLink>
          <NavLink to="/programs" className="block py-2">Programs</NavLink>
          <NavLink to="/services" className="block py-2">Services</NavLink>
          <NavLink to="/testimonials" className="block py-2">Testimonials</NavLink>
          <NavLink to="/news" className="block py-2">News</NavLink>
          <NavLink to="/account" className="block py-2">My Account</NavLink>
          <button className="w-full mt-2 bg-[#C3AA8C] text-white py-2 rounded-md hover:bg-[#b09175]">
            Enroll Now
          </button>
        </div>
      )}
    </header>
  );
};

export default Header2;
