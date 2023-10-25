import { useEffect, useState } from "react"
import ArticlesTile from "./Articles-tile"
import { Link } from "react-router-dom"
import { getArticles } from "../../api/api"

function ArticlesContainer () {
    const [articles,setArticles] = useState([])
    const [isLoading, setIsloading] = useState(true)
    
    useEffect(()=>{
            getArticles().then((result)=>{
            setIsloading(false)    
            setArticles(result)
        })  
    },[])
    
    if(isLoading) return <p>Loading...</p>

    return <ul id="articles">{articles.map((article)=>{
        return <li key ={article.title}><Link to={`/article/${article.article_id}`}> <ArticlesTile article={article}/> </Link> </li>
    })}</ul>
}

export default ArticlesContainer