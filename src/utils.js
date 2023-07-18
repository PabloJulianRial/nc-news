import axios from "axios";


const articlesApi = axios.create({
    baseURL: 'https://nc-news-api-iv8w.onrender.com/api'
})

export function getArticles() {
    return articlesApi.get('/articles')
    .then(({data}) =>{
        return data.articles
    })
}