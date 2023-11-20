<script setup>
defineProps(["skill"]);
</script>

<template>
  <div class="mb-4">
    <p class="text-gray-600">{{ skill.title }}</p>
    <div class="flex items-center justify-between">
      <div class="flex-1">
        <div class="h-2 bg-gray-200 rounded-full">
          <div
            class="h-full text-center text-xs text-white rounded-full"
            :class="skill.progress_bar_color"
            :style="{ width: skill.percentage }"
          ></div>
        </div>
      </div>
      <span class="ml-2 text-xs font-semibold" :class="skill.text_color">
        {{ skill.percentage }}
      </span>
    </div>
  </div>
</template>

<style scoped></style>
