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
        },
        DELETE_FROM_LIST(state, id) {
            const index = state.List.findIndex(mission => mission.id === id)
            if (index !== -1) {
                state.List.splice(index, 1)
            }
        }
    },
})

export default store