import { useEffect, useState } from "react"
import { getComments } from "../../api/api"
import CommentTile from "./Comments-tile"

function Comments ({article_id}) {
    const[comments, setComments] = useState([])
    const[isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        getComments(article_id).then((comments)=>{
            setComments(comments)
            setIsLoading(false)
        })
    },[article_id])

    const commentsArr = comments.map((comment)=>{
        return <li key={comment.comment_id} className="comment"><CommentTile comment={comment}/></li>
    })
    
    if(isLoading) return <p>Loading...</p>

    return <div className="comment-container">
        <ul>{commentsArr}</ul>
    </div>
}

export default Comments