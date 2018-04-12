<template>
  <div>
    <h1 class="page-title">{{ $t('hNe.title') }}</h1>
    <div class="center-contents">
      <div id="harness" class="body">
          <h1>{{ $t('hNe.harness.title') }}</h1>
          <h2>{{ $t('hNe.harness.medical.title') }}</h2>
          <img class="harness-image" src="@/assets/m1.jpg" alt="Medical Cables">
          <h3>{{ $t('hNe.harness.medical.h2') }}</h3>
          <p>
            {{ $t('hNe.harness.medical.p') }}
          </p>

          <h2>{{ $t('hNe.harness.industrial.title') }}</h2>
          <img class="harness-image" src="@/assets/m2.jpg" alt="Industrial Cables">
          <h3>{{ $t('hNe.harness.industrial.h2') }}</h3>
          <p>
            {{ $t('hNe.harness.industrial.p') }}
          </p>

          <h2>{{ $t('hNe.harness.military.title') }}</h2>
          <img class="harness-image" src="@/assets/m3.jpg" alt="Military Cables">
          <h3>{{ $t('hNe.harness.military.h2') }}</h3>
          <p>
            {{ $t('hNe.harness.military.p') }}
          </p>

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
          <h2>{{ $t('hNe.engineering.qmsc.title') }}</h2>
          <div class="qmsc-certs-area md-layout md-gutter">
            <div class="qmsc-certs-link-area md-layout-item md-medium-size-50 md-small-size-100 md-xsmall-size100">
              <a class="qmsc-certs-link" href="/static/QMSC_KO.pdf" target="_blank">
                <img class="qmsc-certs-img" src="@/assets/QMSC_KO.png" />
                <div class="qmsc-certs-desc">{{ $t('hNe.engineering.qmsc.ko_version') }}</div>
              </a>
            </div>
            <div class="qmsc-certs-link-area md-layout-item md-medium-size-50 md-small-size-100 md-xsmall-size100">
              <a class="qmsc-certs-link" href="/static/QMSC_EN.pdf" target="_blank">
                <img class="qmsc-certs-img" src="@/assets/QMSC_EN.png" />
                <div class="qmsc-certs-desc">{{ $t('hNe.engineering.qmsc.en_version') }}</div>
              </a>
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
.harness-image{
  width: 100%;
}

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
.qmsc-certs-area {
  .qmsc-certs-link-area{
    .qmsc-certs-link {
    .qmsc-certs-img {
      max-width: 250px;
    }
  }
  }
}
</style>
