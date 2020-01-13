import Vue from 'vue'
import Router from 'vue-router'
import adminHtmlPage from '@/components/adminhtml/Page/index.vue'
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes:[{
        path: '/omas',
        name: 'adminhtml',
        component: adminHtmlPage
        },
        {
            path:'/Page',
            name: 'Page',
            component:resolve => require(['@/components/adminhtml/Page/index.vue'], resolve)
        }]
});
