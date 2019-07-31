import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/Home.vue";
import ShoppingCart1 from "./components/ShoppingCart1.vue";
import ShoppingCart2 from "./components/ShoppingCart2.vue";
import Order from "./components/Order.vue";
import Shouyingtai1 from "./components/Shouyingtai1.vue";
import Shouyingtai2 from "./components/Shouyingtai2.vue";
import Shouyingtai3 from "./components/Shouyingtai3.vue";
import Shouyingtai4 from "./components/Shouyingtai4.vue";
Vue.use(VueRouter);
export default new VueRouter({
  routes: [
    {
      path: "/vue-mozan/",
      component: Home
    },
    {
      path: "/vue-mozan/ShoppingCart1",
      component: ShoppingCart1
    },
    {
      path: "/vue-mozan/ShoppingCart2",
      component: ShoppingCart2
    },
    {
      path: "/vue-mozan/order",
      component: Order
    },
    {
      path: "/vue-mozan/shouyingtai1",
      component: Shouyingtai1
    },
    {
      path: "/shouyingtai2",
      component: Shouyingtai2
    },
    {
      path: "/shouyingtai3",
      component: Shouyingtai3
    },
    {
      path: "/shouyingtai4",
      component: Shouyingtai4
    }
  ],
  mode: "history"
});
