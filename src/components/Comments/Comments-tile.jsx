function CommentTile({comment:{body,author,created_at,votes}}) {
    return <div className="comments-tile">
        <p>{author}</p>
        <p>{new Date(created_at).toString().slice(0,-31)}</p>
        <p>{body}</p>
        <p>{votes}</p>
    </div>
}

export default CommentTile