import Vue from 'vue'
import App from './App.vue'
import ErrorMessage from './components/ErrorMessage.vue'

Vue.config.productionTip = false
Vue.component('error-message', ErrorMessage)

new Vue({
  render: h => h(App),
}).$mount('#app')
