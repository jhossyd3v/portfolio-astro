/*
  If you need to add more properties you can read the documentation of Astro SEO at https://github.com/jonasmerlin/astro-seo#readme
*/
const seoData = {
  charset: 'UTF-8',
  description: '',
  nofollow: false,
  noindex: false,
  titleDefault: 'Jhossymar Contreras',
  titleTemplate: 'Jhossymar Contreras | %s',
  link: {
    svg: [{
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/favicon.svg'
    }],
    ico: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  meta: [
    {
      name: 'viewport',
      content: 'width=device-width,user-scalable=no, initial-scale=1.0, minimum-scale=1.0'
    }
  ],
  pages: {
    default: {
      en: {
        title: 'Page',
        description: '',
        openGraph: {
          basic: {
            title: '',
            type: '',
            image: ''
          }
        },
        twitter: {
          title: '',
          image: '',
          imageAlt: '',
          description: ''
        }
      },
      es: {
        title: 'Página',
        description: '',
        openGraph: {
          basic: {
            title: '',
            type: '',
            image: ''
          }
        },
        twitter: {
          title: '',
          image: '',
          imageAlt: '',
          description: ''
        }
      }
    },
    home: {
      en: {
        title: 'Portfolio',
        description: 'Web to show information about Jhossymar Contreras, projects, experience, skills, social networks',
        openGraph: {
          basic: {
            title: '',
            type: '',
            image: ''
          }
        },
        twitter: {
          title: '',
          image: '',
          imageAlt: '',
          description: ''
        }
      },
      es: {
        title: 'Portafolio',
        description: 'Web para mostrar información sobre Jhossymar Contreras, proyectos, experiencia, habilidades, redes sociales',
        openGraph: {
          basic: {
            title: '',
            type: '',
            image: ''
          }
        },
        twitter: {
          title: '',
          image: '',
          imageAlt: '',
          description: ''
        }
      }
    },
    'not-found': {
      en: {
        title: 'Not Found',
        description: 'Page not found',
        openGraph: {
          basic: {
            title: '',
            type: '',
            image: ''
          }
        },
        twitter: {
          title: '',
          image: '',
          imageAlt: '',
          description: ''
        }
      },
      es: {
        title: 'No Encontrado',
        description: 'Página no encontrada',
        openGraph: {
          basic: {
            title: '',
            type: '',
            image: ''
          }
        },
        twitter: {
          title: '',
          image: '',
          imageAlt: '',
          description: ''
        }
      }
    }
  }
}

export default seoData
