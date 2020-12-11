import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/bootstrap-vue'
import './plugins/fontawesome.vue'
import store from './store/configure.vuex'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  store,
}).$mount('#app')
