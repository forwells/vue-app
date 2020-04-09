import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';
import './app.scss';
// Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  el:"#application",
  router,
  render: (createElement) => {
    return createElement(App)
  }
})
