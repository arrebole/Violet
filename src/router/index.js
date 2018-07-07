import Vue from 'vue';
import Router from 'vue-router';
// component
import Home from '../views/home';
import Articles from '../views/articles';
import Error from "../views/error";
import Column from "../views/column";
import Read from "../views/read";
import { AdminDatabase } from "../views/admin";
import Login from "../views/login";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/articles',
      name: 'Articles',
      component: Articles
    },
    {
      path: '/articles/cv:cvId',
      name: 'Column',
      component: Column,
    },
    {
      path: '/articles/cv:cvId/page:page',
      name:'Read',
      component: Read
    },
    {
      path: '/admin/database',
      name: "AdminDatabase",
      component: AdminDatabase,
    },
    {
      path: '/login',
      name:"Login",
      component: Login
    },
    {
      path: '/video',
      name: 'Video',
      component: Error
    },
    {
      path: '/firmware',
      name: 'Firmware',
      component: Error
    },
    {
      path: '/images',
      name: 'Images',
      component: Error
    },
    {
      path: '/error',
      name: 'Error',
      component: Error
    },
    {
      path: '*',
      redirect: '/error'
    },
  ],
  //异步滚动
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          x: 0,
          y: 0
        })
      }, 200)
    })
  }

})
