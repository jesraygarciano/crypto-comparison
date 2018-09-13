import Vue from "vue";
import App from "./App.vue";
import Bootstrap from "bootstrap";
import Axios from "axios";
import Vue2Filters from "vue2-filters";

Vue.config.productionTip = false;

new Vue({
  Bootstrap,
  Axios,
  Vue2Filters,
  render: h => h(App)
}).$mount("#app");
