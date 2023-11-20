<script setup>
import Project from "./Project.vue";
import { projects } from "../../data/projects.js";
</script>

<template>
  <div class="flex flex-wrap -mx-4">
    <!-- Project Item  -->
    <Project v-for="project in projects" :project="project" :key="project.id" />
  </div>
</template>

<style scoped></style>
