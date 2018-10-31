import Vue from 'vue'
import Vuex from 'vuex'
import sidebar from './modules/sidebar.js'
import user from './modules/user.js'
import headernav from './modules/headernav.js'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
    	sidebar,
    	user,
    	headernav
    }
})