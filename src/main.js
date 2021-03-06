// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
Vue.config.productionTip = false
import vant from 'vant'
import "vant/lib/index.css"
Vue.use(vant)
import "./assets/reset.css"
import "./assets/rem.js"
import axios from 'axios'
Vue.prototype.http = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
