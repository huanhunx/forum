const state = {
    show: false,
    index: '/manage/index'
}

const mutations = {
    display(state, status) {
        if (status) {
            state.show = true
        } else {
            state.show = false
        }
    },
    updateIndex(state, value) {
        state.index = value
    }
}

const getters = {
    show: state => state.show,
    index: state => state.index
}

const actions = {
    display({
        commit
    }, status) {
        commit('display', status)
    },
    updateIndex({
        commit
    }, value) {
        commit('updateIndex', value)
    }

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}