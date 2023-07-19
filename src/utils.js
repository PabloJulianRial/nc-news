import axios from "axios";

const articlesApi = axios.create({
  baseURL: "https://nc-news-api-iv8w.onrender.com/api",
});

export function getArticles() {
  return articlesApi.get("/articles").then(({ data }) => {
    return data.articles;
  });
}

export function getArticle(article_id) {
  return articlesApi.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
}

export function getComments(article_id) {
  return articlesApi
    .get(`/articles/${article_id}/comments`)
    .then(({ data }) => {
      return data.comments;
    });
}
