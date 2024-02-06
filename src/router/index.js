import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/",
      component: {
        render(c) {
          return c("router-view");
        },
      },
      children: [
        {
          path: "/formulario",
          name: "formulario",
          component: () => import("../views/Formulario.vue"),
        },
        {
          path: "/landing-page",
          name: "landing-page",
          component: () => import("../views/LandingPage.vue"),
        },
        {
          path: "/paginacion",
          name: "paginacion",
          component:()=> import("../views/Paginacion.vue")
        }
      ],
    },
  ],
});

export default router;
