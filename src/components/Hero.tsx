import { motion } from 'framer-motion'

interface HeroProps {
  onViewProjects: () => void
  onViewResume: () => void
}

const stats = [
  { label: 'Projects shipped', value: '20+', accent: 'from-brand-accent to-brand-accent-2' },
  { label: 'Design systems', value: '05', accent: 'from-brand-accent-2 to-brand-accent-3' },
  { label: 'Cups of chai', value: '∞', accent: 'from-brand-accent to-brand-accent-3' },
]

const Hero = ({ onViewProjects, onViewResume }: HeroProps) => (
  <section
    id="home"
    className="relative isolate mx-auto flex min-h-screen max-w-6xl flex-col-reverse gap-12 px-6 pb-24 pt-40 md:flex-row md:items-center"
  >
    <div className="pointer-events-none absolute -top-20 left-[10%] h-64 w-64 rounded-full bg-brand-accent/30 blur-[120px]" />
    <div className="pointer-events-none absolute top-10 right-[5%] h-72 w-72 rounded-full bg-brand-red/50 blur-[150px]" />
    <div className="pointer-events-none absolute -bottom-10 left-[45%] h-60 w-60 rounded-full bg-brand-accent-3/25 blur-[120px]" />

    <motion.div
      className="flex flex-1 flex-col gap-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <p className="text-sm uppercase tracking-[0.4em] text-slate-300">Software Developer</p>
      <div className="space-y-4">
        <h1 className="text-4xl font-semibold text-white md:text-6xl">Supriya Singh</h1>
        <p className="text-lg text-slate-300 md:text-xl">
          Passionate Software Developer focusing on modern web applications and clean user experiences.
          I craft thoughtful interfaces, performant systems, and delightful interactions.
        </p>
      </div>

      <div className="flex flex-wrap gap-4">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onViewProjects}
          className="rounded-full bg-gradient-to-r from-brand-accent to-brand-accent-2 px-6 py-3 text-sm font-semibold text-white shadow-glass"
        >
          View Projects
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onViewResume}
          className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white"
        >
          Download Resume
        </motion.button>
      </div>

      <div className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
        <div className="flex items-center justify-between text-sm text-slate-300">
          <span>Call</span>
          <a href="tel:+916386469421" className="font-medium text-white hover:text-brand-accent">
            +91 63864 69421
          </a>
        </div>
        <div className="flex items-center justify-between text-sm text-slate-300">
          <span>Email</span>
          <a
            href="mailto:singhgkp2006@gmail.com"
            className="font-medium text-white hover:text-brand-accent"
          >
            singhgkp2006@gmail.com
          </a>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((item) => (
          <motion.div
            key={item.label}
            className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-4 text-center backdrop-blur"
            whileHover={{ y: -4 }}
          >
            <p
              className={`bg-gradient-to-r ${item.accent} bg-clip-text text-2xl font-semibold text-transparent`}
            >
              {item.value}
            </p>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-300">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>

    <motion.div
      className="glass-card relative flex flex-1 items-center justify-center rounded-[36px] border border-white/10 p-6"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9 }}
    >
      {/* Profile photo served from public/ so it works in build */}
      <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] border border-white/10 shadow-inner-glow">
        <img
          src="/Screenshot 2025-11-26 115558.png"
          alt="Supriya Singh"
          className="h-full w-full object-cover object-top"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-transparent to-transparent" />
        <div className="absolute bottom-6 left-1/2 w-[85%] -translate-x-1/2 rounded-2xl bg-white/10 p-4 text-center backdrop-blur">
          <p className="text-sm font-semibold text-white">Modern Web Experiences</p>
          <p className="text-xs text-slate-200">Crafted with care & precision</p>
        </div>
      </div>

      <motion.div
        className="absolute -left-6 top-10 hidden rounded-2xl border border-white/10 bg-brand-card/90 px-4 py-3 text-sm text-white shadow-glass md:flex"
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
      >
        Pixel-perfect UI
      </motion.div>
      <motion.div
        className="absolute -right-8 bottom-14 hidden rounded-2xl border border-white/10 bg-brand-card/90 px-4 py-3 text-sm text-white shadow-glass md:flex"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
      >
        Delightful UX
      </motion.div>
    </motion.div>
  </section>
)

export default Hero

