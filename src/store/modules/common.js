const actions = {
  updateCommonContent ({ dispatch, commit }, payload) {
    dispatch('header/updateHeader', payload.header || null, { root: true })
    dispatch('footer/updateFooter', payload.footer || null, { root: true })
  }
}

export default {
  actions,
  namespaced: true
}
