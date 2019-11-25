import Vue from 'vue'
import App from './App.vue'
import router from './route/index'
import store from './store/index'

// 引入全局样式
import './style/reset.css'
import './style/common.scss'
import './style/index.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
