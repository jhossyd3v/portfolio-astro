import { defineConfig } from 'astro/config'

function entryFilenameToJs (filename) {
  let name = filename.split('.')[0]

  if (/[A-Z]/.test(name)) {
    name = name
      .replace(/([A-Z])/g, '-$1')
      .toLowerCase()
      .slice(1)
  }

  name = name.replace(/ /g, '-')

  return `${name}.js`
}

export default defineConfig({
  site: 'https:www.jhossy.dev',
  compressHTML: false,
  trailingSlash: 'always',
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
          assetFileNames: asset => {
            const regex = /\{outputFileName:(.*?)\}/
            const name = asset.name
            const source = asset.source
            const ext = name.substring(name.lastIndexOf('.'), name.length)
            const hasCustomFilename = source.match(regex)

            switch (ext) {
              case '.css':
                if (hasCustomFilename && hasCustomFilename.length > 0) {
                  let customFilename = hasCustomFilename[1]
                  customFilename = customFilename.replace(/ /g, '-')
                  return `assets/css/${customFilename}${ext}`
                } else {
                  return `assets/css/${name}`
                }
              case '.js':
                return `js/${name}`
              default:
                return name
            }
          },
          entryFileNames: entry => {
            let name = '[name].[hash].js'
            const moduleIds = entry.moduleIds
            if (moduleIds && moduleIds.length > 0) {
              const nonNodeModuleId = moduleIds.find(
                id => !id.includes('node_modules')
              )
              if (nonNodeModuleId) {
                name = nonNodeModuleId.split('/').pop().split('?')[0] // Extract the file name from the module ID
              }

              const isAstroFile = name.includes('.astro')
              if (isAstroFile) {
                name = entryFilenameToJs(name)
              }
              const isTypeScript = name.includes('.ts')
              if (isTypeScript) {
                name = name.replace('.ts', '.js')
              }
            }
            return `js/${name}`
          }
        }
      }
    }
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es']
  }
})
