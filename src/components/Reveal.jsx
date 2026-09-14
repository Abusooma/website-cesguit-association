import { motion } from 'framer-motion'

/*
  Reveal — entrees animees au scroll, marquees et VRAIMENT 3D.
  Les blocs "arrivent" dans l'ecran (profondeur + rotation) avec un petit rebond.
    variant="up"      monte de loin (defaut)
    variant="zoom"    surgit de loin (petit -> normal)
    variant="zoomout" arrive vers vous (grand -> normal)
    variant="tilt"    se deplie en 3D (bascule verticale, perspective)
    variant="flip"    pivote en 3D depuis le cote (rotateY)
    variant="left" / "right"  glisse largement depuis le cote, avec profondeur
  Respecte prefers-reduced-motion (framer-motion neutralise tout seul).
*/

// ressort d'arrivee (leger depassement) pour les transformations
const SPRING = { type: 'spring', stiffness: 120, damping: 15, mass: 0.9 }
// l'opacite reste douce (pas de ressort)
const FADE = { duration: 0.5, ease: [0.22, 1, 0.36, 1] }

function states(variant, y) {
  switch (variant) {
    case 'zoom':
      return [
        { opacity: 0, scale: 0.55, transformPerspective: 1000 },
        { opacity: 1, scale: 1, transformPerspective: 1000 },
      ]
    case 'zoomout':
      return [
        { opacity: 0, scale: 1.35, transformPerspective: 1000 },
        { opacity: 1, scale: 1, transformPerspective: 1000 },
      ]
    case 'tilt':
      return [
        { opacity: 0, rotateX: 48, y: 80, scale: 0.9, transformPerspective: 800 },
        { opacity: 1, rotateX: 0, y: 0, scale: 1, transformPerspective: 800 },
      ]
    case 'flip':
      return [
        { opacity: 0, rotateY: -62, x: 60, transformPerspective: 800 },
        { opacity: 1, rotateY: 0, x: 0, transformPerspective: 800 },
      ]
    case 'left':
      return [
        { opacity: 0, x: -90, rotateY: 18, transformPerspective: 900 },
        { opacity: 1, x: 0, rotateY: 0, transformPerspective: 900 },
      ]
    case 'right':
      return [
        { opacity: 0, x: 90, rotateY: -18, transformPerspective: 900 },
        { opacity: 1, x: 0, rotateY: 0, transformPerspective: 900 },
      ]
    case 'up':
    default:
      return [
        { opacity: 0, y: y ?? 70, scale: 0.96, transformPerspective: 1000 },
        { opacity: 1, y: 0, scale: 1, transformPerspective: 1000 },
      ]
  }
}

export default function Reveal({
  children,
  as: Tag = 'div',
  variant = 'up',
  delay = 0,
  y,
  once = true,
  amount = 0.25,
  className,
  ...rest
}) {
  const M = motion[Tag] || motion.div
  const [hidden, shown] = states(variant, y)
  return (
    <M
      className={className}
      initial={hidden}
      whileInView={shown}
      viewport={{ once, amount, margin: '0px 0px -8% 0px' }}
      transition={{ ...SPRING, delay, opacity: { ...FADE, delay } }}
      {...rest}
    >
      {children}
    </M>
  )
}

/* Conteneur qui met en scene ses enfants en cascade marquee */
export function Stagger({
  children,
  as: Tag = 'div',
  step = 0.12,
  once = true,
  amount = 0.15,
  className,
  ...rest
}) {
  const M = motion[Tag] || motion.div
  return (
    <M
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount, margin: '0px 0px -8% 0px' }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: step } } }}
      {...rest}
    >
      {children}
    </M>
  )
}

export function Item({ children, as: Tag = 'div', variant = 'up', y, className, ...rest }) {
  const M = motion[Tag] || motion.div
  const [hidden, shown] = states(variant, y)
  return (
    <M
      className={className}
      variants={{
        hidden,
        show: { ...shown, transition: { ...SPRING, opacity: FADE } },
      }}
      {...rest}
    >
      {children}
    </M>
  )
}
