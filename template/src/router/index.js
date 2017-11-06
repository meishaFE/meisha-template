import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Home'),
      children: []
    },
    {
      path: '/404',
      name: '404',
      component: () => import('@/views/404')
    }
  ]
});
