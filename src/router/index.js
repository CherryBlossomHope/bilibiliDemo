import Vue from 'vue'
import VueRouter from 'vue-router'
import indexPage from '../pages/index/index.vue'
import dynamic from '../pages/dynamic/dynamic.vue'
import personInit from '../pages/personCenter/personInit.vue'
import vipPurchase from '../pages/vipPurchase/vipPurchase.vue'
import recommend from '../pages/index/recommend.vue'
import liveStreaming from '../pages/index/liveStreaming.vue'
import serialNumber from '../pages/index/serialNumber.vue';

Vue.use(VueRouter)
export default new VueRouter({
    routes: [
        {
            //初始页面路由设置
            path: '',
            redirect: '/indexpage'
        },
        {
            path: '/indexpage',
            component: indexPage,
            children: [
                {
                    path: '',
                    redirect: 'recommend'
                },
                {
                    path: 'recommend',
                    component: recommend
                },
                {
                    path: 'liveStreaming',
                    component: liveStreaming
                },
                {
                    path: 'serialNumber',
                    component: serialNumber
                }
            ]
        },
        {
            path: '/dynamic',
            component: dynamic
        },
        {
            path: '/personinit',
            component: personInit
        },
        {
            path: '/vippurchase',
            component: vipPurchase
        },
    ]
})