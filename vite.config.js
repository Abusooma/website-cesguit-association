import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    watch: {
      // Config STABLE : on n'observe pas les medias ni les dossiers sources.
      // Cela evite les plantages du watcher (EBUSY sur fichier verrouille, synchro
      // cloud / antivirus). Les images de public/ restent servies ; apres l'ajout
      // de nouvelles images, un redemarrage du serveur les prend en compte.
      ignored: [
        '**/dist/**',
        '**/new_pictures_galerie/**',
        '**/*.jpg',
        '**/*.jpeg',
        '**/*.png',
        '**/*.pdf',
      ],
    },
  },
})
