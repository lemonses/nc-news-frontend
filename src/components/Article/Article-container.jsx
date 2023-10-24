import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getArticle } from "../../api/api"
import Article from "./Article"

function ArticleContainer () {
    const[article,setArticle] = useState()
    const[isLoading,setIsloading] = useState(true)
    const {article_id} = useParams()

    useEffect(()=>{
        getArticle(article_id).then((article)=>{
            setArticle(article)
            setIsloading(false)
        })
    },[article_id])

    if(isLoading) return <p>Loading ...</p>

    return <Article article={article}/>
}

export default ArticleContainer