import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use 'src/assets/scss/partials/mixins' as *;
          @use 'src/assets/scss/partials/colors' as *;
          @use 'src/assets/scss/general' as *;
          @use 'src/assets/scss/buttons-style' as *;
        `
      }
    }
  }
})
