const Contact = () => {
    return (
      <section id="contact" className="py-24 bg-white px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Contacto</h2>
          <p className="text-gray-700 mb-8 text-lg">
            ¿Tenés una idea o querés trabajar con nosotros? Completá el formulario:
          </p>
          <form className="grid gap-5">
            <input
              type="text"
              placeholder="Nombre"
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <textarea
              placeholder="Mensaje"
              rows="4"
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
            <button
              type="submit"
              className="bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </section>
    );
  };
  
  export default Contact;
  