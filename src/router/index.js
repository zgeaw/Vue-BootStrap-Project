import Vue from 'vue'
import Router from 'vue-router'
import PageTransition from '../PageTransition'
import Home from '../components/Index'
import Login from '../components/auth/Index'
import Register from '../components/auth/Register'
import About from '../components/about/Index'

Vue.use(Router)

let routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/auth',
    name: 'Login',
    component: Login
  },
  {
    path: '/auth/reg/:type',
    name: 'Register',
    component: Register
  },
  {
    path: '/about/:type',
    name: 'About',
    component: About
  }
]
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: PageTransition, // 引入页面切换组件
      children: routes
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.length ===0) {
    from.name ? next({ name:from.name }) : next('/')
  } else {
    next()
  }
})

export default router
