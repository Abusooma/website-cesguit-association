import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FORM } from '../data/content.js'

export default function JoinModal({ open, onClose }) {
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  // suivis pour afficher un champ libre quand « Autre » est choisi
  const [univ, setUniv] = useState('')
  const [domaine, setDomaine] = useState('')
  const dialogRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    // focus le premier champ
    const t = setTimeout(() => {
      dialogRef.current?.querySelector('input, select, button')?.focus()
    }, 60)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      clearTimeout(t)
    }
  }, [open, onClose])

  const submit = async (e) => {
    e.preventDefault()
    if (sending) return
    setError('')
    setSending(true)
    const form = e.target
    const data = new FormData(form)
    // si « Autre » : on transmet la valeur saisie librement
    const universite =
      univ === 'Autre' ? (data.get('UniversiteAutre') || '').toString().trim() : univ
    const domaineVal =
      domaine === 'Autre' ? (data.get('DomaineAutre') || '').toString().trim() : domaine
    const payload = {
      prenom: data.get('Prénom') || '',
      nom: data.get('Nom') || '',
      email: data.get('Email') || '',
      whatsapp: data.get('WhatsApp') || '',
      universite,
      domaine: domaineVal,
      niveau: data.get('Niveau') || '',
      bourse: data.get('Bourse') || '',
      botcheck: data.get('botcheck') ? true : false,
    }
    try {
      const res = await fetch('/api/adhesion', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const json = await res.json().catch(() => ({}))
      if (res.ok && json.success) {
        setSent(true)
        form.reset()
        setUniv('')
        setDomaine('')
      } else {
        setError(json.message || "L'envoi a échoué. Merci de réessayer.")
      }
    } catch (err) {
      setError('Connexion impossible. Vérifiez votre réseau et réessayez.')
    } finally {
      setSending(false)
    }
  }

  const close = () => {
    onClose()
    // reset après la transition de fermeture
    setTimeout(() => {
      setSent(false)
      setError('')
      setSending(false)
      setUniv('')
      setDomaine('')
    }, 350)
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.28 }}
          onMouseDown={(e) => e.target === e.currentTarget && close()}
          role="dialog"
          aria-modal="true"
          aria-label="Formulaire d'adhésion à la CESGUIT"
        >
          <motion.div
            className="modal__card"
            ref={dialogRef}
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <button className="modal__close" onClick={close} aria-label="Fermer">
              ×
            </button>

            {!sent ? (
              <>
                <span className="kicker">Adhésion</span>
                <h2 className="modal__title">Rejoindre la CESGUIT</h2>
                <p className="modal__lede">
                  Deux minutes suffisent. Un membre du bureau vous recontacte avant la prochaine
                  permanence.
                </p>

                <form className="form" onSubmit={submit}>
                  <div className="form__row form__row--pair">
                    <label className="field">
                      <span>Prénom</span>
                      <input type="text" name="Prénom" required autoComplete="given-name" />
                    </label>
                    <label className="field">
                      <span>Nom</span>
                      <input type="text" name="Nom" required autoComplete="family-name" />
                    </label>
                  </div>

                  <div className="form__row form__row--pair">
                    <label className="field">
                      <span>Email</span>
                      <input type="email" name="Email" required autoComplete="email" />
                    </label>
                    <label className="field">
                      <span>WhatsApp</span>
                      <input type="tel" name="WhatsApp" placeholder="+216 ..." />
                    </label>
                  </div>

                  <div className="form__row">
                    <label className="field">
                      <span>Université</span>
                      <select
                        name="Université"
                        required
                        value={univ}
                        onChange={(e) => setUniv(e.target.value)}
                      >
                        <option value="" disabled>
                          Choisir...
                        </option>
                        {FORM.universites.map((u) => (
                          <option key={u}>{u}</option>
                        ))}
                      </select>
                    </label>
                    <label className="field">
                      <span>Domaine d'étude</span>
                      <select
                        name="Domaine d'étude"
                        required
                        value={domaine}
                        onChange={(e) => setDomaine(e.target.value)}
                      >
                        <option value="" disabled>
                          Choisir...
                        </option>
                        {FORM.domaines.map((d) => (
                          <option key={d}>{d}</option>
                        ))}
                      </select>
                    </label>
                  </div>

                  <AnimatePresence initial={false}>
                    {(univ === 'Autre' || domaine === 'Autre') && (
                      <motion.div
                        className="form__row form__row--autre"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      >
                        {univ === 'Autre' && (
                          <label className="field">
                            <span>Nom de votre université</span>
                            <input
                              type="text"
                              name="UniversiteAutre"
                              required
                              autoFocus
                              placeholder="Ex. Université de Sousse"
                            />
                          </label>
                        )}
                        {domaine === 'Autre' && (
                          <label className="field">
                            <span>Précisez votre domaine</span>
                            <input
                              type="text"
                              name="DomaineAutre"
                              required
                              placeholder="Ex. Pharmacie"
                            />
                          </label>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="form__row form__row--pair">
                    <label className="field">
                      <span>Niveau</span>
                      <select name="Niveau" required defaultValue="">
                        <option value="" disabled>
                          Choisir...
                        </option>
                        {FORM.niveaux.map((n) => (
                          <option key={n}>{n}</option>
                        ))}
                      </select>
                    </label>
                    <label className="field">
                      <span>Bourse</span>
                      <select name="Bourse" required defaultValue="">
                        <option value="" disabled>
                          Choisir...
                        </option>
                        {FORM.bourses.map((b) => (
                          <option key={b}>{b}</option>
                        ))}
                      </select>
                    </label>
                  </div>

                  {/* anti-spam (champ piège, cache) */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    tabIndex={-1}
                    autoComplete="off"
                    style={{ display: 'none' }}
                    aria-hidden="true"
                  />

                  {error && <p className="form__error">{error}</p>}

                  <button type="submit" className="btn btn--red form__submit" disabled={sending}>
                    {sending ? 'Envoi en cours…' : 'Envoyer mon adhésion'}
                  </button>
                  <p className="form__note">
                    Vos informations restent confidentielles.
                  </p>
                </form>
              </>
            ) : (
              <div className="sent">
                <div className="sent__mark" aria-hidden="true">
                  <svg viewBox="0 0 60 60" width="72" height="72">
                    <circle cx="30" cy="30" r="27" fill="none" stroke="#2f9e6f" strokeWidth="3" />
                    <path
                      d="M18 31 l8 8 l16 -18"
                      fill="none"
                      stroke="#2f9e6f"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h2 className="modal__title">
                  Bienvenue dans la communauté
                  <svg className="flag-gn" viewBox="0 0 18 12" width="27" height="18" aria-label="Guinée">
                    <rect width="6" height="12" fill="#e4322b" />
                    <rect x="6" width="6" height="12" fill="#f2b134" />
                    <rect x="12" width="6" height="12" fill="#2f9e6f" />
                  </svg>
                </h2>
                <p className="modal__lede">
                  Votre demande est enregistrée. Un membre du bureau vous contacte très vite.
                </p>
                <button className="btn" onClick={close}>
                  Fermer
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
