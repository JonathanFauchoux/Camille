import { cloneDeep } from 'lodash'

const state = {
  links: {
    items: []
  },
  contact: {},
  copyright: {}
}

const getters = {
  linksItems: state => state.links.items,
  contact: state => state.contact,
  copyright: state => state.copyright
}

const mutations = {
  updateLinks: (state, object) => {
    state.links = cloneDeep(object)
  },
  updateContact: (state, object) => {
    state.contact = cloneDeep(object)
  },
  updateCopyright: (state, object) => {
    state.copyright = cloneDeep(object)
  }
}

const actions = {
  updateFooter: ({ commit }, payload) => {
    commit('updateLinks', payload && payload.links ? payload.links : { items: [] })
    commit('updateContact', payload && payload.contact ? payload.contact : { contact: {} })
    commit('updateCopyright', payload && payload.copyright ? payload.copyright : { copyright: {} })
  }
}

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true
}
