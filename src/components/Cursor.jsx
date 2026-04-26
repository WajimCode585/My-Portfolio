import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)
  const pos = useRef({ mx: 0, my: 0, rx: 0, ry: 0 })
  const rafRef = useRef(null)

  useEffect(() => {
    const dot  = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    const onMove = (e) => {
      pos.current.mx = e.clientX
      pos.current.my = e.clientY
    }
    document.addEventListener('mousemove', onMove)

    const loop = () => {
      const { mx, my } = pos.current
      pos.current.rx += (mx - pos.current.rx) * 0.1
      pos.current.ry += (my - pos.current.ry) * 0.1
      dot.style.left  = mx + 'px'
      dot.style.top   = my + 'px'
      ring.style.left = pos.current.rx + 'px'
      ring.style.top  = pos.current.ry + 'px'
      rafRef.current  = requestAnimationFrame(loop)
    }
    rafRef.current = requestAnimationFrame(loop)

    const grow = () => {
      dot.style.width = dot.style.height = '18px'
      ring.style.width = ring.style.height = '56px'
    }
    const shrink = () => {
      dot.style.width = dot.style.height = '8px'
      ring.style.width = ring.style.height = '36px'
    }

    const targets = document.querySelectorAll('a, button, .proj-card, .skill-card-hover')
    targets.forEach(el => {
      el.addEventListener('mouseenter', grow)
      el.addEventListener('mouseleave', shrink)
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafRef.current)
      targets.forEach(el => {
        el.removeEventListener('mouseenter', grow)
        el.removeEventListener('mouseleave', shrink)
      })
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className="fixed z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2 rounded-full hidden md:block"
        style={{
          width: '8px', height: '8px',
          background: '#00f5c4',
          boxShadow: '0 0 10px #00f5c4',
          transition: 'width .2s, height .2s, background .2s',
        }}
      />
      <div
        ref={ringRef}
        className="fixed z-[9998] pointer-events-none -translate-x-1/2 -translate-y-1/2 rounded-full hidden md:block"
        style={{
          width: '36px', height: '36px',
          border: '1.5px solid rgba(0,245,196,0.4)',
          transition: 'width .35s cubic-bezier(.23,1,.32,1), height .35s cubic-bezier(.23,1,.32,1)',
        }}
      />
    </>
  )
}
