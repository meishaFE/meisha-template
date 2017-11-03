// 全局的过滤器
import {isType} from './type'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const globalFilters = {}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const install = Vue => {
  if (!isType(globalFilters, 'Object')) return{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

  const keys = Object.keys(globalFilters){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

  if (!isType(keys, 'Array') || !keys.length) return{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

  keys.forEach(key => Vue.filter(key, globalFilters[key])){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export const filters = { install }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
