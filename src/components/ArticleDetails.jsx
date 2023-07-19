import { Link } from "react-router-dom";

export function ArticleDetails({ article }) {
  return (
    <section className="article-details">
      <h3>{article.title}</h3>
      <p>{article.body}</p>
      <img src={article.article_img_url} alt="Article image" />
      <div className="article-line"><p className="label">Votes </p><span>{article.votes}</span></div>
      <div className="article-line"><p className="label">Author </p><span>{article.author}</span></div>
      <div className="article-line"><p className="label">Topic </p><span>{article.topic}</span></div>
      
      <Link
        className="comments-link"
        to={`/articles/${article.article_id}/comments`}
      >
        All comments
      </Link>
    </section>
  );
}
