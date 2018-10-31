const state = {
    show:false
}

const mutations = {
    display(state, status) {
        if (status) {
            state.show=true
        } else {
            state.show=false
        }
    }
}

const getters = {
	show:state=>state.show
}

const actions = {
    display({ commit }, status) {
        commit('display', status)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}