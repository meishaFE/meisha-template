import {isType} from './type';

// 全局的过滤器
const globalFilters = {};

const install = Vue => {
  if (!isType(globalFilters, 'Object')) return;

  const keys = Object.keys(globalFilters);

  if (!isType(keys, 'Array') || !keys.length) return;

  keys.forEach(key => Vue.filter(key, globalFilters[key]));
};

export const filters = { install };
