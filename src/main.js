import Vue from 'vue'
import App from './App'
import router from './router'
//引入ui库
import elementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(elementUi)
//引入数据管理状态
import store from './store/store'
//引入过滤器
import filters from './filters/filter'
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
});
//引入公共组件
import common from './commonComponent/common'
Vue.use(common);
Vue.component('my-common', common);
//引入公共方法
import meths from '@/commonMethods/commonJs'
Vue.prototype.comMethods = meths;
//引入请求数据方法
import apiAddress from "./http/httpSend";
Vue.prototype.$http = apiAddress
Vue.config.productionTip = false;
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App, common
  },
  template: '<App/>'
});
