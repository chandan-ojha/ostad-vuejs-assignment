<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <!-- Navigation Bar -->
  <nav class="bg-blue-500 text-white p-4">
    <div class="container mx-auto flex justify-between items-center">
      <a href="#" class="text-2xl font-semibold">Pinia</a>
      <ul class="flex space-x-4">
        <li>
          <RouterLink to="/" class="hover:text-gray-300">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/login" class="hover:text-gray-300">Login</RouterLink>
        </li>
        <li>
          <RouterLink to="/register" href="#" class="hover:text-gray-300">
            Register
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
