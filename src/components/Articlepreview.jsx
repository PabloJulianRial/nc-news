const ArticlePreview = ({article}) =>{

    return(
        <article key={article.title} className="article-item">
        <p>Title: {article.title}</p>
        <p>Topic: {article.topic}</p>
        <p>Author: {article.author}</p>
        <p>Posted on: {article.created_at.slice(0, 10)}</p>
        <img src={article.article_img_url} alt="" />
        
      </article>
    )
}

export default ArticlePreview