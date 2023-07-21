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

export function getVotes(article_id) {
  return articlesApi.get(`/articles/${article_id}/votes`).then(({ data }) => {
    return data.votes;
  });
}

export function voteArticleUp(n, article_id) {
  const voteBody = {
    inc_votes: {
      inc_votes: n,
    },
  };
  return articlesApi
    .patch(`/articles/${article_id}`, voteBody)
    .then(({ data }) => {
      return data.votes;
    });
}

export function voteArticleDown(n, article_id) {
  const voteBody = {
    inc_votes: {
      inc_votes: n,
    },
  };
  return articlesApi
    .patch(`/articles/${article_id}`, voteBody)
    .then(({ data }) => {
      return data.votes;
    });
}

export function postComment(newComment, currentAuthor, article_id) {
  const newCommentBody = {
    username: currentAuthor,
    body: newComment,
  };
  return articlesApi
    .post(`/articles/${article_id}/comments`, newCommentBody)
    .then(({ data }) => {
      return data;
    });
}

export function getUsers() {
  return articlesApi.get("/users").then(({ data }) => {
    return data.users;
  });
}

export function getTopics() {
  return axios
    .get("https://nc-news-api-iv8w.onrender.com/api/topics")
    .then(({ data }) => {
      return data.topics.map((topic) => {
        return topic.slug;
      });
    });
}

export function selectArticlesByTopic(allArticles, currentTopic) {
  return allArticles.filter((article) => {
    if (currentTopic !== "none") {
      return article.topic === currentTopic;
    } else {
      return allArticles;
    }
  });
}
