import { motion } from 'framer-motion'
import { projectCards } from '../data/content'
import SectionHeading from './SectionHeading'

const ProjectsSection = () => (
  <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
    <div className="mb-12">
      <SectionHeading
        eyebrow="Projects"
        title="Selected product experiments"
        description="Blending polished UI, maintainable architecture, and modern tooling. Each tile links to GitHub and a live preview."
      />
    </div>

    <div className="grid gap-6 md:grid-cols-2">
      {projectCards.map((project, index) => (
        <motion.article
          key={project.id}
          className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -10, scale: 1.01 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <div className="relative overflow-hidden">
            {/* Replace the images inside public/projects to update visuals */}
            <img
              src={project.image}
              alt={project.title}
              className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-transparent to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center gap-4 bg-brand-dark/70 opacity-0 transition group-hover:opacity-100">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/40 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white"
              >
                View Code
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-gradient-to-r from-brand-accent to-brand-accent-2 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white"
              >
                Live Demo
              </a>
            </div>
          </div>
          <div className="space-y-4 p-6">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-wide text-slate-300">
                {index + 1}/5
              </span>
            </div>
            <p className="text-base text-slate-300">{project.description}</p>
            <div className="flex flex-wrap gap-2 text-xs text-slate-200">
              {project.tech.map((tech) => (
                <span key={tech} className="rounded-full bg-white/10 px-3 py-1">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 rounded-full border border-white/20 px-4 py-2 text-center text-sm font-semibold text-white transition hover:border-brand-accent"
              >
                View Code
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="flex-1 rounded-full bg-gradient-to-r from-brand-accent to-brand-accent-2 px-4 py-2 text-center text-sm font-semibold text-white"
              >
                Live Demo
              </a>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  </section>
)

export default ProjectsSection

