
require('./bootstrap');

import 'vuetify/dist/vuetify.min.css';

import Swal from 'sweetalert2'
import User from './Helpers/User'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import {routes} from './routes'

Vue.use(VueRouter)
Vue.use(Vuetify)

window.User = User
window.Swal = Swal

const Toast = Swal.mixin({
	toast: true,
	position: 'top-end',
	showConfirmButton: false,
	timer: 3000,
	timerProgressBar: true,
	onOpen: (toast) => {
		toast.addEventListener('mouseenter', Swal.stopTimer)
		toast.addEventListener('mouseleave', Swal.resumeTimer)
	}
})

window.Toast = Toast
  

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
