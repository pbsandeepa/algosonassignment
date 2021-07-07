import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Users from '../components/Users.vue'
import Posts from '../components/Posts.vue'
import PostDetails from '../components/PostDetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect:'/Users'
  },
  {
    path: '/Users',
    name: 'Users',
    component: Users
  },
  {
    path: '/Posts',
    name: 'Posts',
    component: Posts
  },
  {
    path: '/PostDetails',
    name: 'PostDetails',
    component: PostDetails
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
