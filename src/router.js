import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
     {
      path: '/home',
      name: 'home',
      component: Home,
      children:[
      { path: '/home/tree/load',
             name: 'treeLoad',
             component: require('@/views/pages/tree/treeLoad').default},
             { path:'/home/echarts/index',
             name: 'treeLoad',
             component: require('@/views/pages/echarts/index').default
           },
           {
            path:"/home/i18n/demo",
            name:"demo",
            component: require('@/views/pages/i18n/index').default

           }


      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
