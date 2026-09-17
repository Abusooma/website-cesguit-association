import { useLayoutEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import './pages.css'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import JoinModal from './components/JoinModal.jsx'
import { JoinContext } from './join.jsx'
import {
  HomePage,
  AProposPage,
  BureauPage,
  AidePage,
  GuidesPage,
  GuideArticlePage,
  EvenementsPage,
  GaleriePage,
  ActualitesPage,
  OpportunitesPage,
  PartenairesPage,
  NotFoundPage,
} from './pages.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  // useLayoutEffect : on remet le scroll en haut AVANT que le navigateur peigne,
  // donc avant que framer-motion évalue whileInView. Sinon les sections encore
  // « en vue » pendant le reset déclenchent leurs reveals à vide.
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [pathname])
  return null
}

function Layout() {
  const [joinOpen, setJoinOpen] = useState(false)
  const openJoin = () => setJoinOpen(true)

  return (
    <JoinContext.Provider value={openJoin}>
      <a href="#main" className="skip-link">
        Aller au contenu
      </a>
      <ScrollToTop />
      <Nav />
      <main id="main" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/a-propos" element={<AProposPage />} />
          <Route path="/bureau" element={<BureauPage />} />
          <Route path="/aide" element={<AidePage />} />
          <Route path="/guides" element={<GuidesPage />} />
          <Route path="/guides/:slug" element={<GuideArticlePage />} />
          <Route path="/evenements" element={<EvenementsPage />} />
          <Route path="/galerie" element={<GaleriePage />} />
          <Route path="/actualites" element={<ActualitesPage />} />
          <Route path="/opportunites" element={<OpportunitesPage />} />
          <Route path="/partenaires" element={<PartenairesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <JoinModal open={joinOpen} onClose={() => setJoinOpen(false)} />
    </JoinContext.Provider>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}
