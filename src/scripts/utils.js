export const getDataByLang = (data, lang) => {
  return data[lang] || data.en
}
