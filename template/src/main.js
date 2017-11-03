{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
{{#polyfill}}
import 'babel-polyfill'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/polyfill}}
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{#element}}
import ElementUI from 'element-ui'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/element}}
import App from './App'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{#router}}
import router from '@/router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/router}}
{{#vuex}}
import store from '@/store'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/vuex}}
import { $http, $type, filters } from '@/utils'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import * as CONFIG from '@/config'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Vue.use(filters){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{#element}}
Vue.use(ElementUI){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/element}}

Vue.config.productionTip = false{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

/*
 * HTTP 请求函数，使用方法请查看：https: *github.com/axios/axios
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
window.$http = $http{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
window.$type = $type{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
window.CONFIG = CONFIG{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

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
  render: h => h(App){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  template: '<App/>',
  components: { App }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
