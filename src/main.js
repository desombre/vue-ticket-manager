import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import store from './store'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTasks } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import vuetify from './plugins/vuetify';


library.add(faTasks)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
