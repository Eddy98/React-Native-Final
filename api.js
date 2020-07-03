export const fetchHeadlinesAPI = async () => {
  const response = await fetch(
    'https://newsapi.org/v2/top-headlines?country=us&apiKey=955177598cb044c8b04723b56ed65269'
  )
  const { articles } = await response.json()
  return articles.filter((news) => news.urlToImage !== null)
}

export const fetchCategoryNewsAPI = async (cat) => {
  const response = await fetch(
    'https://newsapi.org/v2/top-headlines?country=us&apiKey=955177598cb044c8b04723b56ed65269&category=' +
      cat
  )
  const { articles } = await response.json()
  return articles.filter((news) => news.urlToImage !== null)
}

export const fetchSearchNewsAPI = async (value) => {
  const response = await fetch(
    'https://newsapi.org/v2/everything?apiKey=955177598cb044c8b04723b56ed65269&q=' +
      value
  )
  const { articles } = await response.json()
  console.log(articles)

  return articles.filter((news) => news.urlToImage !== null)
}
