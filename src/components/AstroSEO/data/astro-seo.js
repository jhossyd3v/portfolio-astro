const pagesData = {
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

const createSEOTemplate = () => {
  return {
    charset: 'UTF-8',
    description: '',
    nofollow: false,
    noindex: false,
    title: 'Jhossymar Contreras | %s',
    titleDefault: 'Jhossymar Contreras',
    titleTemplate: 'Jhossymar Contreras | %s',
    link: [],
    meta: [],
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

const addLink = (seoObject, rel, type, href) => {
  seoObject.link.push({ rel, type, href })
  return seoObject
}

const addMeta = (seoObject, name, content) => {
  seoObject.meta.push({ name, content })
  return seoObject
}

const setPageData = (seoObject, pageID, lang) => {
  if (!pagesData[pageID]) pageID = 'default'
  seoObject.title = pagesData[pageID][lang].title || seoObject.titleDefault
  seoObject.description = pagesData[pageID][lang].description || seoObject.description
  seoObject.openGraph = pagesData[pageID][lang].openGraph || seoObject.openGraph
  seoObject.twitter = pagesData[pageID][lang].twitter || seoObject.twitter

  return seoObject
}

const createSEOData = (pageID = 'default', lang = 'en') => {
  let seoObject = createSEOTemplate()

  seoObject = addLink(seoObject, 'icon', 'image/x-icon', '/favicon.ico')
  // seoObject = addLink(seoObject, 'icon', 'image/svg+xml', '/favicon.svg')
  seoObject = addMeta(seoObject, 'viewport', 'width=device-width,user-scalable=no, initial-scale=1.0, minimum-scale=1.0')
  seoObject = setPageData(seoObject, pageID, lang)

  return seoObject
}

export default createSEOData
