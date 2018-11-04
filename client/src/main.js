import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import axios from './api/axios.js'
import url from './api/url.js'
import api from './api/api.js'
import {baseUrl} from './api/config.js'
import dateFormat from 'date-fns/format'
import './assets/style.less'
import './assets/styles/index.less'

Vue.config.productionTip = false

import custom from '@/components/custom'
Vue.use(custom)

import forumCtrl from '@/components/forum/controller'
Vue.component('forum-controller',forumCtrl)


Vue.prototype.$axios = axios;
Vue.prototype.$url = url
Vue.prototype.$api = api
Vue.prototype.$baseUrl = baseUrl
Vue.prototype.$dateFormat = dateFormat

// 过滤器
Vue.filter("date", (v, fmt) => {
  fmt = fmt || 'YYYY-MM-DD HH:mm:ss'
  return dateFormat(v, fmt)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')