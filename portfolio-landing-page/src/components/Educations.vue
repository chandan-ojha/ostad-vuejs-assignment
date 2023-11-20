<script setup>
import Education from "./Education.vue";
import { educations } from "../data/educations.js";
</script>

<template>
  <div class="w-1/2 pr-4">
    <div class="bg-white p-6 rounded-lg shadow-md mb-8">
      <h3 class="text-xl font-bold mb-2">Education</h3>
      <!-- Education -->
      <Education
        v-for="education in educations"
        :education="education"
        :key="education.id"
      />
    </div>
  </div>
</template>

<style scoped></style>
