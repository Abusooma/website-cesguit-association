import { useState } from 'react'
import { unsplash } from '../data/content.js'

/*
  Img — une photo recadree proprement, chargee en paresseux, avec un fondu doux
  a l'apparition. Soit une photo Unsplash (`id` + `w`), soit une image locale
  (`src`, ex: /img/galerie/g04.jpg).
*/
export default function Img({ id, src, alt = '', w = 1200, className, eager = false, position }) {
  const [loaded, setLoaded] = useState(false)
  const finalSrc = src || unsplash(id, w)
  return (
    <img
      src={finalSrc}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      onLoad={() => setLoaded(true)}
      className={`img ${loaded ? 'is-loaded' : ''} ${className || ''}`}
      style={position ? { objectPosition: position } : undefined}
    />
  )
}
