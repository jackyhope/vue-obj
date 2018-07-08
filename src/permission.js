import router from './router'
import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css' // Progress 进度条样式
import {
  Message
} from 'element-ui'
import {
  getToken
} from '@/utils/auth' // 验权

const whiteList = [
  '/login',
  '/index',
  '/myvisit',
  '/personal-auth', '/myshare', '/task', '/account',
  '/account/withdraw',
  '/account/management',
  '/account/profit',
  '/account/withdrawrecord',
  '/testpage',
  '/share',
  '/management-password',
  '/resume/add'
] // 不重定向白名单

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (getToken()) {
    next();
    return;
    if (to.path === '/login') {
      next({
        path: '/'
      })
    } else {
      // store.dispatch('GenerateRoutes').then(() => { // 生成可访问的路由表
      //   router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
      //   next({
      //     ...to,
      //     replace: true
      //   }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
      // })
      next();
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})
