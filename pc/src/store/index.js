import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchText: ''
  },
  mutations: {
    updateSearchText(state, text) {
      console.log('updateSearchText', text)
      state.searchText = text
    }
  }
})
