// src/components/Header.jsx
import React, { useState } from 'react';
import { Menu, X, Code } from 'lucide-react';
import { navLinks } from '../data/data.js';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        {/* <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <Code className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-800">Mastiv Solutions</span>
        </div> */}
        {/* Logo */}

        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center">
            <div 
              className="w-full h-full bg-gradient-to-r from-blue-600 to-purple-600"
              style={{
                WebkitMask: 'url(../../public/teamwork.svg) no-repeat center / contain',
                mask: 'url(/teamwork.svg) no-repeat center / contain'
              }}
            />
          </div>
          <span className="text-xl font-bold text-gray-800">IMA Solutions</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <a 
              key={index}
              href={link.href} 
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              {link.text}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <button onClick={() => document.getElementById('contacto')?.scrollIntoView({behavior: 'smooth'})} className="hidden md:block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
          Solicitá tu web
        </button>

        {/* Mobile menu button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-2 space-y-2">
            {navLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href} 
                className="block py-2 text-gray-600"
                onClick={() => setIsMenuOpen(false)} // Cierra el menú al hacer click
              >
                {link.text}
              </a>
            ))}
            <button onClick={() => document.getElementById('contacto')?.scrollIntoView({behavior: 'smooth'})} className="w-full mt-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-full">
              Solicitá tu web
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;