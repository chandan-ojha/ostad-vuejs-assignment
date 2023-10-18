import { createRouter, createWebHistory } from "vue-router";
const Home = () => import("../components/Home.vue");
const Login = () => import("../components/Login.vue");
const About = () => import("../components/About.vue");
const Contact = () => import("../components/Contact.vue");
const Products = () => import("../components/Products.vue");
const Product = () => import("../components/Product.vue");
const Sidebar = () => import("../components/Sidebar.vue");
const Protected = () => import("../components/Protected.vue");
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
    path: "/login",
    components: {
      default: Login,
      LeftSideBar: Sidebar,
    },
  },

  {
    path: "/about",
    components: {
      default: About,
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
    path: "/contact",
    components: {
      default: Contact,
      LeftSideBar: Sidebar,
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

  {
    path: "/protected",
    components: {
      default: Protected,
      LeftSideBar: Sidebar,
    },
    meta: {
      requiresAuth: true,
    },
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
