<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";
const items = ref([
  "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1467&q=80",
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1558882224-dda166733046?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
  "https://images.unsplash.com/photo-1562664377-709f2c337eb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80",
]);

let carousel = null;

const newItem = ref("");

// Add new item to the carousel
function addNewitem() {
  items.value.push(newItem.value);
  carousel.destroy();
  nextTick(function () {
    carousel = new Flickity("#carousel", {});
  });
}

// Initialize the carousel on mount
onMounted(() => {
  carousel = new Flickity("#carousel", {});
});

// Destroy the carousel on unmount
onBeforeUnmount(() => {
  carousel.destroy();
});
</script>

<template>
  <div class="my-10 ml-14">
    <input type="text" v-model="newItem" placeholder="enter your image link" />
    <button
      @click="addNewitem()"
      class="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      :disabled="!newItem"
    >
      Add More Image
    </button>
  </div>
  <div class="mx-auto items" id="carousel">
    <div
      :style="`background-image:url(${item})`"
      class="item"
      v-for="(item, index) in items"
      :key="item"
    >
      {{ index + 1 }}
    </div>
  </div>
</template>

<style scoped>
.items {
  width: 600px;
  height: 400px;
}

.item {
  width: 600px;
  height: 400px;
  background-color: #ccc;
  background-size: cover;
}
</style>
