import { createStore } from "vuex";

const store = createStore({
    state: {
        List: []
    },
    getters: {
        getList(state) {
            return state.List
        }
    },
    mutations: {
        UPD_LIST(state, newMission) {
            state.List.push(newMission)
        }
    },
    actions: {},
})

export default store