<template>
  <div id="app">
    <navigation-bar>
        <router-view slot="mobile"/>
        <router-view slot="browser"/>
    </navigation-bar>
  </div>
</template>

<script>
import NavigationBar from '@/components/Navigation'

export default {
  name: 'App',
  components: { NavigationBar },
  metaInfo(){
    return {
      charset: 'utf-8',
      title: this.$i18n.t('siteTitle'),
      htmlAttrs: {
          lang: this.$i18n.locale,
      }
    }
  },
  mounted(){
    var vm = window.vm = this
  }
}
</script>

<style lang="scss">

$browser-center-contents-width: 75vw;
$page-title-height: 56px;
$slider-color-home: #3a0400;
$slider-color-other: #152b00;
$responsive-breakpoint: 1128px;

:lang(ko){
  font-family: 'Malgun Gothic';
}
:lang(en){
  font-family: Arial, Helvetica, sans-serif;
}
:-ms-lang(en){
  font-family: Arial, Helvetica, sans-serif;
}
:-ms-lang(ko){
  font-family: 'Malgun Gothic';
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  // user-select: none;
  // -moz-user-select: none;
  // -webkit-user-select: none;
}
a {
  text-decoration: none;
  &:not(.important){
    color: rgba(0,0,0,0.87) !important;
  }
  &:not(.md-button):hover {
    text-decoration: none !important;

  }
}
.md-theme-default {
  a:not(.md-button) {
    color: rgba(0,0,0,0.87);
    &:hover {
      color: rgba(0,0,0,0.87);
      cursor: pointer;
    }
  }
}
@media only screen and (max-width: 744px) {
  div#mobile.mobile{
    min-height: 100vh;
  }
  .center-contents {
    padding: 0 10px;
  }
}
@media only screen and (min-width: 744px) {
  .center-contents {
      width: $browser-center-contents-width;
      margin: 0 auto;
  }
}

.page-title{
    width: 100%;
    text-align: center;
    height: $page-title-height;
    line-height: $page-title-height;
    font-size: $page-title-height/2;
    margin: 0;
    background: #3a0400;
    color: white;
}
.body {
  min-height: 500px;
}

.browser-contents {
  .center-contents{
    background-color: white;
    padding: 5px
  }
}
</style>
