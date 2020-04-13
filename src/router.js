import Vue from 'vue'
import Router from 'vue-router'

// 前台路由文件
import FrontendIndex from '@/components/frontend/page/index';
// 后台路由文件
import AdminIndex from '@/components/adminhtml/page/index';

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/omas',
            name: 'admin-index',
            component: AdminIndex
        },
        {
            path: '/',
            name: 'frontend-index',
            component: FrontendIndex
        },
    ]
});
