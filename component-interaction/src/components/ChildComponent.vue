<script setup>
defineProps(["message"]);
defineEmits(["update:message"]);
</script>
<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg bg-gray-100">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">Message</div>
      <p class="text-gray-700 text-base">
        {{ message }}
      </p>
    </div>
  </div>
  <button
    class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 my-5"
    type="button"
    @click="$emit('update:message', 'Message from Child Component !')"
  >
    Emit Message
  </button>
</template>
