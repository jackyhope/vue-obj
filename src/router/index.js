import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
 **/
export const constantRouterMap = [{
  path: '/',
  component: Layout,
  redirect: '/account'
},

{
  path: '/login',
  component: Layout,
  children: [{
    path: '',
    name: '登录',
    component: () =>
      import('@/views/index/index'),
    hidden: true
  }]
},
{
  path: '/404',
  component: () =>
    import('@/views/404'),
  hidden: true
},
{
  path: '/index',
  component: Layout,
  children: [{
    path: '',
    name: '首页',
    hidden: false,
    component: () =>
      import('@/views/index/index'),
    hidden: true
  }]
},
{
  path: '/404',
  component: () =>
    import('@/views/404'),
  hidden: true
},
{
  path: '/myvisit',
  component: Layout,
  children: [{
    path: '',
    name: '我的访问',
    hidden: false,
    component: () =>
      import('@/views/myVisit/index'),

  }]
},
{
  path: '/myshare',
  component: Layout,
  children: [{
    path: '',
    name: '我的共享',
    hidden: false,
    component: () =>
      import('@/views/myShare/index'),
  }]
},
{
  path: '/task',
  component: Layout,
  children: [{
    path: '',
    name: '我的任务',
    hidden: false,
    component: () =>
      import('@/views/task/index'),
  }]
},
{
  path: '/share',
  component: Layout,
  children: [{
    path: '',
    name: '共享人才信息',
    hidden: true,
    component: () =>
      import('@/views/share/index'),
  }]
},
{
  path: '/testpage',
  component: () =>
    import('@/views/test/index')
},
{
  path: '/personal-auth',
  component: Layout,
  children: [{
    path: '',
    name: '个人认证',
    hidden: false,
    component: () =>
      import('@/views/personalAuth/index'),

  }]
},
{
  path: '/management-password',
  component: Layout,
  children: [{
    path: '',
    name: '密码管理',
    hidden: false,
    component: () =>
      import('@/views/password/index'),

  }]
},
{
  path: '/account',
  component: Layout,
  children: [{
    path: '',
    name: '我的账户',
    menu: 1,
    hidden: false,
    component: () =>
      import('@/views/account/index'),
  }, {
    path: 'withdraw',
    name: '我的账户',
    hidden: true,
    component: () =>
      import('@/views/account/withdraw'),
  },
  {
    path: 'management',
    name: '现金账户管理',
    hidden: false,
    component: () =>
      import('@/views/account/management'),
  },
  {
    path: 'profit',
    name: '我的收益',
    hidden: false,
    component: () =>
      import('@/views/account/profit'),
  },
  {
    path: 'withdrawrecord',
    name: '提现记录',
    hidden: false,
    component: () =>
      import('@/views/account/withdrawRecord'),
  }
  ]
},
{
  path: '/resume',
  component: Layout,
  children: [{
    path: 'add',
    name: '添加简历',
    hidden: true,
    component: () =>
      import('@/views/resume/add'),
  }]
},
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouterMap
})

// 异步挂载的路由
// 动态需要根据权限加载的路由表
export const asyncRouterMap = []
