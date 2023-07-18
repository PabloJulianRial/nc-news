import axios from "axios";

export function getArticles() {
    return axios.get('https://nc-news-api-iv8w.onrender.com/api/articles')
    .then(({data}) =>{
        return data.articles
    })
}

export function getTopics() {
    return axios.get('https://nc-news-api-iv8w.onrender.com/api/topics')
    .then(({data}) =>{
       
        return data.topics.map((topic) =>{
            return topic.slug
        })
       
    })
}