import Vue from "vue";
import Router from "vue-router";

const lazyLoad = fileName => {
  return require('@/views/' + fileName + '.vue').default
}

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: lazyLoad('home')
    },
    {
      path: '/profile',
      name: 'profile',
      component: lazyLoad('profile')
    }
  ]
});
