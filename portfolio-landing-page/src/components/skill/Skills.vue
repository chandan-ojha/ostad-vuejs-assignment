<script setup>
import Skill from "./Skill.vue";
import { skills } from "../../data/skills.js";
</script>

<template>
  <div class="w-2/4 p-2 m-2">
    <h3 class="text-lg font-semibold mb-2">Skills</h3>
    <div>
      <!-- Skill Item -->
      <Skill v-for="skill in skills" :skill="skill" :key="skill.id" />
    </div>
  </div>
</template>

<style scoped></style>
