import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import feather from 'vue-icon'
// import Slick from 'vue-slick'	
import EasySlider from 'vue-easy-slider'
 	
Vue.use(BootstrapVue)
Vue.use(feather, 'v-icon')
Vue.use(EasySlider)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'



Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')


