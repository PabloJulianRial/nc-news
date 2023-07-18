import ArticlePreview from "./ArticlePreview";
import { Link } from "react-router-dom";

const ArticlesList = ({ allArticles }) => {
  return (
    <div className="articles-list">
      {allArticles.map((article) => {
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
