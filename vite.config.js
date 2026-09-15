import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    watch: {
      // On ignore uniquement les dossiers sources/lourds (pas les medias de public/,
      // pour qu'ils soient servis a chaud sans redemarrage).
      ignored: ['**/dist/**', '**/new_pictures_galerie/**'],
    },
  },
})
