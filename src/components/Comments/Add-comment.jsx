import { useState } from "react"
import { useParams} from "react-router"
import { postComment } from "../../api/api"
import { useNavigate, Link } from "react-router-dom"

function AddComment () {
    const {article_id} = useParams()
    const navigate = useNavigate()
    const [currComment, setCurrComment] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    function updateComment(e) {
        e.preventDefault()
        setCurrComment(e.target.value)
    }

    function submitComment() {
        if(currComment === ''){
            setIsError("error")
        }else{
            setIsLoading(true)
            postComment(currComment,article_id).then(()=>{
                navigate(`/article/${article_id}`)
            })
            .catch((err)=>{
                setIsLoading(false)
                setIsError(err)
            })
        }
    }

    function checkError() {
        if(isError === "error"){
            return <p>Your comment must contain at least one character</p>
        }else if(isError){
            return <p>Something has gone wrong please try again</p>
        }
    }

    if(isLoading) return <p>Your comment is being posted</p>

    return <div>
        <input type="text" onChange={updateComment} value={currComment} placeholder="Add a comment"/>
        <button onClick={submitComment}>Add Comment</button>
        <Link to={`/article/${article_id}`}>
            <button>Cancel</button>
        </Link>
        {checkError()}
    </div>
}

export default AddComment