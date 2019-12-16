import Vue from 'vue'
import App from './App.vue'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './css/index.css'
import axios from 'axios'

Vue.config.productionTip = false
axios.defaults.baseURL = 'http://localhost:3000'// 设置共享的方法
Vue.prototype.$axios = axios //所有的实例都直接共享拥有了 这个方法
new Vue({
  render: h => h(App),
}).$mount('#app')
