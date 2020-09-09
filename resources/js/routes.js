let login = require('./components/auth/login.vue').default;
let register = require('./components/auth/register.vue').default;
let dashboard = require('./components/admin/dashboard.vue').default;

export const routes = [
	{ path: '/admin/login', component: login, name: 'login'},
	{ path: '/admin/dashboard', component: dashboard, name: 'dashboard'},
	{ path: '/admin/register', component: register, name: 'register'}
]