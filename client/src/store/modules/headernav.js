const state = {
    index: '/forum/index',
    show: false
}

const mutations = {
    change(state, val) {
        state.index = val
    },
    display(state, val) {
        state.show = val
    }
}

const getters = {
    index: state => state.index,
    show: state => state.show
}

const actions = {
    change({ commit }, val) {
        commit('change', val)
    },
    display({ commit }, val) {
        commit('display', val)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}