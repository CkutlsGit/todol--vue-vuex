import { createStore } from "vuex";

const store = createStore({
    state: {
        List: []
    },
    getters: {
    },
    mutations: {
        updList(state, newList) {
            state.List = newList
        }
    },
    actions: {},
})

export default store