import Vue from 'vue'
import Vuex from 'vuex'

import breakpoints from './modules/breakpoints'
import common from './modules/common'
import header from './modules/header'
import footer from './modules/footer'
import page from './modules/page'
import home from './modules/home'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    breakpoints,
    common,
    header,
    footer,
    home,
    page
  },
  strict: true
})
