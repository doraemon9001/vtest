import Vue from 'vue'
import Router from 'vue-router'
import MyContent from '../components/mycontent.vue'
import Customer from '../components/customer.vue'
import MyError from '../components/error.vue'
import Login from '../components/mylogin.vue'
import MemberLevel from '../components/myemberlevel.vue'
import AdminList from '../components/myadminlist.vue'
import AdminGroup from '../components/myadmingroup.vue'
import Company from '../components/company.vue'
import Employee from '../components/employee.vue'
import Sale from '../components/sale.vue'
import SaleReturn from '../components/salereturn.vue'
import CustQty from '../components/custqty.vue'
import Supplier from '../components/Supplier.vue'
import Request from '../components/request.vue'
import Rece from '../components/rece.vue'
import Pay from '../components/pay.vue'
import state from '../store/state'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  scrollBehavior: () => ({y: 0}),
  routes: [
    {
      path: '/index',
      component: MyContent,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Login',
      component: Login
    },
    {
      path: '/customer',
      component: Customer,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Sale',
      component: Sale,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/SaleReturn',
      component: SaleReturn,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Request',
      component: Request,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Rece',
      component: Rece,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Pay',
      component: Pay,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Supplier',
      component: Supplier,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/CustQty',
      component: CustQty,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/employee',
      component: Employee,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/company',
      component: Company,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/MemberLevel',
      component: MemberLevel,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/AdminList',
      component: AdminList,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/admingroup',
      component: AdminGroup,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '*',
      component: MyError,
      meta: {
        requiresAuth: true
      }
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!state.login.auth) {
      alert('請先登入')
      next({
        path: '/Login'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
