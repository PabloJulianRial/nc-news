import { useState } from "react";
import ArticleOverview from "./ArticleOverview";

const ArticlesList = ({ allTopics, allArticles }) => {
  const [currentTopic, setCurrentTopic] = useState("none");
  return (
    <div className="articles-list">
      <label htmlFor="topics-menu">Search by topic:</label>
      <select
        onChange={(e) => {
          setCurrentTopic(e.target.value);
        }}
        name="topics-menu"
        id="topics-menu"
      >
        <option value="none"></option>
        {allTopics.map(( topic ) => {
          return (
            <option key={topic} value={topic}>
              {topic}
            </option>
          );
        })}
      </select>
      {allArticles.map((article) => {
        return (
          <article key={article.title} className="article-item">
            <p>Title: {article.title}</p>
            <p>Topic: {article.topic}</p>
            <p>Author: {article.author}</p>
            <p>Posted on: {article.created_at.slice(0, 10)}</p>
          </article>
        );
      })}
    </div>
  );
};

export default ArticlesList;
