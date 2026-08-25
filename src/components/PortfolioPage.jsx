import { useEffect, useRef, useState } from 'react'
import { experienceSection, experienceTimeline } from '../data/experience.js'
import { outsideEditor } from '../data/personal.js'
import {
  about,
  contact,
  contactActions,
  currently,
  footer,
  footerLinks,
  hero,
  navItems,
  profileLinks,
} from '../data/profile.js'
import { projectLibraryHeader, projects } from '../data/projects.js'
import { researchHeader, researchStudies } from '../data/research.js'
import { toolkitGroups, toolkitHeader } from '../data/skills.js'
import useActiveSection from '../hooks/useActiveSection.js'
import useRevealOnScroll from '../hooks/useRevealOnScroll.js'
import useTheme from '../hooks/useTheme.js'
import styles from './PortfolioPage.module.css'

const sectionIds = navItems.map((item) => item.id)

function StatusDot() {
  return <span className={styles.statusDot} aria-hidden="true" />
}

function ExternalAction({
  ariaLabel,
  children,
  className = '',
  download = false,
  href,
  icon = '↗',
}) {
  const opensNewTab =
    Boolean(href) &&
    !download &&
    (href.startsWith('http') || href.toLowerCase().endsWith('.pdf'))
  const labelText = typeof children === 'string' ? children : undefined
  const actionHint = download
    ? 'downloads PDF'
    : opensNewTab
      ? 'opens in a new tab'
      : ''
  const accessibleLabel =
    ariaLabel || (labelText && actionHint ? `${labelText}, ${actionHint}` : undefined)

  const content = (
    <>
      <span>{children}</span>
      <span className={styles.actionArrow} aria-hidden="true">
        {icon}
      </span>
    </>
  )

  if (!href) {
    return null
  }

  return (
    <a
      aria-label={accessibleLabel}
      className={`${styles.actionLink} ${className}`.trim()}
      download={download || undefined}
      href={href}
      rel={opensNewTab ? 'noopener noreferrer' : undefined}
      target={opensNewTab ? '_blank' : undefined}
    >
      {content}
    </a>
  )
}

function ThemeToggle({ theme, onToggleTheme }) {
  const nextTheme = theme === 'dark' ? 'light' : 'dark'
  const label = `Switch to ${nextTheme} theme`

  return (
    <button
      aria-label={label}
      className={styles.themeToggle}
      onClick={onToggleTheme}
      title={label}
      type="button"
    >
      {theme === 'dark' ? (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="4.5" />
          <path d="M12 2.5V5M12 19v2.5M4.58 4.58 6.34 6.34M17.66 17.66l1.76 1.76M2.5 12H5M19 12h2.5M4.58 19.42l1.76-1.76M17.66 6.34l1.76-1.76" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20 14.4A7.6 7.6 0 0 1 9.6 4 8.1 8.1 0 1 0 20 14.4Z" />
        </svg>
      )}
    </button>
  )
}

function Navbar({ activeId, hasScrolled, onToggleTheme, theme }) {
  const [isOpen, setIsOpen] = useState(false)
  const desktopNavRef = useRef(null)
  const [indicatorStyle, setIndicatorStyle] = useState({
    opacity: 0,
    transform: 'translateX(0px)',
    width: '0px',
  })

  useEffect(() => {
    const updateIndicator = () => {
      const activeLink = desktopNavRef.current?.querySelector(
        'a[aria-current="page"]',
      )

      if (!activeLink) {
        setIndicatorStyle((currentStyle) => ({ ...currentStyle, opacity: 0 }))
        return
      }

      setIndicatorStyle({
        opacity: 1,
        transform: `translateX(${activeLink.offsetLeft}px)`,
        width: `${activeLink.offsetWidth}px`,
      })
    }

    updateIndicator()
    window.addEventListener('resize', updateIndicator)

    return () => window.removeEventListener('resize', updateIndicator)
  }, [activeId])

  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  return (
    <header
      className={`${styles.navbar} ${hasScrolled ? styles.navbarScrolled : ''}`}
    >
      <div className={styles.navbarInner}>
        <a className={styles.brand} href="#top" onClick={() => setIsOpen(false)}>
          S.
        </a>

        <nav
          className={styles.desktopNav}
          ref={desktopNavRef}
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <a
              aria-current={activeId === item.id ? 'page' : undefined}
              className={`${styles.navItem} ${
                activeId === item.id ? styles.navItemActive : ''
              }`}
              href={`#${item.id}`}
              key={item.id}
            >
              {item.label}
            </a>
          ))}
          <span
            aria-hidden="true"
            className={styles.navIndicator}
            style={indicatorStyle}
          />
        </nav>

        <div className={styles.navActions}>
          <ThemeToggle theme={theme} onToggleTheme={onToggleTheme} />
          <ExternalAction className={styles.resumeNav} href={profileLinks.resume}>
            Resume
          </ExternalAction>

          <button
            aria-controls="mobile-navigation"
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className={styles.menuButton}
            onClick={() => setIsOpen((open) => !open)}
            type="button"
          >
            Menu
          </button>
        </div>
      </div>

      {isOpen ? (
        <nav
          className={styles.mobileNav}
          id="mobile-navigation"
          aria-label="Mobile navigation"
        >
          {navItems.map((item) => (
            <a
              aria-current={activeId === item.id ? 'page' : undefined}
              className={`${styles.navItem} ${
                activeId === item.id ? styles.navItemActive : ''
              }`}
              href={`#${item.id}`}
              key={item.id}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <ExternalAction className={styles.resumeNav} href={profileLinks.resume}>
            Resume
          </ExternalAction>
        </nav>
      ) : null}
    </header>
  )
}

function SectionHeader({ eyebrow, heading, label }) {
  return (
    <header className={styles.sectionHeader}>
      {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
      <p className={styles.sectionLabel}>{label}</p>
      <h2>{heading}</h2>
    </header>
  )
}

function HeroVisual() {
  return (
    <div
      className={styles.heroVisual}
      role="img"
      aria-label="Editor-style profile panel showing systems, AI and research focus areas"
    >
      <div className={styles.editorChrome} aria-hidden="true">
        <span>profile.md</span>
        <span>focus</span>
      </div>

      <div className={styles.focusRows} aria-hidden="true">
        <div className={styles.focusRow}>
          <span className={styles.lineNumber}>01</span>
          <span className={styles.focusName}>Systems</span>
          <span>Java · Backend · Distributed Systems</span>
        </div>
        <div className={styles.focusRow}>
          <span className={styles.lineNumber}>02</span>
          <span className={styles.focusName}>AI / ML</span>
          <span>ML · LLMs · GPU Inference</span>
        </div>
        <div className={styles.focusRow}>
          <span className={styles.lineNumber}>03</span>
          <span className={styles.focusName}>Research</span>
          <span>Healthcare · Statistical/Causal Methods</span>
        </div>
      </div>

      <div className={styles.focusGraph} aria-hidden="true">
        <span className={styles.graphSystems}>Systems</span>
        <span className={styles.graphAi}>AI / ML</span>
        <span className={styles.graphResearch}>Research</span>
      </div>
    </div>
  )
}

function HeroSection() {
  return (
    <section className={styles.heroSection} id="top" aria-labelledby="hero-title">
      <div className={styles.heroCopy}>
        <p className={`${styles.eyebrow} ${styles.heroStaggerOne}`}>
          {hero.eyebrow}
        </p>
        <h1 id="hero-title" className={styles.heroStaggerTwo}>
          {hero.title}
        </h1>
        <p className={`${styles.heroStatement} ${styles.heroStaggerThree}`}>
          {hero.statement}
        </p>
        <p className={`${styles.heroDescription} ${styles.heroStaggerFour}`}>
          {hero.description}
        </p>

        <p className={`${styles.heroStatus} ${styles.heroStaggerFive}`}>
          <StatusDot />
          {hero.status}
        </p>

        <p className={`${styles.heroFocus} ${styles.heroStaggerSix}`}>
          {hero.focus.join(' · ')}
        </p>

        <div className={`${styles.heroActions} ${styles.heroStaggerSeven}`}>
          <a className={styles.primaryButton} href="#projects">
            <span>View Projects</span>
            <span aria-hidden="true">↓</span>
          </a>
          <ExternalAction
            className={styles.secondaryButton}
            href={profileLinks.resume}
          >
            Resume
          </ExternalAction>
        </div>

        <nav
          className={`${styles.profileLinks} ${styles.heroStaggerEight}`}
          aria-label="Profile links"
        >
          <ExternalAction href={profileLinks.github}>GitHub</ExternalAction>
          <ExternalAction href={profileLinks.linkedin}>
            LinkedIn
          </ExternalAction>
          <ExternalAction
            href={profileLinks.email ? `mailto:${profileLinks.email}` : ''}
          >
            Email
          </ExternalAction>
        </nav>
      </div>

      <div className={styles.heroStaggerNine}>
        <HeroVisual />
      </div>
    </section>
  )
}

function CurrentlyStrip() {
  return (
    <section className={styles.currentlyStrip} aria-label="Current status">
      <span>CURRENTLY</span>
      <ul>
        {currently.map((item, index) => (
          <li key={item}>
            {index === currently.length - 1 ? <StatusDot /> : null}
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}

function AboutSection() {
  return (
    <section className={styles.section} data-reveal id="about">
      <SectionHeader heading={about.heading} label={about.label} />

      <div className={styles.aboutGrid}>
        <div className={styles.aboutCopy}>
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <dl className={styles.infoBlock}>
          {about.metadata.map((item) => (
            <div key={item.label}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

function ExperienceSection() {
  return (
    <section className={styles.section} data-reveal id="experience">
      <SectionHeader
        heading={experienceSection.heading}
        label={experienceSection.label}
      />

      <div className={styles.sectionIntro}>
        {experienceSection.intro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <ol className={styles.timeline}>
        {experienceTimeline.map((item) => (
          <li className={styles.timelineItem} key={`${item.period}-${item.role}`}>
            <div className={styles.timelinePeriod}>{item.period}</div>
            <article className={styles.timelineContent}>
              <h3>{item.role}</h3>
              <p className={styles.organization}>{item.organization}</p>
              <p>{item.summary}</p>

              {item.highlights.length ? (
                <div className={styles.highlightRow}>
                  {item.highlights.map((highlight) => (
                    <div className={styles.metric} key={highlight.label}>
                      <strong>{highlight.value}</strong>
                      <span>{highlight.label}</span>
                    </div>
                  ))}
                </div>
              ) : null}

              <ul className={styles.tagList}>
                {item.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </section>
  )
}

function ResearchSection() {
  return (
    <section className={styles.section} data-reveal id="research">
      <SectionHeader
        eyebrow={researchHeader.file}
        heading={researchHeader.heading}
        label={researchHeader.label}
      />
      <p className={styles.sectionIntroSingle}>{researchHeader.intro}</p>

      <div className={styles.researchGrid}>
        {researchStudies.map((study) => (
          <article className={styles.researchCard} key={study.id}>
            <p className={styles.researchNumber}>[{study.number}]</p>
            <h3>{study.title}</h3>

            <dl className={styles.researchDetails}>
              <div>
                <dt>Question</dt>
                <dd>{study.question}</dd>
              </div>
              {study.data ? (
                <div>
                  <dt>Data</dt>
                  <dd>{study.data}</dd>
                </div>
              ) : null}
              {study.cohorts ? (
                <div>
                  <dt>Cohorts</dt>
                  <dd>{study.cohorts.join(' / ')}</dd>
                </div>
              ) : null}
              <div>
                <dt>Methods</dt>
                <dd>
                  <ul className={styles.inlineTags}>
                    {study.methods.map((method) => (
                      <li key={method}>{method}</li>
                    ))}
                  </ul>
                </dd>
              </div>
              {study.outcomes ? (
                <div>
                  <dt>Outcomes</dt>
                  <dd>{study.outcomes.join(' + ')}</dd>
                </div>
              ) : null}
            </dl>
          </article>
        ))}
      </div>
    </section>
  )
}

function PipelineVisual() {
  const steps = ['audio/video', 'Whisper', 'translation', 'TTS', 'output']

  return (
    <div className={styles.pipelineVisual} aria-hidden="true">
      {steps.map((step, index) => (
        <span key={step}>
          {step}
          {index < steps.length - 1 ? <b>→</b> : null}
        </span>
      ))}
    </div>
  )
}

function MapVisual() {
  return (
    <div className={styles.mapVisual} aria-hidden="true">
      <span className={styles.mapPinOne} />
      <span className={styles.mapPinTwo} />
      <span className={styles.mapPinThree} />
      <span className={styles.mapHeatOne} />
      <span className={styles.mapHeatTwo} />
    </div>
  )
}

function TreeVisual() {
  return (
    <svg className={styles.treeVisual} viewBox="0 0 360 150" aria-hidden="true">
      <path d="M180 26 V58 M180 58 H88 M180 58 H272 M88 58 V112 M272 58 V112 M88 112 H48 M88 112 H128 M272 112 H232 M272 112 H312" />
      {[180, 88, 272, 48, 128, 232, 312].map((x, index) => (
        <circle
          cx={x}
          cy={index === 0 ? 26 : index < 3 ? 58 : 112}
          key={`${x}-${index}`}
          r="7"
        />
      ))}
      <g>
        <rect x="148" y="128" width="64" height="8" rx="4" />
        <rect x="226" y="128" width="64" height="8" rx="4" />
        <rect x="70" y="128" width="64" height="8" rx="4" />
      </g>
    </svg>
  )
}

function WaveformVisual() {
  return (
    <div className={styles.waveformVisual} aria-hidden="true">
      {Array.from({ length: 28 }, (_, index) => (
        <span
          key={index}
          style={{ '--bar-height': `${22 + ((index * 19) % 58)}%` }}
        />
      ))}
    </div>
  )
}

function ProjectVisual({ type }) {
  if (type === 'map') {
    return <MapVisual />
  }

  if (type === 'tree') {
    return <TreeVisual />
  }

  if (type === 'waveform') {
    return <WaveformVisual />
  }

  return <PipelineVisual />
}

function ProjectCard({ project }) {
  const links = [
    project.demoUrl ? { label: 'demo', href: project.demoUrl } : null,
    project.githubUrl ? { label: 'github', href: project.githubUrl } : null,
  ].filter(Boolean)

  return (
    <article className={styles.projectCard}>
      <div className={styles.projectMeta}>
        <p className={styles.projectNumber}>{project.number}</p>
        <p className={styles.projectDomain}>{project.domain}</p>
      </div>
      <h3>{project.name}</h3>
      <ProjectVisual type={project.visual} />
      <p>{project.longDescription}</p>
      <ul className={styles.techStack}>
        {project.technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>

      {links.length ? (
        <div className={styles.projectLinks}>
          {links.map((link) => (
            <ExternalAction
              ariaLabel={`${project.name} ${link.label}, opens in a new tab`}
              href={link.href}
              key={link.label}
            >
              {link.label}
            </ExternalAction>
          ))}
        </div>
      ) : null}
    </article>
  )
}

function ProjectsSection() {
  return (
    <section className={styles.section} data-reveal id="projects">
      <SectionHeader
        heading={projectLibraryHeader.heading}
        label={projectLibraryHeader.label}
      />
      <p className={styles.sectionIntroSingle}>{projectLibraryHeader.intro}</p>

      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <p className={styles.githubRest}>
        {projectLibraryHeader.outro}{' '}
        <ExternalAction href={profileLinks.github}>View GitHub</ExternalAction>
      </p>
    </section>
  )
}

function ToolkitSection() {
  return (
    <section className={styles.section} data-reveal id="toolkit">
      <SectionHeader heading={toolkitHeader.heading} label={toolkitHeader.label} />

      <div className={styles.toolkitOutput}>
        {toolkitGroups.map((group) => (
          <section className={styles.toolkitGroup} key={group.title}>
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  )
}

function OutsideEditorSection() {
  return (
    <section className={styles.outsideSection} data-reveal>
      <p className={styles.eyebrow}>{outsideEditor.label}</p>
      <h2>{outsideEditor.heading}</h2>
      <ul>
        {outsideEditor.lines.map((line) => (
          <li key={line}>
            <span aria-hidden="true">→</span>
            {line}
          </li>
        ))}
      </ul>
    </section>
  )
}

function ContactSection() {
  const [copyState, setCopyState] = useState('Copy Email')
  const emailAction = contactActions.find((action) => action.id === 'email')
  const canCopyEmail = Boolean(emailAction?.copyValue)

  const handleCopyEmail = async () => {
    if (!emailAction?.copyValue) {
      return
    }

    try {
      await navigator.clipboard.writeText(emailAction.copyValue)
      setCopyState('copied')
    } catch {
      setCopyState('copy failed')
    }

    window.setTimeout(() => setCopyState('Copy Email'), 1800)
  }

  return (
    <section className={styles.section} data-reveal id="contact">
      <SectionHeader
        eyebrow={contact.eyebrow}
        heading={contact.heading}
        label={contact.label}
      />

      <div className={styles.contactBlock}>
        {contact.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div className={styles.contactActions}>
        {contactActions.map((action) => (
          <ExternalAction
            download={action.download}
            href={action.href}
            key={action.id}
          >
            {action.label}
          </ExternalAction>
        ))}

        {canCopyEmail ? (
          <button
            aria-live="polite"
            aria-label={
              copyState === 'copied'
                ? 'Email copied to clipboard'
                : copyState === 'copy failed'
                  ? 'Email copy failed'
                  : 'Copy email address'
            }
            className={`${styles.copyButton} ${
              copyState === 'copied' ? styles.copyButtonCopied : ''
            }`}
            onClick={handleCopyEmail}
            title="Copy email address"
            type="button"
          >
            {copyState}
          </button>
        ) : null}
        <span className={styles.srOnly} role="status" aria-live="polite">
          {copyState === 'copied'
            ? 'Email copied to clipboard'
            : copyState === 'copy failed'
              ? 'Email copy failed'
              : ''}
        </span>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <p>{footer.copyright}</p>
        <p>
          {footer.stack} · {footer.hosting}
        </p>
      </div>

      <nav aria-label="Footer links">
        {footerLinks.map((link) => (
          <ExternalAction download={link.download} href={link.href} key={link.id}>
            {link.label}
          </ExternalAction>
        ))}
      </nav>
    </footer>
  )
}

function PortfolioPage() {
  const { activeId, hasScrolled } = useActiveSection(sectionIds)
  const { theme, toggleTheme } = useTheme()
  useRevealOnScroll()

  return (
    <div className={styles.portfolioPage}>
      <a className={styles.skipLink} href="#main-content">
        Skip to main content
      </a>
      <Navbar
        activeId={activeId}
        hasScrolled={hasScrolled}
        onToggleTheme={toggleTheme}
        theme={theme}
      />

      <main id="main-content">
        <HeroSection />
        <CurrentlyStrip />
        <AboutSection />
        <ExperienceSection />
        <ResearchSection />
        <ProjectsSection />
        <ToolkitSection />
        <OutsideEditorSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}

export default PortfolioPage
