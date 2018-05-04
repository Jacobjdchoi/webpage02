<template>
  <div>
    <h1 class="page-title">{{ $t('vairex.title') }}</h1>
    <div class="center-contents">
      <div :id="supplier.name" class="body">
        <div class="supplier-info md-layout md-gutter md-alignment-center">
          <div class="md-layout-item md-large-size-25 md-medium-size-25 md-small-size-30 md-xsmall-size-100 supplier-logo-area" :id="supplier.name +'-logo-area'">
            <img src="@/assets/vairex-logo.png" :alt="supplier.name+'-logo'" :class="supplier.name+ '-logo-image'">
          </div>
          <div class="md-layout-item md-large-size-75 md-medium-size-75 md-small-size-70 md-xsmall-size-100 supplier-intro">
            <p class="supplier-intro-paragraph">
              {{$t('vairex.supplierIntro')}}
            </p>
          </div>
        </div>
        <div class="supplier-website-link" :id="supplier.name+'-website-link'">
          <a :href="supplier.url" target="_blank"> &rarr; {{$t('visitWebsite')}}</a>
        </div>
        <!-- <div class="supplier-intro-area">
          <img src="@/assets/vairex-banner.jpg" alt="vairex-banner" :class="supplier.name+ '-intro-image'">
        </div> -->
        
        <vue-tabs>
          <v-tab :title="'TAB 1'">
            <!-- <h3>{{$t('vairex.servoDrives.pwmTitle')}}</h3>
            <p>{{$t('vairex.servoDrives.pwmDescription')}}</p>
            <a href="https://www.vairex.com/product-category/drives/" target="_blank">
              <button class="product-finder-button">
                <h4 class="product-button-header">{{$t('vairex.productFinder')}} <icon name="window-restore"></icon></h4>
                <div class="product-button-description">{{$t('vairex.finderLink')}}</div>
              </button>
            </a> -->
          </v-tab>
        </vue-tabs>
  
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'vairex',
    data() {
      return {
        supplier: {
          name: 'vairex',
          url: 'https://vairex.com/'
        }
      }
    }
  }
</script>

<style lang="scss">
%vairex-button {
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
    @extend %vairex-button;
    .product-button-header{
      margin: 5px 0;
    }
  }
}

.product-finder-button {
  width: 100%;
  height: 75px;
  @extend %vairex-button;
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
          background: url('https://www.vairex.com/wp-content/uploads/2017/12/inductors.jpg');
        }
        &#category-transformers{
          background: url('https://www.vairex.com/wp-content/uploads/2017/12/transformers.jpg');
        }
        &#category-cables{
          background: url('https://www.vairex.com/wp-content/uploads/2017/11/cables.jpg');
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