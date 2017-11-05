import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('./components/Home')
const Login = () => import('./components/Login')
const Register = () => import('./components/Register')
const Account = () => import('./components/Account')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/account',
      name: 'Account',
      component: Account
    }
  ]
})
