<script setup>
import { RouterView } from "vue-router";
import NavBar from "./components/common/NavBar.vue";
import Footer from "./components/common/Footer.vue";
</script>

<template>
  <NavBar />
  <div class="container mx-auto mt-8">
    <RouterView />
  </div>
  <Footer />
</template>

<style scoped></style>
