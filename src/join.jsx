import { createContext, useContext } from 'react'

/* Contexte pour ouvrir le formulaire d'adhesion depuis n'importe quelle page. */
export const JoinContext = createContext(() => {})
export const useJoin = () => useContext(JoinContext)
