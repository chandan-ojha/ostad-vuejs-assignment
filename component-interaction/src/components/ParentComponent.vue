<script setup>
import { ref } from "vue";
import ChildComponent from "./ChildComponent.vue";
const message = ref("Hello from parent component !");
</script>
<template>
  <ChildComponent v-model:message="message" />
</template>
