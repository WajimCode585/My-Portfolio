import SectionHeader from './SectionHeader'
import { useScrollReveal } from './useScrollReveal'

const projects = [
  {
    year: '2025 · Featured',
    title: 'Nurture Webtech\nOfficial Website',
    type: 'Company Website · Frontend Development',
    desc: 'Designed and built the company\'s production website from scratch. Fully optimized for performance, SEO readiness, and mobile responsiveness. Showcases services, portfolio, and client contact flows.',
    stack: ['React.js', 'HTML', 'CSS', 'Tailwind CSS', 'Responsive'],
    featured: true,
  },
  {
    year: '2025',
    title: 'Lord Venus\nOfficial Website',
    type: 'Web App · Frontend',
    desc: 'Developed a modular React-based company registration page with dynamic section rendering, sticky navigation, and scroll-based active state using Intersection Observer for enhanced UX.',
    stack: ['React.js', 'HTML', 'CSS', 'Tailwind CSS', 'Responsive'],
  },
  {
    year: '2025',
    title: 'Car & Bike\nComparison Platform',
    type: 'Web App · Frontend',
    desc: 'A dynamic vehicle comparison platform with real-time filtering, search, and side-by-side spec views. Built for speed and ease-of-use for non-technical users browsing on mobile.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Tailwind'],
  },
  {
    year: '2024–25 · Open Source',
    title: 'GitHub\nContributions',
    type: 'Community · Open Source',
    desc: 'Multiple open-source contributions across frontend projects — UI bug fixes, responsive improvements, and component refactoring across international codebases.',
    stack: ['React', 'JavaScript', 'Git', 'Open Source'],
  },
]

function ProjCard({ project, delay = 0 }) {
  const ref = useScrollReveal()
  const { year, title, type, desc, stack, featured } = project

  return (
    <div ref={ref} className={`proj-card fade-up ${featured ? 'md:col-span-2 lg:col-span-3' : ''}`}
         style={{ transitionDelay: `${delay}s` }}>
      {featured ? (
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-8 flex flex-col justify-between min-h-[200px]"
               style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
            <div className="font-code text-neon text-xs tracking-widest uppercase">{year}</div>
            <div className="font-head font-bold text-8xl leading-none text-gradient opacity-25">01</div>
          </div>
          <div className="p-8">
            <div className="font-head font-bold text-3xl leading-tight mb-2" style={{ whiteSpace: 'pre-line' }}>{title}</div>
            <div className="font-code text-muted text-xs tracking-widest uppercase mb-4">{type}</div>
            <p className="text-soft text-sm leading-relaxed mb-6">{desc}</p>
            <div className="flex flex-wrap gap-2">
              {stack.map(t => (
                <span key={t} className="font-code text-xs tracking-wider px-2.5 py-1"
                      style={{ background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.25)', color: '#a78bfa' }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="flex justify-between items-start p-8 pb-6"
               style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)' }}>
            <div className="font-code text-neon text-xs tracking-widest uppercase">{year}</div>
            <span className="text-muted text-xl transition-all duration-200 group-hover:text-neon">↗</span>
          </div>
          <div className="p-8">
            <div className="font-head font-bold text-3xl leading-tight mb-2" style={{ whiteSpace: 'pre-line' }}>{title}</div>
            <div className="font-code text-muted text-xs tracking-widest uppercase mb-4">{type}</div>
            <p className="text-soft text-sm leading-relaxed mb-6">{desc}</p>
            <div className="flex flex-wrap gap-2">
              {stack.map(t => (
                <span key={t} className="font-code text-xs tracking-wider px-2.5 py-1"
                      style={{ background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.25)', color: '#a78bfa' }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative z-[1] px-16 py-28" style={{ background: '#050508' }}>
      <SectionHeader num="04" label="Portfolio" title="Projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => <ProjCard key={i} project={p} delay={i * 0.1} />)}
      </div>
    </section>
  )
}
