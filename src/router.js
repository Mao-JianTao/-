import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            component: () =>
                import ('./views/Home.vue'),
            children: []
        },
        {
            path: '/xiao',
            component: () =>
                import ('./views/Xiao.vue'),
        },
        {
            path: '/home',
            component: () =>
                import ('./views/Home.vue'),
        },
        {
            path: '/sou',
            component: () =>
                import ('./views/Sou.vue')
        }

    ]
})