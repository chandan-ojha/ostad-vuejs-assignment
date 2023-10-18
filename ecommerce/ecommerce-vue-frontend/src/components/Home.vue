<script setup>
import { authStore } from "../store/authStore";
const auth = authStore;
</script>
<template>
  <h1 class="text-2xl mb-3">This is home page</h1>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam doloremque
    natus eligendi. Dicta ullam obcaecati quidem blanditiis, illum minus
    possimus earum adipisci sunt accusantium autem. Saepe molestias quaerat
    enim. Autem.
  </p>
  <p class="text-2xl mt-10" v-if="auth.isAuthenticated">
    This is some screet content.
  </p>
</template>

<style></style>
