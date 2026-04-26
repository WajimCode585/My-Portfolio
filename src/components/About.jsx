import SectionHeader from './SectionHeader'
import { useScrollReveal } from './useScrollReveal'

export default function About() {
  const leftRef  = useScrollReveal()
  const rightRef = useScrollReveal()

  const info = [
    { key: 'Name',     val: 'Wajim Hussain' },
    { key: 'Location', val: 'Palwal, Haryana, India' },
    { key: 'Email',    val: 'wajimhussain9@gmail.com', link: 'mailto:wajimhussain9@gmail.com' },
    { key: 'Phone',    val: '+91 9050084880', link: 'tel:+919050084880' },
    { key: 'GitHub',   val: 'WajimCode585', link: 'https://github.com/WajimCode585' },
    { key: 'Languages',val: 'Hindi · English · Arabic' },
    { key: 'Status',   val: '● Open to Work', neon: true },
  ]

  return (
    <section id="about" className="relative z-[1] px-16 py-28" style={{ background: '#080810' }}>
      <SectionHeader num="01" label="About Me" title="Who I" accent="Am" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* Text */}
        <div ref={leftRef} className="fade-up space-y-5 text-soft font-light leading-relaxed" style={{ fontSize: '1.05rem' }}>
          <p>
            I'm a <strong className="text-ink font-semibold">Frontend Developer</strong> based in{' '}
            <span className="font-code text-neon text-sm">Palwal, Haryana</span> with real, paid industry
            experience building production applications at{' '}
            <strong className="text-ink font-semibold">Nurture Webtech</strong> — a remote-first agency in Gurgaon.
          </p>
          <p>
            My stack centers around <strong className="text-ink font-semibold">React.js + Tailwind CSS</strong> —
            I care deeply about <strong className="text-ink font-semibold">clean code, responsive design,</strong>{' '}
            and interfaces that feel as good as they look.
          </p>
          <p>
            Beyond my day job, I actively contribute to{' '}
            <strong className="text-ink font-semibold">open-source projects</strong> on GitHub and thrive in{' '}
            <strong className="text-ink font-semibold">agile, fast-moving startup environments.</strong>
          </p>
        </div>

        {/* Info card */}
        <div ref={rightRef} className="fade-up glass glass-top p-8" style={{ transitionDelay: '0.15s' }}>
          {info.map(({ key, val, link, neon }) => (
            <div key={key} className="flex justify-between items-center py-3.5"
                 style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              <span className="font-code text-muted text-xs tracking-widest uppercase">{key}</span>
              {link
                ? <a href={link} target={link.startsWith('http') ? '_blank' : undefined}
                     rel="noreferrer" className="text-neon text-sm no-underline hover:underline">{val}</a>
                : <span className={`text-sm ${neon ? 'text-neon' : 'text-ink'}`}>{val}</span>
              }
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
