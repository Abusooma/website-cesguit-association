import { Link } from 'react-router-dom'
import { ASSO, NAV, NAV_SECONDAIRE } from '../data/content.js'
import { useJoin } from '../join.jsx'

export default function Footer() {
  const onJoin = useJoin()
  return (
    <footer className="footer">
      <div className="threadline" />
      <div className="wrap footer__grid">
        <div className="footer__brand">
          <div className="footer__logo">
            <img src="/img/logo-blanc.jpg" alt="" width="48" height="48" />
            <strong>{ASSO.sigle}</strong>
          </div>
          <p>{ASSO.nom}. Association à but non lucratif et apolitique, {ASSO.ville}.</p>
          <button className="btn btn--ondark footer__join" onClick={onJoin}>
            Rejoindre
          </button>
        </div>

        <nav className="footer__col" aria-label="Sections">
          <h4>Explorer</h4>
          <Link to="/">Accueil</Link>
          {NAV.map((n) => (
            <Link key={n.to} to={n.to}>
              {n.label}
            </Link>
          ))}
          {NAV_SECONDAIRE.map((n) => (
            <Link key={n.to} to={n.to}>
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="footer__col">
          <h4>Nous joindre</h4>
          <a href={`mailto:${ASSO.email}`}>{ASSO.email}</a>
          <a href={`https://wa.me/${ASSO.whatsapp.replace(/\D/g, '')}`}>WhatsApp · {ASSO.whatsapp}</a>
          <span className="footer__perm">Permanences : {ASSO.permanences}</span>
          <span className="footer__perm">{ASSO.ville}</span>
        </div>

        <div className="footer__col">
          <h4>Suivez-nous</h4>
          {ASSO.reseaux.map((r) => (
            <a key={r.nom} href={r.url} target="_blank" rel="noreferrer">
              {r.nom}
            </a>
          ))}
        </div>
      </div>

      <div className="wrap footer__bottom">
        <span>
          © {new Date().getFullYear()} {ASSO.sigle} · Association à but non lucratif, Tunis.
        </span>
      </div>
    </footer>
  )
}
