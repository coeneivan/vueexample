import Vue from 'vue'
import Vuex from 'vuex'
import types from './types'
import contactStore from './contactstore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: [
    contactStore
  ]
})
