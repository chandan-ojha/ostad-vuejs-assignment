<script setup>
import NavBar from "./components/common/NavBar.vue";
import Footer from "./components/common/Footer.vue";
</script>

<template>
  <NavBar />
  <div class="container mx-auto mt-8">
    <div
      class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-y-8 place-items-center"
    >
      <router-view />
    </div>
  </div>
  <Footer />
</template>

<style scoped></style>
