export default function Footer() {
  return (
    <footer className="relative z-[1] flex justify-between items-center px-16 py-6"
            style={{ background: '#080810', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      <span className="font-code text-muted text-xs tracking-widest uppercase">© 2025 Wajim Hussain</span>
      <span className="font-code text-muted text-xs tracking-widest uppercase">Built with React · Tailwind CSS</span>
      <a href="https://github.com/WajimCode585" target="_blank" rel="noreferrer"
         className="font-code text-neon text-xs tracking-widest uppercase no-underline hover:underline">
        GitHub ↗
      </a>
    </footer>
  )
}
