import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TodoList',
      component: () => import(/* webpackChunkName: "about" */ './views/TodoList.vue')
    },

    {
      path: '/cpl',
      name: 'Todos',
      component: () => import(/* webpackChunkName: "about" */ './views/Todos.vue')

    },

    {
      path: '/set',
      name: 'Setting',
      component: () => import(/* webpackChunkName: "about" */ './views/Setting.vue')

    }
  ]
})
