/*
 * HTTP 请求函数，使用方法请查看：https: //github.com/axios/axios
 * 已封装 Auth 到 Header 里面，默认会处理错误的响应，返回 Promise
 */
import axios from 'axios';
import URLSearchParams from '@ungap/url-search-params';
import { BASE_URL } from '@/config/api';
import { isType } from './type';

const options = {
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  transformRequest: [function (data, headers) {
    if (headers['Content-Type'] === 'application/x-www-form-urlencoded') {
      const params = new URLSearchParams();
      params.append('data', JSON.stringify(data));
      return params;
    } else {
      // 其他类型
      return data;
    }
  }],
  withCredentials: true
};

const handleNoLogin = () => {
  localStorage.clear();
  window.location = window.location.origin;
};

const $http = axios.create(options);

$http
  .interceptors
  .response
  .use(res => {
    if (!res || !res.data || (!isType(res.data, 'Object') && !isType(res.data, 'Array'))) { // 处理响应为空的情况
      return Promise.reject(new Error('response is empty'));
    } else if (res.data.code === -1001) { // 处理未登录的情况
      handleNoLogin();
    } else if (res.data.code !== 0) { // 处理后端返回的 code 不为 0 的情况 
      return Promise.reject(new Error(res.data.msg));
    } else { // 正常返回
      return res.data;
    }
  });

$http
  .interceptors
  .request
  .use(config => {
    config.headers['Auth'] = localStorage.getItem('auth') || '';
    return config;
  });

export { $http };
