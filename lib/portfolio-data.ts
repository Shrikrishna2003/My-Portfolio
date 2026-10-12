export type Project = {
  name: string
  category: string
  description: string
  features: string[]
  technologies: string[]
  github?: string
  live?: string
  visual: 'prep' | 'viraja' | 'learning'
}

export const profile = {
  name: 'Shrikrishna Mokhashi',
  email: 'shrikrishnamokhashi2003@gmail.com',
  github: 'https://github.com/Shrikrishna2003',
  linkedin: 'https://www.linkedin.com/in/shrikrishna18',
}

export const skillGroups = [
  { label: 'Programming Languages', skills: ['Python', 'Java', 'JavaScript', 'SQL'] },
  { label: 'Frontend Development', skills: ['HTML', 'CSS', 'JavaScript', 'React fundamentals'] },
  { label: 'Backend Development', skills: ['Flask', 'FastAPI', 'REST APIs', 'Jinja', 'Django fundamentals'] },
  { label: 'Databases', skills: ['MySQL', 'PostgreSQL'] },
  { label: 'Tools & Deployment', skills: ['Git', 'GitHub', 'VS Code', 'Eclipse IDE', 'Railway', 'Render'] },
  { label: 'Data Visualization', skills: ['Chart.js'] },
]

export const projects: Project[] = [
  {
    name: 'PrepTrack',
    category: 'Full-stack web application',
    description: 'A coding interview preparation platform that helps students organize placement preparation through progress tracking, practice management, and interactive analytics.',
    features: ['Coding progress tracking', 'Python practice', 'Company-wise preparation', 'Daily streaks', 'Analytics dashboard', 'Weekly goals'],
    technologies: ['Python', 'Flask', 'Jinja', 'SQL', 'JavaScript', 'Chart.js'],
    visual: 'prep',
  },
  {
    name: 'Viraja',
    category: 'AI-powered career intelligence',
    description: 'An AI-powered career intelligence platform focused on resume analysis, identifying improvement areas, and practical career guidance.',
    features: ['Resume analysis', 'Information extraction', 'Skills and project review', 'Missing detail detection', 'Bullet point feedback'],
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'JavaScript', 'AI integration'],
    github: 'https://github.com/Shrikrishna2003/Viraja',
    live: 'https://viraja.onrender.com/',
    visual: 'viraja',
  },
  {
    name: 'Online Learning Platform',
    category: 'Java full-stack internship project',
    description: 'An educational web application developed during Java Full Stack internship training to apply web development fundamentals and backend programming concepts.',
    features: ['Educational content experience', 'Java backend practice', 'Database connectivity', 'Responsive web fundamentals'],
    technologies: ['Java', 'JSP', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
    github: 'https://github.com/Shrikrishna2003/Online-Learning-Platform',
    visual: 'learning',
  },
]

export const experienceTopics = ['HTML & CSS', 'JavaScript & DOM', 'Java & OOP', 'JDBC & SQL', 'Spring fundamentals', 'Spring MVC', 'JSP & Maven']

export const navItems = ['About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact']

export const currentYear = new Date().getFullYear()
export const resumePath = '/resume.pdf'
export const resumeFilename = 'Shrikrishna_Mokhashi_Resume.pdf'
