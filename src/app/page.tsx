import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import ProjectsSection from '../components/ProjectsSection'
import SkillsSection from '../components/SkillsSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

export default function App() {
  return (
    <div className="w-full min-h-screen bg-white text-gray-900 font-sans">
      <Header />
      <main>
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}