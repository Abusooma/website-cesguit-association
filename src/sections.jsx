import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ASSO,
  STATS,
  PILIERS,
  SERVICES,
  ACTUS,
  CATS_ACTU,
  EVENTS,
  GALERIE,
  OPPORTUNITES,
  PARTENAIRES,
  PARTENAIRES_INSTIT,
  MOT_PRESIDENT,
  MEDIA,
  HOME_MEDIA,
  MANDATS,
  BUREAU_INTRO,
  ENGAGEMENTS,
  ORGANISMES,
  REPRESENTATION,
  EVENEMENTS_MAJ,
  EVENTS_2026,
  ARTICLES,
  CATS_GUIDES,
  INSTITUTIONS,
} from './data/content.js'
import Reveal, { Stagger, Item } from './components/Reveal.jsx'
import CountUp from './components/CountUp.jsx'
import Img from './components/Img.jsx'
import Carousel from './components/Carousel.jsx'
import { useJoin } from './join.jsx'

/* -------------------------------------------------- En-tete de page interieure */
export function PageHeader({ kicker, titre, intro, img, src }) {
  return (
    <header className="pagehead">
      <div className="pagehead__media">
        <Img id={img} src={src} w={1920} eager alt="" position="center 38%" />
      </div>
      <div className="pagehead__scrim" />
      <div className="wrap pagehead__inner">
        <Reveal className="pagehead__eyebrow" y={10}>
          <span className="kicker kicker--ondark">{kicker}</span>
        </Reveal>
        <Reveal as="h1" className="pagehead__title" delay={0.05}>
          {titre}
        </Reveal>
        {intro && (
          <Reveal className="pagehead__intro" delay={0.12}>
            <p>{intro}</p>
          </Reveal>
        )}
      </div>
      <div className="hero__bar" aria-hidden="true">
        <span style={{ background: 'var(--red)' }} />
        <span style={{ background: 'var(--gold)' }} />
        <span style={{ background: 'var(--green)' }} />
      </div>
    </header>
  )
}

/* -------------------------------------------------------------------- HERO (home) */
export function Hero() {
  const onJoin = useJoin()
  return (
    <section className="hero" id="top">
      <div className="hero__media">
        <Img src={HOME_MEDIA.hero} eager alt="La communauté CESGUIT réunie" position="center 62%" />
      </div>
      <div className="hero__scrim" />
      <div className="wrap hero__inner">
        <Reveal className="hero__eyebrow" y={12}>
          <span className="kicker kicker--ondark">Association étudiante · Depuis {ASSO.depuis}</span>
        </Reveal>
        <Reveal as="h1" className="hero__title" delay={0.06}>
          Loin du pays,
          <br />
          jamais seuls.
        </Reveal>
        <Reveal className="hero__lede" delay={0.14}>
          <p>
            La Communauté des Étudiants et Stagiaires Guinéens en Tunisie. Depuis 1991, un réseau qui
            accueille, défend et soutient plus de 500 étudiants, partout en Tunisie.
          </p>
        </Reveal>
        <Reveal className="hero__cta" delay={0.2}>
          <button className="btn btn--red" onClick={onJoin}>
            Rejoindre la communauté
          </button>
          <Link to="/aide" className="btn btn--ghost-onimg">
            Voir comment on aide
          </Link>
        </Reveal>
      </div>
      <div className="hero__bar" aria-hidden="true">
        <span style={{ background: 'var(--red)' }} />
        <span style={{ background: 'var(--gold)' }} />
        <span style={{ background: 'var(--green)' }} />
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------------ A PROPOS */
export function APropos() {
  return (
    <section className="apropos">
      <div className="wrap apropos__grid">
        <Reveal className="apropos__media" variant="zoom" y={20}>
          <div className="framed">
            <span className="framed__accent" />
            <Img src={HOME_MEDIA.apropos} alt="La communauté CESGUIT" className="framed__img" position="center 45%" />
            <div className="framed__badge">
              <strong>33</strong>
              <span>ans de solidarité</span>
            </div>
          </div>
        </Reveal>
        <div className="apropos__text">
          <span className="kicker">Qui sommes-nous</span>
          <Reveal as="h2" className="section-title">
            Une famille, loin de la maison.
          </Reveal>
          <Reveal className="apropos__body" delay={0.08}>
            <p>
              La CESGUIT est une association à but non lucratif et apolitique, née à Tunis en{' '}
              {ASSO.depuis}. Nous rassemblons aujourd'hui plus de 500 étudiants dans une cinquantaine
              d'universités tunisiennes.
            </p>
            <p>
              Notre rôle est simple : accueillir celles et ceux qui arrivent, défendre leurs droits,
              représenter la Guinée, et répondre présent quand la vie serre.
            </p>
          </Reveal>
          <Reveal className="apropos__devise" delay={0.14}>
            {ASSO.devise.map((mot, i) => (
              <span key={mot} className={`dev dev--${i}`}>
                {mot}
              </span>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- IMPACT */
export function Impact() {
  return (
    <section className="impact">
      <div className="impact__media">
        <Img id={MEDIA.diplome} w={1920} alt="Remise de diplômes" position="center 40%" />
      </div>
      <div className="impact__scrim" />
      <div className="wrap impact__inner">
        <Stagger className="impact__row" step={0.1}>
          {STATS.map((s) => (
            <Item className="impact__item" variant="zoom" key={s.label}>
              <div className="impact__num">
                <CountUp to={s.valeur} suffix={s.suffixe} />
              </div>
              <div className="impact__label">{s.label}</div>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------------- PILIERS */
export function Piliers() {
  return (
    <section className="piliers">
      <div className="piliers__media">
        <Img id={MEDIA.savane} w={1920} alt="Paysage de Guinée" position="center 55%" />
      </div>
      <div className="piliers__scrim" />
      <div className="wrap piliers__inner">
        <Reveal className="piliers__head">
          <span className="kicker kicker--ondark">Notre devise</span>
          <h2>Travail, Justice, Solidarité.</h2>
        </Reveal>
        <Stagger className="piliers__row" step={0.12}>
          {PILIERS.map((p, i) => (
            <Item className={`pilier pilier--${i}`} variant="tilt" key={p.cle}>
              <span className="pilier__index">0{i + 1}</span>
              <h3 className="pilier__titre">{p.cle}</h3>
              <p>{p.texte}</p>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------- ENGAGEMENTS */
export function Engagements() {
  return (
    <section className="engage">
      <div className="wrap">
        <Reveal className="engage__head">
          <span className="kicker">Le mandat en actes</span>
          <h2 className="section-title">Quatre engagements concrets.</h2>
        </Reveal>
        <Stagger className="engage__grid" step={0.08}>
          {ENGAGEMENTS.map((e, i) => (
            <Item className="engage__item" variant="tilt" key={e.sigle}>
              <span className="engage__no">0{i + 1}</span>
              <span className="engage__sigle">{e.sigle}</span>
              <h3>{e.titre}</h3>
              <p className="engage__obj">{e.objectif}</p>
              <p className="engage__detail">{e.detail}</p>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------------- BUREAU */
export function Bureau() {
  const [mid, setMid] = useState(MANDATS[0].id)
  const mandat = MANDATS.find((m) => m.id === mid)
  return (
    <section className="bureau">
      <div className="wrap">
        <Reveal className="bureau__head">
          <span className="kicker">Notre équipe</span>
          <h2 className="section-title">Le bureau executif.</h2>
          <p className="section-lede">{BUREAU_INTRO}</p>
        </Reveal>

        <div className="bureau__switch" role="tablist" aria-label="Choisir un mandat">
          {MANDATS.map((m) => (
            <button
              key={m.id}
              role="tab"
              aria-selected={mid === m.id}
              className={`mandat-tab ${mid === m.id ? 'is-on' : ''}`}
              onClick={() => setMid(m.id)}
            >
              {m.label}
              {m.actuel && <em>actuel</em>}
            </button>
          ))}
        </div>
      </div>

      <div className="wrap">
        <Carousel key={mid} label={`Membres du ${mandat.label}`}>
          {mandat.membres.map((m, i) => (
            <article className={`memb ${i === 0 ? 'memb--lead' : ''}`} key={m.role + m.nom}>
              <div className="memb__photo">
                <img src={m.photo} alt={m.nom || m.role} loading="lazy" />
                <span className="memb__idx">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div className="memb__body">
                <span className="memb__role">{m.role}</span>
                {m.nom ? (
                  <h3 className="memb__nom">{m.nom}</h3>
                ) : (
                  <h3 className="memb__nom memb__nom--anon">Nom à confirmer</h3>
                )}
              </div>
            </article>
          ))}
        </Carousel>
      </div>
    </section>
  )
}

/* ------------------------------------------------ BUREAU ACTUEL (accueil) */
export function BureauActuel() {
  const mandat = MANDATS.find((m) => m.actuel) || MANDATS[0]
  return (
    <section className="bureau bureau--home">
      <div className="wrap">
        <Reveal className="bureau__head">
          <span className="kicker">{mandat.label}</span>
          <h2 className="section-title">Le bureau qui vous represente.</h2>
          <p className="section-lede">
            Une equipe organisee en poles, au service de la communaute. Faites glisser pour
            decouvrir les membres.
          </p>
        </Reveal>
      </div>
      <div className="wrap">
        <Carousel label={`Membres du ${mandat.label}`}>
          {mandat.membres.map((m, i) => (
            <article className={`memb ${i === 0 ? 'memb--lead' : ''}`} key={m.role + m.nom}>
              <div className="memb__photo">
                <img src={m.photo} alt={m.nom || m.role} loading="lazy" />
                <span className="memb__idx">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div className="memb__body">
                <span className="memb__role">{m.role}</span>
                {m.nom ? (
                  <h3 className="memb__nom">{m.nom}</h3>
                ) : (
                  <h3 className="memb__nom memb__nom--anon">Nom a confirmer</h3>
                )}
              </div>
            </article>
          ))}
        </Carousel>
        <Reveal className="bureau__more" delay={0.05}>
          <Link to="/bureau" className="link-arrow">
            Voir tout le bureau (2025 & 2026) <b aria-hidden="true">→</b>
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

/* --------------------------------------- ORGANISMES DE TUTELLE (SNABE, AESAT) */
export function AesatBand() {
  return (
    <section className="orgs">
      <div className="wrap">
        <Reveal className="orgs__head">
          <span className="kicker">Nos organismes de tutelle</span>
          <h2 className="section-title">Reconnus, encadrés, accompagnés.</h2>
          <p className="section-lede">
            La CESGUIT travaille avec les institutions qui portent les étudiants guinéens : le SNABE
            pour les bourses, l'AESAT pour la représentation.
          </p>
        </Reveal>
        <Stagger className="orgs__grid" step={0.12}>
          {ORGANISMES.map((o) => (
            <Item className="orgcard" variant="flip" key={o.nom}>
              <div className="orgcard__logo">
                <img src={o.logo} alt={o.nom} loading="lazy" />
              </div>
              <div className="orgcard__body">
                <span className="orgcard__sous">{o.sous}</span>
                <h3>{o.nom}</h3>
                <p>{o.desc}</p>
                {o.url ? (
                  <a className="link-arrow" href={o.url} target="_blank" rel="noreferrer">
                    Site officiel <b aria-hidden="true">→</b>
                  </a>
                ) : null}
              </div>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------- REPRESENTATION */
export function Représentation() {
  return (
    <section className="repr">
      <div className="wrap">
        <Reveal className="repr__head">
          <span className="kicker">Représentation institutionnelle</span>
          <h2 className="section-title">Une voix pour les étudiants.</h2>
        </Reveal>
        <Stagger className="repr__list" step={0.06}>
          {REPRESENTATION.map((r) => (
            <Item className="repr__row" key={r.nom}>
              <h3>{r.nom}</h3>
              <p>{r.role}</p>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------------ SERVICES */
export function Services() {
  const onJoin = useJoin()
  return (
    <section className="services">
      <div className="wrap services__grid">
        <div className="services__left">
          <span className="kicker">Aide & solidarité</span>
          <Reveal as="h2" className="section-title">
            Un filet sous chaque étudiant.
          </Reveal>
          <Reveal className="services__lede" delay={0.06}>
            <p>
              Plusieurs formes de soutien, concrètes et discrètes, sans paperasse inutile. En cas
              d'urgence, on décroche vite.
            </p>
          </Reveal>
          <Reveal className="services__media" variant="zoom" delay={0.1} y={20}>
            <div className="framed framed--red">
              <span className="framed__accent" />
              <Img src={HOME_MEDIA.aide} alt="Entraide et solidarité" className="framed__img" position="center 45%" />
            </div>
          </Reveal>
        </div>

        <div className="services__right">
          <Stagger className="svclist" step={0.06}>
            {SERVICES.map((s, i) => (
              <Item className="svcrow" variant="left" key={s.titre}>
                <span className={`svcrow__dot svcrow__dot--${i % 3}`} aria-hidden="true" />
                <div className="svcrow__body">
                  <div className="svcrow__head">
                    <h3>{s.titre}</h3>
                    <span className="svcrow__tag">{s.tag}</span>
                  </div>
                  <p>{s.texte}</p>
                </div>
              </Item>
            ))}
          </Stagger>
          <Reveal className="callbar" delay={0.05}>
            <div>
              <strong>Besoin d'aide maintenant ?</strong>
              <span>Ecrivez-nous, c'est confidentiel.</span>
            </div>
            <div className="callbar__btns">
              <a className="btn btn--onimg" href={`https://wa.me/${ASSO.whatsapp.replace(/\D/g, '')}`}>
                WhatsApp
              </a>
              <button className="btn btn--ghost-onimg" onClick={onJoin}>
                Formulaire d'aide
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------------- ACTUALITES */
export function Actualités() {
  const [cat, setCat] = useState('Tout')
  const list = cat === 'Tout' ? ACTUS : ACTUS.filter((a) => a.cat === cat)
  const [feat, ...rest] = list
  return (
    <section className="actus">
      <div className="wrap">
        <div className="actus__head">
          <div>
            <span className="kicker">Actualités</span>
            <h2 className="section-title">La vie de la communauté.</h2>
          </div>
          <div className="actus__filters" role="tablist" aria-label="Categories">
            {CATS_ACTU.map((c) => (
              <button key={c} className={`tab ${cat === c ? 'is-on' : ''}`} onClick={() => setCat(c)}>
                {c}
              </button>
            ))}
          </div>
        </div>

        {feat && (
          <Reveal className="feature" y={22} key={feat.titre}>
            <span className="feature__media">
              <Img id={feat.img} w={1100} alt={feat.titre} position="center 35%" />
              <span className="feature__cat">{feat.cat}</span>
            </span>
            <div className="feature__body">
              <span className="feature__date">{feat.date}</span>
              <h3 className="feature__titre">{feat.titre}</h3>
              <p>{feat.extrait}</p>
              <span className="link-arrow">
                Lire l'article <b aria-hidden="true">→</b>
              </span>
            </div>
          </Reveal>
        )}

        <div className="actus__list">
          {rest.map((a) => (
            <Reveal as="article" className="newsrow" key={a.titre} y={16}>
              <span className="newsrow__media">
                <Img id={a.img} w={520} alt={a.titre} position="center 35%" />
              </span>
              <div className="newsrow__body">
                <div className="newsrow__top">
                  <span className="newsrow__cat">{a.cat}</span>
                  <span className="newsrow__date">{a.date}</span>
                </div>
                <h3>{a.titre}</h3>
                <p>{a.extrait}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------------- EVENEMENTS */
export function Événements() {
  return (
    <section className="events">
      <div className="wrap events__grid">
        <div className="events__intro">
          <span className="kicker">Prochains rendez-vous</span>
          <Reveal as="h2" className="section-title">
            On se retrouve, souvent.
          </Reveal>
          <Reveal className="section-lede" delay={0.06}>
            <p>Accueils, forums, ateliers et diners. Plus de 20 rendez-vous chaque année.</p>
          </Reveal>
        </div>
        <Stagger className="events__list" step={0.07}>
          {EVENTS.map((e) => (
            <Item className="evrow" variant="left" key={e.titre}>
              <div className="evrow__media">
                <Img id={e.img} w={360} alt="" position="center 40%" />
                <div className="evrow__date">
                  <span className="evrow__jour">{e.jour}</span>
                  <span className="evrow__mois">{e.mois}</span>
                </div>
              </div>
              <div className="evrow__body">
                <h3>{e.titre}</h3>
                <p>
                  {e.lieu} · {e.heure}
                </p>
              </div>
              <span className="evrow__go" aria-hidden="true">
                →
              </span>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  )
}

/* --------------------------------------------------------------- EVENEMENTS MAJEURS */
export function EvenementsMajeurs() {
  return (
    <section className="evmaj">
      <div className="wrap">
        <Reveal className="evmaj__head">
          <span className="kicker">Ce que nous avons vecu</span>
          <h2 className="section-title">Nos événements majeurs.</h2>
          <p className="section-lede">
            Des moments qui ont marque la communauté : culture, sport, solidarité et partenariats.
          </p>
        </Reveal>
        <Stagger className="evmaj__grid" step={0.07} amount={0.1}>
          {EVENEMENTS_MAJ.map((e) => (
            <Item className="evmaj__card" variant="tilt" key={e.titre}>
              <span className="evmaj__media">
                <Img src={e.img} alt={e.titre} position="center 40%" />
                <span className="evmaj__cat">{e.cat}</span>
              </span>
              <div className="evmaj__body">
                <span className="evmaj__date">{e.date}</span>
                <h3>{e.titre}</h3>
                <p>{e.desc}</p>
                {e.lien ? (
                  <a className="link-arrow" href={e.lien} target="_blank" rel="noreferrer">
                    Voir en ligne <b aria-hidden="true">→</b>
                  </a>
                ) : null}
              </div>
            </Item>
          ))}
        </Stagger>

        <Reveal className="evmaj__next">
          <h3>A venir en 2026</h3>
          <ul className="evmaj__tags">
            {EVENTS_2026.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ GUIDES (blog) */
export function GuidesBlog() {
  const [cat, setCat] = useState('Tout')
  const list = cat === 'Tout' ? ARTICLES : ARTICLES.filter((a) => a.cat === cat)
  const [feat, ...rest] = list
  return (
    <section className="blog">
      <div className="wrap">
        <div className="actus__head">
          <div>
            <span className="kicker">Le blog des démarches</span>
            <h2 className="section-title">Tout savoir pour vivre en Tunisie.</h2>
          </div>
          <div className="actus__filters" role="tablist" aria-label="Categories">
            {CATS_GUIDES.map((c) => (
              <button key={c} className={`tab ${cat === c ? 'is-on' : ''}`} onClick={() => setCat(c)}>
                {c}
              </button>
            ))}
          </div>
        </div>

        {feat && (
          <Reveal className="feature" variant="zoom" y={22} key={feat.slug}>
            <Link className="feature__media" to={`/guides/${feat.slug}`}>
              <Img src={feat.img} alt={feat.titre} position="center 40%" />
              <span className="feature__cat">{feat.cat}</span>
            </Link>
            <div className="feature__body">
              <span className="feature__date">{feat.date}</span>
              <h3 className="feature__titre">{feat.titre}</h3>
              <p>{feat.resume}</p>
              <Link className="link-arrow" to={`/guides/${feat.slug}`}>
                Lire l'article <b aria-hidden="true">→</b>
              </Link>
            </div>
          </Reveal>
        )}

        <div className="actus__list">
          {rest.map((a) => (
            <Reveal as="article" className="newsrow" key={a.slug} y={16}>
              <Link className="newsrow__media" to={`/guides/${a.slug}`} aria-label={a.titre}>
                <Img src={a.img} alt={a.titre} position="center 40%" />
              </Link>
              <div className="newsrow__body">
                <div className="newsrow__top">
                  <span className="newsrow__cat">{a.cat}</span>
                  <span className="newsrow__date">{a.date}</span>
                </div>
                <h3>
                  <Link to={`/guides/${a.slug}`}>{a.titre}</Link>
                </h3>
                <p>{a.resume}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* Vue d'un article de blog (page /guides/<slug>) */
export function ArticleView({ article }) {
  return (
    <>
      <header className="article__head">
        <div className="article__media">
          <Img src={article.img} eager alt="" position="center 40%" />
        </div>
        <div className="article__scrim" />
        <div className="wrap article__headinner">
          <Link to="/guides" className="article__back">
            ← Tous les guides
          </Link>
          <span className="kicker kicker--ondark">{article.cat}</span>
          <h1 className="article__title">{article.titre}</h1>
          <p className="article__meta">{article.date}</p>
        </div>
        <div className="hero__bar" aria-hidden="true">
          <span style={{ background: 'var(--red)' }} />
          <span style={{ background: 'var(--gold)' }} />
          <span style={{ background: 'var(--green)' }} />
        </div>
      </header>

      <article className="article">
        <div className="wrap article__body">
          <p className="article__lede">{article.resume}</p>
          {article.contenu.map((b, i) => {
            if (b.type === 'h') return <h2 key={i}>{b.text}</h2>
            if (b.type === 'list')
              return (
                <ul key={i} className="article__list">
                  {b.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              )
            return <p key={i}>{b.text}</p>
          })}
          <div className="article__foot">
            <Link to="/guides" className="link-arrow">
              Revenir au blog <b aria-hidden="true">→</b>
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}

/* -------------------------------------------------------------------- INSTITUTIONS */
export function Institutions() {
  return (
    <section className="instit">
      <div className="wrap">
        <Reveal className="instit__head">
          <span className="kicker">CESGUIT & les institutions</span>
          <h2 className="section-title">Une communauté qui compte.</h2>
          <p className="section-lede">{INSTITUTIONS.intro}</p>
        </Reveal>

        <ol className="timeline">
          {INSTITUTIONS.moments.map((m) => (
            <Reveal as="li" className="tl" key={m.titre} y={18}>
              <div className="tl__media">
                <Img id={m.img} w={720} alt={m.titre} position="center 40%" />
              </div>
              <div className="tl__body">
                <span className="tl__date">{m.date}</span>
                <h3>{m.titre}</h3>
                <p>{m.desc}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        {INSTITUTIONS.photosAFournir && (
          <p className="instit__note">
            Les visuels ci-dessus sont provisoires. Ils seront remplaces par les photos officielles
            des rencontres avec le Consulat, l'Ambassade et le gouvernement guinéen.
          </p>
        )}
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------------- GALERIE
   Mosaique masonry (colonnes, hauteurs naturelles). `limit` : apercu sur l'accueil. */
export function Galerie({ limit }) {
  const list = limit ? GALERIE.slice(0, limit) : GALERIE
  return (
    <section className="galerie">
      <div className="wrap">
        <Reveal className="galerie__head">
          <span className="kicker">Galerie</span>
          <h2 className="section-title">Des visages, des moments partagés.</h2>
        </Reveal>
      </div>
      <div className="wrap">
        <div className="masonry">
          {list.map((src, i) => (
            <Reveal className="shot" variant="zoom" amount={0.05} delay={(i % 4) * 0.04} key={src}>
              <img src={src} alt="" loading="lazy" decoding="async" />
            </Reveal>
          ))}
        </div>
        {limit && GALERIE.length > limit && (
          <Reveal className="galerie__more">
            <Link to="/galerie" className="btn">
              Voir toute la galerie ({GALERIE.length} photos)
            </Link>
          </Reveal>
        )}
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------- OPPORTUNITES */
export function Opportunités() {
  return (
    <section className="opps">
      <div className="wrap opps__grid">
        <div className="opps__intro">
          <span className="kicker">Opportunités</span>
          <Reveal as="h2" className="section-title">
            Ce que la communauté vous ouvre.
          </Reveal>
          <Reveal className="section-lede" delay={0.06}>
            <p>
              Bourses, stages, offres et documents utiles, vérifiés pour les membres. Mentorat et PFE
              Book avec nos partenaires et alumni.
            </p>
          </Reveal>
        </div>
        <Stagger className="opps__list" step={0.06}>
          {OPPORTUNITES.map((o) => (
            <Item className="opp" variant="left" key={o.titre}>
              <span className="opp__type">{o.type}</span>
              <div className="opp__body">
                <h3>{o.titre}</h3>
                <p>{o.meta}</p>
              </div>
              <span className="opp__go" aria-hidden="true">
                →
              </span>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------------- TEMOIGNAGES */
/* Le mot du président (remplace les temoignages). Vraie photo + citation. */
export function MotPresident() {
  const p = MOT_PRESIDENT
  return (
    <section className="mot">
      <div className="wrap mot__grid">
        <Reveal className="mot__media" variant="zoom" y={20}>
          <div className="framed framed--gold">
            <span className="framed__accent" />
            <img className="framed__img mot__photo" src={p.photo} alt={p.nom} loading="lazy" />
          </div>
        </Reveal>
        <div className="mot__content">
          <span className="kicker kicker--ondark">Le mot du président</span>
          <Reveal as="blockquote" className="mot__quote">
            <p>“{p.message}”</p>
          </Reveal>
          <Reveal className="mot__slogan" delay={0.05}>
            <p>{p.slogan}</p>
          </Reveal>
          <Reveal className="mot__sign" delay={0.1}>
            <strong>{p.nom}</strong>
            <span>
              {p.poste} · {p.mandat}
            </span>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------------- PARTENAIRES */
export function Partenaires() {
  return (
    <section className="partners">
      <div className="wrap">
        <Reveal className="partners__head">
          <span className="kicker">Partenaires</span>
          <h2 className="section-title">Celles et ceux qui nous soutiennent.</h2>
          <p className="section-lede">
            Des acteurs engagés à nos côtés pour la formation, le mentorat et le rayonnement des
            étudiants.
          </p>
        </Reveal>
        <Stagger className="partners__grid" step={0.07}>
          {PARTENAIRES.map((p) => (
            <Item className="pcard" variant="flip" key={p.nom}>
              <div className="pcard__logo">
                <img src={p.logo} alt={p.nom} loading="lazy" />
              </div>
              <h3>{p.nom}</h3>
              <p>{p.desc}</p>
            </Item>
          ))}
        </Stagger>
        <Reveal className="partners__instit">
          <h3>Liens institutionnels</h3>
          <ul>
            {PARTENAIRES_INSTIT.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------------- JOIN CTA */
export function JoinBand() {
  const onJoin = useJoin()
  return (
    <section className="joinband">
      <div className="joinband__media">
        <Img id={MEDIA.amis_mur} w={1920} alt="Rejoindre la communauté" position="center 30%" />
      </div>
      <div className="joinband__scrim" />
      <div className="wrap joinband__inner">
        <Reveal className="joinband__text">
          <h2>Ajoutez votre voix à la communauté.</h2>
          <p>
            Deux minutes pour rejoindre un réseau de 500 étudiants qui se serrent les coudes, partout
            en Tunisie.
          </p>
          <button className="btn btn--red joinband__btn" onClick={onJoin}>
            Rejoindre la CESGUIT
          </button>
        </Reveal>
      </div>
    </section>
  )
}
