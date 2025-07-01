import React from 'react';
import { projects } from '../data/data.js';

const Projects = () => {
  return (
    <section id="proyectos" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Nuestros proyectos
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className={`${project.image} h-64 rounded-2xl mb-4 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                <div className="text-white text-center z-10">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm opacity-90">{project.tech}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300">
            Ver más proyectos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;