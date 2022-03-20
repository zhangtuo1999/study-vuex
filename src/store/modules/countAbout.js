export default {
    namespaced:true,
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
}