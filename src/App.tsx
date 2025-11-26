import { useCallback, useMemo } from 'react'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ProjectsSection from './components/ProjectsSection'
import ResumeSection from './components/ResumeSection'
import SkillsSection from './components/SkillsSection'
import { useSectionObserver } from './hooks/useSectionObserver'
import type { SectionId } from './types/content'

const App = () => {
  const sectionOrder = useMemo<SectionId[]>(() => ['home', 'about', 'skills', 'projects', 'resume', 'contact'], [])
  const { activeSection } = useSectionObserver(sectionOrder)

  const scrollToSection = useCallback((section: SectionId) => {
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-brand-darker text-white">
      <div className="pointer-events-none absolute inset-0 bg-hero-gradient opacity-90" />
      <div className="pointer-events-none subtle-grid absolute inset-0" />
      <div className="pointer-events-none absolute left-12 top-32 hidden h-72 w-72 animate-blob rounded-full bg-brand-accent/40 blur-[140px] md:block" />
      <div className="pointer-events-none absolute bottom-0 right-12 hidden h-72 w-72 animate-blob rounded-full bg-brand-red/45 blur-[150px] md:block" />
      <div className="pointer-events-none absolute -left-8 bottom-20 hidden h-64 w-64 animate-pulse-soft rounded-full bg-brand-accent-3/30 blur-[140px] lg:block" />

      <div className="relative">
        <Navbar activeSection={activeSection} onNavigate={scrollToSection} />
        <main>
          <Hero onViewProjects={() => scrollToSection('projects')} onViewResume={() => scrollToSection('resume')} />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ResumeSection />
          <ContactSection />
        </main>
      </div>
    </div>
  )
}

export default App

