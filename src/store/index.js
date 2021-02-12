import { createStore } from 'vuex'
import { faqCategories } from '../data/db.json'

export default createStore({
  state: {
    data: []
  },
  mutations: {
    SET_DATA(state, payload) {
      state.data = payload
    }
  },
  actions: {
    fetchData(context) {
      const data = faqCategories
      context.commit('SET_DATA', data)
    }
  },
  getters: {
    $getData(state) {
      return state.data
    }
  }
})
