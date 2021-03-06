import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

import User from "./User"
import House from "./house"

export default new Vuex.Store({
  state: {
    searchText: ''
  },
  mutations: {
    updateSearchText(state, text) {
      console.log('updateSearchText', text)
      state.searchText = text
    }
  },
  modules:{
    User,
    House
  }
})
