import SectionHeader from './SectionHeader'
import { useScrollReveal } from './useScrollReveal'

function EduBlock({ year, degree, institution, note, delay = 0 }) {
  const ref = useScrollReveal()
  return (
    <div ref={ref} className="fade-up glass relative overflow-hidden p-8" style={{ transitionDelay: `${delay}s` }}>
      <div className="absolute bottom-0 left-0 right-0 h-0.5"
           style={{ background: 'linear-gradient(90deg, #7c3aed, transparent)' }} />
      <div className="font-code text-neon text-xs tracking-widest uppercase mb-2">{year}</div>
      <div className="font-head font-bold text-2xl leading-tight mb-1">{degree}</div>
      <div className="text-muted text-sm mb-3">{institution}</div>
      {note && (
        <div className="font-code text-muted text-xs pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          {note}
        </div>
      )}
    </div>
  )
}

function CertItem({ icon, name, issuer, year, delay = 0 }) {
  const ref = useScrollReveal()
  return (
    <div ref={ref} className="fade-up glass flex items-center gap-5 p-5 transition-all duration-300"
         style={{ transitionDelay: `${delay}s` }}
         onMouseEnter={e => e.currentTarget.style.borderColor = '#f59e0b'}
         onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}>
      <div className="w-11 h-11 rounded-full flex items-center justify-center text-xl flex-shrink-0"
           style={{ background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.3)' }}>
        {icon}
      </div>
      <div className="flex-1">
        <div className="font-head font-semibold text-base">{name}</div>
        <div className="text-muted text-xs">{issuer}</div>
      </div>
      <div className="font-code text-neon3 text-xs tracking-widest flex-shrink-0">{year}</div>
    </div>
  )
}

export default function Education() {
  return (
    <section id="education" className="relative z-[1] px-16 py-28" style={{ background: '#080810' }}>
      <SectionHeader num="05" label="Background" title="Education &" accent="Certs" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <p className="font-code text-muted text-xs tracking-[0.14em] uppercase mb-5">Degree</p>
          <EduBlock
            year="2022 · Gurugram University"
            degree="Bachelor of Computer Applications"
            institution="Gurugram, Haryana, India"
            note="Relevant Coursework: Web Development · Data Structures · OOP · DBMS"
          />
        </div>

        <div>
          <p className="font-code text-muted text-xs tracking-[0.14em] uppercase mb-5">Certifications</p>
          <div className="space-y-4">
            <CertItem icon="🎓" name="Frontend Development" issuer="Ducat Institute · Gurugram" year="2023-2024" delay={0.1} />
            <CertItem icon="🏅" name="PHP Certification"    issuer="Ducat Institute · Gurugram" year="2023-2024" delay={0.2} />
          </div>
        </div>
      </div>
    </section>
  )
}
