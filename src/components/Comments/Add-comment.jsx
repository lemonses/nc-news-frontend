import { useContext, useState } from "react"
import { useParams} from "react-router"
import { postComment } from "../../api/api"
import { useNavigate, Link } from "react-router-dom"
import { UserContext } from "../../contexts/User"

function AddComment () {
    const {article_id} = useParams()
    const navigate = useNavigate()
    const [currComment, setCurrComment] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const {user} = useContext(UserContext)

    function updateComment(e) {
        e.preventDefault()
        setCurrComment(e.target.value)
    }

    function submitComment() {
        if(currComment.trim() === ''){
            setIsError("error")
            setCurrComment('')
        }else{
            setIsLoading(true)
            postComment(currComment.trim(),article_id,user).then(()=>{
                navigate(`/article/${article_id}`)
            })
            .catch((err)=>{
                setIsLoading(false)
                if(err.response.data.message === "User not found"){
                    setIsError(err.response.data.message)
                }else{
                    setIsError(err)
                }
                
            })
        }
    }

    function checkError() {
        if(isError === "error"){
            return <p>Your comment must contain at least one character</p>
        }else if(isError === "User not found"){
            return <p>You must be logged in to post a comment</p>
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