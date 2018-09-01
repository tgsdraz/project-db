import Vue from 'vue'
import Router from 'vue-router'
import main from '../components/main'
import movies from '../components/movies'
import books from '../components/books'
import broadcast from '../components/broadcast'
import eaMovie from '../components/eaMovie'
import eventList from '../components/eventList'
import movieInfo from '../components/movieInfo'
import regedit from '../components/regedit'
import login from '../components/login'
import more from '../components/more'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/main',
      name: 'main',
      component: main
    },
    {
      path: '/movie',
      name: 'movie',
      component: movies
    },
    {
      path: '/book',
      name: 'book',
      component: books
    },
    {
      path: '/broadcast',
      name: 'broadcast',
      component: broadcast
    },
    
    {
      path:'/eaMovie',
      name:'eaMovie',
      component:eaMovie
    },
    {
      path: '/eventList',
      name: 'eventList',
      component: eventList
    },
    {
      path: '/movieInfo',
      name: 'movieInfo',
      component: movieInfo
    },
    {
      path: '/regedit',
      name: 'regedit',
      component: regedit
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/more',
      name: 'more',
      component: more
    },
    {
      path: '/',
      name: 'login',
      component: login
    },
   
  ]
})
