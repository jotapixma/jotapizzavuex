import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import feather from 'vue-icon'
import EasySlider from 'vue-easy-slider'
import VAnimateCss from 'v-animate-css'
import vWow from 'v-wow'

Vue.use(BootstrapVue)
Vue.use(feather, 'v-icon')
Vue.use(EasySlider)
Vue.use(VAnimateCss)
Vue.use(vWow)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')


