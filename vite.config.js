import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    watch: {
      // Ne pas surveiller les fichiers medias / dossiers sources : cela evite les
      // plantages du watcher quand un fichier est verrouille (EBUSY sur Windows,
      // synchro cloud / antivirus). Ces fichiers restent servis normalement.
      ignored: [
        '**/images_evenements/**',
        '**/assets/**',
        '**/*.pdf',
        '**/*.jpg',
        '**/*.jpeg',
        '**/*.png',
      ],
    },
  },
})
