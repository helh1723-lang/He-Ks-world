'use client'

import { useEffect, useState } from 'react'
// @ts-ignore - React Bits registry components are JavaScript modules.
import Aurora from './components/Aurora'
// @ts-ignore
import BlurText from './components/BlurText'
// @ts-ignore
import CardSwap, { Card } from './components/CardSwap'
// @ts-ignore
import Galaxy from './components/Galaxy'
// @ts-ignore
import DotGrid from './components/DotGrid'
// @ts-ignore
import Ferrofluid from './components/Ferrofluid'
// @ts-ignore
import SplitText from './components/SplitText'
// @ts-ignore
import TextType from './components/TextType'

const profile = {
  heroFirst: '\u4f60\u597d\uff0c\u6211\u662f\u4f55 K',
  heroSecond: '\u6ca1\u4e8b\u5c31\u9020\u70b9\u4e1c\u897f\u3002',
  intro: '\u4e00\u4e2a\u95f2\u7740\u6ca1\u4e8b\u5e72\u7684\u5927\u4e09\u5b66\u751f\u3002\u6211\u628a\u6a21\u7cca\u7684\u60f3\u6cd5\u505a\u6210\u7f51\u9875\u3001\u5de5\u5177\u548c\u53ef\u4ee5\u70b9\u7684\u5c0f\u4e16\u754c\u3002',
  cta: '\u4e00\u8d77\u6574\u70b9',
  ctaEmphasis: '\u6709\u610f\u601d\u7684\u3002',
  github: 'https://github.com/helh1723-lang',
  avatar: 'https://avatars.githubusercontent.com/u/241901260?v=4',
} as const

const projects = {
  web: ['\u6b21\u5143\u5929\u6c14', '\u52a8\u6f2b\u98ce\u5929\u6c14\u7f51\u7ad9 / \u57ce\u5e02\u641c\u7d22 / \u52a8\u6001\u80cc\u666f', '\u6253\u5f00\u4ee3\u7801 ->', 'https://github.com/helh1723-lang/weather'],
  software: ['PaperHand', '\u7eb8\u5f20\u6392\u7248\u4e0e\u624b\u5199\u98ce\u683c PDF \u5bfc\u51fa\u5de5\u5177 / React + FastAPI', '\u67e5\u770b\u9879\u76ee ->', 'https://github.com/helh1723-lang/Free-your-hands'],
  hardware: ['\u5c0f\u54aa\u57fa\u91d1\u4f1a', '\u516c\u5f00\u8d26\u672c\u3001\u7167\u7247\u5899\u4e0e\u7ba1\u7406\u540e\u53f0 / Next.js + Supabase', '\u79c1\u4eba\u6848\u4f8b\u8bb0\u5f55 ->', '#contact'],
  creative: ['\u604b\u4e0a\u9ad8\u6570\u5c11\u5973', '\u9ad8\u6570\u62df\u4eba\u5316\u89c6\u89c9\u5c0f\u8bf4 / \u5267\u60c5\u3001\u5b58\u6863\u3001\u56de\u6863\u4e0e\u9898\u5e93', '\u8fdb\u5165\u4e16\u754c ->', 'https://github.com/helh1723-lang/-galagame'],
  player: ['two-videos player', '\u53cc\u89c6\u9891\u64ad\u653e\u5b9e\u9a8c / \u4e3a\u4e24\u8def\u5a92\u4f53\u800c\u9020\u7684\u65b0\u5c0f\u5de5\u5177', '\u6253\u5f00\u4ee3\u7801 ->', 'https://github.com/helh1723-lang/two-videos-player'],
} as const

type ProjectKey = keyof typeof projects
const projectKeys = Object.keys(projects) as ProjectKey[]
const navKeys: ProjectKey[] = ['web', 'software', 'hardware', 'creative']

function App() {
  const [active, setActive] = useState<ProjectKey>('web')

  useEffect(() => {
    const sections = [...document.querySelectorAll<HTMLElement>('[data-work]')]
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.find((entry) => entry.isIntersecting)
      if (visible) setActive((visible.target as HTMLElement).dataset.work as ProjectKey)
    }, { threshold: 0.58 })
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return <main>
    <header className="topbar">
      <a className="wordmark" href="#home" aria-label="He K portfolio"><span>HE K</span><i>/</i>MAKES</a>
      <nav aria-label="Project categories">
        {navKeys.map((key) => <a className={active === key ? 'active' : ''} href={`#${key}`} key={key}>{key}</a>)}
      </nav>
      <a className="index-link" href={profile.github} target="_blank" rel="noreferrer">GitHub <span>--&gt;</span></a>
    </header>

    <section className="hero" id="home">
      <div className="visual hero-visual" aria-hidden="true"><Galaxy focal={[0.68, 0.45]} rotation={[1, 0.22]} starSpeed={1.05} density={1.65} hueShift={88} speed={1.25} glowIntensity={1.15} saturation={0.88} mouseInteraction={true} mouseRepulsion={true} repulsionStrength={2.6} twinkleIntensity={0.86} rotationSpeed={0.08} transparent={false} /></div>
      <div className="hero-copy">
        <BlurText className="eyebrow" text="THIRD-YEAR STUDENT / MAKING THINGS FOR FUN" delay={38} direction="top" stepDuration={0.45} />
        <h1 aria-label={`${profile.heroFirst} ${profile.heroSecond}`}>
          <SplitText className="hero-line" tag="span" text={profile.heroFirst} delay={29} duration={1.05} textAlign="left" from={{ opacity: 0, y: 72, rotateX: -52 }} to={{ opacity: 1, y: 0, rotateX: 0 }} />
          <SplitText className="hero-line hero-line--serif" tag="span" text={profile.heroSecond} delay={29} duration={1.05} textAlign="left" from={{ opacity: 0, y: 72, rotateX: -52 }} to={{ opacity: 1, y: 0, rotateX: 0 }} />
        </h1>
        <BlurText className="intro" text={profile.intro} delay={22} direction="bottom" stepDuration={0.4} rootMargin="-30px" />
        <a className="round-link" href="#web">works</a>
      </div>
      <a className="hero-identity" href={profile.github} target="_blank" rel="noreferrer"><img src={profile.avatar} alt="He K GitHub avatar" /><span>HELH1723-LANG<br />GITHUB PROFILE</span></a>
      <p className="hero-note">2026 / 01 - 04<br />Selected work</p>
    </section>

    <ProjectDeck />

    <section className="project-section web-section" data-work="web" id="web"><div className="visual"><DotGrid dotSize={3} gap={17} baseColor="#3f4540" activeColor="#c5f554" proximity={135} shockRadius={160} shockStrength={4} /></div><ProjectCopy type="01 / WEB EXPERIMENT" project={projects.web} number="(A)" /><p className="section-caption">Browser-born worlds<br />for changing skies.</p></section>
    <section className="project-section software-section" data-work="software" id="software"><div className="software-orbit" aria-hidden="true"><span>*</span><span>*</span><span>*</span></div><ProjectCopy type="02 / LOCAL TOOL" project={projects.software} number="(B)" /><div className="software-grid" aria-hidden="true" /><p className="section-caption">Useful tools<br />for hands and paper.</p></section>
    <section className="project-section hardware-section" data-work="hardware" id="hardware"><div className="visual hardware-visual"><Ferrofluid colors={['#0a0a09', '#c5f554', '#63732e']} speed={0.55} scale={1.2} turbulence={1.9} fluidity={1.5} glow={0.5} mouseInteraction /></div><ProjectCopy type="03 / FULL-STACK SYSTEM" project={projects.hardware} number="(C)" /><p className="section-caption">Care made visible<br />through a small system.</p></section>
    <section className="project-section creative-section" data-work="creative" id="creative"><div className="visual creative-visual"><Aurora colorStops={['#0b0b0a', '#c5f554', '#63732e']} amplitude={1.05} blend={0.7} speed={0.65} /></div><ProjectCopy type="04 / CREATIVE GAME" project={projects.creative} number="(D)" /><p className="section-caption">Math, story and<br />slightly unreasonable ideas.</p></section>

    <footer id="contact"><BlurText className="eyebrow" text="IF YOU HAVE A WEIRD IDEA, I AM ALL EARS." delay={45} direction="top" stepDuration={0.42} /><a className="contact-link" href={profile.github} target="_blank" rel="noreferrer">{profile.cta} <em>{profile.ctaEmphasis}</em> -&gt;</a><div className="footer-meta"><span>HE K / THIRD-YEAR STUDENT</span><span>WEB / TOOLS / SYSTEMS / SMALL WORLDS</span><a href="#home">Back to top -&gt;</a></div></footer>
  </main>
}

function ProjectDeck() {
  return <section className="project-deck" id="projects">
    <div className="deck-intro">
      <p className="eyebrow">PROJECT DECK / CLICK A CARD</p>
      <h2>Things I<br /><em>actually made.</em></h2>
      <p>Click a terminal card to open the project. The stack keeps moving because I am still making the next one.</p>
    </div>
    <div className="deck-stage">
      <CardSwap width={430} height={310} cardDistance={20} verticalDistance={16} delay={6200} pauseOnHover={true} wheelNavigation={true} wheelThrottle={900} easing="default">
        {projectKeys.map((key, index) => {
          const [title, detail, label, href] = projects[key]
          const external = href.startsWith('http')
          return <Card key={key} className={`project-card project-card--${key}`}>
            <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}>
              <span className="card-index">0{index + 1} / 0{projectKeys.length}</span>
              <span className="card-kind">{key.toUpperCase()}</span>
              <TextType as="strong" className="terminal-title" text={title} typingSpeed={52} initialDelay={index * 180} loop={false} startOnVisible={true} cursorCharacter="_" />
              <TextType as="small" className="terminal-detail" text={`> ${detail}`} typingSpeed={12} initialDelay={820 + index * 160} loop={false} startOnVisible={true} showCursor={false} />
              <b><span>$</span> {label}</b>
            </a>
          </Card>
        })}
      </CardSwap>
    </div>
  </section>
}

function ProjectCopy({ type, project, number }: { type: string; project: readonly string[]; number: string }) {
  const external = project[3].startsWith('http')
  return <div className="project-copy">
    <BlurText className="project-type" text={type} delay={42} direction="top" stepDuration={0.36} rootMargin="-80px" />
    <p className="project-number">{number}</p>
    <SplitText className="project-title" tag="h2" text={project[0]} delay={24} duration={0.9} splitType="chars" textAlign="left" from={{ opacity: 0, y: 58, rotateX: -35 }} to={{ opacity: 1, y: 0, rotateX: 0 }} threshold={0.22} rootMargin="-65px" />
    <BlurText className="project-meta" text={project[1]} delay={38} direction="bottom" stepDuration={0.32} rootMargin="-70px" />
    <a className="project-link" href={project[3]} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}>{project[2]}</a>
  </div>
}

export default App
