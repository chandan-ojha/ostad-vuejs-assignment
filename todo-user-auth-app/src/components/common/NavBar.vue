<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <!-- Navigation Bar -->
  <nav class="bg-blue-500 text-white p-3 sticky top-0">
    <div class="container mx-auto flex justify-between items-center">
      <a href="/" class="text-2xl font-semibold">
        Pinia
        <img
          src="https://img.icons8.com/emoji/48/000000/pineapple-emoji.png"
          alt="pineapple"
          width="30"
          height="30"
          class="inline-block align-text-top"
        />
      </a>
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
