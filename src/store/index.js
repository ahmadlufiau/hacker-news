import Vuex from 'vuex'
import Vue from 'vue'
import actions from './actions.js'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		articles: []
	},
	mutations: {},
	actions
})
