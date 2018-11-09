const state = {
    width: 0
}

const mutations = {
    updateWidth(state, val) {
        state.width = val
    }
}

const getters = {
    width: state => state.width
}

const actions = {
    updateWidth({
        commit
    }, value) {
        commit('updateWidth', value)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}