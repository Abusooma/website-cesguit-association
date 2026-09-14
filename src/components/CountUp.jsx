import { useEffect, useRef, useState } from 'react'

/* Compteur qui s'anime une fois en vue. Respecte reduced-motion (saut direct). */
export default function CountUp({ to = 0, suffix = '', duration = 1400 }) {
  const [n, setN] = useState(0)
  const ref = useRef(null)
  const done = useRef(false)

  useEffect(() => {
    const el = ref.current
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setN(to)
      return
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting || done.current) return
        done.current = true
        const start = performance.now()
        const tick = (now) => {
          const p = Math.min(1, (now - start) / duration)
          const eased = 1 - Math.pow(1 - p, 3)
          setN(Math.round(to * eased))
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.4 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [to, duration])

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  )
}
