// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'es6-promise/auto'
import Vue from 'vue'
import App from './App'
import router from './router'
import extension from './components/extension'
import store from './store'
import filters from './filters'
import Lockr from 'lockr'
import axios from 'axios'
import tw from 'vee-validate/dist/locale/zh_TW'
import VeeValidate, {
  Validator
} from 'vee-validate'

Validator.addLocale(tw)
Validator.updateDictionary({
  zh_TW: {
    tw
  }
})

Vue.use(VeeValidate, {
  errorBagName: 'errors', // change if property conflicts.
  delay: 0,
  locale: 'zh_TW',
  strict: true
})
Vue.config.productionTip = false
Vue.use(extension)

Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))

axios.interceptors.request.use(function(config) {
  axios.defaults.headers['X-XSRF-Token'] = Lockr.get('antiKey')
  store.dispatch('ShowLoading')
  return config
}, function(error) {
  return Promise.reject(error)
})

axios.interceptors.response.use(function(response) {
  store.dispatch('HideLoading')
  return response
}, function(error) {
  Lockr.rm('auth')
  alert('請先登入!')
  store.state.login.auth = false
  router.push('/Login')
  return Promise.reject(error)
})
window.Lockr = Lockr
Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  created() {
    if (Lockr.get('auth')) {
      /* 判斷重新整理 */
      this.$store.state.login.auth = true
      axios.defaults.headers['X-XSRF-Token'] = Lockr.get('antiKey')
    } else {
      Lockr.rm('antiKey')
      Lockr.rm('auth')
    }
  },
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
