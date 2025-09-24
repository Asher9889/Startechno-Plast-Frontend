import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    assetsDir: 'assets',
    outDir: 'dist',
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          // Keep theme files in their original directory structure
          if (assetInfo.name?.endsWith('.css') && assetInfo.name.includes('themes/')) {
            return `themes/[name][extname]`
          }
          return 'assets/[name]-[hash][extname]'
        }
      }
    }
  },
  publicDir: 'public',
})