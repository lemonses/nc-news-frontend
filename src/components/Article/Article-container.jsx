import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getArticle } from "../../api/api"
import Article from "./Article"
import PageNotFound from "../Page-not-found"

function ArticleContainer () {
    const[article,setArticle] = useState()
    const[isLoading,setIsLoading] = useState(true)
    const[error, setError] = useState(false)
    const {article_id} = useParams()

    useEffect(()=>{
        getArticle(article_id)
        .then((article)=>{
            setArticle(article)
            setError(false)
            setIsLoading(false)
        })
        .catch((err)=>{
            setIsLoading(false)
            setError(err.response.data.message)
        })
    },[article_id])

    if(isLoading) return <p>Loading ...</p>
    
    if(error) return <PageNotFound error={error}/>

    return <Article article={article}/>
}

export default ArticleContainer