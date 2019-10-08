/* 静态页面路由 */
const staticRouter = [
  {
    path: '/',
    redirect: '/index'
  }, {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/AppLogin2')
  }, {
    path: '/register',
    name: 'register',
    component: () => import('@/views/login/AppRegister2')
  }, {
    path: '/',
    /* 指示是个菜单功能 */
    menu: true,
    name: 'layout',
    component: () => import('@/views/layout/TheLayout'),
    children: [
      {
        path: '/index',
        name: 'index',
        title: '首页',
        icon: 'el-icon-s-home',
        component: () => import('@/views/pages/PageHome')
      }, {
        path: '/monitor',
        name: '监测信息',
        title: '监测信息',
        icon: 'el-icon-s-home',
        component: () => import('@/views/pages/PageHome'),
        children: [
          {
            path: '/monitor/rt',
            name: '实时监测',
            title: '实时监测',
            component: () => import('@/views/layout/TheLayoutEmpty')
          }, {
            path: '/monitor/map',
            name: '地图信息',
            title: '地图信息',
            component: () => import('@/views/layout/TheLayoutEmpty')
          }
        ]
      }, {
        path: '/calcused',
        name: '用量统计',
        title: '用量统计',
        icon: 'el-icon-s-home',
        component: () => import('@/views/layout/TheLayoutEmpty'),
        children: [
          {
            path: '/calcused/day',
            name: '日用量',
            title: '日用量',
            component: () => import('@/views/layout/TheLayoutEmpty')
          }, {
            path: '/calcused/month',
            name: '月用量',
            title: '月用量',
            component: () => import('@/views/layout/TheLayoutEmpty')
          }, {
            path: '/calcused/hour',
            name: '时段用量',
            title: '时段用量',
            component: () => import('@/views/layout/TheLayoutEmpty')
          }
        ]
      }, {
        path: '/poweranaly',
        name: '压力分析',
        title: '压力分析',
        icon: 'el-icon-s-home',
        component: () => import('@/views/pages/PageHome'),
        children: [
          {
            path: '/poweranaly/day',
            name: '日压力',
            title: '日压力',
            component: () => import('@/views/layout/TheLayoutEmpty')
          }, {
            path: '/poweranaly/month',
            name: '月压力',
            title: '月压力',
            component: () => import('@/views/layout/TheLayoutEmpty')
          }
        ]
      }, {
        path: '/queryinfo',
        name: '信息查询',
        title: '信息查询',
        icon: 'el-icon-s-home',
        component: () => import('@/views/pages/PageHome'),
        children: [
          {
            path: '/queryinfo/history',
            name: '历史数据',
            title: '历史数据',
            component: () => import('@/views/layout/TheLayoutEmpty')
          }, {
            path: '/queryinfo/commlog',
            name: '通信日志',
            title: '通信日志',
            component: () => import('@/views/layout/TheLayoutEmpty')
          }, {
            path: '/queryinfo/alarm',
            name: '告警信息',
            title: '告警信息',
            component: () => import('@/views/layout/TheLayoutEmpty')
          }
        ]
      }, {
        path: '/flowanaly',
        name: '流量分析',
        title: '流量分析',
        icon: 'el-icon-s-operation',
        component: () => import('@/views/layout/TheLayoutEmpty'),
        children: [
          {
            path: '/flowanaly/meter',
            name: '配表合理性',
            title: '配表合理性',
            component: () => import('@/views/layout/TheLayoutEmpty')
          }
        ]
      }, {
        path: '/infomng',
        name: '信息管理',
        title: '信息管理',
        icon: 'el-icon-s-home',
        component: () => import('@/views/pages/PageHome'),
        children: [
          {
            path: '/infomng/day',
            name: '设备信息',
            title: '设备信息',
            component: () => import('@/views/layout/TheLayoutEmpty')
          }, {
            path: '/infomng/month',
            name: '远程配置',
            title: '远程配置',
            component: () => import('@/views/layout/TheLayoutEmpty')
          }
        ]
      }
    ]
  }, {
    path: '/error/403',
    name: 'error403',
    component: () => import('@/views/error/AppError403')
  }, {
    path: '/error/500',
    name: 'error500',
    component: () => import('@/views/error/AppError500')
  }, {
    path: '*',
    name: 'error404',
    component: () => import('@/views/error/AppError404')
  }
]

export default staticRouter