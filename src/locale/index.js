
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './en.js'
import ko from './ko.js'

/* 
** Const has to be Messages in order for
** i18n to recognize the locales
*/
const messages = {
    en,
    ko
}

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'ko',
  fallbackLocale: 'en',
  messages
})

export default i18n