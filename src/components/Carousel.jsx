import { useEffect, useRef, useState } from 'react'

/*
  Carousel — piste horizontale a defilement + accroche (scroll-snap), avec
  boutons precedent / suivant. Accessible au clavier. Les enfants sont les cartes.
*/
export default function Carousel({ children, label }) {
  const trackRef = useRef(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  const update = () => {
    const el = trackRef.current
    if (!el) return
    setAtStart(el.scrollLeft <= 4)
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4)
  }

  useEffect(() => {
    update()
    const el = trackRef.current
    if (!el) return
    el.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      el.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  const nudge = (dir) => {
    const el = trackRef.current
    if (!el) return
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' })
  }

  return (
    <div className="carousel">
      <div className="carousel__track" ref={trackRef} tabIndex={0} aria-label={label}>
        {children}
      </div>
      <div className="carousel__ctrls">
        <button
          className="carousel__btn"
          onClick={() => nudge(-1)}
          disabled={atStart}
          aria-label="Precedent"
        >
          ←
        </button>
        <button
          className="carousel__btn"
          onClick={() => nudge(1)}
          disabled={atEnd}
          aria-label="Suivant"
        >
          →
        </button>
      </div>
    </div>
  )
}
