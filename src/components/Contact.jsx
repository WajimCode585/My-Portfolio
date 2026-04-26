export default function Contact() {
  return (
    <section id="contact" className="relative z-[1] px-16 py-32 text-center" style={{ background: '#050508' }}>

      <div className="flex justify-center mb-3">
        <div className="sec-label">
          <span className="text-muted">06</span>
          Contact
        </div>
      </div>

      <div className="font-head font-bold leading-[0.9] tracking-tight text-gradient-contact mb-6"
           style={{ fontSize: 'clamp(4rem, 10vw, 9rem)' }}>
        Let's Work<br />Together.
      </div>

      <p className="text-muted max-w-md mx-auto leading-relaxed mb-12" style={{ fontSize: '1.05rem' }}>
        Open to frontend developer roles, freelance projects, and startup opportunities across India.
        Let's build something great.
      </p>

      <div className="flex justify-center flex-wrap gap-4 mb-12">
        <a href="mailto:wajimhussain9@gmail.com" className="contact-pill">
          <span>✉</span> Email Me
        </a>
        <a href="https://github.com/WajimCode585" target="_blank" rel="noreferrer" className="contact-pill">
          <span>⌥</span> GitHub
        </a>
        <a href="tel:+919050084880" className="contact-pill">
          <span>☏</span> Call Me
        </a>
      </div>

      <div className="font-code text-muted text-sm tracking-wide">
        <a href="mailto:wajimhussain9@gmail.com" className="text-neon no-underline hover:underline">
          wajimhussain9@gmail.com
        </a>
      </div>
    </section>
  )
}
