<script setup></script>
<template>
  <!-- nav bar -->
  <nav class="sticky top-0 navbar bg-blue-500 p-4 z-10">
    <div class="container mx-auto flex justify-between items-center">
      <a href="/" class="text-white text-2xl font-bold">Shop</a>
      <ul class="flex space-x-4">
        <li><router-link to="/" class="text-white">Home</router-link></li>
        <li>
          <router-link to="/products" class="text-white">Products</router-link>
        </li>
        <li>
          <router-link to="/about" class="text-white">About</router-link>
        </li>
        <li>
          <router-link to="/contact" class="text-white">Contact</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped></style>
