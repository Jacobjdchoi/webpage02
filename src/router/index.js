import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'

import AboutUsMain from '@/views/AboutUs/Main'
import AboutUs from '@/views/AboutUs/AboutUs'
import Organization from '@/views/AboutUs/Organization'
import AreaOfBusiness from '@/views/AboutUs/AreaOfBusiness'

import HneMain from '@/views/Hne/Main'
// import Harness from '@/views/Hne/Harness'
import Engineering from '@/views/Hne/Engineering'
import Industrial from '@/views/Hne/Industrial'
import Medical from '@/views/Hne/Medical'
import Commercial from '@/views/Hne/Commercial'
import Certs from '@/views/Hne/Certs'

import ProductsMain from '@/views/Products/Main'
import Diakont from '@/views/Products/Diakont'
import ETec from '@/views/Products/ETec'
import Glentek from '@/views/Products/Glentek'
import Vairex from '@/views/Products/Vairex'

import ContactUs from '@/views/ContactUs'
import NotFoundComponent from '@/views/NotFoundComponents'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: Home },
    {
      path: '/corp', component: AboutUsMain,
      redirect: '/corp/about-us',
      children: [
        { path: 'about-us', name: 'AboutUs', component: AboutUs},
        { path: 'organization', name: 'Organization', component: Organization},  // Organization page
        { path: 'area-of-business', name: 'AreaOfBusiness', component: AreaOfBusiness}, // Area of Business Page
      ]
    },
    {
      path: '/hne', component: HneMain,
      redirect: '/hne/medical',
      children: [
        { path: 'engineering', name: 'Engineering', component: Engineering},
        { path: 'industrial', name: 'Industrial', component: Industrial},
        { path: 'medical', name: 'Medical', component: Medical},
        { path: 'commercial', name: 'Commercial', component: Commercial},
        { path: 'certs', name: 'Certs', component: Certs},
      ]
    },
    {
      path: '/products', component: ProductsMain,
      redirect: '/products/diakont',
      children: [
        { path: 'diakont', name: 'Diakont', component: Diakont }, // **
        { path: 'e-tec', name: 'ETec', component: ETec },
        { path: 'glentek', name: 'Glentek', component: Glentek },
        { path: 'vairex', name: 'Vairex', component: Vairex },
      ]
    },

    { path: '/contact-us', name: 'ContactUs', component: ContactUs },

    { path: '*', component: NotFoundComponent }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

// ** - for navigation highlight