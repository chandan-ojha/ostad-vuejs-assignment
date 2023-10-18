<script setup>
import { authStore } from "../store/authStore";
import { cartStore } from "../store/cartStore";
const auth = authStore;
const cart = cartStore;
</script>
<template>
  <section class="mt-[40px] text-white p-5">
    <ul class="flex flex-col space-y-5">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/products">Products</router-link>
      </li>
      <li>
        <router-link to="/cart">Cart ({{ cart.totalCartItems }})</router-link>
      </li>
      <li v-if="auth.isAuthenticated">
        <router-link to="/orders"> Orders </router-link>
      </li>
      <li v-if="auth.user?.role == 'admin'">
        <router-link to="/admin">Admin</router-link>
      </li>
      <li v-if="auth.user?.role == 'editor' || auth.user?.role == 'admin'">
        <router-link to="/editor">Editor</router-link>
      </li>
      <li v-if="!auth.isAuthenticated">
        <router-link to="/login">Login</router-link>
      </li>
      <li v-if="!auth.isAuthenticated">
        <router-link to="/register">Register</router-link>
      </li>
    </ul>
  </section>
</template>

<style></style>
