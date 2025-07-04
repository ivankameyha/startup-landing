import React from 'react';
import { techStack } from '../data/data.js';

const TechStack = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Tecnologías que dominamos
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {techStack.map((tech, index) => (
            <div key={index} className="text-center group">
              <div className={`w-16 h-16 bg-gradient-to-br ${tech.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-white font-bold text-xl">{tech.emoji}</span>
              </div>
              <h3 className="font-semibold text-gray-800">{tech.title}</h3>
              <p className="text-sm text-gray-600">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;