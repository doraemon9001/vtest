const LoadingComponent = require('./Loading.vue')
const PaginationComponent = require('./pagination.vue')
const ext = {
  install: function (Vue) {
    Vue.component('loading', LoadingComponent)
    Vue.component('pagination', PaginationComponent)
  }
}
module.exports = ext
