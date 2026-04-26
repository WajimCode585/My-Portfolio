import { useEffect, useRef } from 'react'
import SectionHeader from './SectionHeader'

const categories = [
  {
    icon: '⚡', title: 'Core Technologies',
    skills: [
      { name: 'HTML / CSS',      pct: 0.95 },
      { name: 'JavaScript ES6+', pct: 0.80 },
      { name: 'React.js',        pct: 0.84 },
      { name: 'Tailwind CSS',    pct: 0.90 },
      { name: 'Bootstrap',       pct: 0.85 },
    ],
  },
  {
    icon: '🛠️', title: 'Tools & Workflow',
    skills: [
      { name: 'Git / GitHub',         pct: 0.80 },
      { name: 'Responsive Design',    pct: 0.92 },
      { name: 'Cross-Browser Compat.', pct: 0.82 },
      { name: 'Figma / Adobe',        pct: 0.65 },
      // { name: 'Agile / Sprints',      pct: 0.72 },
    ],
  },
  {
    icon: '🤝', title: 'Soft Skills',
    skills: [
      { name: 'Problem Solving', pct: 0.88 },
      { name: 'Teamwork',        pct: 0.90 },
      { name: 'Time Management', pct: 0.82 },
      { name: 'Communication',   pct: 0.78 },
    ],
  },
]

function SkillCard({ icon, title, skills }) {
  const cardRef = useRef(null)
  const barsRef = useRef([])

  useEffect(() => {
    const card = cardRef.current
    if (!card) return
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        barsRef.current.forEach(b => b && b.classList.add('animate'))
      }
    }, { threshold: 0.3 })
    io.observe(card)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={cardRef} className="glass p-8 skill-card-hover transition-all duration-300 hover:-translate-y-1"
         style={{ position: 'relative', overflow: 'hidden' }}
         onMouseEnter={e => e.currentTarget.style.borderColor = '#00f5c4'}
         onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}>
      {/* top glow on hover */}
      <div className="text-3xl mb-5">{icon}</div>
      <div className="font-code text-neon text-xs tracking-[0.14em] uppercase mb-5 pb-4"
           style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        {title}
      </div>
      <div className="space-y-4">
        {skills.map((s, i) => (
          <div key={s.name} className="flex justify-between items-center">
            <span className="text-ink text-sm">{s.name}</span>
            <div className="skill-bar-track">
              <div
                ref={el => barsRef.current[i] = el}
                className="skill-bar-fill"
                style={{ width: `${s.pct * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="relative z-[1] px-16 py-28" style={{ background: '#050508' }}>
      <SectionHeader num="02" label="What I Know" title="My" accent="Skills" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map(c => <SkillCard key={c.title} {...c} />)}
      </div>
    </section>
  )
}
