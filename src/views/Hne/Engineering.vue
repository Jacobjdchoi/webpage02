<template>
  <div>
    <h1 class="page-title">{{ 'Engineering' }}</h1>
    <div class="center-contents">
      <div id="engineering" class="body">
            <h1>{{ $t('hNe.engineering.title') }}</h1>
            <h2>{{ $t('hNe.engineering.products.title') }}</h2>
            <div class="engineered-products-wrapper md-layout md-gutter">
            <div class="engineered-products md-layout-item md-medium-size-33 md-small-size-100 md-xsmall-size-100">
                <div class="engineered-product-pic">
                <img src="@/assets/eProd-automotive.jpg" alt="">
                </div>
                <div class="engineered-product-description">
                <p class="product-description-text">{{$t('hNe.engineering.products.automotive')}}</p>
                </div>
            </div>
            <div class="engineered-products md-layout-item md-medium-size-33 md-small-size-100 md-xsmall-size-100">
                <div class="engineered-product-pic">
                <img src="@/assets/eProd-heavy-ion.jpg" alt="">
                </div>
                <div class="engineered-product-description">
                <p class="product-description-text">{{$t('hNe.engineering.products.heavyIon')}}</p>
                </div>
            </div>
            <div class="engineered-products md-layout-item md-medium-size-33 md-small-size-100 md-xsmall-size-100">
                <div class="engineered-product-pic">
                <img src="@/assets/eProd-waterproof.jpg" alt="">
                </div>
                <div class="engineered-product-description">
                <p class="product-description-text">{{$t('hNe.engineering.products.waterproof')}}</p>
                </div>
            </div>
            </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'harness'
}
</script>
<style lang="scss">
.engineered-products-wrapper{
  .engineered-products{
    position: relative;
    .engineered-product-pic{
      min-height: 210px;
      position: relative;
      img{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    .engineered-product-description{
      .product-description-text{
        text-align: center;
        width: 100%;
        padding: 0 20px;
      }
    }
  }
}
</style>
