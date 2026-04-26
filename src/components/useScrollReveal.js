import { useEffect, useRef } from 'react'

export function useScrollReveal(className = 'visible', threshold = 0.15) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add(className) },
      { threshold }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [className, threshold])

  return ref
}
