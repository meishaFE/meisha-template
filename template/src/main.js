{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
{{#polyfill}}
import 'babel-polyfill';
{{/polyfill}}
import Vue from 'vue';
{{#element}}
import ElementUI from 'element-ui';
{{/element}}
import App from './App';
{{#router}}
import router from '@/router';
{{/router}}
{{#vuex}}
import store from '@/store';
{{/vuex}}
import { $http, $type, filters } from '@/utils';
import * as CONFIG from '@/config';

Vue.use(filters);
{{#element}}
Vue.use(ElementUI);
{{/element}}

Vue.config.productionTip = false;

/*
 * HTTP 请求函数，使用方法请查看：https: //github.com/axios/axios
 * 已封装 Auth 到 Header 里面，默认会处理错误的响应，返回 Promise
 * 例子：
 * $http.post(API.ANY, {username: '', password: '' })
 *     .then(res => {
 *         // do anything for res
 *     })
 *     .catch(error => {
 *         // handle error
 *     })
*/
window.$http = $http;
window.$type = $type;
window.CONFIG = CONFIG;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#vuex}}
  store,
  {{/vuex}}
  {{#router}}
  router,
  {{/router}}
  {{#if_eq build "runtime"}}
  render: h => h(App)
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  template: '<App/>',
  components: { App }
  {{/if_eq}}
});
