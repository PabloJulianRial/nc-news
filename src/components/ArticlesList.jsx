import ArticlePreview from "./ArticlePreview";
import { Link } from "react-router-dom";
import { useState } from "react";
import { selectArticlesByTopic } from "../utils";
import ArticlesByTopic from "./ArticlesByTopic";

const ArticlesList = ({ allArticles, allTopics }) => {
  const [currentTopic, setCurrentTopic] = useState("none");
  return (
    <div className="articles-list">
      {selectArticlesByTopic(allArticles, currentTopic).map((article) => {
        return (
          <Link key={article.article_id} to={`/articles/${article.article_id}`}>
            <ArticlePreview key={article.article_id} article={article} />
          </Link>
        );
      })}
    </div>
  );
};

export default ArticlesList;
