import React from 'react';
import mariano from '../assets/images/team/mariano.jpg';
import stefania from '../assets/images/team/stefania.jpg';
import ivan from '../assets/images/team/ivan.jpg';

const Team = () => {
    // Datos del equipo
  const teamMembers = [
    {
      id: 1,
      name: "Mariano López",
      role: "CEO & Founder",
      image: mariano,
      description: "Especialista en estrategia digital"
    },
    {
      id: 2,
      name: "Stefania López",
      role: "UI/UX Designer",
      image: stefania,
      description: "Diseñadora creativa y funcional"
    },
    {
      id: 3,
      name: "Iván Kameyha",
      role: "Lead Developer",
      image: ivan,
      description: "Experto en desarrollo web"
    }
  ];
  return (
    <section id="nosotros" className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        {/* Sección del equipo */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Conocé nuestro equipo
          </h3>
        </div>

        {/* Círculos del equipo */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
          {teamMembers.map((member, index) => (
            <div 
              key={member.id}
              className="flex flex-col items-center group"
            >
              {/* Círculo con imagen */}
              <div className="relative mb-4">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-600 to-purple-600 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback si la imagen no carga
                      e.target.src = `https://ui-avatars.com/api/?name=${member.name}&background=6366f1&color=fff&size=200`;
                    }}
                  />
                </div>
                {/* Indicador de posición */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
              </div>

              {/* Información del miembro */}
              <div className="text-center">
                <h4 className="text-lg font-semibold text-gray-900 mb-1">
                  {member.name}
                </h4>
                <p className="text-blue-600 font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm max-w-32">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            ¿Querés conocer más sobre nosotros?
          </p>
          <a 
            href="#contacto"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Conversemos
          </a>
        </div>
    </section>
  );
};

export default Team;