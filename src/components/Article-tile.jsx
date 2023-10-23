function ArticleTile ({article}) {
    return <div className="article-item">
        <p>{article.title}</p>
        <p>by {article.author} </p>
        <p>{new Date(article.created_at).toString()} </p>
        <p><img className="article-img" src={article.article_img_url} alt="image from the article" /></p>
    </div>
}

export default ArticleTile