import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {VitePWA} from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  base: "/PokerBank-FrontEnd",
  plugins: [
    react(),
    VitePWA({ // Adicione a configuração do PWA
      registerType: 'autoUpdate', // Atualiza o service worker automaticamente
      injectRegister: 'auto',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,json,woff,woff2}'] // Arquivos para cache
      }
    })
  ],
})
