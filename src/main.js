import Vue from "vue";
import App from "./App.vue";

import VueResource from "vue-resource";
import VueRouter from "vue-router";
import Routes from "./routes";

// Router
Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes
});
//filters
Vue.filter("to-uppercase", val => {
  return val.toUpperCase();
});

Vue.filter("snippet", val => {
  return val.slice(0, 100) + "...";
});
//Custome Directive
Vue.directive("rainbow", {
  bind(el, binding, vnode) {
    el.style.color =
      "#" +
      Math.random()
        .toString()
        .slice(2, 8);
  }
});

Vue.directive("theme", {
  bind(el, binding, vnode) {
    if (binding.value == "wide") {
      el.style.maxWidth = "1200px";
    } else if (binding.value == "narrow") {
      el.style.maxWidth = "560px";
    }
    if (binding.arg == "column") {
      (el.style.background = "#ddd"), (el.style.padding = "20px");
    }
  }
});
// Vue-resource makes HTTP requests
Vue.use(VueResource);

new Vue({
  el: "#app",
  render: h => h(App),
  router: router
});
