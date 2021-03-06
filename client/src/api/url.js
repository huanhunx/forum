export default {
    v1: {
        post: {
            login: '/api/v1/account/login',
            register: '/api/v1/account/register',
            publish: '/api/v1/article/publish',
            uploadImg: '/api/v1/upload/img'
        },
        get: {
            articleList: '/api/v1/article/getlist',
            article: '/api/v1/article/get',
            articleStatic: '/api/v1/static/article',
            ustatus: '/api/v1/account/ustatus'
        }
    }
}