import { useState, useEffect } from 'react'

const links = [
  { label: 'About',     href: '#about' },
  { label: 'Skills',    href: '#skills' },
  { label: 'Work',      href: '#experience' },
  { label: 'Projects',  href: '#projects' },
  { label: 'Education', href: '#education' },
]

export default function Navbar() {
  const [active, setActive] = useState('')

  useEffect(() => {
    const sections = document.querySelectorAll('section[id], header[id]')
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) setActive('#' + e.target.id)
      })
    }, { threshold: 0.4 })
    sections.forEach(s => io.observe(s))
    return () => io.disconnect()
  }, [])

  const scrollTo = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-16 py-5"
      style={{ background: 'rgba(5,5,8,0.6)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>

      <a href="#home" onClick={e => scrollTo(e, '#home')}
        className="font-code text-neon text-base tracking-widest no-underline">
        wajim<span className="text-muted">.dev</span>
      </a>

      <ul className="hidden md:flex gap-10 list-none">
        {links.map(l => (
          <li key={l.href}>
            <a href={l.href}
               onClick={e => scrollTo(e, l.href)}
               className={`nav-link ${active === l.href ? 'active' : ''}`}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <a href="mailto:wajimhussain9@gmail.com"
         className="font-code text-neon text-xs tracking-widest uppercase px-5 py-2 transition-all duration-300"
         style={{ border: '1px solid #00f5c4' }}
         onMouseEnter={e => { e.target.style.background='#00f5c4'; e.target.style.color='#050508' }}
         onMouseLeave={e => { e.target.style.background=''; e.target.style.color='#00f5c4' }}>
        Hire Me
      </a>
    </nav>
  )
}
