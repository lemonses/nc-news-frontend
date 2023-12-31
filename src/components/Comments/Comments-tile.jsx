import { useContext, useState } from "react"
import { deleteComment } from "../../api/api"
import { UserContext } from "../../contexts/User"

function CommentTile({comment:{body,author,created_at,votes,comment_id}}) {
    const [isLoading, setIsLoading] = useState(false)
    const [deleteSuccess, setDeleteSuccess] = useState(false)
    const {user} = useContext(UserContext)

    function removeComment() {
        setIsLoading(true)
        console.log(comment_id)
        deleteComment(comment_id).then(()=>{
            setIsLoading(false)
            setDeleteSuccess(true)
        })
    }

    if(isLoading) return <p>This comment is being deleted</p>
    if(deleteSuccess) return <p>This comment has been deleted</p>

    return <div className="comments-tile">
        <p>{author} {author === user ? <button className="remove-button" onClick={removeComment}>remove comment</button> : <></>}</p>
        <p>{new Date(created_at).toString().slice(0,-31)}</p>
        <p className="comment-body">{body}</p>
        <p>{votes}</p>
        <p>{comment_id}</p>
    </div>
}

export default CommentTile