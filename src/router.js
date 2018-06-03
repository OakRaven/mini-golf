import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import NewGame from './views/NewGame.vue'
import EditPlayer from './views/EditPlayer.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/new-game',
    name: 'new-game',
    component: NewGame
  },

  {
    path: '/edit-player',
    name: 'editPlayer',
    component: EditPlayer
  }
  ]
})
