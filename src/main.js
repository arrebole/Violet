// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store.js'

Vue.config.productionTip = false;

// iview
import 'iview/dist/styles/iview.css';
import {
  Row,
  Col,
  Icon,
  Card,
  Breadcrumb,
  BreadcrumbItem,
  Avatar,
  Tag,
  Collapse,
  Panel,
  Page,
  Spin
} from 'iview';
Vue.component('ivu-row', Row);
Vue.component('ivu-col', Col);
Vue.component('ivu-icon', Icon);
Vue.component('ivu-card', Card);
Vue.component('ivu-breadcrumb', Breadcrumb);
Vue.component('ivu-breadcrumbItem', BreadcrumbItem);
Vue.component('ivu-avatar', Avatar);
Vue.component('ivu-tag', Tag);
Vue.component('ivu-collapse', Collapse);
Vue.component('ivu-panel', Panel);
Vue.component('ivu-page', Page);
Vue.component('ivu-spin',Spin);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
