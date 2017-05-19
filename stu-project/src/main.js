// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import vr from 'vue-resource'
import 'iview/dist/styles/iview.css';
import 'element-ui/lib/theme-default/index.css'
import ElementUI from 'element-ui'
import $ from 'jquery'

Vue.use(ElementUI);
Vue.use(vr);
Vue.use(iView);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})