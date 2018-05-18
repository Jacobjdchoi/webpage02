<template>
  <div>
    <h1 class="page-title">{{ $t('glentek.title') }}</h1>
    <div class="center-contents">
      <div :id="supplier.name" class="body">
        <div class="supplier-info md-layout md-gutter md-alignment-center">
          <div class="md-layout-item md-large-size-25 md-medium-size-25 md-small-size-30 md-xsmall-size-100 supplier-logo-area" :id="supplier.name +'-logo-area'">
            <img src="@/assets/glentek-logo.png" :alt="supplier.name+'-logo'" :class="supplier.name+ '-logo-image'">
          </div>
          <div class="md-layout-item md-large-size-75 md-medium-size-75 md-small-size-70 md-xsmall-size-100 supplier-intro">
            <p class="supplier-intro-paragraph">
              {{$t('glentek.supplierIntro')}}
            </p>
          </div>
        </div>
        <div class="supplier-website-link" :id="supplier.name+'-website-link'">
          <a :href="supplier.url" target="_blank"> &rarr; {{$t('visitWebsite')}}</a>
        </div>
        <div class="supplier-intro-area">
          <img src="@/assets/glentek-banner.jpg" alt="glentek-banner" :class="supplier.name+ '-intro-image'">
        </div>
        <div class="supplier-products-intro">
          <h3>{{$t('glentek.standardCustom.title')}}</h3>
          <p>
            {{$t('glentek.standardCustom.description')}}
          </P>
          <div class="supplier-products-list md-layout md-gutter md-alignment-center">
            <div class="supplier-products-link md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100 md-alignment-center">
              <a href="https://www.glentek.com/download/glentek-product-catalog/?wpdmdl=108" target="_blank">
                <button class="supplier-products-link-button">
                  <h4 class="product-button-header">{{$t('glentek.standardCustom.productCatalog')}} <icon name="window-restore"></icon></h4>
                  <div class="product-button-description"></div>   
                </button>
              </a>
            </div>
            <div class="supplier-products-link md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100 md-alignment-center">
              <a href="https://www.glentek.com/download/motion-maestro-2-1/?wpdmdl=110" target="_blank">
                <button class="supplier-products-link-button">
                  <h4 class="product-button-header">{{$t('glentek.standardCustom.mMaestroHeader')}} 2.1 <icon name="download"></icon></h4>
                  <div class="product-button-description">{{$t('glentek.standardCustom.mMaestroGammaDescription')}}</div>   
                </button>
              </a>
            </div>
            <div class="supplier-products-link md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100 md-alignment-center">
              <a href="https://www.glentek.com/download/motion-maestro-1-37b/?wpdmdl=109" target="_blank">
                <button class="supplier-products-link-button">
                  <h4 class="product-button-header">{{$t('glentek.standardCustom.mMaestroHeader')}} 1.37B <icon name="download"></icon></h4>
                  <div class="product-button-description">{{$t('glentek.standardCustom.mMaestroOmegaDescription')}}</div>   
                </button>
              </a>
            </div>
          </div>
        </div>
        <vue-tabs>
          <v-tab :title="$t('glentek.servoDrives.title')">
            <h3>{{$t('glentek.servoDrives.pwmTitle')}}</h3>
            <p>{{$t('glentek.servoDrives.pwmDescription')}}</p>
            <a href="https://www.glentek.com/product-category/drives/" target="_blank">
              <button class="product-finder-button">
                <h4 class="product-button-header">{{$t('glentek.productFinder')}} <icon name="window-restore"></icon></h4>
                <div class="product-button-description">{{$t('glentek.finderLink')}}</div>
              </button>
            </a>
          </v-tab>
  
          <v-tab :title="$t('glentek.servoMotor.title')">
            <h3>{{$t('glentek.servoMotor.gmbTitle')}}</h3>
            <p>{{$t('glentek.servoMotor.gmbDescription')}}</p>
            <a href="https://www.glentek.com/product-category/motors/?swoof=1&product_cat=gmbgmbf&really_curr_tax=20-product_cat" target="_blank">
              <button class="product-finder-button">
                <h4 class="product-button-header">{{$t('glentek.productFinder')}} <icon name="window-restore"></icon></h4>
                <div class="product-button-description">{{$t('glentek.finderLink')}}</div>
              </button>
            </a>
            <h3>{{$t('glentek.servoMotor.gmTitle')}}</h3>
            <p>{{$t('glentek.servoMotor.gmDescription')}}</p>
            <a href="https://www.glentek.com/product-category/motors/?swoof=1&product_cat=gmgmr&really_curr_tax=20-product_cat" target="_blank">
              <button class="product-finder-button">
                <h4 class="product-button-header">{{$t('glentek.productFinder')}} <icon name="window-restore"></icon></h4>
                <div class="product-button-description">{{$t('glentek.finderLink')}}</div>
              </button>
            </a>
          </v-tab>
  
          <v-tab :title="$t('glentek.accessories.title')">
            <h3>{{$t('glentek.accessories.title')}}</h3>
            <div class="accessories-product-list md-layout md-gutter md-alignment-center">
              <div class="accessories-product-item md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100 md-alignment-center">
                <a href="https://www.glentek.com/product-category/accessories/inductors/" 
                  class="accessories-product-link" target="_blank">
                  <div class="category-image" id="category-inductors"></div>
                  <div class="category-name">
                    <h3>{{$t('glentek.accessories.inductors')}} <icon name="window-restore"></icon></h3>
                  </div>
                </a>
              </div>
              <div class="accessories-product-item md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100 md-alignment-center">
                <a href="https://www.glentek.com/product-category/accessories/transformers/" 
                  class="accessories-product-link" target="_blank">
                  <div class="category-image" id="category-transformers"></div>
                  <div class="category-name">
                    <h3>{{$t('glentek.accessories.transformers')}} <icon name="window-restore"></icon></h3>
                  </div>
                </a>
              </div>
              <div class="accessories-product-item md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100 md-alignment-center">
                <a href="https://www.glentek.com/product-category/accessories/cables/" 
                  class="accessories-product-link" target="_blank">
                  <div class="category-image" id="category-cables"></div>
                  <div class="category-name">
                    <h3>{{$t('glentek.accessories.assemblies')}} <icon name="window-restore"></icon></h3>
                  </div>
                </a>
              </div>
            </div>
          </v-tab>
        </vue-tabs>
  
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Glentek',
    data() {
      return {
        supplier: {
          name: 'glentek',
          url: 'https://www.glentek.com/'
        }
      }
    }
  }
</script>

<style lang="scss">
%glentek-button {
  text-align: center;
  white-space: normal;
  color: #4c4e7e;
  background-color: transparent;
  background-image: none;
  border-color: #4c4e7e;
  &:hover{
      color: #fff;
      background-color: #4c4e7e;
      border-color: #4c4e7e;
  }
}

.supplier-products-intro{
  margin: 15px;
  .supplier-products-link-button {
    width: 100%;
    height: 75px;
    @extend %glentek-button;
    .product-button-header{
      margin: 5px 0;
    }
  }
}

.product-finder-button {
  width: 100%;
  height: 75px;
  @extend %glentek-button;
}

.accessories-product-list{
  
  .accessories-product-item{
    text-align: center;
    padding: 0 0 0 10px;
    position: relative;
    .accessories-product-link{
      .category-image{
        height: 200px;
        background-position: center center!important;
        background-size: cover!important;
        position: relative;
        width: 100%;
        height: 280px;
        &#category-inductors{
          background: url('https://www.glentek.com/wp-content/uploads/2017/12/inductors.jpg');
        }
        &#category-transformers{
          background: url('https://www.glentek.com/wp-content/uploads/2017/12/transformers.jpg');
        }
        &#category-cables{
          background: url('https://www.glentek.com/wp-content/uploads/2017/11/cables.jpg');
        }
      }
      .category-name{
        color: #fff;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
        width: calc(100% - 10px);
        z-index: 500;
        h3 {  
          text-transform: uppercase;
          text-align: center;
          font-size: 20px;
          font-weight: 700;
          padding: 20px 10px;
          background-color: rgba(0,0,0,.5);
          width: 60%;
          margin: 0 auto;
          line-height: 1.5;
          &:hover {
            background-color: rgba(0,0,0,.85);
          }
        }
      }
    }
  }
}
</style>