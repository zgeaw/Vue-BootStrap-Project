import Vue from 'vue'
import Router from 'vue-router'
import PageTransition from '../PageTransition'
import Home from '../components/Index'
import Login from '../components/auth/Index'
import ForgotPassword from '../components/auth/ForgotPassword'
import Register from '../components/auth/Register'
import About from '../components/about/Index'
import News from '../components/news/Index'
import NewsDetails from '../components/news/Details'
import Product from '../components/product/Index'
import ProductDetails from '../components/product/Details'

import Personal from '../components/personal/Index'
import MyProduct from '../components/personal/MyProduct'
import Feedback from '../components/personal/Feedback'
import RealName from '../components/personal/RealName'
import Assets from '../components/personal/Assets'
import Professional from '../components/personal/Professional'
import RiskEvaluation from '../components/personal/RiskEvaluation'

import Contact from '../components/contact/Index'

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
    path: '/auth/forgotPassword',
    name: 'ForgotPassword',
    component: ForgotPassword
  },
  {
    path: '/about/:type',
    name: 'About',
    component: About
  },
  {
    path: '/news/:type',
    name: 'News',
    component: News
  },
  {
    path: '/newsDetails/:type/:id',
    name: 'NewsDetails',
    component: NewsDetails
  },
  {
    path: '/product/:type',
    name: 'Product',
    component: Product
  },
  {
    path: '/productDetails/:id',
    name: 'ProductDetails',
    component: ProductDetails
  },
  {
    path: '/personal',
    name: 'Personal',
    component: Personal
  },
  {
    path: '/myProduct/:type',
    name: 'MyProduct',
    component: MyProduct
  },
  {
    path: '/feedback',
    name: 'Feedback',
    component: Feedback
  },
  {
    path: '/personal/realName',
    name: 'RealName',
    component: RealName
  },
  {
    path: '/personal/assets',
    name: 'Assets',
    component: Assets
  },
  {
    path: '/personal/professional',
    name: 'Professional',
    component: Professional
  },
  {
    path: '/personal/riskEvaluation',
    name: 'RiskEvaluation',
    component: RiskEvaluation
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]
const router = new Router({
  //mode: 'history',
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
