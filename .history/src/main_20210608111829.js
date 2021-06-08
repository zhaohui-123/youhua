// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
import router from './router'
import { App, TabsView } from '@mediinfo-ued/medi-ui'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // components: { App },
  render() {
    const isLogin = localStorage.getItem('isLogin')
    if (isLogin == 'true') {
    return (
      <App id="app" default-layout="basic" layouts={layouts}>
        <TabsView tabs={defaultTabs} formatter={formatterTitle}></TabsView>
      </App>
    )}
    else {
      return (

        <div id="app"><Layout><router-view /></Layout></div>
      )

    }
  },
  template: '<App/>'
})
