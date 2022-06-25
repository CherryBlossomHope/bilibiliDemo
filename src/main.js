import Vue from 'vue'
import App from './App.vue'

//引入路由器
import router from './router'
Vue.config.productionTip = false

//引入ElementUI插件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//引入二次封装axios
import axios from "./api/axios";
Vue.prototype.axios = axios;

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
