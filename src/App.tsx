import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Code2, Download, Mail, Menu, X } from 'lucide-react'
import { achievements, profile, projects, skills } from './data'

const navItems = [['Work', '#work'], ['About', '#about'], ['Skills', '#skills'], ['Contact', '#contact']]
const filters = ['All', 'Backend', 'AI / Data', 'Problem Solving', 'In Progress']

function App() {
  const [filter, setFilter] = useState('All')
  const [menuOpen, setMenuOpen] = useState(false)
  const reduceMotion = useReducedMotion()
  const shownProjects = filter === 'All' ? projects : projects.filter((project) => project.category === filter)

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <nav className="nav-wrap" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="Manoj Jeur home"><span className="brand-mark">mj</span><span>manoj<span className="brand-dot">.</span></span></a>
          <div className="desktop-nav">
            {navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          </div>
          <a className="nav-cta" href="#contact">Let’s talk <ArrowUpRight size={15} aria-hidden="true" /></a>
          <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </nav>
        <AnimatePresence>
          {menuOpen && <motion.div className="mobile-nav" initial={reduceMotion ? false : { opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: reduceMotion ? 0 : .2 }}>
            {navItems.map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}<ArrowUpRight size={15} /></a>)}
          </motion.div>}
        </AnimatePresence>
      </header>

      <main id="main">
        <section className="hero section-shell" id="top">
          <div className="hero-grid">
            <div className="hero-copy">
              <motion.div className="eyebrow" initial={reduceMotion ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduceMotion ? 0 : .45 }}><span className="status-dot" /> JAVA BACKEND DEVELOPER <span className="eyebrow-separator">/</span> GRAD ’27</motion.div>
              <motion.h1 initial={reduceMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduceMotion ? 0 : .55, delay: reduceMotion ? 0 : .06 }}>Java backends,<br /><span>built to last<span className="hero-period">.</span></span></motion.h1>
              <p className="hero-intro"><strong>Manoj Jeur</strong> — {profile.intro}</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#work">View projects <ArrowDownRight size={17} /></a>
                <a className="button button-secondary" href={profile.resume} download>Download resume <Download size={15} /></a>
              </div>
              <div className="hero-meta"><span>COMPUTER SCIENCE &amp; BUSINESS SYSTEMS</span></div>
            </div>
            <div className="hero-art" aria-label="Abstract illustration of connected software systems" role="img">
              <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
              <div className="art-node node-core"><Code2 size={31} strokeWidth={1.5} /></div>
              <div className="art-node node-api"><span>API</span><span className="node-caption">DESIGN</span></div>
              <div className="art-node node-data"><span className="db-cylinder"><i /><i /><i /></span><span className="node-caption">DATA</span></div>
              <div className="art-node node-shield"><span className="shield-shape">✓</span><span className="node-caption">SECURE</span></div>
              <div className="art-node node-spring"><span className="spring-symbol">S</span><span className="node-caption">SPRING</span></div>
              <div className="art-label label-top">SYSTEMS / 01</div><div className="art-label label-bottom">JAVA · BACKEND · CLOUD</div>
            </div>
          </div>
          <a className="scroll-cue" href="#work"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} /></a>
        </section>

        <section className="work-section section-shell" id="work">
          <div className="section-heading"><div><p className="eyebrow section-kicker">SELECTED WORK <span>— BACKEND &amp; SYSTEMS</span></p><h2>Projects with<br className="mobile-break" /> <em>purpose.</em></h2></div><p className="section-aside">A selection of backend builds, learning projects, and ideas in progress.</p></div>
          <div className="filter-row" role="group" aria-label="Filter projects">
            {filters.map((item) => <button key={item} className={filter === item ? 'filter-chip active' : 'filter-chip'} onClick={() => setFilter(item)} aria-pressed={filter === item}>{item}</button>)}
          </div>
          <div className="project-grid">
            <AnimatePresence mode="popLayout">
              {shownProjects.map((project, index) => <motion.article key={project.name} className={`project-card ${index === 0 && filter === 'All' ? 'project-featured' : ''}`} layout initial={reduceMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: reduceMotion ? 0 : .28 }}>
                <div className="project-topline"><span>{project.number} / {String(projects.length).padStart(2, '0')}</span><span className="project-category">{project.category}{index === 0 && filter === 'All' ? ' · FEATURED' : ''}</span></div>
                <h3>{project.name}</h3><p className="project-summary">{project.summary}</p>
                <div className="project-detail"><span className="detail-label">THE CHALLENGE</span><p>{project.problem}</p></div>
                <ul className="feature-list">{project.features.map((feature) => <li key={feature}><span className="feature-mark">↗</span>{feature}</li>)}</ul>
                {project.stack.length > 0 && <div className="stack-list" aria-label="Technology stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>}
                <div className="project-links">
                  {project.github ? <a href={project.github} target="_blank" rel="noreferrer" aria-label={`View ${project.name} source on GitHub`}>View source <ArrowUpRight size={15} /></a> : <span className="link-unavailable">{project.note}</span>}
                  {project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={15} /></a>}
                </div>
              </motion.article>)}
            </AnimatePresence>
          </div>
          <p className="project-footnote">Project notes reflect the supplied resume and project details. No live demo is listed unless its availability is verified.</p>
        </section>

        <section className="about-section section-shell" id="about">
          <div className="about-label"><p className="eyebrow section-kicker">A LITTLE ABOUT ME</p><img className="about-portrait" src="/manoj-jeur.png" alt="Portrait of Manoj Jeur" width="460" height="460" loading="lazy" decoding="async" /><span className="about-index">01 — 03</span></div>
          <div className="about-content"><h2>Curious mind.<br /><em>Builder’s mindset.</em></h2><div className="about-columns"><p>I’m a Computer Science and Business Systems student at KIT’s College of Engineering, graduating in 2027. I’ve built three database-driven Java applications with Spring Boot and relational databases.</p><p>I’m drawn to the details behind reliable services: authentication, persistence, caching, and useful analytics. I keep strengthening those skills through hands-on builds and steady DSA practice.</p></div>
            <div className="education-card"><div className="education-icon"><Code2 size={20} /></div><div><span className="detail-label">EDUCATION</span><h3>{profile.education}</h3><p>{profile.college} · {profile.graduation} · CGPA {profile.cgpa}</p></div><span className="education-tag">STUDENT</span></div>
          </div>
        </section>

        <section className="skills-section section-shell" id="skills">
          <div className="section-heading skills-heading"><div><p className="eyebrow section-kicker">MY TOOLKIT</p><h2>Tools of the<br /><em>trade.</em></h2></div><p className="section-aside">The technologies I use today and the foundations I keep sharpening.</p></div>
          <div className="skills-grid">{skills.map((group, index) => <article className="skill-group" key={group.title}><span className="skill-index">0{index + 1}</span><h3>{group.title}</h3><div className="skill-tags">{group.items.map((item) => <span key={item}>{item}</span>)}</div></article>)}</div>
        </section>

        <section className="proof-section section-shell">
          <div className="proof-heading"><p className="eyebrow section-kicker">PROGRESS, IN PRACTICE</p><h2>Learning by<br /><em>doing.</em></h2></div>
          <div className="proof-content"><p className="proof-intro">Consistent practice keeps the fundamentals sharp—and leaves room to keep growing.</p><div className="achievement-grid">{achievements.map((item) => <div className="achievement" key={item.value}><span className="achievement-value">{item.value}</span><span className="achievement-label">{item.label}</span><span className="achievement-detail">{item.detail}</span></div>)}</div><p className="achievement-note">NPTEL scores and certificate details are listed in the downloadable resume.</p></div>
        </section>

        <section className="contact-section section-shell" id="contact">
          <div className="contact-top"><p className="eyebrow section-kicker">HAVE A GOOD CHALLENGE?</p><span className="contact-decoration">✳</span></div>
          <h2>Let’s build<br /><em>something solid.</em></h2>
          <p className="contact-intro">Open to backend developer opportunities, collaborations, and conversations about building better software.</p>
          <div className="contact-bottom"><span>CONTACT &amp; SOCIAL</span><div className="contact-links"><div className="social-links">
            <a href={profile.github} target="_blank" rel="noreferrer"><span className="social-monogram">GH</span> GitHub <ArrowUpRight size={14} /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><span className="social-monogram">in</span> LinkedIn <ArrowUpRight size={14} /></a>
            <a href={profile.leetcode} target="_blank" rel="noreferrer"><span className="leetcode-mark">⌘</span> LeetCode <ArrowUpRight size={14} /></a>
          </div><a className="contact-email" href={`mailto:${profile.email}`}><Mail size={15} /> {profile.email} <ArrowUpRight size={14} /></a></div></div>
        </section>
      </main>
      <footer className="site-footer section-shell"><a className="brand footer-brand" href="#top"><span className="brand-mark">mj</span><span>manoj<span className="brand-dot">.</span></span></a><span>Designed &amp; built with intention.</span><a className="back-top" href="#top">BACK TO TOP <ArrowRight size={13} /></a><span className="copyright">© {new Date().getFullYear()} MANOJ JEUR</span></footer>
    </>
  )
}

export default App
