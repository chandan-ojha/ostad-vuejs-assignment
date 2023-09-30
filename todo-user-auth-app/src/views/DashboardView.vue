<script setup>
import { authStore } from "../stores/authStore";
const auth = authStore();
</script>
<template>
  <div class="bg-gray-100 font-sans flex justify-center items-center">
    <!-- Dashboard Card -->
    <div class="bg-white rounded-lg shadow-lg p-40">
      <h2 class="text-2xl font-semibold mb-4">
        Welcome, {{ auth.user.email }}
      </h2>
      <button
        @click="auth.logout()"
        class="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Log Out
      </button>
    </div>
  </div>
</template>

<style scoped></style>
