import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import "./assets/element-variables.scss";
import "./assets/global.css";
import { Tooltip, Dialog, Button, Form, Select, Option } from "element-ui";
Vue.use(Tooltip);
Vue.use(Dialog);
Vue.use(Button);
Vue.use(Form);
Vue.use(Select);
Vue.use(Option);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store,
  router
}).$mount("#app");
