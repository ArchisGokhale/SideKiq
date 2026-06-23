import { defineConfig } from 'vite'

// Minimal Vite config — avoid ESM plugin load issues in some environments
export default defineConfig({
  server: { port: 5173 }
})
