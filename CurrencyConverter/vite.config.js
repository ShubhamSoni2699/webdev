import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base:"https://shubhamsoni2699.github.io/webdev/CurrencyConverter/",
  plugins: [react()],
})
