import { createRouter, createWebHistory } from "vue-router";
const Home = () => import("../components/Home.vue");
const Register = () => import("../components/Register.vue");
const Login = () => import("../components/Login.vue");
const Products = () => import("../components/Products.vue");
const Product = () => import("../components/Product.vue");
const Sidebar = () => import("../components/Sidebar.vue");
const Cart = () => import("../components/Cart.vue");
const Orders = () => import("../components/Orders.vue");

const Admin = () => import("../components/Admin.vue");
const Editor = () => import("../components/Editor.vue");

import { authStore } from "../store/authStore";

const routes = [
  {
    path: "/",
    components: {
      default: Home,
      LeftSideBar: Sidebar,
    },
  },

  {
    path: "/register",
    components: {
      default: Register,
      LeftSideBar: Sidebar,
    },
  },

  {
    path: "/login",
    components: {
      default: Login,
      LeftSideBar: Sidebar,
    },
  },

  {
    path: "/admin",
    components: {
      default: Admin,
      LeftSideBar: Sidebar,
    },
    meta: {
      requiresAuth: true,
      role: "admin",
    },
  },

  {
    path: "/editor",
    components: {
      default: Editor,
      LeftSideBar: Sidebar,
    },
    meta: {
      requiresAuth: true,
      role: "editor",
    },
  },

  {
    path: "/products",
    components: {
      default: Products,
      LeftSideBar: Sidebar,
    },
  },

  {
    path: "/cart",
    components: {
      default: Cart,
      LeftSideBar: Sidebar,
    },
  },

  {
    path: "/orders",
    components: {
      default: Orders,
      LeftSideBar: Sidebar,
    },
  },

  {
    path: "/products/:id",
    components: {
      default: Product,
      LeftSideBar: Sidebar,
    },
    name: "product",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const auth = authStore;

  if (to.meta.requiresAuth && !auth.isAuthenticated) {
    next("/login");
  } else if (to.meta.role == "admin" && auth.user.role != "admin") {
    next("/");
  } else {
    next();
  }
});

export default router;
