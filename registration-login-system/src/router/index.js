import { createRouter, createWebHistory } from "vue-router";

const Login = () => import("../views/Login.vue");
const Register = () => import("../views/Register.vue");
const Dashboard = () => import("../components/Dashboard.vue");

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login,
    },
    {
      path: "/register",
      name: "Register",
      component: Register,
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard,
    },
  ],
});

export default router;
