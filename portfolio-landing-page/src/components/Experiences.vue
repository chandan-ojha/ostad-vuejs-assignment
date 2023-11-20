<script setup>
import Experience from "./Experience.vue";
import { experiences } from "../data/experiences.js";
</script>

<template>
  <div class="w-1/2 pl-4">
    <div class="bg-white p-6 rounded-lg shadow-md mb-8">
      <h3 class="text-xl font-bold mb-2">Experience</h3>
      <!-- Experience Item-->
      <Experience
        v-for="experience in experiences"
        :experience="experience"
        :key="experience.id"
      />
    </div>
  </div>
</template>

<style scoped></style>
