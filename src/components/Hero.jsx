export default function Hero() {
  return (
    <header id="home" className="relative z-[1] min-h-screen flex flex-col justify-center px-16 overflow-hidden">

      {/* Eyebrow */}
      <div className="animate-fadeUp0 flex items-center gap-4 font-code text-neon tracking-[0.16em] uppercase text-xs mb-7">
        <span className="block w-10 h-px bg-neon" />
        Available for Frontend Roles · India
      </div>

      {/* Name */}
      <h1 className="animate-fadeUp1 font-head font-bold leading-[0.92] tracking-tight mb-2"
          style={{ fontSize: 'clamp(4rem, 10vw, 9.5rem)' }}>
        <span className="block text-ink">Wajim</span>
        <span className="block text-gradient">Hussain</span>
      </h1>

      {/* Role */}
      <p className="animate-fadeUp2 font-code text-muted mb-10"
         style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)' }}>
        Frontend Developer ·{' '}
        <span className="text-neon3">React.js</span> ·{' '}
        <span className="text-neon3">Tailwind CSS</span> ·{' '}
        <span className="text-neon3">JavaScript</span>
      </p>

      {/* Description */}
      <p className="animate-fadeUp3 max-w-lg text-soft font-light leading-relaxed mb-12"
         style={{ fontSize: '1.05rem' }}>
        I build fast, responsive, and beautiful web interfaces.<br />
        Turning Figma designs into pixel-perfect products —<br />
        one component at a time.
      </p>

      {/* CTAs */}
      <div className="animate-fadeUp4 flex gap-4 flex-wrap">
        <a href="#projects" className="btn-primary"
           onClick={e => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}>
          <span>View My Work ↓</span>
        </a>
        <a href="https://github.com/WajimCode585" target="_blank" rel="noreferrer"
           className="btn-outline">
          GitHub ↗
        </a>
      </div>

      {/* Stats */}
      <div className="animate-fadeUp5 absolute right-16 bottom-16 flex-col gap-6 hidden lg:flex">
        {[
          { num: '1+', label: 'Yr Experience' },
          { num: '5+', label: 'Projects Shipped' },
          { num: '2',  label: 'Certifications' },
        ].map(s => (
          <div key={s.label} className="text-right">
            <div className="font-head font-bold text-5xl leading-none text-gradient">{s.num}</div>
            <div className="font-code text-muted text-xs tracking-widest uppercase mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Scroll hint */}
      <div className="animate-fadeUp6 absolute left-16 bottom-16 font-code text-muted text-xs tracking-widest uppercase hidden lg:flex flex-col items-center gap-3"
           style={{ writingMode: 'vertical-rl' }}>
        <div className="scroll-hint-line" />
        Scroll Down
      </div>
    </header>
  )
}
