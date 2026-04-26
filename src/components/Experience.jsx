import SectionHeader from './SectionHeader'
import { useScrollReveal } from './useScrollReveal'

function ExpBlock({ date, title, badge, company, bullets, tags, delay = 0, dotColor = '#00f5c4' }) {
  const ref = useScrollReveal()
  return (
    <div ref={ref} className="slide-left pl-14 pb-16 relative" style={{ transitionDelay: `${delay}s` }}>
      <div className="absolute left-[3px] top-[6px] w-4 h-4 rounded-full border-2"
           style={{ borderColor: dotColor, background: '#050508', boxShadow: `0 0 12px ${dotColor}` }} />

      <div className="font-code text-neon text-xs tracking-widest uppercase mb-2">{date}</div>
      <div className="font-head font-bold text-3xl mb-1">
        {title}
        {badge && (
          <span className="ml-3 font-code text-xs tracking-widest uppercase px-2.5 py-0.5 align-middle"
                style={{ background: 'rgba(0,245,196,0.1)', border: '1px solid rgba(0,245,196,0.3)', color: '#00f5c4' }}>
            {badge}
          </span>
        )}
      </div>
      <div className="font-code text-muted text-sm mb-5">{company}</div>

      <ul className="mb-6 space-y-0">
        {bullets.map((b, i) => (
          <li key={i} className="relative pl-5 py-2 text-soft text-sm leading-relaxed"
              style={{ borderBottom: i < bullets.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
            <span className="absolute left-0 text-neon" style={{ fontSize: '0.8rem' }}>▸</span>
            {b}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {tags.map(t => (
          <span key={t} className="font-code text-muted text-xs tracking-widest uppercase px-3 py-1 transition-all duration-200"
                style={{ border: '1px solid rgba(255,255,255,0.08)' }}
                onMouseEnter={e => { e.target.style.borderColor='#00f5c4'; e.target.style.color='#00f5c4' }}
                onMouseLeave={e => { e.target.style.borderColor='rgba(255,255,255,0.08)'; e.target.style.color='' }}>
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="relative z-[1] px-16 py-28" style={{ background: '#080810' }}>
      <SectionHeader num="03" label="Work History" title="Experience" />

      <div className="relative">
        {/* timeline line */}
        <div className="timeline-line" />

        <ExpBlock
          date="May 2025 – Present"
          title="Frontend Developer"
          badge="Current"
          company="Nurture Webtech · Remote / Gurgaon, India"
          bullets={[
            'Developed 5+ responsive websites and apps using React, Tailwind CSS, HTML/CSS ensuring full cross-browser compatibility.',
            'Collaborated with designers to translate Figma mockups into pixel-perfect, user-friendly interfaces.',
            'Managed codebase using Git with structured branching, PRs, and commit conventions in a remote agile team.',
            'Participated in sprint planning, standups, and retrospectives — consistently delivering features on schedule.',
            'Built and maintained the company\'s official website with improved load speed and mobile responsiveness.',
          ]}
          tags={['React', 'Tailwind CSS', 'HTML/CSS', 'Git', 'Agile', 'Figma-to-Code']}
          delay={0}
        />

        <ExpBlock
          date="2024 – 2025"
          title="Open Source Contributor"
          company="GitHub · Public Projects"
          bullets={[
            'Contributed to open-source frontend projects — UI bug fixes, responsiveness improvements, and component refactoring.',
            'Collaborated with international developer communities on React and JavaScript codebases.',
            'Participated in online coding challenges to sharpen algorithmic thinking and JS problem-solving.',
          ]}
          tags={['Open Source', 'JavaScript', 'React', 'Git']}
          delay={0.15}
          dotColor="#7c3aed"
        />
      </div>
    </section>
  )
}
