import Vue from 'vue'
import Router from 'vue-router'
// import App from '@/App'
import Commodity from '@/pages/commodity/Commodity'
import Evaluate from '@/pages/evaluate/Evaluate'
import Business from '@/pages/business/Business'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: '/comm'
    }, {
      path: '/comm',
      name: 'Commodity',
      component: Commodity
    }, {
      path: '/eval',
      name: 'Evaluate',
      component: Evaluate
    }, {
      path: '/busi',
      name: 'Business',
      component: Business
    }
  ]
})
