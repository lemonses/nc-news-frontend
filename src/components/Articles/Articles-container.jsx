import { useEffect, useState } from "react"
import ArticlesTile from "./Articles-tile"
import { Link, useSearchParams } from "react-router-dom"
import { getArticles, getTopics } from "../../api/api"
import PageNotFound from "../Page-not-found"

function ArticlesContainer () {
    const [articles,setArticles] = useState([])
    const [isLoading, setIsloading] = useState(true)
    const [searchParams, setSearchParams] = useSearchParams()
    const [topics, setTopics] = useState([])
    const [error, setError] = useState(false)

    useEffect(()=>{
        getArticles(searchParams.get('topic'),searchParams.get('sort_by'),searchParams.get('order'))
        .then((result)=>{
            setArticles(result)
            return getTopics()            
        }).then((result)=>{
            setTopics(result)
            setIsloading(false)
            setError(false)
        }).catch((err)=>{
            console.log(err)
            setIsloading(false)
            setError(err.response.data.message)
        })
    },[searchParams])

    function createButtonFunction(update) {
        return function (e) {
            const regex = new RegExp(`${update}=[a-z_]*`)
            if(e.target.className === 'unpressed'){
                const list = Array.from(e.target.closest('ul').getElementsByTagName('button'))
                list.forEach(button => {
                    button.className = "unpressed"
                });
                e.target.className = "pressed"
                const query = `${update}=${e.target.id}`
                setSearchParams((currentQuery)=>{
                    const queryCopy = currentQuery.toString()
                    if(currentQuery === ''){
                        return query
                    }else if(currentQuery.get(update) === null){
                        return `${query}&${currentQuery}`
                    }else{
                        return queryCopy.replace(regex,query)
                    }
                })
            }else{
                e.target.className = "unpressed"
                setSearchParams((currentQuery)=>{
                    const queryCopy = currentQuery.toString()
                    return queryCopy.replace(regex,'')
                })
            }
        }
    }

    function updateOrderParams(e){
        if(e.target.innerText === 'High to Low'){
            e.target.innerText = 'Low to High'
            const query = `order=ASC`
            setSearchParams((currentQuery)=>{
                const queryCopy = currentQuery.toString()
                if(currentQuery === ''){
                    return query
                }else if(currentQuery.get('order') === null){
                    return `${query}&${currentQuery}`
                }else{
                    return queryCopy.replace(/order=[A-Z]*/,query)
                }
            })
        }else{
            e.target.innerText = 'High to Low'
            const query = `order=DESC`
            setSearchParams((currentQuery)=>{
                const queryCopy = currentQuery.toString()
                return queryCopy.replace(/order=[A-Z]*/,query)
            })
        }
    }
    
    const updateSortByParams = createButtonFunction('sort_by')
    const updateTopicParams = createButtonFunction('topic')

    if(isLoading) return <p>Loading...</p>

    if(error) return <PageNotFound error={error}/>

    return <div>
        <div id="nav-buttons">
        <ul id="topics" className="button-group">
            <p>Filter by topic</p>
            {topics.map((topic)=>{
            return <button className="unpressed" id={topic.slug} onClick={updateTopicParams} key={topic.slug}>{topic.slug}</button>
        })}</ul>
        <ul id="sort-by" className="button-group">
            <p >Sort by</p>
            <button id="created_at" className="unpressed" onClick={updateSortByParams}>date</button>
            <button id="comment_count" className="unpressed" onClick={updateSortByParams}>comment count</button>
            <button id="votes" className="unpressed" onClick={updateSortByParams}>votes</button>
        </ul>
        <ul>
           <label htmlFor="order"><p>Order from</p> </label>
            <button id="order" onClick={updateOrderParams}>High to Low</button> 
        </ul>
        </div>
        <ul id="articles">
            {articles.map((article)=>{
            return <li key ={article.title}><Link to={`/article/${article.article_id}`}> <ArticlesTile article={article}/> </Link> </li>
        })}</ul>
    </div>
}

export default ArticlesContainer