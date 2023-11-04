import { createStore } from "vuex";

const store = createStore({
    state: {
        List: []
    },
    getters: {
        updList(state, newList) {
            state.List = newList
        }
    },
    mutations: {},
    actions: {},
})

export default store