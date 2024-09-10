export const getDataByLang = (data, lang) => {
  return data[lang] || data.en
}

export const sortProjectsByOrder = (projects = []) => {
  return projects.sort((projectA, projectB) => {
    if (projectA.order < projectB.order) {
      return -1
    } else if (projectA.order > projectB.order) {
      return 1
    } else {
      return 0
    }
  })
}