import Vue from "vue";
import App from "./App.vue";
import Bootstrap from "bootstrap"

Vue.config.productionTip = false;

new Vue({
	Bootstrap,
  render: h => h(App)
}).$mount("#app");
