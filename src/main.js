// stylesheets
import '@/assets/css/resets.scss'
import '@/assets/fonts/font.css'
import '@/assets/css/variables.scss'
import 'ant-design-vue/dist/antd.css'
import '@/assets/css/global.scss'

import Vue from 'vue'
import { DatePicker, Icon } from 'ant-design-vue';
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'

Vue.config.devtools = false;
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Icon);
Vue.use(DatePicker);
new Vue({
  el:"#application",
  router,
  render: (createElement) => {
    return createElement(App)
  }
})
