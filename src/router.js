import Vue from 'vue'
import Router from 'vue-router'
import adminIndex from '@/components/adminhtml/page/index.vue'
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes:[{
        path: '/omas',
        name: 'admin-index',
        component: adminIndex
    }]
});
