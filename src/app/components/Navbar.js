"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Branding with Logo */}
        <div className="flex items-center space-x-3">
          <img
  src="/logo.png"
  alt="Technile IT Solutions Logo"
  className="w-16 h-16 object-contain"
/>

          <span className="text-2xl md:text-3xl font-extrabold tracking-wider text-orange-500 hover:drop-shadow-lg transition duration-200">
            technileitsolutions
          </span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-8 text-sm font-semibold tracking-wide">
          <a href="/" className="relative group">
            <span className="hover:text-orange-400 transition">Home</span>
            <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="/about" className="relative group">
            <span className="hover:text-orange-400 transition">About</span>
            <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="/services" className="relative group">
            <span className="hover:text-orange-400 transition">Services</span>
            <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="/contact" className="relative group">
            <span className="hover:text-orange-400 transition">Contact</span>
            <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 pt-2 space-y-3 text-sm font-semibold bg-black border-t border-gray-800">
          <a href="/" className="block hover:text-orange-400 transition">Home</a>
          <a href="/about" className="block hover:text-orange-400 transition">About</a>
          <a href="/services" className="block hover:text-orange-400 transition">Services</a>
          <a href="/contact" className="block hover:text-orange-400 transition">Contact</a>
        </div>
      )}
    </nav>
  );
}
