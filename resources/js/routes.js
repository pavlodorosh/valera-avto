let login = require('./components/auth/login.vue').default
let register = require('./components/auth/register.vue').default
let forget = require('./components/auth/forget.vue').default

export const routes = [
    {path: '/admin', component: login, name: '/'},
    {path: '/admin/register', component: register, name: 'register'},
    {path: '/admin/forget', component: forget, name: 'forget'}
]