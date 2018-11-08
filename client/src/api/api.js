import axios from './axios.js'
import url from './url.js'
export default {
    login(data) {
        return axios.post(url.v1.post.login, data)
    },
    register() {
        return axios.post(url.v1.post.register, {})
    },
    publish(data) {
        return axios.post(url.v1.post.publish, data)
    },
    getArticleList(data) {
        return axios.get(url.v1.get.articleList, data)
    },
    getArticle(id) {
        return axios.get(url.v1.get.article, {
            id
        })
    },
    getArticleStatic() {
        return axios.get(url.v1.get.articleStatic, {})
    },
    ustatus() {
        return axios.get(url.v1.get.ustatus, {})
    }
}