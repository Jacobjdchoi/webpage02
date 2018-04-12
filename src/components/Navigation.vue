<template>
    <div id="navigation" class="navigation">
        <!-- Mobile Start -->
        <show-at :breakpoints="{small: 960, medium: 1280, large: 1920}" breakpoint="small">
            <div class="mobile" id="mobile">
                <Slideout menu="#menu" 
                        panel="#panel" 
                        :toggleSelectors="['.toggle-button']" 
                        @on-open="open"
                        >
                    <nav id="menu">
                        <ul class="slideout-menu-list">
                            <li class="slideout-menu-item">
                                <router-link class="nav-mobile-link" to="/"><div>{{ $t("mainPage.title") }}</div></router-link>
                            </li>
                            <li class="slideout-menu-item">
                                <router-link class="nav-mobile-link" to="/about-us"><div>{{ $t("aboutUs.title") }}</div></router-link>
                            </li>
                            <li class="slideout-menu-item">
                                <router-link class="nav-mobile-link" to="/harness"><div>{{ $t("hNe.title") }}</div></router-link>
                            </li>
                            <li class="slideout-menu-item">
                                <router-link class="nav-mobile-link" to="/diakont"><div>{{ $t("diakont.title") }}</div></router-link>
                            </li>
                            <li class="slideout-menu-item">
                                <router-link class="nav-mobile-link" to="/e-tec"><div>{{ $t("eTec.title") }}</div></router-link>
                            </li>
                            <li class="slideout-menu-item">
                                <router-link class="nav-mobile-link" to="/glentek"><div>{{ $t("glentek.title") }}</div></router-link>
                            </li>
                            <li class="slideout-menu-item">
                                <router-link class="nav-mobile-link" to="/contact-us"><div>{{ $t("contactUs.title") }}</div></router-link>
                            </li>
                            <li class="slideout-menu-item">
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
                            </li>
                        </ul>
                    </nav>
                    <main id="panel">
                        <header>
                            <div class="header-flex">
                                <div class="header-item" id="toggle">
                                    <button class="toggle-button">
                                        <!-- ☰ -->
                                        <icon name="bars" scale="1.5"></icon>
                                    </button>
                                </div>
                                <div class="header-item" id="logo-link">
                                    <router-link class="nav-mobile-link mobile-logo-link" to='/'>
                                        <img id="mobile-logo" class="mobile-logo" src="@/assets/chois-logo.png">
                                    </router-link>
                                </div>
                                <div class="header-item" id="mail-link">
                                    <button class="toggle-button">
                                        <router-link to="/contact-us">
                                            <icon name="envelope-o" scale="1.5"></icon>
                                        </router-link>
                                    </button>
                                    
                                </div>
                            </div>
                        </header>
                        <div class="mobile-contents">
                            <slot name="mobile"></slot>
                        </div>
                    </main>
                </Slideout>
            </div>
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
                                        to="/about-us">
                                        <li class="nav-browser-link-item">{{ $t("aboutUs.title") }}</li>
                                    </router-link>
                                
                                    <router-link class="nav-browser-link" 
                                        to="/harness">
                                        <li class="nav-browser-link-item">
                                        {{ $t("hNe.title") }}
                                </li>
                                    </router-link>
                                    <router-link class="nav-browser-link" 
                                        to="/diakont">
                                <li class="nav-browser-link-item">
                                        {{ $t("diakont.title") }}
                                        </li>
                                    </router-link>
                                
                                
                                    <router-link class="nav-browser-link" 
                                        to="/e-tec">
                                        <li class="nav-browser-link-item">
                                        {{ $t("eTec.title") }}
                                </li>
                                    </router-link>
                               
                                    <router-link class="nav-browser-link" 
                                        to="/glentek">
                                         <li class="nav-browser-link-item">
                                        {{ $t("glentek.title") }}
                                </li>
                                    </router-link>
                                
                                    <router-link class="nav-browser-link" 
                                        to="/contact-us">
                                        <li class="nav-browser-link-item">
                                        {{ $t("contactUs.title") }}
                                        </li>
                                    </router-link>
                            </ul>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
            <div class="browser-contents">
                <slot class="browser-body" name="browser"></slot>
            </div>
        </hide-at>
        <!-- Browser End -->
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
    </div>
</template>
<script>
    import { showAt, hideAt } from 'vue-breakpoints'
    import Slideout from 'vue-slideout'

    export default {
        name: 'Navigation',
        components: { showAt, hideAt, Slideout },
        data(){
            return {
                trans: false
            }
        },
        computed: {
            
        },
        methods: {
            open(){
                console.log('slideoutOpen')
            },
            translate(bool){
                this.trans = bool
                if (this.trans === true ){
                    this.$i18n.locale = "en"
                } else {
                    this.$i18n.locale = "ko"
                }
                console.log( this.trans)
            }
        },
        mounted(){
            let bool;
            if (navigator.languages.includes("ko")|| navigator.languages.indexOf("ko-KO")) {
                bool = false;
            } else {
                bool = true;
            }
            this.translate(bool)
        }
    }
</script>

<style lang="scss">
$mobile-header-height: 8vh;
$mobile-header-shadow: 0 -3px 5px 5px #575757;
$browser-header-height: 13vh;
$browser-header-shadow: 0 6px 15px -4px rgb(0, 0, 0);
$footer-height: 10vh;
$footer-color: #142901;

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
        width: 50vw;
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
                height: 4vw;
                line-height: 4vw;
                .nav-browser-link {
                    font-size: $browser-header-height*0.13 ;
                    color: #505050;
                    box-sizing: border-box;
                    -moz-box-sizing: border-box;
                    -webkit-box-sizing: border-box;
                    .nav-browser-link-item {
                        vertical-align: -webkit-baseline-middle;
                    }
                    &.router-link-exact-active {
                        color: #520500;
                        font-size: $browser-header-height*0.14;
                        font-weight: 500;
                        border-bottom: 3px solid #520500;
                        transition: font-size 0.3s, font-weight 0.3s, color 0.3s;
                        &:hover {
                            color: #520500;
                            font-size: $browser-header-height*0.14;
                            font-weight: 500;
                        }
                    }
                    &:hover {
                        color: #770902;
                        font-size: $browser-header-height*0.14;
                        transition: font-size 0.2s,  color 0.2s;
                    }
                }
            }
        }
    }
}

$browser-large-header-height: 2vh;
@media only screen and (min-width: 1000px) {
    .nav-browser-link {
        font-size: $browser-large-header-height !important;
        &.router-link-exact-active {
            font-size: $browser-large-header-height*1.17 !important;
            &:hover {
                font-size: $browser-large-header-height*1.16 !important;
            }
        }
        &:hover {
            font-size: $browser-large-header-height*1.16 !important;
        }
    }
}
.browser-contents {
    margin: $browser-header-height 0;
    min-height: 100vh - $footer-height*2;
}

.header-flex-area {
    display: flex;
    flex-flow: row;
    flex-direction: row;
    height: 100%;
    justify-content: space-between;
}

/*
** vue-slideout styling
** https://github.com/vouill/vue-slideout
*/
body {
    width: 100%;
    //min-height: 100%;
    margin: 0;
}
.slideout-menu {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 256px;
    height: 100vh;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    z-index: 0;
    display: none;
    background-color: #1D1F20;
    color: white;
}
.slideout-menu-left {
    left: 0;
}
.slideout-menu-right {
    right: 0;
}
.slideout-menu-list {
    -webkit-padding-start: 0;
    list-style-type: none;
    .slideout-menu-item {
        height: 3em;
        text-align: center;
        .vue-js-switch#mobile-i18n-button {
            font-size: 18px;
        }
    }
}

.nav-mobile-link {
    color: white;
    text-decoration: none;
    div {
        font-weight: 700;
        font-size: 18px;
    }
}
.slideout-panel {
    background-color: white;
    color: black;
    position: relative;
    z-index: 1;
    will-change: transform;
    min-height: 100vh;
    overflow-y: scroll;
}
// .slideout-open,
// .slideout-open body,
// .slideout-open .slideout-panel {
//     overflow-x: hidden;
//     overflow-y: scroll;
// }
// .slideout-open .slideout-menu {
//     display: block;
// }
.slideout-open {
	overflow-x: hidden;
	overflow-y: scroll;
	body {
		// overflow-x: hidden;
		// overflow-y: scroll;
	}
	.slideout-panel {
		// overflow-x: hidden;
		// overflow-y: scroll;
	}
	.slideout-menu {
		display: block;
	}
}
header{
    width: 100%; 
    height: $mobile-header-height;
    position: fixed;
    top: 0; left: 0;
    box-shadow: $mobile-header-shadow;
    z-index: 1000;
    .header-flex{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        height: inherit;
        .header-item{
            height: inherit;
            .toggle-button{
                width: $mobile-header-height;
                height: inherit;
                border: none;
                font-size: $mobile-header-height/2;
                line-height: $mobile-header-height/2;
                background: white;
                color: #2c3e50;
                a {
                    color: #2c3e50;
                }
                &:focus {
                    outline: none;
                }
            }
            .nav-mobile-link{
                height: inherit;
                div {
                    width: inherit;
                    height: inherit;
                }
                .mobile-logo{
                    height: $mobile-header-height * 0.9;
                    padding: $mobile-header-height * 0.05;
                }
            }
            &#mail-link{
                width: $mobile-header-height;
            }
        }
    }
}
.mobile-contents{
    margin-top: $mobile-header-height;
}


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
