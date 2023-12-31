import axios from 'axios'
const newsApi = axios.create({
    baseURL: 'https://nc-news-v5ne.onrender.com/api'
})

export function getArticles (topic,sort_by,order) {
    return newsApi.get('articles',{params:{topic,sort_by,order}}).then((response)=>{
        return response.data.articles
    })
}

export function getArticle (article_id) {
    return newsApi.get(`articles/${article_id}`).then((response)=>{
        return response.data.article
    })
}

export function getComments (article_id) {
    return newsApi.get(`articles/${article_id}/comments`).then((response)=>{
        return response.data.comments
    })
}

export function addVotes (vote,article_id) {
    return newsApi.patch(`articles/${article_id}`,{inc_votes:vote}).then((response)=>{console.log(response)})
}

export function postComment (comment,article_id,username) {
    return newsApi.post(`articles/${article_id}/comments`,{username,body:`${comment}`})
}

export function getTopics () {
    return newsApi.get('topics').then((response)=>{
        return response.data.topics
    })
}

export function deleteComment (comment_id) {
    return newsApi.delete(`comments/${comment_id}`)
}