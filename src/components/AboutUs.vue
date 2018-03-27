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

                <h2 class="about-us-bDiv-title">{{ $t('aboutUs.bDiv') }}</h2>

                <img src="@/assets/b-div.jpg" alt="business divisions" title="business divisions" border="0">

                <h2>{{ $t('aboutUs.bArea.title') }}</h2>
                <table>
                    <tbody>
                        <tr>
                            <td>*</td>
                            <td>{{ $t('aboutUs.bArea.b0') }}</td>
                        </tr>
                        <tr>
                            <td>*</td>
                            <td>{{ $t('aboutUs.bArea.b1') }}</td>
                        </tr>
                        <tr>
                            <td>*</td>
                            <td>{{ $t('aboutUs.bArea.b2') }}</td>
                        </tr>
                        <tr>
                            <td>*</td>
                            <td>{{ $t('aboutUs.bArea.b3') }}</td>
                        </tr>
                        <tr>
                            <td>*</td>
                            <td>{{ $t('aboutUs.bArea.b4') }}</td>
                        </tr>
                        <tr>
                            <td>*</td>
                            <td>{{ $t('aboutUs.bArea.b5') }}</td>
                        </tr>
                        <tr>
                            <td>*</td>
                            <td>{{ $t('aboutUs.bArea.b6') }}</td>
                        </tr>
                        <tr>
                            <td>*</td>
                            <td>{{ $t('aboutUs.bArea.b7') }}</td>
                        </tr>
                        <tr>
                            <td>*</td>
                            <td>{{ $t('aboutUs.bArea.b8') }}</td>
                        </tr>
                        <tr>
                            <td>*</td>
                            <td>{{ $t('aboutUs.bArea.b9') }}</td>
                        </tr>

                    </tbody>
                </table>
                

            </div>
        </div>
    </div> 
</template>
<script>
export default {
  name: 'AboutUs',
  data(){
      return{
          title: 'About Us'
      }
  }
}
</script>
<style lang="scss">


</style>
