// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import routes from "@/routes";
import store from "./store";
//
// import "bootstrap";
// import "bootstap/dist/css/bootstrap.min.css"
Vue.use(VueRouter)
const router = new VueRouter({
  routes: routes,
  mode: 'history'
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  vuetify
})
