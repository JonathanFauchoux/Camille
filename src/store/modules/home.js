
import { cloneDeep } from 'lodash'

const state = {
  cards: []
}

const getters = {
}

const mutations = {
  updateCards: (state, array) => {
    state.cards = cloneDeep(array)
  }
}

const actions = {
  updateHomeContent: (store, payload) => {
    setTimeout(() => {
      store.commit('updateCards', payload && payload.cards ? payload.cards : { cards: [] })
    }, 2000)
  }
}

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true
}
