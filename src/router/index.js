import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Detail from "../views/Detail.vue";
import Detail2 from "../views/Detail2.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/detail/:id",
    name: "Detail",
    component: Detail,
    props: true,
  },
    {
    path: "/detail2/:id",
    name: "Detail2",
    component: Detail2,
    props: true,
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;