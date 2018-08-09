// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
import axios from 'axios'
import {store} from './store/store.js'
import animate from 'animate.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.prototype.$axios = axios
Vue.use(animate)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
