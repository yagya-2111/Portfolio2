import { motion } from 'framer-motion'
import { skillCategories } from '../data/content'
import SectionHeading from './SectionHeading'

const skillVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05 },
  }),
}

const SkillsSection = () => (
  <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
    <div className="mb-12">
      <SectionHeading
        eyebrow="Skills"
        title="Tools and technologies in constant rotation"
        description="Balanced across frontend craftsmanship, backend architecture, databases, and productivity tooling."
      />
    </div>

    <div className="grid gap-6 md:grid-cols-2">
      {skillCategories.map((category, cardIndex) => (
        <motion.div
          key={category.id}
          className="rounded-[28px] border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-6 backdrop-blur-lg shadow-inner-glow"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: cardIndex * 0.1 }}
        >
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white">{category.label}</h3>
            <span className="text-sm text-slate-300">{category.skills.length} skills</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {category.skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white transition hover:border-brand-accent hover:bg-brand-accent/10"
                variants={skillVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={index}
              >
                <skill.icon className="text-base text-brand-accent transition group-hover:text-brand-accent-2" />
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
)

export default SkillsSection

