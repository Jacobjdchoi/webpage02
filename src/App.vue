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
  metaInfo() {
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
$page-title-height: 12vh;
$slider-color-home: #820800;
$slider-color-other: #152b00;
$responsive-breakpoint: 1128px;

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
  &:not(.md-button):hover {
    text-decoration: none !important;
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
    background: #520500;
    color: white;
}


.swiper-button-next.home, .swiper-container-rtl .swiper-button-prev {
  background-image: url("data:image/svg+xml;charset=utf-8,<svg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'><path%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23820800'%2F><%2Fsvg>")
}
.swiper-button-prev.home, .swiper-container-rtl .swiper-button-next {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23820800'%2F%3E%3C%2Fsvg%3E")
}
.swiper-button-next.other, .swiper-container-rtl .swiper-button-prev {
  background-image: url("data:image/svg+xml;charset=utf-8,<svg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'><path%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23152b00'%2F><%2Fsvg>")
}
.swiper-button-prev.other, .swiper-container-rtl .swiper-button-next {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23152b00'%2F%3E%3C%2Fsvg%3E")
}

.swiper-pagination-bullet.swiper-pagination-bullet-active {
  background-color: #820800;
}
.swiper-pagination.swiper-pagination-bullets {
  bottom: 0px;
}

.supplier-info {
  width: 100%;
  height: auto;
  min-height: 200px;
  margin: 2vh 0 0 0;
  .supplier-logo-area {
    text-align: center;
  }
  .supplier-intro {
    p.supplier-intro-paragraph {
      margin: 0;
      font-size: 18px;
      line-height: 22px;
    }
  }
}

.supplier-website-link {
  width: 100%;
  height: 20px;
  position: relative;
  font-size: 20px;
  margin-bottom: 15px; 
  a {
    position: absolute;
    
    right: 0;
    top: 0;
  }
}
.supplier-intro-area {
  margin-bottom: 15px;
}

</style>
