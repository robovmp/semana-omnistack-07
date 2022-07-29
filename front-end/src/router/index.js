import Vue from 'vue'
import VueRouter from 'vue-router'
import FeedView from '../views/FeedView.vue'
import NewView from '../views/NewView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'feed',
    component: FeedView
  },
  {
    path: '/new',
    name: 'new',
    component: NewView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
