<template>
    <div>
        <h1 class="page-title">{{ title }}</h1>
        <div class="center-contents">
            <div id="military" class="body">
                <h2>{{ $t('hNe.harness.military.title') }}</h2>
                <img class="harness-image" src="@/assets/m3.jpg" alt="Military Cables">
                <h3>{{ $t('hNe.harness.military.h2') }}</h3>
                <p>
                {{ $t('hNe.harness.military.p') }}
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Military Application',
    data(){
        return {
            title: 'Military Application'
        }
    }
}
</script>
<style lang="scss">

</style>
