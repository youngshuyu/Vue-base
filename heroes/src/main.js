import Vue from 'vue'
import App from './App.vue'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './style/index.css'
import router from './router'
import axios from 'axios'
axios.defaults.baseURL = "http://localhost:3000"

Vue.prototype.$axios = axios //统一导入axios

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
