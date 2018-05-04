<template>
    <footer class="footer">
        <div class="center-contents">
            <div class="copyright">
                <p>
                    <span>© 2014 CHOIS TECHNICS INC. All Rights Reserved</span><br>
                    <span>{{ $t('choistechnics') }}</span><br>
                    <span>{{ $t('contactUs.info.address') }}</span><br>
                </p>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    name: 'Footer'
}
</script>
<style lang="scss">
    footer {
        background: $footer-color;
        color: white;
        font-weight: bold;
        font-size: 12px;
        width: 100%;
        min-height: $footer-height;
        user-select: text;
        -webkit-user-select: text;
        -moz-user-select: text; 
    }
</style>
