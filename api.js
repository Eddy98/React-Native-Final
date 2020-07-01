export const fetchHeadlinesAPI = async () => {
  const response = await fetch(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=14e6d07b4041489095417aaca58cdd5e"
  );
  const { articles } = await response.json();
  return articles.filter(news => news.urlToImage !== null);;
};

export const fetchCategoryNewsAPI = async (cat) => {
  const response = await fetch(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=14e6d07b4041489095417aaca58cdd5e&category=" + cat
  );
  const { articles } = await response.json();
  return articles.filter(news => news.urlToImage !== null);
};

