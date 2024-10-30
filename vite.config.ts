import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),  // Use index.ts as entry point
      name: 'ReactPopup',
      formats: ['es', 'cjs'],
      fileName: (format) => `airpop.${format}.js` // Customize as desired
    },
    rollupOptions: {
      external: ['react', 'react-dom'],                  
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
})
