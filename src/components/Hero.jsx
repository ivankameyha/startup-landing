import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-700 text-white text-center px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          Somos <span className="text-yellow-300">MIS Devs</span>
        </h1>
        <p className="text-xl max-w-xl mx-auto mb-8 opacity-90">
          Desarrollamos software profesional para empresas, startups y emprendedores. 
          Aplicaciones móviles, web y soluciones personalizadas.
        </p>
        <a
          href="#projects"
          className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full shadow hover:scale-105 transition duration-300"
        >
          Ver proyectos
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
