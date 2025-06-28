import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Nuestros proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((p) => (
            <motion.div
              key={p}
              className="bg-white rounded-xl shadow-lg p-6 text-left border border-gray-200 hover:shadow-2xl transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: p * 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-2">Proyecto {p}</h3>
              <p className="text-gray-600 mb-2">
                Descripción del proyecto con detalles. Tecnologías utilizadas.
              </p>
              <span className="text-sm text-indigo-500 font-medium">+ Detalles pronto</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
