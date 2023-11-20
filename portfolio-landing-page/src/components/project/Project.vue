<script setup>
defineProps(["project"]);
</script>

<template>
  <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
    <div class="bg-white p-6 rounded-lg shadow-md">
      <h3 class="text-xl font-bold mb-2">{{ project.title }}</h3>
      <p class="text-gray-700 text-justify">
        {{ project.description }}
      </p>
      <!-- Tools & Technologies -->
      <div class="mt-4 flex space-x-2">
        <span
          v-for="technology in project.technologies"
          :key="technology.id"
          class="bg-gray-200 px-2 py-1 text-sm text-gray-600 rounded-full"
        >
          {{ technology.name }}
        </span>
      </div>
      <!-- Github Link -->
      <a
        :href="project.github_url"
        target="_blank"
        class="mt-4 inline-block text-blue-500 hover:underline"
        >Github Link</a
      >
    </div>
  </div>
</template>

<style scoped></style>
