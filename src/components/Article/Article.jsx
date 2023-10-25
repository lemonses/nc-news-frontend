import Comments from "../Comments/Comments-container"
import Voter from "../Voter"

function Article ({article:{title,author,created_at,topic,votes,body,article_img_url,article_id}}) {
   

    return <div className="article-container">
        <div id="article">
            <h2>{title}</h2>
            <h3><>{author}</><> {new Date(created_at).toString().slice(0,-31)}</></h3>
            <p>{topic}</p>
            <Voter votes={votes} article_id={article_id}/>
            <img className="article-img" src={article_img_url}/>
            <p>{body}</p>
        </div>
        <button id="add-comment">add comment</button>
        <Comments article_id={article_id}/>
    </div>
}

export default Article