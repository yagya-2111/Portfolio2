import {
  FaCode,
  FaCss3Alt,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaLinux,
  FaNodeJs,
  FaPython,
  FaReact,
} from 'react-icons/fa'
import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiPostman,
  SiRedux,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'
import { TbApi } from 'react-icons/tb'
import type { EducationEntry, ProjectCard, SkillCategory } from '../types/content'

export const educationTimeline: EducationEntry[] = [
  {
    id: 'college',
    title: 'B.Tech · Computer Science & Engineering',
    institution: 'Institute of Technology and Management, GIDA, Gorakhpur',
    description: 'Exploring modern software engineering, system design, and user-centric web experiences.',
    duration: '2023 – 2027',
    logo: '/src/data/Layer-1.png',
  },
  {
    id: 'class12',
    title: 'Class 12 · PCM Stream',
    institution: 'Lorem Ipsum Senior Secondary School',
    description: 'Graduated with 92.6% focusing on core sciences and mathematics.',
    duration: '2021 – 2023',
    logo: '/logos/school12.jpg',
  },
  {
    id: 'class10',
    title: 'Class 10',
    institution: 'Dolor Sit Amet High School',
    description: 'Completed foundational studies with 95% and a strong curiosity for technology.',
    duration: '2019 – 2021',
    logo: '/logos/school10.jpg',
  },
]

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    skills: [
      { name: 'HTML5', icon: FaHtml5 },
      { name: 'CSS3', icon: FaCss3Alt },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'React', icon: FaReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'Redux Toolkit', icon: SiRedux },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    skills: [
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'Express.js', icon: SiExpress },
      { name: 'REST APIs', icon: TbApi },
      { name: 'Python', icon: FaPython },
    ],
  },
  {
    id: 'databases',
    label: 'Databases',
    skills: [
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'MySQL', icon: SiMysql },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'SQLite', icon: SiSqlite },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Platforms',
    skills: [
      { name: 'Git & GitHub', icon: FaGitAlt },
      { name: 'VS Code', icon: FaCode },
      { name: 'Postman', icon: SiPostman },
      { name: 'Docker', icon: FaDocker },
      { name: 'Linux Basics', icon: FaLinux },
    ],
  },
]

export const projectCards: ProjectCard[] = [
  {
    id: 'project-1',
    title: 'Expense Tracker App',
    description:
      'A smart dashboard for tracking daily spending trends with personalized budgeting insights and cloud sync.',
    tech: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    image: '/projects/project1.jpg',
    github: 'https://github.com/username/expense-tracker',
    demo: 'https://example.com/expense-tracker',
  },
  {
    id: 'project-2',
    title: 'Wellness Companion',
    description:
      'Responsive PWA that monitors wellness habits, goals, and mindfulness streaks with delightful micro-interactions.',
    tech: ['Next.js', 'Tailwind', 'Framer Motion'],
    image: '/projects/project2.jpg',
    github: 'https://github.com/username/wellness-companion',
    demo: 'https://example.com/wellness',
  },
  {
    id: 'project-3',
    title: 'Realtime Chat Experience',
    description:
      'Secure messaging platform supporting themed rooms, emoji reactions, and latency-optimized WebSocket streams.',
    tech: ['React', 'Socket.io', 'Express', 'Redis'],
    image: '/projects/project3.jpg',
    github: 'https://github.com/username/realtime-chat',
    demo: 'https://example.com/chat',
  },
  {
    id: 'project-4',
    title: 'Insightful Analytics Board',
    description:
      'Interactive analytics board for startups with drill-down charts, role-based access, and exportable insights.',
    tech: ['TypeScript', 'Next.js', 'D3.js', 'PostgreSQL'],
    image: '/projects/project4.jpg',
    github: 'https://github.com/username/analytics-board',
    demo: 'https://example.com/analytics-board',
  },
  {
    id: 'project-5',
    title: 'Design System Playground',
    description:
      'Component-driven design system featuring glassmorphism tokens, theming primitives, and Storybook examples.',
    tech: ['React', 'Storybook', 'Tailwind CSS'],
    image: '/projects/project5.jpg',
    github: 'https://github.com/username/design-system',
    demo: 'https://example.com/design-system',
  },
]

