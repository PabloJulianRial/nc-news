import { Link } from "react-router-dom";

export function ArticleDetails({ article }) {

  return (
    <section className="article-details">
      <h3>{article.title}</h3>
      <p>{article.body}</p>
      <img src={article.article_img_url} alt="Article image" />
      <p>Votes: {article.votes}</p>
      <p>Author: {article.author}</p>
      <p>Topic: {article.topic}</p>
      <Link className="comments-link" to={`/articles/${article.article_id}/comments`}>
        All comments
      </Link>
    </section>
  );
}
