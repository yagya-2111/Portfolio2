import type { IconType } from 'react-icons'

export type SectionId = 'home' | 'about' | 'skills' | 'projects' | 'resume' | 'contact'

export interface EducationEntry {
  id: string
  title: string
  institution: string
  description: string
  duration: string
  logo: string
}

export interface SkillItem {
  name: string
  icon: IconType
}

export interface SkillCategory {
  id: string
  label: string
  skills: SkillItem[]
}

export interface ProjectCard {
  id: string
  title: string
  description: string
  tech: string[]
  image: string
  github: string
  demo: string
}

