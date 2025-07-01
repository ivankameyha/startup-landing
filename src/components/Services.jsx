import React from 'react';
import { Globe, BarChart3, ShoppingCart, Calendar, Code, Settings } from 'lucide-react';
import { services } from '../data/data.js';

const Services = () => {
  // Mapeo de iconos de string a componentes
  const iconMap = {
    Globe,
    BarChart3,
    ShoppingCart,
    Calendar,
    Code,
    Settings
  };

  return (
    <section id="servicios" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Qué ofrecemos
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Soluciones web completas adaptadas a las necesidades de tu negocio
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;