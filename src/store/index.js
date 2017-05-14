import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import state from './state'
import getters from './getters'
import adminlist from './modules/adminlist'
import login from './modules/adminLogin'
import customer from './modules/customer'
import sale from './modules/sale'
import salereturn from './modules/salereturn'
import menuitem from './modules/menuitem'
import admingroup from './modules/admingroup'
import company from './modules/company'
import employee from './modules/employee'
import custqty from './modules/custqty'
import supplier from './modules/Supplier'
import header from './modules/header'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    login,
    company,
    employee,
    sale,
    salereturn,
    custqty,
    supplier,
    header,
    menuitem,
    adminlist,
    customer,
    admingroup
  },
  mutations,
  actions,
  state,
  getters
})
