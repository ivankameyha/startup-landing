import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="font-bold text-xl">MIS Devs</h1>
        <ul className="flex gap-6 text-gray-600 font-medium">
          <li><Link to="hero" smooth duration={500}>Inicio</Link></li>
          <li><Link to="about" smooth duration={500}>Nosotros</Link></li>
          <li><Link to="projects" smooth duration={500}>Proyectos</Link></li>
          <li><Link to="contact" smooth duration={500}>Contacto</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
