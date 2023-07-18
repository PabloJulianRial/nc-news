import { useState } from "react";
import ArticleOverview from "./ArticleOverview";
import ArticlePreview from "./Articlepreview";

const ArticlesList = ({ allArticles }) => {

  return (
    <div className="articles-list">
      
      
      {allArticles.map((article) => {
        return (
          <ArticlePreview article={article} />
        );
      })}
    </div>
  );
};

export default ArticlesList;
