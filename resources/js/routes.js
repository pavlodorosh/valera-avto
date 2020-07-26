let login = require('./components/auth/login.vue').default
let register = require('./components/auth/register.vue').default
let forget = require('./components/auth/forget.vue').default

export const routes = [
    {path: '/user', component: login, name: '/'},
    {path: '/user/register', component: register, name: 'register'},
    {path: '/user/forget', component: forget, name: 'forget'}
]