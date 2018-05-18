<template>
    <div>
        <h1 class="page-title">{{ title }}</h1>
        <div class="center-contents">
            <div id="industrial" class="body">
                <h2>{{ $t('hNe.harness.industrial.title') }}</h2>
                <img class="harness-image" src="@/assets/m2.jpg" alt="Industrial Cables">
                <h3>{{ $t('hNe.harness.industrial.h2') }}</h3>
                <p>
                {{ $t('hNe.harness.industrial.p') }}
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Industrial Application',
    data(){
        return {
            title: 'Industrial Application'
        }
    }
}
</script>
<style lang="scss">

</style>
