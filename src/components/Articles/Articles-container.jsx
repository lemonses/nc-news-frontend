import { useEffect, useState } from "react"
import ArticlesTile from "./Articles-tile"
import { Link, useSearchParams } from "react-router-dom"
import { getArticles, getTopics } from "../../api/api"

function ArticlesContainer () {
    const [articles,setArticles] = useState([])
    const [isLoading, setIsloading] = useState(true)
    const [sortBy, setSortBy] = useSearchParams()
    const [topics, setTopics] = useState([])

    useEffect(()=>{
        getArticles(sortBy.get('topic')).then((result)=>{
            setArticles(result)
            return getTopics()            
        }).then((result)=>{
            setTopics(result)
            setIsloading(false)
        })
    },[sortBy])

    function updateParams(e) {
        if(e.target.className === "unpressed"){
            const list = Array.from(e.target.closest('ul').getElementsByTagName('button'))
        list.forEach(button => {
            button.className = "unpressed"
        });
        e.target.className = "pressed"

        const sortQuery = `topic=${e.target.innerText}`
        setSortBy(sortQuery)
        }else{
            e.target.className = "unpressed"
            setSortBy('')
        }
    }
    
    if(isLoading) return <p>Loading...</p>

    return <div>
        <ul id="topics">{topics.map((topic)=>{
            return <button className="unpressed" onClick={updateParams} key={topic.slug}>{topic.slug}</button>
        })}</ul>
        <ul id="articles">{articles.map((article)=>{
            return <li key ={article.title}><Link to={`/article/${article.article_id}`}> <ArticlesTile article={article}/> </Link> </li>
        })}</ul>
    </div>
}

export default ArticlesContainer