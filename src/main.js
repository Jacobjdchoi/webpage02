// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store/index'
import router from './router'
import VueMaterial from 'vue-material'
// import { MdCard, } from 'vue-material/dist/components'
// https://stackoverflow.com/questions/33527653/babel-6-regeneratorruntime-is-not-defined/33527883#33527883
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import Icon from 'vue-awesome/components/Icon'
import ToggleButton from 'vue-js-toggle-button'
import VueI18n from 'vue-i18n'
import VueTabs from 'vue-nav-tabs'
import 'vue-nav-tabs/themes/vue-tabs.css'
import 'vue-awesome/icons/bars'
import 'vue-awesome/icons/envelope-o'
import 'vue-awesome/icons/download'
import 'vue-awesome/icons/window-restore'
import 'vue-awesome/icons/chevron-up'
import 'vue-awesome/icons/external-link'
import Vuelidate from 'vuelidate'
import i18n from './locale/index.js'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueAnalytics from 'vue-analytics'
import Meta from 'vue-meta'
import VueGoodTable from 'vue-good-table';
import 'vue-good-table/dist/vue-good-table.css' // styles


Vue.config.productionTip = true

Vue.use(Meta)

Vue.use(ToggleButton)

Vue.use(VueTabs)
Vue.use(Vuelidate)
Vue.component('icon', Icon)
Vue.use(VueGoodTable);

/* Material Design */
Vue.use(VueMaterial)
// Vue.use(MdCard)

/* Google Maps */
Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.GMAPS_API_KEY,
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
  }
})

/* Google Analytics */
Vue.use(VueAnalytics, {
  id: 'UA-33114852-2',
  router,
  checkDuplicatedScript: true
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  i18n,
  components: { App },
  template: '<App/>'
}).$mount('#app')
