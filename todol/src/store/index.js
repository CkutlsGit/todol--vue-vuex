import { createStore } from "vuex";

const store = createStore({
    state: {
        List: []
    },
    getters: {
    },
    mutations: {
        updList(state, newMission) {
            state.List.push(newMission)
        }
    },
    actions: {},
})

export default store