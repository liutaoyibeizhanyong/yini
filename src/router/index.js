import Vue from 'vue'
import VueRouter from 'vue-router'
import {isLogin} from '../utils/anth'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/Open'
  },
  {
    path: '/open',
    name: 'Open',
    component: () => import('../views/open/Open')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/Login')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/home/Home')
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import('../views/category/Category')
  },
  {
    path: '/cart',
    name: 'Cart',
    meta:{
      needLogin:true
    },
    component: () => import('../views/cart/Cart')
  },
  {
    path: '/profile',
    name: 'Profile',
    meta:{
      needLogin:true
    },
    component: () => import('../views/profile/Profile')
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('../views/detail/Detail')
  }
]
const router = new VueRouter({
  routes
})
router.beforeEach((to,from,next)=>{
  if(to.meta.needLogin){
    if(isLogin()){
      next()
    }
    else{
      next({
        name:"Login"
      })
    }
  }else{
    next()
  }
})
export default router