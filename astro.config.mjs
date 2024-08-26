import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https:www.jhossy.dev',
  compressHTML: true,
  build: {
    format: 'directory',
    assets: 'assets',
    inlineStylesheets: 'never'
  },
  vite: {
    css: {
      devSourcemap: true
    },
    build: {
      cssCodeSplit: true,
      cssMinify: true,
      minify: false,
      rollupOptions: {
        output: {
          entryFileNames: 'js/[name].js',
          assetFileNames: 'assets/css/[name].[ext]'
        }
      }
    }
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es']
  }
})
