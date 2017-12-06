/**
 * 项目正式环境域名，必填
 * 比如：camps.meishakeji.com
 * @type {String}
 */
const HOST = '';

/**
 * 后端开发接口本地域名，选填
 * 用于本地开发联调，比如：192.168.1.xx:8000
 * 为空则会采用测试环境地址，详见下面 generateBaseURL
 * @type {String}
 */
const BACK_END_LOCAL_HOST = '';

/**
 * 根据当前环境，生成项目 api 的地址：BASE_URL
 */
const generateBaseURL = () => {
  if (new RegExp('^127.0.0.1|^localhost|^192.168').test(window.location.host)) {
    // 本地开发环境
    return '//' + (BACK_END_LOCAL_HOST || 'test-' + HOST);
  } else if (new RegExp('^test-').test(window.location.host)) {
    // 测试环境
    return '//test-' + HOST;
  } else if (new RegExp('^pre-').test(window.location.host)) {
    // 预发布环境
    return '//pre-' + HOST;
  } else {
    // 正式环境
    return '//' + HOST;
  }
};

// API base URL
export const BASE_URL = generateBaseURL();

// API 设置，请使用大写+下划线的的写法，例如：NAMES_LIKE_THIS
export const API = {
  LOGIN: '/login'
};
