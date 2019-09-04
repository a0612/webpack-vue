import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import fastClick from "fastclick";
import "@/utils/rem"

Vue.config.productionTip = false;
fastClick.attach(document.body);


// 创建Vue实例，并将实例挂载到id=app的元素上
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
