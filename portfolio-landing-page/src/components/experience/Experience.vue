<script setup>
defineProps(["experience"]);
</script>

<template>
  <div class="flex items-start mb-4">
    <i class="fas fa-briefcase text-green-500 text-xl mt-1 mr-3"></i>
    <div>
      <p class="text-gray-700 font-semibold">{{ experience.job_title }}</p>
      <p class="text-gray-500">{{ experience.company }}</p>
      <p class="text-gray-500">
        {{ experience.start_date }} - {{ experience.end_date }}
      </p>
      <ul class="list-disc pl-6">
        <li
          v-for="responsibility in experience.responsibilities"
          :key="responsibility.id"
        >
          {{ responsibility.description }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
