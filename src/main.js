import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import  ElementUI from 'element-ui'
import echarts from 'echarts'
import i18n from './i18n';
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.min.css'
import locale from 'element-ui/lib/locale/lang/en' 
import '@/styles/index.scss'
 import 'xe-utils'
      import VXETable from 'vxe-table'
      import 'vxe-table/lib/index.css'
Vue.use(ElementUI);
import { global } from '@/global/global'
Vue.use(router);
Vue.use(ElementUI, {
  size: 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})
Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts;
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
