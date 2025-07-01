import React from 'react';
import { CheckCircle, Zap, Users, Award, Code, Globe } from 'lucide-react';
import { whyChooseUs } from '../data/data.js';

const WhyChooseUs = () => {
  // Mapeo de iconos de string a componentes
  const iconMap = {
    CheckCircle,
    Zap,
    Users,
    Award,
    Code,
    Globe
  };

  return (
    <section id="nosotros" className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Por qué elegirnos
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {whyChooseUs.map((item, index) => {
            const IconComponent = iconMap[item.icon];
            return (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <IconComponent className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-700 font-medium">{item.text}</span>
              </div>
            );
          })}
        </div>
        <div className="text-center">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            "Somos un equipo joven y obsesionado con resolver problemas reales de forma simple y efectiva."
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;