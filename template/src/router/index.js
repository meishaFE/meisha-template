import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
      {
          path: '/',
          name: 'Home',
          component: () =>import ('@/views/Home'),
          children: [
            {
              path: '/welcome',
              name: 'Welcome',
              component: () =>import ('@/views/welcome')
            },
            {
              path: '/order',
              name: 'Order',
              component: () =>import ('@/views/module/order/orderHome'),
              children: [
                {
                  path: '/orderList',
                  name: 'OrderList',
                  component: () =>import ('@/views/module/order/orderList')
                }
              ]
            }
          ]
      },
      {
        path: '/*',
        name: '404',
        component: () =>import ('@/views/404')
      }
    ]
});