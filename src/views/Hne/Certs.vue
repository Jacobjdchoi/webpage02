<template>
  <div>
    <h1 class="page-title">{{ 'Certificates & Patents' }}</h1>
    <div class="center-contents">
      <div id="certs" class="body">
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
  name: 'certs'
}
</script>
<style lang="scss">
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
