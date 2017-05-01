import Vue from 'vue'
import Router from 'vue-router'
import MyContent from '../components/mycontent.vue'
import Member from '../components/mymember.vue'
import MyError from '../components/error.vue'
import Login from '../components/mylogin.vue'
import MemberLevel from '../components/myemberlevel.vue'
import AdminList from '../components/myadminlist.vue'
import AdminGroup from '../components/myadmingroup.vue'
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
      path: '/Member',
      component: Member,
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
