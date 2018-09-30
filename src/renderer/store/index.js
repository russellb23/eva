import Vue from 'vue'
import Vuex from 'vuex'

// import state from './modules/Counter'
import GameStore from './modules/GameStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    GameStore
  },
  strict: process.env.NODE_ENV !== 'production'
})
