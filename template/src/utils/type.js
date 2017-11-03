const toString = Object.prototype.toString{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
/**
 * 判断val是否为type类型的值
 * @param val
 * @param type 可能的值为Function, Object, Array, Number, String, RegExp, Null, Undefined, Boolean, Symbol, Date等
 * @returns {boolean}
 */
export const isType = (val, type) => {
  if (!type) return false{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

  if (type === 'Number' && Number.isNaN(val)) return false{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

  return (toString.call(val).replace(/.*\s(.*)]$/, '$1').toLowerCase() === type.toLowerCase()){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

/**
* 获取val的类型
* @param val
* @returns {string}
*/
export const getType = (val) => (Number.isNaN(val) ? 'NaN' : toString.call(val).replace(/.*\s(.*)]$/, '$1')){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export const $type = { getType, isType{{#if_eq lintConfig "airbnb"}},{{/if_eq}} }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
