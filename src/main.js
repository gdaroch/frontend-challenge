import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'
import ErrorMessage from './components/ErrorMessage.vue'
import UserList from './components/UserList.vue'
import NewUser from './components/NewUser.vue'

Vue.use(BootstrapVue)
Vue.config.productionTip = false
Vue.component('error-message', ErrorMessage)
Vue.component('user-list', UserList)
Vue.component('new-user', NewUser)

new Vue({
  render: h => h(App),
}).$mount('#app')
