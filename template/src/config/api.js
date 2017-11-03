// 开发环境的API前缀
const DEV_BASE_URL = ''{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

// 判断是否为开发环境
const IS_DEV = /localhost|192\.168|127/i.test(window.location.origin){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

// API 设置，请使用大写+下划线的的写法，例如：NAMES_LIKE_THIS
export const API = {}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
export const BASE_URL = IS_DEV ? DEV_BASE_URL : ''{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
