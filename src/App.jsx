import { useEffect, useState } from "react";
import "./App.css";
import Header from "../src/components/Header";
import ArticlesList from "./components/ArticlesList";
import { Route, Routes } from "react-router-dom";
import { getArticles } from "./utils";
import FullArticle from "../src/components/FullArticle";
import CommentsList from "./components/CommentsList";

function App() {
  const [allArticles, setAllArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

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

  if (isError) {
    return <p className="error">Error</p>;
  } else if (isLoading) {
    return <p className="loading">Loading...</p>;
  } else
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={<ArticlesList allArticles={allArticles} />}
          />
          <Route path="/articles/:article_id" element={<FullArticle />} />
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
