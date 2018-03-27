<template>
  <div>
    <h1 class="page-title">{{ $t('eTec.title') }}</h1> 
    <div class="center-contents">
      <div :id="supplier.name" class="body">
        <div class="supplier-info md-layout md-gutter md-alignment-center">
          <div class="md-layout-item md-large-size-25 md-medium-size-25 md-small-size-30 md-xsmall-size-100 supplier-logo-area" :id="supplier.name +'-logo-area'">
            <img src="@/assets/etec-logo2.png" :alt="supplier.name+'-logo'" :class="supplier.name+ '-logo-image'">
          </div>
          <div class="md-layout-item md-large-size-75 md-medium-size-75 md-small-size-70 md-xsmall-size-100 supplier-intro">
            <p class="supplier-intro-paragraph">
              {{ $t('eTec.supplierIntro') }}
            </p>
          </div>
        </div>

        <div class="supplier-website-link" :id="supplier.name+'-website-link'">
          <a :href="supplier.url" target="_blank"> &rarr; {{ $t('visitWebsite') }}</a>
        </div>

        <div class="supplier-intro-area">
          <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide>
              <div class="slider-item-area">
                <img src="@/assets/etec-slider1.jpg" class="slider-item-image">
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="slider-item-area">
                <img src="@/assets/etec-slider2.jpg" class="slider-item-image">
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="slider-item-area">
                <img src="@/assets/etec-slider3.jpg" class="slider-item-image">
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="slider-item-area">
                <img src="@/assets/etec-slider4.jpg" class="slider-item-image">
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="slider-item-area">
                <img src="@/assets/etec-slider5.jpg" class="slider-item-image">
              </div>
            </swiper-slide>
            
            <!-- Optional controls -->
            <div class="swiper-pagination other" slot="pagination"></div>
            <div class="swiper-button-prev other" slot="button-prev"></div>
            <div class="swiper-button-next other" slot="button-next"></div>
          </swiper>
        </div>
        
        <h3>E-TEC {{ $t('eTec.products') }}</h3>
      
        <vue-tabs>
          <v-tab :title="$t('eTec.socketsConnectors')">
            <div class="product-item md-layout md-gutter">
              <div class="product-image md-layout-item md-medium-size-40 md-small-size-50 md-xsmall-size-100">
                <img src="http://www.e-tec.com/v3/images/stories/catalogue/jpg/images_catalogues/IC-Socket.jpg">
              </div>
              <div class="product-links-area md-layout-item md-medium-size-60 md-small-size-50 md-xsmall-size-100">
                <p class="product-link-para">
                  <a href="http://www.e-tec.ch/v3/index.php?option=com_content&task=view&id=407&Itemid=105" target="_blank">
                    <span class="product-link-text">{{ $t('eTec.partNumberSearch') }}</span>
                  </a>
                </p>
                <p class="product-link-para">
                  <a href="http://www.e-tec.ch/v3/index.php?option=com_content&view=category&id=13&Itemid=98" target="_blank">
                    <span class="product-link-text">{{ $t('eTec.pagesSearch') }}</span>
                  </a>
                </p>
                <p class="product-link-para">
                  <a href="http://www.e-tec.ch/v3/catalogs/IC-10.pdf" target="_blank">
                    <span class="product-link-text">{{ $t('eTec.downloadCatalog') }} (PDF 11MB)</span>
                  </a>
                </p>
              </div>
            </div>
          </v-tab>
      
          <v-tab :title="$t('eTec.testSockets')">
            <div class="product-item md-layout md-gutter">
              <div class="product-image md-layout-item md-medium-size-40 md-small-size-50 md-xsmall-size-100">
                <img src="http://www.e-tec.com/v3/images/stories/catalogue/jpg/images_catalogues/ictestsocket.jpg">
              </div>
              <div class="product-links-area md-layout-item md-medium-size-60 md-small-size-50 md-xsmall-size-100">
                <p class="product-link-para">
                  <a href="http://www.e-tec.ch/v3/index.php?option=com_content&amp;view=article&amp;id=988:how-to-choose-a-test-socket&amp;catid=35:ic-test-sockets-ts-01&amp;Itemid=127" target="_blank">
                    <span class="product-link-text">{{$t('eTec.howToChoose')}}</span>
                  </a>
                </p>
                <p class="product-link-para">
                  <a href="http://www.e-tec.ch/v3/pic_search/ic_s/ic-test-sockets-part-number-search.html" target="_blank">
                    <span class="product-link-text">{{$t('eTec.partNumberSearch')}}</span>
                  </a>
                </p>
                <p class="product-link-para">
                  <a href="http://www.e-tec.ch/v3/pic_search/ic_s/ic-test-sockets-picture-search.html" target="_blank">
                    <span class="product-link-text">{{$t('eTec.pictureSearch')}}</span>
                  </a>
                </p>
                <p class="product-link-para">
                  <a href="http://www.e-tec.ch/v3/index.php?option=com_content&amp;view=category&amp;id=35&amp;Itemid=99" target="_blank">
                    <span class="product-link-text">{{$t('eTec.pagesSearch')}}</span>
                  </a>
                </p>
                <p class="product-link-para">
                  <a href="http://www.e-tec.ch/v3/catalogs/TS-02.pdf" target="_blank">
                    <span class="product-link-text">{{$t('eTec.downloadCatalog')}} (PDF 6,2MB)</span>
                  </a>
                </p>
              </div>
            </div>
          </v-tab>
      
          <v-tab :title="$t('eTec.pcbInter')">
            <div class="product-item md-layout md-gutter">
              <div class="product-image md-layout-item md-medium-size-40 md-small-size-50 md-xsmall-size-100">
                <img src="http://www.e-tec.com/v3/images/stories/catalogue/jpg/images_catalogues/PCB.jpg">
              </div>
              <div class="product-links-area md-layout-item md-medium-size-60 md-small-size-50 md-xsmall-size-100">
                <p class="product-link-para">
                  <a href="http://www.e-tec.ch/v3/pic_search/pcb_ps/pcb-interconnect-products-part-number-search.html" target="_blank">
                    <span class="product-link-text">{{$t('eTec.partNumberSearch')}}</span>
                  </a>
                </p>
                <p class="product-link-para">
                  <a href="http://www.e-tec.ch/v3/pic_search/pcb_ps/pcb-interconnect-product-picture-search.html" target="_blank">
                    <span class="product-link-text">{{$t('eTec.pictureSearch')}}</span>
                  </a>
                </p>
                <p class="product-link-para">
                  <a href="http://www.e-tec.ch/v3/index.php?option=com_content&amp;view=category&amp;id=14&amp;Itemid=101" target="_blank">
                    <span class="product-link-text">{{$t('eTec.pagesSearch')}}</span>
                  </a>
                </p>
                <p class="product-link-para">
                  <a href="http://www.e-tec.ch/v3/catalogs/PC-07.pdf" target="_blank">
                    <span class="product-link-text">{{$t('eTec.downloadCatalog')}} (PDF 24MB)</span>
                  </a>
                </p>
              </div>
            </div>
          </v-tab>
      
          <v-tab :title="$t('eTec.dSub')">
            <div class="product-item md-layout md-gutter">
              <div class="product-image md-layout-item md-medium-size-40 md-small-size-50 md-xsmall-size-100">
                <img src="http://www.e-tec.com/v3/images/stories/catalogue/jpg/images_catalogues/D-Sub.jpg">
              </div>
              <div class="product-links-area md-layout-item md-medium-size-60 md-small-size-50 md-xsmall-size-100">
                <p class="product-link-para">
                  <a href="http://www.e-tec.ch/v3/pic_search/ds_ps/d-sub-connectors-part-number-search.html" target="_blank">
                    <span class="product-link-text">{{$t('eTec.partNumberSearch')}}</span>
                  </a>
                </p>
                <p class="product-link-para">
                  <a href="http://www.e-tec.ch/v3/pic_search/ds_ps/d-sub-connectors-picture-search.html" target="_blank">
                    <span class="product-link-text">{{$t('eTec.pictureSearch')}}</span>
                  </a>
                </p>
                <p class="product-link-para">
                  <a href="http://www.e-tec.ch/v3/index.php?option=com_content&amp;view=category&amp;id=15&amp;Itemid=102" target="_blank">
                    <span class="product-link-text">{{$t('eTec.pagesSearch')}}</span>
                  </a>
                </p>
                <p class="product-link-para">
                  <a href="http://www.e-tec.ch/v3/catalogs/DS-06.pdf" target="_blank">
                    <span class="product-link-text">{{$t('eTec.downloadCatalog')}} (PDF 18MB)</span>
                  </a>
                </p>
              </div>
            </div>
          </v-tab>
      
          <v-tab :title="$t('eTec.dip')">
            <div class="product-item md-layout md-gutter">
              <div class="product-image md-layout-item md-medium-size-40 md-small-size-50 md-xsmall-size-100">
                <img src="http://www.e-tec.com/v3/images/stories/catalogue/jpg/images_catalogues/DIP-Switch.jpg">
              </div>
              <div class="product-links-area md-layout-item md-medium-size-60 md-small-size-50 md-xsmall-size-100">
                <p class="product-link-para">
                  <a href="http://www.e-tec.ch/v3/pic_search/sw_ps/dip-switches-part-number-search.html" target="_blank">
                    <span class="product-link-text">{{$t('eTec.partNumberSearch')}}</span>
                  </a>
                </p>
                <p class="product-link-para">
                  <a href="http://www.e-tec.ch/v3/index.php?option=com_content&amp;view=category&amp;id=18&amp;Itemid=100" target="_blank">
                    <span class="product-link-text">{{$t('eTec.pictureSearch')}}</span>
                  </a>
                </p>
                <p class="product-link-para">
                  <a href="http://www.e-tec.ch/v3/index.php?option=com_content&amp;view=category&amp;id=15&amp;Itemid=102" target="_blank">
                    <span class="product-link-text">{{$t('eTec.pagesSearch')}}</span>
                  </a>
                </p>
                <p class="product-link-para">
                  <a href="http://www.e-tec.ch/v3/catalogs/SW-04.pdf" target="_blank">
                    <span class="product-link-text">{{$t('eTec.downloadCatalog')}} (PDF 7.5MB)</span>
                  </a>
                </p>
              </div>
            </div>
          </v-tab>

          <v-tab :title="$t('eTec.modular')">
            <div class="product-item md-layout md-gutter">
              <div class="product-image md-layout-item md-medium-size-40 md-small-size-50 md-xsmall-size-100">
                <img src="http://www.e-tec.com/v3/images/stories/catalogue/jpg/images_catalogues/modular-jacks.jpg">
              </div>
              <div class="product-links-area md-layout-item md-medium-size-60 md-small-size-50 md-xsmall-size-100">
                <p class="product-link-para">
                  <a href="http://www.e-tec.ch/v3/pic_search/m-jacks/modular-jacks-part-number-search.html" target="_blank">
                    <span class="product-link-text">{{$t('eTec.partNumberSearch')}}</span>
                  </a>
                </p>
                <p class="product-link-para">
                  <a href="http://www.e-tec.ch/v3/pic_search/m-jacks/modular-jacks-picture-search.html" target="_blank">
                    <span class="product-link-text">{{$t('eTec.pictureSearch')}}</span>
                  </a>
                </p>
                <p class="product-link-para">
                  <a href="http://www.e-tec.ch/v3/index.php?option=com_content&amp;view=category&amp;id=36&amp;Itemid=103" target="_blank">
                    <span class="product-link-text">{{$t('eTec.pagesSearch')}}</span>
                  </a>
                </p>
              </div>
            </div>
          </v-tab>
      
          <v-tab :title="$t('eTec.rfCoax')">
            <div class="product-item md-layout md-gutter">
              <div class="product-image md-layout-item md-medium-size-40 md-small-size-50 md-xsmall-size-100">
                <img src="http://www.e-tec.com/v3/images/stories/catalogue/jpg/images_catalogues/RFcoax.jpg">
              </div>
              <div class="product-links-area md-layout-item md-medium-size-60 md-small-size-50 md-xsmall-size-100">
                <p class="product-link-para">
                  <a href="http://www.e-tec.ch/v3/pic_search/rf_coax/rf-coax-connectors-part-number-search.html" target="_blank">
                    <span class="product-link-text">{{$t('eTec.partNumberSearch')}}</span>
                  </a>
                </p>
                <p class="product-link-para">
                  <a href="http://www.e-tec.ch/v3/pic_search/rf_coax/rf-coax-connectors-picture-search.html" target="_blank">
                    <span class="product-link-text">{{$t('eTec.pictureSearch')}}</span>
                  </a>
                </p>
                <p class="product-link-para">
                  <a href="http://www.e-tec.ch/v3/index.php?option=com_content&amp;view=category&amp;id=33&amp;Itemid=104" target="_blank">
                    <span class="product-link-text">{{$t('eTec.pagesSearch')}}</span>
                  </a>
                </p>
                <p class="product-link-para">
                  <a href="http://www.e-tec.ch/v3/catalogs/RF-01.pdf" target="_blank">
                    <span class="product-link-text">{{$t('eTec.downloadCatalog')}} (PDF 6.5MB)</span>
                  </a>
                </p>
              </div>
            </div>
          </v-tab>
        </vue-tabs>
      
      </div>
    </div>
  </div>    
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import {
    swiper,
    swiperSlide
  } from 'vue-awesome-swiper'
  
  export default {
    name: 'Etec',
    components: {
      swiper,
      swiperSlide
    },
    data() {
      return {
        swiperOption: {
          loop: true,
          autoplay: {
            delay: 5000,
          }
        },
        supplier: {
          name: 'etec',
          url: 'http://www.e-tec.ch/v3/'
        }
      }
    }
  }
</script>

<style lang="scss">
  .product-item {
    padding: 10px;
    .product-image{
      img {
        width: 100%;
        height: auto;
      }
    }
    .product-links-area{
      .product-link-para{
        a {
          .product-link-text {
            font-weight: bold;
            font-size: 15px;
            text-decoration: underline;
          }
        }
      }
    }
  }
</style>
