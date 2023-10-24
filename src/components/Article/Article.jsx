import Comments from "../Comments/Comments-container"

function Article ({article}) {
    return <div className="article-container">
        <div id="article">
            <h2>{article.title}</h2>
            <h3><>{article.author}</><> {new Date(article.created_at).toString().slice(0,-31)}</></h3>
            <p>topic:{article.topic} votes:{article.votes}</p>
            <p>{article.body}</p>
            <img className="article-img" src={article.article_img_url}/>
        </div>
        <button id="add-comment">add comment</button>
        <Comments article_id={article.article_id}/>
    </div>
}

export default Article