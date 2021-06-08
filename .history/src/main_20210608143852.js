// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MediUI from '@mediinfo-ued/medi-ui'
import '@mediinfo-ued/medi-ui/lib/styles/index.css'

Vue.config.productionTip = false
Vue.use(MediUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
