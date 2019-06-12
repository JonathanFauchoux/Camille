import 'babel-polyfill'
import './polyfills/CustomEvent'
import './polyfills/NodeList'

import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import messages from '@/messages'
import VueI18n from 'vue-i18n'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false

Vue.use(VueI18n)
Vue.use(VueAwesomeSwiper)

const i18n = new VueI18n({
  locale: 'en',
  messages
})

new Vue({
  i18n,
  router,
  store,
  VueAwesomeSwiper,
  render: h => h(App)
}).$mount('#app')
