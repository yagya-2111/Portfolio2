import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import type { SectionId } from '../types/content'

interface NavbarProps {
  activeSection: SectionId
  onNavigate: (id: SectionId) => void
}

const navItems: { id: SectionId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
]

const Navbar = ({ activeSection, onNavigate }: NavbarProps) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const total = doc.scrollHeight - doc.clientHeight
      const value = total > 0 ? (window.scrollY / total) * 100 : 0
      setProgress(value)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-white/5 bg-brand-dark/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-3 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center justify-between gap-6">
          <motion.button
            whileHover={{ scale: 1.02 }}
            className="text-lg font-semibold tracking-tight text-white"
            onClick={() => onNavigate('home')}
          >
            Supriya Singh
          </motion.button>

          <button
            onClick={() => onNavigate('contact')}
            className="hidden rounded-full bg-gradient-to-r from-brand-accent to-brand-accent-2 px-4 py-2 text-sm font-medium text-white shadow-glass transition hover:opacity-90 md:inline-flex"
          >
            Let's talk
          </button>
        </div>

        <nav className="flex gap-1 overflow-x-auto rounded-full border border-white/10 bg-white/5 p-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`relative rounded-full px-3 py-1.5 text-sm font-medium transition-colors md:px-4 md:py-2 ${
                  isActive ? 'text-white' : 'text-slate-300 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-pill"
                    className="absolute inset-0 rounded-full bg-white/10"
                    transition={{ type: 'spring', stiffness: 250, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            )
          })}
        </nav>
        <button
          onClick={() => onNavigate('contact')}
          className="inline-flex items-center justify-center rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white transition hover:border-white/40 md:hidden"
        >
          Let's talk
        </button>
      </div>
      <div className="mx-auto mt-2 h-0.5 w-full max-w-6xl overflow-hidden rounded-full bg-white/5">
        <div className="h-full rounded-full bg-gradient-to-r from-brand-accent-2 to-brand-accent" style={{ width: `${progress}%` }} />
      </div>
    </header>
  )
}

export default Navbar

