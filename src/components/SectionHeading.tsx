interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

const SectionHeading = ({ eyebrow, title, description, align = 'center' }: SectionHeadingProps) => {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left'
  const accentAlign = align === 'center' ? 'self-center' : 'self-start'

  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      {eyebrow && <p className="text-xs uppercase tracking-[0.2em] text-brand-accent">{eyebrow}</p>}
      <h2 className="text-3xl font-semibold text-white md:text-4xl">{title}</h2>
      <span className={`h-px w-16 rounded-full bg-gradient-to-r from-brand-accent to-brand-accent-2 ${accentAlign}`} />
      {description && <p className="max-w-2xl text-base text-slate-300">{description}</p>}
    </div>
  )
}

export default SectionHeading

