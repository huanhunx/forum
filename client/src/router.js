import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index'

const home = () => import('@/views/Home')
// import home from '@/views/Home'
const login = () => import('@/views/account/login')
// import login from '@/views/account/login'
const article = () => import('@/views/forum/article')
// import article from '@/views/forum/article'
const publish = () => import('@/views/forum/publish')
// import publish from '@/views/forum/publish'
const page = () => import('@/views/forum/page')
// import page from '@/views/forum/page'
const index = () => import('@/views/home/index')
// import index from '@/views/home/index';
const adminHome = () => import('@/views/admin/home')
const adminArticle = ()=> import ('@/views/admin/article')

Vue.use(Router)

const router = new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            redirect: '/account/login'
        },
        {
            path: '/home',
            component: home,
            children: [{
                path: 'index',
                component: index,
                meta: {
                    title: '首页'
                }
            }]
        },
        {
            path: '/account',
            component: home,
            children: [{
                path: 'login',
                component: login,
                meta: {
                    title: '登陆',
                    loginCantIn: true,
                    header: false
                }
            }]
        },
        {
            path: '/forum',
            component: home,
            children: [{
                path: 'article',
                component: article,
                meta: {
                    title: "文章",
                }
            }, {
                path: 'new',
                component: publish,
                meta: {
                    title: '新文章',
                }
            }, {
                path: 'page/:id',
                component: page,
                meta: {
                    title: "文章详情",
                },
            }]
        },
        {
            path: '/manage',
            component: home,
            children: [{
                path: 'index',
                component: adminHome,
                meta: {
                    title: '管理后台'
                }
            },{
                path:'article/index',
                component:adminArticle,
                meta: {
                    title: '文章管理'
                }
            }]
        }
    ]
})

router.beforeEach((to, from, next) => {
    let title;
    const meta = to.meta;
    if (to.meta && to.meta.title) {
        title = to.meta.title
    } else {
        title = "论坛"
    }
    document.title = title
    next()
})

router.afterEach((to, from) => {
    const meta = to.meta || {}
    meta.header = meta.header === false ? false : true
    store.commit('headernav/change', to.path)
    const headershow = meta.header
    store.commit('headernav/display', headershow);
    if (to.path.indexOf('/manage/') !== -1) {
        store.commit('sidebar/display', true)
        store.commit('sidebar/updateIndex', to.path)
    }else{
        store.commit('sidebar/display', false)
    }
})

export default router