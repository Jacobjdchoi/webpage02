<template>
    <router-view></router-view>
</template>
<script>
export default {
    name: 'Products Main'
}
</script>
<style lang="scss">
.supplier-info {
  width: 100%;
  height: auto;
  min-height: 200px;
  // margin: 2vh 0 0 0;
  .supplier-logo-area {
    text-align: center;
  }
  .supplier-intro {
    p.supplier-intro-paragraph {
      margin: 0;
      font-size: 18px;
      line-height: 26px;
      padding-bottom: 10px;
    }
  }
}
.vue-tabs {
  padding: 0 1em;
}

.supplier-website-link {
  width: 100%;
  height: 20px;
  font-size: 20px;
  margin-bottom: 15px; 
  text-align: right;
  padding: 0 1em;
}
.supplier-intro-area {
  margin-bottom: 15px;
}
</style>
