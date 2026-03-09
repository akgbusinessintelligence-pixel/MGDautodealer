import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/2026/',
    plugins: [react()],
    resolve: {
        dedupe: ['react', 'react-dom'],
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
    }
})
