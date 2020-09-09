
require('./bootstrap');

import 'vuetify/dist/vuetify.min.css';

import User from './Helpers/User'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import {routes} from './routes'

Vue.use(VueRouter)
Vue.use(Vuetify)

window.User = User

const vuetify = new Vuetify({
	icons: {
		iconfont: 'mdiSvg', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
	},
})

const router = new VueRouter({
	routes,
	mode: 'history'
})

new Vue({
	el: '#app-auth',
	router,
	vuetify
});
