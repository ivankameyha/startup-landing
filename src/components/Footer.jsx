// src/components/Footer.jsx
import React from 'react';
import { Code, Instagram} from 'lucide-react';
import { navLinks, socialLinks } from '../data/data.js';

const Footer = () => {
  // Mapeo de iconos para las redes sociales
  const iconMap = {
    Instagram: Instagram
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo y descripción */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-6 h-6 rounded-lg flex items-center justify-center">
                <div 
                  className="w-full h-full bg-gradient-to-r from-blue-600 to-purple-600"
                  style={{
                    WebkitMask: 'url(../../public/teamwork.svg) no-repeat center / contain',
                    mask: 'url(../../public/teamwork.svg) no-repeat center / contain'
                  }}
                />
              </div>
              <span className="text-xl font-bold">IMA Solutions</span>
            </div>
            <p className="text-gray-400">
              Transformamos ideas en experiencias web excepcionales.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="font-semibold mb-4">Enlaces rápidos</h3>
            <div className="space-y-2">
              {navLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>

          {/* Redes sociales */}
          <div>
            <h3 className="font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = iconMap[social.icon];
                return (
                  <a 
                    key={index}
                    href={social.href} 
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© IMSolutions 2025. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
