<template>
    <div>
        <h1 class="page-title">{{ title }}</h1>
        <div class="center-contents">
            <div id="medical" class="body">
                <h2>{{ $t('hNe.harness.medical.title') }}</h2>
                <img class="harness-image" src="@/assets/m1.jpg" alt="Medical Cables">
                <h3>{{ $t('hNe.harness.medical.h2') }}</h3>
                <p>
                {{ $t('hNe.harness.medical.p') }}
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Medical Application',
    data(){
        return {
            title: 'Medical Application'
        }
    }
}
</script>
<style lang="scss">

</style>
