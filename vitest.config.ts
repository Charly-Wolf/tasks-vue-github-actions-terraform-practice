import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    environment: 'jsdom',
    // setupFiles: ["tests/unit-setup.ts"],
    silent: 'passed-only',
    css: true,
    server: {
      deps: {
        inline: ['date-fns'],
      },
    },
    // coverage: {
    //   reporter: ["text", "json", "html"],
    //   provider: "istanbul"
    // },
    globals: true,
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
