import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/product-detail/:id",
      name: "product-detail",
      component: () => import("../views/ProductView.vue"),
    },
  ],
});

export default router;
