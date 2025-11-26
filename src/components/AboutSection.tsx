import { motion } from 'framer-motion'
import { educationTimeline } from '../data/content'
import SectionHeading from './SectionHeading'

const AboutSection = () => (
  <section id="about" className="mx-auto max-w-6xl px-6 py-20">
    <div className="glass-card gradient-border rounded-[32px] border border-white/10 p-8 shadow-glass">
      <div className="mb-12">
        <SectionHeading
          eyebrow="About & Education"
          title="Learning with curiosity and intention"
          description="A quick snapshot of academic milestones and the path shaping my engineering mindset."
          align="left"
        />
      </div>

      <div className="relative">
        <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-brand-accent/60 via-white/10 to-transparent md:block" />
        <div className="flex flex-col gap-8 md:pl-10">
          {educationTimeline.map((entry, index) => (
            <motion.article
              key={entry.id}
              className="relative grid gap-6 rounded-3xl border border-white/5 bg-gradient-to-r from-white/10 to-transparent p-6 backdrop-blur md:grid-cols-[140px,1fr] md:items-center"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="absolute -left-11 hidden h-full items-center md:flex">
                <span className="relative">
                  <span className="absolute inset-0 animate-ping rounded-full bg-brand-accent/40" />
                  <span className="relative block h-4 w-4 rounded-full border border-brand-accent bg-brand-accent/90 shadow-glass" />
                </span>
              </div>
              <div className="flex items-center justify-center">
                {/* Replace the logo inside public/logos to update each school */}
                <img
                  src={entry.logo}
                  alt={`${entry.institution} logo`}
                  className="h-24 w-24 rounded-2xl border border-white/10 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.4em] text-brand-accent">{entry.duration}</p>
                <h3 className="text-xl font-semibold text-white">{entry.title}</h3>
                <p className="text-base font-medium text-slate-100">{entry.institution}</p>
                <p className="text-sm text-slate-300">{entry.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default AboutSection

