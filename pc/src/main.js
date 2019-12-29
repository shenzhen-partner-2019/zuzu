import Vue from 'vue'
import App from './App.vue'
import router from './route/index'
import store from './store/index'
// import axios from 'axios'


// 引入全局样式
import './style/reset.css'
import './style/common.scss'
import './style/index.scss'
import './font.css'

Vue.config.productionTip = false

// Vue.prototype.$axios = axios;
// axios.defaults.withCredentials = true;

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
