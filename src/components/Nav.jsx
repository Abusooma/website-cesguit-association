import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { NAV } from '../data/content.js'
import { useJoin } from '../join.jsx'

function Mark() {
  // le vrai emblreme de la CESGUIT, en grand, sans texte
  return <img className="nav__logo" src="/img/logo-blanc.jpg" alt="CESGUIT" width="56" height="56" />
}

export default function Nav() {
  const onJoin = useJoin()
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${solid ? 'nav--solid' : ''}`}>
      <div className="nav__inner wrap">
        <Link to="/" className="nav__brand" onClick={() => setOpen(false)} aria-label="CESGUIT, accueil">
          <Mark />
        </Link>

        <nav className={`nav__links ${open ? 'is-open' : ''}`} aria-label="Navigation principale">
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? 'is-active' : '')}
            onClick={() => setOpen(false)}
          >
            Accueil
          </NavLink>
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) => (isActive ? 'is-active' : '')}
              onClick={() => setOpen(false)}
            >
              {n.label}
            </NavLink>
          ))}
          <button
            className="btn btn--red nav__join-mobile"
            onClick={() => {
              setOpen(false)
              onJoin()
            }}
          >
            Rejoindre
          </button>
        </nav>

        <div className="nav__right">
          <button className="btn nav__join" onClick={onJoin}>
            Rejoindre
          </button>
          <button
            className={`nav__burger ${open ? 'is-open' : ''}`}
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}
