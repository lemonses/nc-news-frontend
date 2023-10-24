import axios from 'axios'
const newsApi = axios.create({
    baseURL: 'https://nc-news-v5ne.onrender.com/'
})

export function getArticles () {
    return newsApi.get('api/articles').then((response)=>{
        return response.data.articles
    })
}

export function getArticle (article_id) {
    return newsApi.get(`api/articles/${article_id}`).then((response)=>{
        return response.data.article
    })
}

export function getComments (article_id) {
    return newsApi.get(`api/articles/${article_id}/comments`).then((response)=>{
        return response.data.comments
    })
}