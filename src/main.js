import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import contactList from './components/contactlist'
import contactListItem from './components/contactlistitem'

Vue.component('contact-list', contactList)
Vue.component('contact-list-item', contactListItem)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
