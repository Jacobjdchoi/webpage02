<template>
    <transition name="sub-nav" appear>
        <div class="sub-navigation" v-if="items.length > 0 && typeof items !== undefined">
            <ul class="sub-nav-list">
                <router-link class="sub-nav-link" v-for="item in items" :to="item.path" :key="item.name">
                    <li class="sub-nav-item">{{ item.name }}</li>
                </router-link>
            </ul>
        </div>
    </transition>
</template>
<script>
import SubNavigationData from '../router/subnavigation'

export default {
    //props: [ 'navItems' ],
    data(){
        return {
            items: []
        }
    },
    methods: {
        subNavigationDataPass(){
            let path = this.$route.path;
            let mainCategory = path.split('/')[1]
            switch(mainCategory){
                case "corp":
                    this.items = SubNavigationData.aboutUs
                    // return SubNavigationData.aboutUs
                    break;
                case "hne":
                    this.items = SubNavigationData.hne
                    // return SubNavigationData.hne
                    break;
                case "products":
                    this.items = SubNavigationData.products
                    // return SubNavigationData.products
                    break;
                default:
                    this.items = [];
                    // return []
            }
        }
    },
    watch:{
        $route: function(to, from){
            this.subNavigationDataPass();
        }
    },
    created(){
        this.subNavigationDataPass();
    },
}
</script>
<style lang="scss">
.sub-navigation{
    display: table;
    width: 100%;
    margin: 0;
    .sub-nav-list{
        padding: 0;
        text-align: center;
        margin: 0;
        .sub-nav-link {
            display: inline-block;
            color: #333333;
            .sub-nav-item{
                display: inline-block;
                margin: 0 25px;
                font-size: 15px;
                padding: 14px 0;
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
                transform: scaleX(1);
                &::after {
                    transform: scaleX(1);
                }
                &:hover {
                    color: #520500;
                }
            }
            &:hover {
                color: #520500;
                transition: color 0.2s;
            }
        }
    }
}
.sub-nav-enter-active, .sub-nav-leave-active {
    transition: all .5s ease;
}
.sub-nav-enter, .sub-nav-leave-to{
    transform: translateY(-50px);
    opacity: 0;
}
</style>
