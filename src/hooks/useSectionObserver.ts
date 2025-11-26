import { useEffect, useState } from 'react'
import type { SectionId } from '../types/content'

export const useSectionObserver = (sectionIds: SectionId[]) => {
  const [activeSection, setActiveSection] = useState<SectionId>('home')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)?.[0]

        if (visibleEntry) {
          const id = visibleEntry.target.getAttribute('id') as SectionId | null
          if (id) {
            setActiveSection(id)
          }
        }
      },
      { threshold: 0.4, rootMargin: '-20% 0px -40% 0px' },
    )

    sectionIds.forEach((id) => {
      const section = document.getElementById(id)
      if (section) {
        observer.observe(section)
      }
    })

    return () => observer.disconnect()
  }, [sectionIds])

  return { activeSection }
}

