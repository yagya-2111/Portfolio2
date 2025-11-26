import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const ResumeSection = () => (
  <section id="resume" className="mx-auto max-w-6xl px-6 py-20">
    <div className="glass-card gradient-border flex flex-col gap-8 rounded-[32px] border border-white/10 p-8 md:flex-row md:items-center md:justify-between">
      <SectionHeading
        eyebrow="Resume"
        title="My Resume"
        description="Quick access to the latest resume. Replace public/resume.pdf with your own file to keep this section updated."
        align="left"
      />

      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <motion.div
          className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-accent to-brand-accent-2 font-semibold text-white">
            PDF
          </span>
          <div>
            <p className="text-base font-semibold text-white">Supriya_Singh_Resume.pdf</p>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Updated weekly</p>
          </div>
        </motion.div>
        <motion.a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-brand-accent to-brand-accent-2 px-6 py-3 text-sm font-semibold text-white shadow-glass"
        >
          View Resume (PDF)
        </motion.a>
      </div>
    </div>
  </section>
)

export default ResumeSection

