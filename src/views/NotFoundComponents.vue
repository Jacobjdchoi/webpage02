<template>
    <div class="center-contents" id="page-not-found">
        <h1>{{$t('pageNotFound.title')}}</h1>
        <p>{{ $t('pageNotFound.message') }}</p>
        <router-link to="/">{{ $t('pageNotFound.linkText') }}</router-link>
    </div>
</template>
<script>
export default {
  name: 'NotFoundComponents',
  data(){
      return {}
  }
}
</script>
<style lang="scss">
div#page-not-found{
    padding: 25px;
    h1 {
        line-height: 28px;
    }
}
</style>
