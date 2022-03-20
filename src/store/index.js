import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 0
    },
    getters: {
        bigCount(state) {
            return state.count * 10
        },
        largeCount(state, getters) {
            return state.count + getters.bigCount
        }
    },
    mutations: {
        HANDLE_ADD(state, num) {
            state.count += num
        }
    },
    actions: {
        handleAdd(context, num) {
            context.commit('HANDLE_ADD', num)
        }
    }
})