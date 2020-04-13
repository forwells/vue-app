import Vue from 'vue'
import Router from 'vue-router'

// 前台路由文件
import FrontendIndex from '@/components/frontend/page/index';
// 后台路由文件
import AdminIndex from '@/components/adminhtml/page/index';
import Dashboard from '@/components/adminhtml/tabs/dashboard';

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', name: 'frontend-index', component: FrontendIndex },
        { path: '/omas', name: 'admin-index', component: AdminIndex },
        { path: '/omas/dashboard', name: 'dashboard', component: Dashboard },
        
    ]
});
