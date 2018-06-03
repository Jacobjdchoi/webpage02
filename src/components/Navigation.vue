<template>
    <div id="navigation" class="navigation">
        <!-- Mobile Start -->
        <show-at :breakpoints="{small: 960, medium: 1280, large: 1920}" breakpoint="small">
            <div class="mobile" id="mobile">
                <md-toolbar class="mob-toolbar">
                    <md-button class="mob-toolbar-item md-icon-button" @click="showNavigation = true">
                        <icon name="bars" scale="1.5"></icon>
                    </md-button>
                    <div class="mob-toolbar-item" id="logo-link">
                        <router-link class="nav-mobile-link mobile-logo-link" to='/'>
                            <img id="mobile-logo" class="mobile-logo" src="@/assets/chois-logo.png">
                        </router-link>
                    </div>
                    <md-button class="mob-toolbar-item md-icon-button" id="mail-link">
                        <router-link to="/contact-us">
                            <icon name="envelope-o" scale="1.5"></icon>
                        </router-link>
                    </md-button>
                </md-toolbar>
                <md-drawer :md-active.sync="showNavigation">
                    <md-toolbar class="md-transparent" md-elevation="0">
                        <span class="md-title">{{ $t('choistechnics') }}</span>
                    </md-toolbar>
                    <md-list>
                            <md-list-item>
                                <router-link class="nav-mobile-link" to="/"><div>{{ $t("mainPage.title") }}</div></router-link>
                            </md-list-item>
                            <md-list-item md-expand>
                                <span class="md-list-item-text">{{ $t("aboutUs.title") }}</span>
                                <md-list slot="md-expand">
                                    <md-list-item class="md-inset">
                                        <router-link class="nav-mobile-link" to="/corp/about-us"><div>{{ $t("aboutUs.title") }}</div></router-link>
                                    </md-list-item>
                                    <md-list-item class="md-inset">
                                        <router-link class="nav-mobile-link" to="/corp/organization"><div>{{ 'Organization' }}</div></router-link>
                                    </md-list-item>
                                    <md-list-item class="md-inset">
                                        <router-link class="nav-mobile-link" to="/corp/area-of-business"><div>{{ 'Areas of Business' }}</div></router-link>
                                    </md-list-item>
                                </md-list>
                            </md-list-item>
                            <md-list-item md-expand>
                                <span class="md-list-item-text">{{ $t("hNe.title") }}</span>
                                <md-list slot="md-expand">
                                    <md-list-item class="md-inset">
                                        <router-link class="nav-mobile-link" to="/hne/harness"><div>{{ $t("hNe.title") }}</div></router-link>
                                    </md-list-item>
                                    <md-list-item class="md-inset">
                                        <router-link class="nav-mobile-link" to="/hne/engineering"><div>{{ 'Engineering' }}</div></router-link>
                                    </md-list-item>
                                    <md-list-item class="md-inset">
                                        <router-link class="nav-mobile-link" to="/hne/military"><div>{{ 'Military' }}</div></router-link>
                                    </md-list-item>
                                    <md-list-item class="md-inset">
                                        <router-link class="nav-mobile-link" to="/hne/medical"><div>{{ 'Medical' }}</div></router-link>
                                    </md-list-item>
                                </md-list>
                            </md-list-item>
                            <md-list-item md-expand>
                                <span class="md-list-item-text">Products</span>
                                <md-list slot="md-expand">
                                    <md-list-item class="md-inset">
                                        <router-link class="nav-mobile-link" to="/products/diakont"><div>{{ $t("diakont.title") }}</div></router-link>
                                    </md-list-item>
                                    <md-list-item class="md-inset">
                                        <router-link class="nav-mobile-link" to="/products/e-tec"><div>{{ $t("eTec.title") }}</div></router-link>
                                    </md-list-item>
                                    <md-list-item class="md-inset">
                                        <router-link class="nav-mobile-link" to="/products/glentek"><div>{{ $t("glentek.title") }}</div></router-link>
                                    </md-list-item>
                                    <md-list-item class="md-inset">
                                        <router-link class="nav-mobile-link" to="/products/vairex"><div>{{ $t("vairex.title") }}</div></router-link>
                                    </md-list-item>
                                </md-list>
                            </md-list-item>
                            <md-list-item>
                                <router-link class="nav-mobile-link" to="/contact-us"><div>{{ $t("contactUs.title") }}</div></router-link>
                            </md-list-item>
                            <md-list-item>
                                <span class="nav-mobile-link">Language</span>
                                <toggle-button :value="true" 
                                    id="mobile-i18n-button"
                                    v-model="trans"
                                    :color="{checked: '#e40d00', unchecked: '#207100'}"
                                    :sync="true" 
                                    :labels='{checked: "English", unchecked: "한국어"}'
                                    :width='100'
                                    :click="translate(trans)"
                                />
                            </md-list-item>
                    </md-list>
                </md-drawer>

                <md-content>
                    <div class="mobile-contents">
                        <slot name="mobile"></slot>
                    </div>
                </md-content>
            </div> <!-- .mobile#mobile --> 
        </show-at>
        <!-- Mobile End -->


        <!-- Browser Start -->
        <hide-at :breakpoints="{small: 960, medium: 1280, large: 1920}" breakpoint="small">
            <div class="browser-header" id="browser-header">
                <div class="center-contents header-flex-area">
                    <div class="logo-area header-flex-item">
                        <router-link class="nav-browser-link browser-logo-link" to='/'>
                            <img id="browser-logo" class="browser-logo" src="@/assets/chois-logo.png">
                        </router-link>
                    </div>
                    <div class="links-area header-flex-item">
                        <div class="lang-support">
                            <toggle-button
                                id="browser-i18n-button"
                                :color="{checked: '#e40d00', unchecked: '#207100'}"
                                v-model="trans"
                                :sync="true"
                                :labels='{checked: "En", unchecked: "Ko"}'
                                :click="translate(trans)"
                            />
                        </div>
                        <div class="nav-browser-link-area">
                            <ul class='nav-browser-link-list'>
                                <router-link class="nav-browser-link" 
                                    to="/corp">
                                    <li class="nav-browser-link-item">
                                        {{ $t("aboutUs.title") }}
                                    </li>
                                </router-link>
                            
                                <router-link class="nav-browser-link" 
                                    to="/hne">
                                    <li class="nav-browser-link-item">
                                        {{ $t("hNe.title") }}
                                    </li>
                                </router-link>

                                <router-link class="nav-browser-link" 
                                    to="/products">
                                    <li class="nav-browser-link-item">
                                        {{ $t("productsTitle") }}
                                    </li>
                                </router-link>

                                <router-link class="nav-browser-link" 
                                    to="/contact-us">
                                    <li class="nav-browser-link-item">
                                        {{ $t("contactUs.title") }}
                                    </li>
                                </router-link>

                            </ul> <!-- nav-browser-link-list -->
                        </div> <!-- nav-browser-link-area -->
                    </div> <!-- links-area header-flex-item -->
                </div> <!-- center-contents header-flex-area -->
            </div> <!-- browser-header -->
            <div class="browser-contents">
                <sub-navigation></sub-navigation>
                <slot class="browser-body" name="browser"></slot>
            </div>
        </hide-at>
        <!-- Browser End -->
        <!-- <back-to-top bottom="50px" right="50px" visibleoffset="50">
            <md-button type="button" class="md-icon-button btn-to-top">
                <icon name="cheveron-up" scale="1.5"></icon>
            </md-button>
        </back-to-top> -->
        <back-to-top bottom="1.5em" right="1.5em" visibleoffset="50">
            <button type="button" class="btn btn-info btn-to-top">
                <icon name="chevron-up" scale="1.5"></icon>
            </button>
        </back-to-top>

        <my-footer></my-footer>
    </div>
</template>
<script>
import { showAt, hideAt } from 'vue-breakpoints'
import SubNavigation from '@/components/SubNavigation.vue'
import MyFooter from '@/components/MyFooter.vue'
import BackToTop from 'vue-backtotop'

export default {
    name: 'Navigation',
    components: { showAt, hideAt, SubNavigation, MyFooter, BackToTop },
    data(){
        return {
            trans: false,
            navDropdownHighlight: false,
            showNavigation: false,
        }
    },
    methods: {
        open(){
        },
        translate(bool){
            this.trans = bool
            if (this.trans === true ){
                this.$i18n.locale = "en"
            } else {
                this.$i18n.locale = "ko"
            }
        },
    },
    mounted(){
        let bool;
        if (navigator.languages.includes("ko")|| navigator.languages.indexOf("ko-KO")) {
            bool = false;
        } else {
            bool = true;
        }
        this.translate(bool);
    },
    updated(){
        // this keeps running after updated
        // this.SubNavigationDataPass();
    },
    beforeUpdate(){
        // this.SubNavigationDataPass();
    }
}
</script>

<style lang="scss">
$mobile-header-height: 8vh;
$mobile-header-shadow: 0 -3px 5px 5px #575757;
$browser-header-height: 100px;
$browser-header-shadow: 0 6px 15px -4px unquote($string: "#00000024");


#browser-header.browser-header {
    width: 100%;
    height: $browser-header-height;
    box-shadow: $browser-header-shadow;
    position: fixed;
    top: 0; left: 0;
    z-index: 1000;
    background: white;
    .logo-area{
        .nav-browser-link {
            .browser-logo {
                height: $browser-header-height*0.8;
                margin: $browser-header-height*0.1 0;
            }
        }
    }
    .links-area {
        position: relative;
        height: $browser-header-height;
        padding: $browser-header-height*0.1 0 0 0;
        width: 53vw;
        .lang-support {
            position: absolute;
            top: $browser-header-height*0.1; right: 0;
        }
        .nav-browser-link-area {
            position: absolute;
            right: 0; bottom: 0;
            width: 100%;
            ul.nav-browser-link-list{
                width: 100%;
                list-style-type: none;
                padding: 0;
                margin: 0;
                display: inline-flex;
                justify-content: space-between;
                .nav-browser-link {
                    font-size: $browser-header-height*0.15 !important ;
                    color: #333333;
                    letter-spacing: -0.2px;
                    box-sizing: border-box;
                    -moz-box-sizing: border-box;
                    -webkit-box-sizing: border-box;
                    min-width: 120px;
                    text-align: center;
                    display: inline-block;
                    .nav-browser-link-item {
                        display: inline-block;
                        margin: 0 17px;
                        font-size: 17px;
                        padding: 14px 0;
                        cursor: pointer;
                    }
                    &::after{
                        content: "";
                        display: block;
                        border-bottom: 6px solid #520500;
                        transition: all 250ms ease-in-out;
                        transform: scaleX(0);
                    }
                    &.router-link-active {
                        color: #520500;
                        font-weight: 500;
                        &::after{
                            transform: scaleX(1);
                        }
                        &:hover {
                            color: #520500;
                            font-weight: 500;
                        }
                    }
                    &:hover {
                        color: #770902;
                        transition: color 0.2s;
                    }
                }
            }
        }
    }
}
.browser-contents {
    margin: $browser-header-height 0 0 0;
    //min-height: 80vh;
}
.header-flex-area {
    display: flex;
    justify-content: space-between;
    .header-flex-item {
    }
}

@media only screen and (max-width: 960px){

}
@media screen and (max-width: 1280px) and (min-width: 960px){
    // .links-area {
    //     width: 55vw !important;
    //     .nav-browser-link-area{
    //         .nav-browser-link-list{
    //             .nav-browser-link{
    //                 .nav-browser-link-item{
    //                     margin: 0 !important;
    //                 }
    //             }
    //         }
    //     }
    // }
}
@media only screen and (min-width: 1280px){

}


// mobile
.mob-toolbar {
    display: flex;
    justify-content: space-between
}
#mobile-logo {
    height: 50px;
    padding: 5px;
}
#mobile > div.md-drawer.md-theme-default.md-temporary.md-active {
    width: 230px !important;
}



.btn-to-top {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-size: 22px;
    line-height: 22px;
    
    .fa-icon{
        color: #1b4600;
    }
}

</style>
