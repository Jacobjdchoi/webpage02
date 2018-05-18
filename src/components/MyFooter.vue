<template>
    <footer class="footer">
        <div class="center-contents">
            <div class="copyright">
                <router-link to="contact-us" class="footer-router-link">
                    <p>
                        <span>© 2014 CHOIS TECHNICS INC. All Rights Reserved</span><br>
                        <span>{{ $t('choistechnics') }}</span><br>
                        <span>{{ $t('contactUs.info.address') }}</span><br>
                    </p>
                </router-link>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    name: 'MyFooter'
}
</script>
<style lang="scss">
$footer-height: 10vh;
$footer-color: #0c1900;

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
.md-theme-default {
    a:not(.md-button) {
        color: rgba(0, 0, 0, 0.87);
        &.footer-router-link{
            color: white !important;
            p {
                padding: 0.5em 0;
            }
        }
    }
}
.footer-router-link{
}
</style>
