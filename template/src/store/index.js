import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Vuex from 'vuex'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import * as actions from './actions'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import * as getters from './getters'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import mutations from './mutations'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Vue.use(Vuex){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const debug = process.env.NODE_ENV !== 'production'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const state = {}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  strict: debug{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
})
