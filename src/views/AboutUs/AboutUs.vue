<template>
    <div>
        <h1 class="page-title">{{ $t('aboutUs.title') }}</h1> 
        <div class="center-contents">
            <div id="about-us" class="body">
                <div class="about-us-intro">
                    <p class="intro-ps" id="p0">
                        {{ $t('aboutUs.intro.p0') }}
                    </p>
                    <p class="intro-ps" id="p1">
                        {{ $t('aboutUs.intro.p1') }}
                    </p>
                    <p class="intro-ps" id="p2">
                        {{ $t('aboutUs.intro.p2') }}
                    </p>
                </div>
            </div> <!-- #about-us.body -->
        </div> <!-- .center-contents -->
    </div> 
</template>
<script>
export default {
  name: 'AboutUs',
  data(){
      return{
      }
  }
}
</script>
<style lang="scss">


</style>
