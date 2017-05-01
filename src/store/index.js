import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import state from './state'
import getters from './getters'
import adminlist from './modules/adminlist'
import login from './modules/adminLogin'
import member from './modules/member'
import memberlevel from './modules/memberlevel'
import menuitem from './modules/menuitem'
import admingroup from './modules/admingroup'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    login,
    menuitem,
    adminlist,
    member,
    memberlevel,
    admingroup
  },
  mutations,
  actions,
  state,
  getters
})