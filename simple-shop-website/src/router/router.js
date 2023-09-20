import { createRouter, createWebHistory } from "vue-router";
import About from "../components/About.vue";
import Contact from "../components/Contact.vue";
import Products from "../components/Products.vue";
import Product from "../components/Product.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Products,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/products",
    name: "Products",
    component: Products,
  },
  {
    path: "/product/:id",
    name: "Product",
    component: Product,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
