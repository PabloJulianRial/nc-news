import { useEffect, useState } from "react";
import "./App.css";
import Header from "../src/components/Header";
import ArticlesList from "./components/ArticlesList";
import { Route, Routes } from "react-router-dom";
import { getArticles } from "./utils";
import FullArticle from "../src/components/FullArticle";
import CommentsList from "./components/CommentsList";
import { getTopics } from "./utils";
import ArticlesByTopic from "./components/ArticlesByTopic";
function App() {
  const [allArticles, setAllArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [allTopics, setAllTopics] = useState([]);

  useEffect(() => {
    getArticles()
      .then((response) => {
        setAllArticles(response);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsError(true);
      });
  }, []);
  useEffect(() => {
    getTopics().then((response) => {
      setAllTopics(response);
    });
  }, []);

  if (isError) {
    return <p className="error">Error</p>;
  } else if (isLoading) {
    return <p className="loading">Loading...</p>;
  } else
    return (
      <div className="App">
        <Header allTopics={allTopics} />
        <Routes>
          <Route
            path="/"
            element={
              <ArticlesList allArticles={allArticles} allTopics={allTopics} />
            }
          />
          <Route
            path="/articles/:article_id"
            element={<FullArticle allTopics={allTopics} />}
          />
          <Route
            path="/articles/topics/:topic"
            element={
              <ArticlesByTopic
                allArticles={allArticles}
                allTopics={allTopics}
              />
            }
          />
          <Route
            path="/articles/:article_id/comments"
            element={
              <>
                <FullArticle />
                <CommentsList />
              </>
            }
          />
        </Routes>
      </div>
    );
}

export default App;
