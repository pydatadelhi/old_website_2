import Vue from 'vue'
import Router from 'vue-router'

// Page content
import Home from '@/components/Home'
import Conference from '@/components/Conference'
import Archive from '@/components/Archive'
import Blog from '@/components/Blog'
import Sponsors from '@/components/Sponsors'
import Volunteer from '@/components/Volunteer'
import News from '@/components/News'
import Team from '@/components/Team'
import Contact from '@/components/Contact'

// Fallback page
import PageNotFound from '@/components/PageNotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/conference',
      name: 'Conference',
      component: Conference
    },
    {
      path: '/archive',
      name: 'Archive',
      component: Archive
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/sponsors',
      name: 'Sponsors',
      component: Sponsors
    },
    {
      path: '/volunteer',
      name: 'Volunteer',
      component: Volunteer
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/team',
      name: 'Team',
      component: Team
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '**',
      name: 'PageNotFound',
      component: PageNotFound
    }
  ]
})