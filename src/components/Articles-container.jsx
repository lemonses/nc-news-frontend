import { useEffect, useState } from "react"
import ArticleTile from "./Article-tile"
import axios from "axios"

function ArticlesContainer () {
    const [articles,setArticles] = useState([])
    const [isLoading, setIsloading] = useState(true)
    
    useEffect(()=>{
            axios.get('https://nc-news-v5ne.onrender.com/api/articles').then((result)=>{
            setIsloading(false)    
            setArticles(result.data.articles)
        })  
    },[])
    
    const articlesArr = articles.map((article)=>{
        return <li key ={article.title}><ArticleTile article={article}/></li>
    })

    if(isLoading) return <p>Loading...</p>

    return <div>
        <ul id="articles">{articlesArr}</ul>
    </div>
}

export default ArticlesContainer