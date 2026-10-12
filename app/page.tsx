'use client'

import { useEffect, useState } from 'react'
import { ArrowUpRight, BriefcaseBusiness, Check, Clipboard, Code2, GraduationCap, Mail, Menu, Moon, Sun, X } from 'lucide-react'

const projects = [
  { name: 'PrepTrack', category: 'Full-Stack Web Application', description: 'A coding interview preparation platform for organizing placement preparation with progress tracking, practice management, and interactive analytics.', features: ['Coding progress tracking', 'Company-wise preparation', 'Daily streaks and weekly goals', 'Analytics dashboard'], tags: ['Python', 'Flask', 'Jinja', 'MySQL', 'Chart.js'], github: '', demo: '' },
  { name: 'Viraja', category: 'AI-Powered Career Intelligence', description: 'An AI-powered platform that helps users analyze resumes, identify improvement areas, and explore practical career guidance.', features: ['Resume information extraction', 'Skills, education, and project analysis', 'Weak bullet point detection', 'Career guidance'], tags: ['Python', 'FastAPI', 'PostgreSQL', 'AI'], github: 'https://github.com/Shrikrishna2003/Viraja', demo: 'https://viraja.onrender.com/' },
  { name: 'Online Learning Platform', category: 'Java Full Stack Internship Project', description: 'An online learning platform developed during Java Full Stack internship training, applying web development and backend programming fundamentals.', features: ['Educational application workflows', 'Java backend fundamentals', 'Database connectivity'], tags: ['Java', 'JSP', 'HTML', 'CSS', 'MySQL'], github: 'https://github.com/Shrikrishna2003/Online-Learning-Platform', demo: '' },
]

const skillGroups = [
  ['Programming', ['Python', 'Java', 'JavaScript', 'SQL']],
  ['Frontend', ['HTML', 'CSS', 'JavaScript', 'React fundamentals']],
  ['Backend', ['Flask', 'FastAPI', 'REST APIs', 'Jinja', 'Django fundamentals']],
  ['Databases', ['MySQL', 'PostgreSQL']],
  ['Tools & deployment', ['Git', 'GitHub', 'VS Code', 'Eclipse IDE', 'Railway', 'Render']],
  ['Data visualization', ['Chart.js']],
]

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return <div className="section-heading"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2><p>{text}</p></div>
}

function ResumeButton({ subtle = false }: { subtle?: boolean }) {
  return <a className={subtle ? 'resume-link' : 'button button-primary'} href="/resume.pdf" download="Shrikrishna_Mokhashi_Resume.pdf"><span>Download resume</span><ArrowUpRight aria-hidden="true" /></a>
}

export default function Home() {
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [darkMode, setDarkMode] = useState(true)
  const [themeReady, setThemeReady] = useState(false)
  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme')
    setDarkMode(savedTheme ? savedTheme === 'dark' : true)
    setThemeReady(true)
  }, [])
  useEffect(() => {
    if (!themeReady) return
    document.documentElement.classList.toggle('dark', darkMode)
    document.documentElement.classList.toggle('light', !darkMode)
    window.localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode, themeReady])
  const copyEmail = async () => { try { await navigator.clipboard.writeText('shrikrishnamokhashi2003@gmail.com'); setCopied(true); setTimeout(() => setCopied(false), 1800) } catch { window.location.href = 'mailto:shrikrishnamokhashi2003@gmail.com' } }
  const nav = ['About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact']
  return <main>
    <header className="nav-shell"><nav className="nav container" aria-label="Main navigation"><a className="brand" href="#home" onClick={() => setOpen(false)}><span className="brand-mark">SM</span><span>Shrikrishna Mokhashi<span className="accent">.</span></span></a><button className="menu-button" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button><div className={`nav-links ${open ? 'nav-links-open' : ''}`}>{nav.map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)}>{item}</a>)}<button className="theme-toggle mobile-theme-toggle" type="button" aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'} onClick={() => setDarkMode(!darkMode)}>{darkMode ? <Sun /> : <Moon />}<span>{darkMode ? 'Light mode' : 'Dark mode'}</span></button><ResumeButton subtle /></div><div className="nav-cta"><button className="theme-toggle" type="button" aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'} onClick={() => setDarkMode(!darkMode)}>{darkMode ? <Sun /> : <Moon />}</button><ResumeButton /></div></nav></header>
    <section id="home" className="hero container"><div className="hero-copy"><span className="eyebrow">Available for entry-level opportunities</span><h1>Hi, I&apos;m Shrikrishna Mokhashi<span className="accent">.</span></h1><p className="hero-role">Python Full Stack Developer <span>/</span> Software Engineer <span>/</span> AI Application Developer</p><p className="hero-text">I&apos;m a Computer Science Engineering graduate passionate about building practical web applications, reliable backend systems, and AI-powered products.</p><div className="hero-actions"><a className="button button-primary" href="#projects">View projects <ArrowUpRight aria-hidden="true" /></a><ResumeButton /><a className="text-link" href="#contact">Contact me</a></div><div className="socials"><a href="https://github.com/Shrikrishna2003" target="_blank" rel="noreferrer"><Code2 /> GitHub</a><a href="https://www.linkedin.com/in/shrikrishna18" target="_blank" rel="noreferrer"><Code2 /> LinkedIn</a></div></div><div className="hero-art"><div className="profile-photo-wrap"><img className="profile-photo" src="/shrikrishna-profile.jpeg" alt="Shrikrishna Mokhashi — Python Full Stack Developer." width="520" height="640" fetchPriority="high" decoding="async" /></div><div className="code-window"><div className="window-bar"><i /><i /><i /><span>developer.py</span></div><pre><code>{`class Developer:
  name = "Shrikrishna Mokhashi"
  focus = [
    "full_stack",
    "backend_systems",
    "ai_applications"
  ]

  def build(self, idea):
    return practical_software`}</code></pre></div><div className="orbit orbit-one" /><div className="orbit orbit-two" /></div></section>
    <section id="about" className="section container"><SectionHeading eyebrow="01 / About" title="Curious by nature. Practical by design." text="A little about how I approach software development." /><div className="about-grid"><div className="about-lead"><p className="large-copy">I&apos;m a 2026 Computer Science Engineering graduate focused on Python Full Stack Development, backend engineering, and AI-powered application development.</p><p>I enjoy taking an idea from an early concept to a useful product — designing clean APIs, working with databases, and creating interfaces that make complex workflows feel simple. My internship training and projects have given me a grounded approach to learning, problem-solving, and writing maintainable code.</p></div><div className="about-note"><Code2 /><span>Currently learning</span><strong>Better ways to build, ship, and improve.</strong></div></div></section>
    <section id="skills" className="section section-tinted"><div className="container"><SectionHeading eyebrow="02 / Toolkit" title="Tools I use to bring ideas to life." text="A focused, growing toolkit built through projects and hands-on training." /><div className="skills-grid">{skillGroups.map(([name, items]) => <div className="skill-card" key={name as string}><div className="skill-icon"><Code2 /></div><h3>{name}</h3><div className="tags">{(items as string[]).map(item => <span key={item}>{item}</span>)}</div></div>)}</div></div></section>
    <section id="projects" className="section container"><SectionHeading eyebrow="03 / Selected work" title="Projects I&apos;ve built." text="A selection of projects where I turned learning into working software." /><div className="projects-grid">{projects.map((project, index) => <article className="project-card" key={project.name}><div className={`project-visual visual-${index + 1}`}><span>0{index + 1}</span><div className="visual-lines"><b /><b /><b /></div><div className="visual-pill">{index === 1 ? 'AI' : index === 0 ? 'TRACK' : 'LEARN'}</div></div><div className="project-body"><span className="project-category">{project.category}</span><h3>{project.name}</h3><p>{project.description}</p><ul>{project.features.map(feature => <li key={feature}><Check />{feature}</li>)}</ul><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="project-links">{project.github && <a href={project.github} target="_blank" rel="noreferrer">Source code <ArrowUpRight /></a>}{project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Live demo <ArrowUpRight /></a>}{!project.github && <span className="unavailable">Repository link to be added</span>}</div></div></article>)}</div></section>
    <section id="experience" className="section section-tinted"><div className="container"><SectionHeading eyebrow="04 / Experience" title="Experience & training." text="Learning through structured training and applied project work." /><div className="timeline-card"><div className="timeline-marker"><BriefcaseBusiness /></div><div><span className="project-category">Internship & industry training</span><h3>Java Full Stack Internship</h3><p className="company">Glow Logics Pvt. Ltd. <span>·</span> Bengaluru</p><p>Participated in Java Full Stack internship training covering web development fundamentals, Java programming, object-oriented programming, database connectivity, and backend development concepts.</p><div className="tags"><span>HTML & CSS</span><span>JavaScript</span><span>Java & OOP</span><span>JDBC & SQL</span><span>Spring fundamentals</span><span>JSP & Maven</span></div></div><span className="date-label">Internship dates to be added</span></div></div></section>
    <section id="education" className="section container"><SectionHeading eyebrow="05 / Education" title="The foundation behind the work." text="Formal education, paired with a commitment to continuous learning." /><div className="education-card"><div className="education-icon"><GraduationCap /></div><div><span className="project-category">Bachelor of Engineering</span><h3>Computer Science and Engineering</h3><p>Smt Kamala and Shri Venkappa M Agadi College of Engineering and Technology, Laxmeshwar</p></div><div className="education-meta"><span>Graduated 2026</span><strong>8.27<span>/10</span></strong><small>CGPA</small></div></div></section>
    <section id="contact" className="contact-section"><div className="container contact-inner"><div><span className="eyebrow">06 / Contact</span><h2>Let&apos;s build something useful.</h2><p>Have a software development opportunity or an interesting project in mind? I&apos;d love to connect and discuss how I can contribute.</p></div><div className="contact-actions"><a className="button button-light" href="mailto:shrikrishnamokhashi2003@gmail.com"><Mail /> Email me <ArrowUpRight /></a><button className="copy-button" onClick={copyEmail}><Clipboard /> {copied ? 'Email copied' : 'Copy email'}</button></div></div></section>
    <footer className="footer container"><div><a className="brand" href="#home"><span className="brand-mark">SM</span><span>Shrikrishna Mokhashi<span className="accent">.</span></span></a><p>Building practical software, one project at a time.</p></div><div className="footer-links"><a href="https://github.com/Shrikrishna2003" target="_blank" rel="noreferrer"><Code2 /> GitHub</a><a href="https://www.linkedin.com/in/shrikrishna18" target="_blank" rel="noreferrer"><Code2 /> LinkedIn</a><a href="mailto:shrikrishnamokhashi2003@gmail.com"><Mail /> Email</a></div><small>© {new Date().getFullYear()} Shrikrishna Mokhashi</small></footer>
  </main>
}
