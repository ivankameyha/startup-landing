import Header from './components/Header'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import TechStack from './components/TechStack'
import Services from './components/Services'
import Projects from './components/Projects'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Team from './components/Team'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <Services />
      <Projects />
      <WhyChooseUs />
      <Testimonials />
      <Team />
      <TechStack />
      <Contact />
      <Footer />
    </div>
  )
}

export default App