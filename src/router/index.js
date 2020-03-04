import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Overview from '../views/Overview.vue'
import Ticket from '../views/Ticket.vue'
import Settings from '../views/Settings.vue'
import Analysis from '../views/Analysis.vue'
import CreateTask from '../views/CreateTask.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/overview',
    name: 'Overview',
    component: Overview
  },
  {
    path: '/ticket',
    name: 'Ticket',
    component: Ticket
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },
  {
    path: '/analysis',
    name: 'Analysis',
    component: Analysis
  },
  {
    path: '/create',
    name: 'CreateTask',
    component: CreateTask
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
