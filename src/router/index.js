import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import AboutUs from '@/components/AboutUs'
import Harness from '@/components/Harness'
import Diakont from '@/components/Diakont'
import ETec from '@/components/ETec'
import Glentek from '@/components/Glentek'
import Vairex from '@/components/Vairex'
import ContactUs from '@/components/ContactUs'
import NotFoundComponent from '@/components/NotFoundComponents'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about-us',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/harness',
      name: 'Harness',
      component: Harness
    },
    {
      path: '/diakont',
      name: 'Diakont',
      component: Diakont
    },
    {
      path: '/e-tec',
      name: 'ETec',
      component: ETec
    },
    {
      path: '/glentek',
      name: 'Glentek',
      component: Glentek
    },
    {
      path: '/vairex',
      name: 'Vairex',
      component: Vairex
    },
    {
      path: '/contact-us',
      name: 'ContactUs',
      component: ContactUs
    },
    { path: '*', component: NotFoundComponent }
  ]
})
