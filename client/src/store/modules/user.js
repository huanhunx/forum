const state = {
    info: {
        _id: '',
        nickname: ''
    }
}

const mutations = {
    update(state, info) {
        state.info = info
    }
}

const getters = {
    info: state => state.info
}

const actions = {
    update({ commit }, info) {
        commit('update', info)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}