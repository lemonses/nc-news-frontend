function ArticlesTile ({article}) {
    return <div className="article-item">
        <p>{article.title}</p>
        <p>by {article.author} </p>
        <p>{new Date(article.created_at).toString().slice(0,-31)} </p>
        <p>comments : {article.comment_count} votes : {article.votes}</p>
        <p><img className="articles-img" src={article.article_img_url} alt="image from the article" /></p>
    </div>
}

export default ArticlesTile