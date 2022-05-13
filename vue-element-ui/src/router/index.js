import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */


/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  //是否能隐藏头部及侧边栏,添加出行数据
  {
    path: '/holidayinadd',
    component: () => import('@/views/add/holidayinadd'),
    hidden: true
  },
  {
    path: '/holidayoutadd',
    component: () => import('@/views/add/holidayoutadd'),
    hidden: true
  },
  {
    path: '/inschooladd',
    component: () => import('@/views/add/inschooladd'),
    hidden: true
  },
  {
    path: '/outschooladd',
    component: () => import('@/views/add/outschooladd'),
    hidden: true
  },
  {
    path: '/playcardadd',
    component: () => import('@/views/add/playcardadd'),
    hidden: true
  },
  {
    path: '/teacheradd',
    component: () => import('@/views/add/teacheradd'),
    hidden: true
  },
  {
    path: '/respond',
    component: () => import('@/views/add/respond'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: '校园疫情风控管理系统', icon: 'international', affix: true }
        
      }
    ]
  },
  // {
  //   path: '/documentation',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/documentation/index'),
  //       name: 'Documentation',
  //       meta: { title: '项目开发文档', icon: 'documentation', affix: true },
       
  //     }
      
  //   ]
  // },
  {
    path: '/editholidayout',
    component: Layout,
    children: [
      {
        path: 'index/:id',
        component: () => import('@/views/edit/holidayoutedit'),
        name: 'holidayoutedit',
        meta: { title: '假期离校数据修改', icon: 'documentation', affix: true },
         hidden: true
      }
      
    ]
  },
  {
    path: '/editholidayin',
    component: Layout,
    children: [
      {
        path: 'index/:id',
        component: () => import('@/views/edit/holidayinedit'),
        name: 'holidayinedit',
        meta: { title: '假期返校数据修改' },
        hidden: true
      }
      
    ]
  },
  {
    path: '/editschoolin',
    component: Layout,
    children: [
      {
        path: 'index/:id',
        component: () => import('@/views/edit/inschooledit'),
        name: 'inschooledit',
        meta: { title: '日常进校校数据修改' },
        hidden: true
      }
      
    ]
  },
  {
    path: '/editschoolout',
    component: Layout,
    children: [
      {
        path: 'index/:id',
        component: () => import('@/views/edit/outschooledit'),
        name: 'outschooledit',
        meta: { title: '日常出校校数据修改'},
        hidden: true
      }
      
    ]
  },
  {
    path: '/playcardedit',
    component: Layout,
    children: [
      {
        path: 'index/:id',
        component: () => import('@/views/edit/playcardedit'),
        name: 'playcardedit',
        meta: { title: '打卡信息修改'},
        hidden: true
      }
      
    ]
  },
  {
    path: '/teachersedit',
    component: Layout,
    children: [
      {
        path: 'index/:id',
        component: () => import('@/views/edit/teacheredit'),
        name: 'teacheredit',
        meta: { title: '教职工信息修改'},
        hidden: true
      }
      
    ]
  },
  {
    path: '/interfaceedit',
    component: Layout,
    children: [
      {
        path: 'index/:id',
        component: () => import('@/views/edit/interfaceedit'),
        name: 'interfaceedit',
        meta: { title: '接口信息修改'},
        hidden: true
      }
      
    ]
  },

// 信息管理路由
  {
    path: '/example',
    component: Layout,
    redirect: '/example/list',
    name: 'Example',
    meta: {
      title: '信息管理',
      icon: 'el-icon-s-help',
      roles: ['admin']
    },
    children: [
      
      {
        path: 'playcard',
        component: () => import('@/views/example/playcard'),
        name: 'playcard',
        meta: { title: '日常打卡数据', icon: 'edit' }
      },
      {
        path: 'inschool',
        component: () => import('@/views/example/inschool'),
        name: 'inschool',
        meta: { title: '进校扫码数据', icon: 'exit-fullscreen' }
        
      },
      {
        path: 'outschool',
        component: () => import('@/views/example/outschool'),
        name: 'outschool',
        meta: { title: '离校扫码数据', icon: 'fullscreen' }

      },
      {
        path: 'holidayin',
        component: () => import('@/views/example/holidayin'),
        name: 'holidayin',
        meta: { title: '假期返校数据', icon: 'exit-fullscreen',noCache: true}
      },
      {
        path: 'holidayout',
        component: () => import('@/views/example/holidayout'),
        name: 'holidayout',
        meta: { title: '假期离校数据', icon: 'fullscreen'},
        // hidden: true
      } 
      ,
      {
        path: 'teachers',
        component: () => import('@/views/example/teachers'),
        name: 'teachers',
        meta: { title: '教职工相关数据', icon: 'el-icon-s-custom'},
        // hidden: true
      }  
    ]
  },
  {
    
    path: '/interfacemanager',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/interfacemanager/index'),
        name: 'interfacemanager',
        meta: { title: '二维码地址管理', icon: 'component', noCache: true }
      }
    ]
  },
  {
    path: '/warningconfig',
    component: Layout,
    name: 'warning',
    meta: {
      title: '预警功能配置',
      icon: 'guide',
      roles: ['admin']
    },
    children: [
      {
        path: '/warningconfig/add/index',
        component: () => import('@/views/warningconfig/add/index'),
        name: 'warningconfig',
        meta: { title: '新增预警', noCache: true }
      },
      {
        path: 'index',
        component: () => import('@/views/warningconfig/index'),
        name: 'warningconfig',
        meta: { title: '预警管理', noCache: true }
      }
    ]
  },
  {
    path: '/maintain',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/maintain/index'),
        name: 'warningconfig',
        meta: { title: '日志与监控', icon: 'bug', noCache: true }
      }
    ]
  },
  {
    path: '/profile',
    component: Layout,
    redirect: '/profile/index',
    hidden: true,
    children: [
      {
        path: 'index',
        component: () => import('@/views/profile/index'),
        name: 'Profile',
        meta: { title: 'profile', icon: 'user', noCache: true }
      }
    ]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/page',
    alwaysShow: true, // will always show the root menu
    name: 'Permission',
    meta: {
      title: 'permission',
      icon: 'lock',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'page',
        component: () => import('@/views/permission/page'),
        name: 'PagePermission',
        meta: {
          title: 'pagePermission',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
    ]
  },

  {
    path: '/icon',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/icons/index'),
        name: 'Icons',
        meta: { title: 'icons', icon: 'icon', noCache: true },
        hidden: true
      }
    ]
  },

  /** when your routing map is too long, you can split it into small modules **/

  {
    path: '/error',
    component: Layout,
    redirect: 'noRedirect',
    name: 'ErrorPages',
    meta: {
      title: 'errorPages',
      icon: '404'
    },
    hidden:true,
    children: [
      {
        path: '401',
        component: () => import('@/views/error-page/401'),
        name: 'Page401',
        meta: { title: 'page401', noCache: true }
      },
      {
        path: '404',
        component: () => import('@/views/error-page/404'),
        name: 'Page404',
        meta: { title: 'page404', noCache: true }
       
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]


const createRouter = () => new Router({
  mode: 'history', // require service support
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}


export default router
