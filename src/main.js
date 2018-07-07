// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store.js'


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
  Table,
} from 'iview';




Vue.component('ivu-icon', Icon);
Vue.component('ivu-card', Card);
Vue.component('ivu-avatar', Avatar);
Vue.component('ivu-tag', Tag);
Vue.component('ivu-collapse', Collapse);
Vue.component('ivu-panel', Panel);
Vue.component('ivu-page', Page);
Vue.component('ivu-spin', Spin);
Vue.component('ivu-table',Table);
// Vue.component('ivu-input',Input);
// Vue.component('ivu-select',Select);
// Vue.component('ivu-switch',Switch);

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
  Input,
  Option,
  Select,
  Button
} from 'element-ui';

Vue.use(Col);
Vue.use(Row);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Input);
Vue.use(Option);
Vue.use(Select);
Vue.use(Button);

Vue.config.productionTip = false;

// 全局路由守卫
router.beforeEach((to, from, next) => {
  //隐藏侧边菜单
  store.dispatch('displayAside');
  next()

});

// router.afterEach((to, from) => {
// });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
