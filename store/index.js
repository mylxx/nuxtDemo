import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
// import getters from './modules/getters'

Vue.use(Vuex)
const store = () => new Vuex.Store({
    modules: {
        app,
        user
    },
    // getters,
    actions: {
        // nuxtServerInit({ commit }, { req }) {
        //     if (req.session.user) {
        //         commit('user', req.session.user)
        //     }
        // }
    }
})

export default store
