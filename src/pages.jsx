import { useParams } from 'react-router-dom'
import { MEDIA, ARTICLES } from './data/content.js'
import {
  PageHeader,
  Hero,
  APropos,
  Impact,
  Piliers,
  Engagements,
  Bureau,
  BureauActuel,
  AesatBand,
  Représentation,
  Services,
  Actualités,
  Événements,
  EvenementsMajeurs,
  GuidesBlog,
  ArticleView,
  Galerie,
  Opportunités,
  MotPresident,
  Partenaires,
  JoinBand,
} from './sections.jsx'

export function HomePage() {
  return (
    <>
      <Hero />
      <Impact />
      <APropos />
      <BureauActuel />
      <Piliers />
      <Engagements />
      <Services />
      <Galerie limit={15} />
      <MotPresident />
      <AesatBand />
      <Partenaires />
      <JoinBand />
    </>
  )
}

export function AProposPage() {
  return (
    <>
      <PageHeader
        kicker="À propos"
        titre="Une communauté fière, unie et respectee."
        intro="Née à Tunis en 1991, la CESGUIT rassemble et défend les étudiants et stagiaires guinéens de Tunisie."
        img={MEDIA.amis_mur}
      />
      <APropos />
      <Piliers />
      <Représentation />
      <JoinBand />
    </>
  )
}

export function BureauPage() {
  return (
    <>
      <PageHeader
        kicker="Le bureau"
        titre="Le mandat actuel."
        intro="L'équipe qui porte la CESGUIT aujourd'hui, et son programme d'engagements concrets."
        src="/img/bureau-hero.jpg"
      />
      <Bureau />
      <Engagements />
      <Représentation />
      <JoinBand />
    </>
  )
}

export function AidePage() {
  return (
    <>
      <PageHeader
        kicker="Aide & solidarité"
        titre="Un accompagnement concret, à chaque étape."
        intro="Santé, finances, administratif, écoute. En cas d'urgence, on décroche vite et c'est confidentiel."
        src="/img/accompagnement-complet.jpg"
      />
      <Services />
      <Engagements />
      <JoinBand />
    </>
  )
}

export function GuidesPage() {
  return (
    <>
      <PageHeader
        kicker="Guides pratiques"
        titre="Le blog des démarches."
        intro="Des articles pour tous ceux qui vivent en Tunisie : démarches administratives, logement, santé, bourse et droits."
        src="/img/guides/carte-sejour.jpg"
      />
      <GuidesBlog />
      <JoinBand />
    </>
  )
}

export function GuideArticlePage() {
  const { slug } = useParams()
  const article = ARTICLES.find((a) => a.slug === slug)
  if (!article) return <NotFoundPage />
  return (
    <>
      <ArticleView article={article} />
      <JoinBand />
    </>
  )
}

export function EvenementsPage() {
  return (
    <>
      <PageHeader
        kicker="Événements"
        titre="Ce que vit la communauté."
        intro="Nos temps forts passés et les rendez-vous à venir : culture, sport, solidarité et partenariats."
        src="/img/evenement-hero.jpg"
      />
      <EvenementsMajeurs />
      <Événements />
      <JoinBand />
    </>
  )
}

export function GaleriePage() {
  return (
    <>
      <PageHeader
        kicker="Galerie"
        titre="Des visages, des moments."
        intro="Un aperçu de la vie de la communauté, en images."
        src="/img/galerie/g05.jpg"
      />
      <Galerie />
      <JoinBand />
    </>
  )
}

export function ActualitesPage() {
  return (
    <>
      <PageHeader
        kicker="Actualités"
        titre="La vie de la communauté."
        intro="Ce qui bouge : académique, culturel, social et sportif."
        img={MEDIA.etudiante}
      />
      <Actualités />
      <JoinBand />
    </>
  )
}

export function OpportunitesPage() {
  return (
    <>
      <PageHeader
        kicker="Opportunités"
        titre="Ce que la communauté vous ouvre."
        intro="Bourses, stages, mentorat et documents utiles, vérifiés pour les membres."
        img={MEDIA.ingenierie}
      />
      <Opportunités />
      <JoinBand />
    </>
  )
}

export function PartenairesPage() {
  return (
    <>
      <PageHeader
        kicker="Partenaires"
        titre="On ne tisse pas seuls."
        intro="Des acteurs engagés à nos côtés pour la formation, le mentorat et le rayonnement des étudiants."
        src="/img/partenaire-hero.jpg"
      />
      <Partenaires />
      <JoinBand />
    </>
  )
}

export function NotFoundPage() {
  return (
    <section className="notfound">
      <div className="wrap">
        <span className="kicker">Erreur 404</span>
        <h1 className="section-title">Cette page n'existe pas.</h1>
        <p className="section-lede">Le lien est peut-etre casse, ou la page a ete deplacee.</p>
      </div>
    </section>
  )
}
