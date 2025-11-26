import { FaGithub, FaLinkedin } from 'react-icons/fa'
import SectionHeading from './SectionHeading'

const ContactSection = () => {
  const currentYear = new Date().getFullYear()

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
      <div className="glass-card rounded-[32px] border border-white/10 p-8">
        <div className="mb-8">
          <SectionHeading
            eyebrow="Contact"
            title="Let's build something impactful"
            description="Available for internships, freelance collaborations, and conversations about thoughtful engineering."
            align="left"
          />
        </div>

        <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              label: 'Phone',
              value: '+91 63864 69421',
              href: 'tel:+91916386469421',
            },
            {
              label: 'Email',
              value: 'singhgkp2006@gmail.com',
              href: 'mailto:singhgkp2006@gmail.com',
            },
            {
              label: 'Location',
              value: 'Gorakhpur, IN · Remote-friendly',
            },
          ].map((item) => {
            const Wrapper = item.href ? 'a' : 'div'
            return (
              <Wrapper
                key={item.label}
                {...(item.href ? { href: item.href } : {})}
                className="block rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur transition hover:border-brand-accent"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-brand-accent">{item.label}</p>
                <p className="mt-2 text-base font-semibold text-white">{item.value}</p>
              </Wrapper>
            )
          })}
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <p className="text-xl font-semibold text-white">Supriya Singh</p>
            <p className="text-slate-300">Software Developer</p>
            <p className="text-sm text-slate-400">
              Always excited to talk about creative UI, scalable architecture, and building teams that care about craft.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-accent">Social</p>
            <div className="flex flex-wrap gap-4">
              {/* Update the href values to link real profiles */}
              <a
                href="https://github.com/username"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-brand-accent"
              >
                <FaGithub className="text-lg" />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/supriya-singh-6359a5346https://www.linkedin.com/in/supriya-singh-6359a5346?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-brand-accent"
              >
                <FaLinkedin className="text-lg" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-10 text-center text-xs text-slate-400">
        &copy; {currentYear} Supriya Singh. Crafted with passion.
      </p>
    </section>
  )
}

export default ContactSection

