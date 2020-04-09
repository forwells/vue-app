<<<<<<< HEAD
import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';
import './app.scss';
=======
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import requester from './requester'
>>>>>>> 4afda5068c31b95f03a6742c9132946a01e4528d
// Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  el:"#application",
  router,
  render: (createElement) => {
    return createElement(App)
  }
})
