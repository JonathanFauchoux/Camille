import { cloneDeep } from 'lodash'

const state = {
  social: {
    items: []
  },
  topbar: {
    items: []
  },
  main: {
    items: []
  },
  active: true
}

const getters = {
  socialItems: state => state.social.items,
  topbarItems: state => state.topbar.items,
  mainItems: state => state.main.items
}

const mutations = {
  updateSocial: (state, object) => {
    state.social = cloneDeep(object)
  },
  updateTopbar: (state, object) => {
    state.topbar = cloneDeep(object)
  },
  updateMain: (state, object) => {
    state.main = cloneDeep(object)
  },
  updateActive: (state, boolean) => {
    state.active = boolean
  }
}

const actions = {
  updateHeader: ({ commit }, payload) => {
    commit('updateSocial', payload && payload.social ? payload.social : { items: [] })
    commit('updateTopbar', payload && payload.topbar ? payload.topbar : { items: [] })
    commit('updateMain', payload && payload.main ? payload.main : { items: [] })
  }
}

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true
}
