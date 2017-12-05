import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('./components/Home')
const Login = () => import('./components/Login')
const Register = () => import('./components/Register')
const Account = () => import('./components/Account')
const TimeClock = () => import('./components/elements/TimeClock')
const Jobs = () => import('./components/Jobs')
const Leads = () => import('./components/Leads')
const Schedule = () => import('./components/Schedule')
const Location = () => import('./components/Location')
const Messaging = () => import('./components/Messaging')
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
    },
    {
      path: '/timeclock',
      name: 'TimeClock',
      component: TimeClock
    },
    {
      path: '/jobs',
      name: 'Jobs',
      component: Jobs
    },
    {
      path: '/leads',
      name: 'Leads',
      component: Leads
    },
    {
      path: '/schedule',
      name: 'Schedule',
      component: Schedule
    },
    {
      path: '/location',
      name: 'Location',
      component: Location
    },
    {
      path: '/messaging',
      name: 'Messaging',
      component: Messaging
    }
  ]
})
