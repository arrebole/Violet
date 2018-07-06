// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store.js'

Vue.config.productionTip = false;

// 第三方css
import 'normalize.css/normalize.css';
import 'iview/dist/styles/iview.css';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';

import {
  Icon,
  Card,
  Avatar,
  Tag,
  Collapse,
  Panel,
  Page,
  Spin,
  Layout,
  Sider
} from 'iview';

Vue.component('ivu-icon', Icon);
Vue.component('ivu-card', Card);
Vue.component('ivu-avatar', Avatar);
Vue.component('ivu-tag', Tag);
Vue.component('ivu-collapse', Collapse);
Vue.component('ivu-panel', Panel);
Vue.component('ivu-page', Page);
Vue.component('ivu-spin', Spin);
Vue.component("ivu-layout", Layout);
Vue.component("ivu-sider", Sider);

// element-ui
import {
  Col,
  Row,
  Breadcrumb,
  BreadcrumbItem,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
} from 'element-ui';
Vue.use(Col);
Vue.use(Row);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
