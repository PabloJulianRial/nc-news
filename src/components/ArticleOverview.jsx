const ArticleOverview = ({title, author}) =>{

    console.log({title})

    return(
        <section className="article-overview">
           <p>{title}</p>
           <p>{author}</p>
           
        </section>
    )
}

export default ArticleOverview