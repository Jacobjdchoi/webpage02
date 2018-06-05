<template>
  <div class="center-contents">
    <div id="home" class="body">
        <!-- Browser Start -->
        <hide-at :breakpoints="{small: 960, medium: 1280, large: 1920}" breakpoint="small">
          <div class="swiper-aspect">
            <swiper :options="swiperOption" ref="mySwiper" class="home-swiper">
              <!-- slides -->
              <swiper-slide v-for="(i, index) in imgs" :key="index">
                <div class="slider-item-area" :style="'background-image: url('+i.src+')'"></div>
                <router-link v-bind:to="i.url" class="slider-item-link">
                  <h2 class="slider-item-text">{{i.title}}</h2>  
                </router-link>
              </swiper-slide>
              <!-- Optional controls -->
              <div class="swiper-pagination home"  slot="pagination"></div>
              <div class="swiper-button-prev home" slot="button-prev"></div>
              <div class="swiper-button-next home" slot="button-next"></div>
            </swiper>
          </div>
        </hide-at>
        <!-- Mobile Start -->
        <show-at :breakpoints="{small: 960, medium: 1280, large: 1920}" breakpoint="small">
          <div class="mobile-images-area">
            <div class="mobile-image-area" v-for="(i, index) in imgs" :key="index">
              <div class="mobile-item-area" :style="'background-image: url('+i.src+')'">
                <!-- <img v-bind:src="i.src" class="mobile-item-image"> -->
              </div>
              <router-link v-bind:to="i.url" class="mobile-item-link">
                <h2 class="mobile-item-text">{{i.title}}</h2>  
              </router-link>
            </div>
          </div>
        </show-at>
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { showAt, hideAt } from 'vue-breakpoints'


export default {
  name: 'HelloWorld',
  components: { 
    swiper,
    swiperSlide,
    showAt, hideAt
  },
  data () {
    return {
      swiperOption: {
        effect: 'fade',
        pagination: {
          el: '.swiper-pagination.home',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next.home',
          prevEl: '.swiper-button-prev.home'
        },
        loop: true,
        autoplay: {
          delay: 4000,
        }
      },
      imgs: [
        {
          title: 'Harness & Engineering',
          src: '/static/homeHARNESS.jpg',
          url: '/hne/harness'
        },
        {
          title: 'Diakont Products',
          src: '/static/homeDIAKONT.jpg',
          url: '/products/diakont'
        },
        {
          title: 'E-Tec Products',
          src: '/static/homeE-TEC.jpg',
          url: '/products/etec'
        },
        {
          title: 'Glentek Products',
          src: '/static/homeGLENTEK.jpg',
          url: '/products/glentek'
        },
        {
          title: 'Vairex Products',
          src: '/static/homeVAIREX.jpg',
          url: '/products/vairex'
        },
      ]
    }
  },
  computed: {
    swiper(){
      return this.$refs.mySwiper.swiper
    }
  },
  mounted() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.swiper-aspect{
  width: 100%;
  position: relative;
  padding-top: 53.2%;
  .swiper-container.home-swiper {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    .swiper-wrapper{
      .swiper-slide{
        .slider-item-area {
          width: 100%; height: 100%;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        .slider-item-link {
          .slider-item-text{
              height: 50px;
              line-height: 50px;
              font-size: 33px;
              position: absolute;
              bottom: 0; right: 0;
              width: 100%;
              text-align: center;
              background: rgb(55, 55, 55);
              margin: 0;
              color: white;
              font-weight: bold;
          }
        }
      }
    }
    .swiper-pagination.home{
      bottom: unset;
      top: 0;
      text-align: right;
      padding: 0 5px;
      .swiper-pagination-bullet.swiper-pagination-bullet-active {
        background-color: #820800;
      }
    }
    .swiper-button-next.home, .swiper-button-prev.home {
      width: 21px;
      background-size: 20px 44px;
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
  }
}
@media only screen and (max-width: 960px) {
  div.body#home{
    margin: 0 -10px;
  }
  .mobile-images-area{
    .mobile-image-area{
      width: 100%; height: 30vh;
      position: relative;
      .mobile-item-area{
        position: relative;
        width: 100%; height: 100%;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }
      .mobile-item-link{
        position: absolute;
        bottom: 0; width: 100%;
        .mobile-item-text{
          background-color: rgba(0,0,0,0.7);
          color: white;
          margin: 0;
          padding: 5px;
          height: 30px;
        }
      }
    }
  }
}

@media only screen and (max-width: 1128px) {
  .swiper-container.home-swiper {
    height: 40vw;
  }
  
}
@media only screen and (min-width: 1128px) {
  .swiper-container.home-swiper {
    height: 43vw;
  }
}

.slider-item-image {
  
}
</style>
