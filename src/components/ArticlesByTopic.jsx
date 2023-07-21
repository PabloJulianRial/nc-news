import { selectArticlesByTopic } from "../utils";
import { Link } from "react-router-dom";
import ArticlePreview from "./ArticlePreview";
import { useParams } from "react-router-dom";

const ArticlesByTopic = ({ allArticles }) => {
  const { topic } = useParams();
  return selectArticlesByTopic(allArticles, topic).map((article) => {
    return (
      <Link key={article.article_id} to={`/articles/${article.article_id}`}>
        <ArticlePreview key={article.article_id} article={article} />
      </Link>
    );
  });
};

export default ArticlesByTopic;
