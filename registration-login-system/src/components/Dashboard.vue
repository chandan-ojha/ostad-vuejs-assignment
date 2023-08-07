<script setup>
import { useRouter } from "vue-router";
const user = JSON.parse(localStorage.getItem("loggedInUser"));
const router = useRouter();

function userLogout() {
  localStorage.removeItem("loggedInUser");
  alert("User logged out successfully!");
  router.push({ name: "Login" });
}
</script>
<template>
  <div class="w-1/2 flex flex-col justify-center items-center bg-gray-200">
    <h2 class="mb-5 text-xl">Dashboard</h2>
    <div class="w-full max-w-xs">
      <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h3 class="text-xl mb-5">Welcome Mr.{{ user.username }}!</h3>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          @click="userLogout()"
        >
          Logout
        </button>
      </div>
      <p class="text-center text-gray-500 text-xs">
        &copy;2020 Acme Corp. All rights reserved.
      </p>
    </div>
  </div>
</template>

<style></style>
