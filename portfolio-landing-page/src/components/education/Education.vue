<script setup>
defineProps(["education"]);
</script>

<template>
  <div class="flex items-center mb-4">
    <i class="fas fa-graduation-cap text-blue-500 text-2xl mt-1 mr-3"></i>
    <div>
      <p class="text-gray-700 font-semibold">{{ education.degree }}</p>
      <p class="text-gray-500">{{ education.institute }}</p>
      <p class="text-gray-500">Session: {{ education.session }}</p>
      <p class="text-gray-500">Result: {{ education.result }}</p>
    </div>
  </div>
</template>

<style scoped></style>
