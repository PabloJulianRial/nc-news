const ArticlePreview = ({ article }) => {
  return (
    <article key={article.title} className="article-item">
      <div className="article-line">
        {" "}
        <p className="label"> </p>
        <span>
          <h2>{article.title}</h2>
        </span>
      </div>
      <div className="article-line">
        <p className="label">An article about: </p>
        <span>{article.topic}</span>
      </div>
      <div className="article-line">
        <p className="label">Posted by </p>
        <span>{article.author}</span>
      </div>
      <div className="article-line">
        <p className="label">Posted on </p>
        <span>{article.created_at.slice(0, 10)}</span>
      </div>
      <img src={article.article_img_url} alt="Article picture" />
    </article>
  );
};

export default ArticlePreview;
