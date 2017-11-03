/*
 * HTTP 请求函数，使用方法请查看：https: *github.com/axios/axios
 * 已封装 Auth 到 Header 里面，默认会处理错误的响应，返回 Promise
 */
import axios from 'axios'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import URLSearchParams from 'url-search-params'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import { BASE_URL } from '@/config/api'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import { isType } from './type'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const handleNoLogin = () => {
  localStorage.clear('auth'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  window.location = window.location.origin{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const options = {
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Auth: localStorage.getItem('auth') || ''{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  },
  transformRequest: [
    function (data) {
      const params = new URLSearchParams(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      params.append('auth', localStorage.getItem('auth') || ''){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      params.append('data', JSON.stringify(data)){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      return params{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  ],
  withCredentials: true{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const $http = axios.create(options){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

$http
.interceptors
.response
.use(res => {
  // 处理响应为空的情况
  if (!res || !res.data || !isType(res.data, 'Object') || !isType(res.data, 'Array')) return Promise.reject(new Error('response is empty')){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  // 处理未登录的情况
  else if (res.data.code === -1001) handleNoLogin(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  // 处理后端返回的 code 不为 0 的情况
  else if (res.data.code !== 0) return Promise.reject(res.data){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  // 正常返回
  return res.data{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export { $http }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
