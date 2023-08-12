<script setup>
import { ref } from "vue";
import Carousel from "./components/Carousel.vue";
import PieChart from "./components/PieChart.vue";

const comShow = ref("carousel");
</script>

<template>
  <div class="max-w-[540px] mx-auto py-8 px-4">
    <div class="flex justify-center gap-x-8 mb-8">
      <div class="flex items-center">
        <button
          type="button"
          class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          @click="comShow = 'carousel'"
        >
          Carousel
        </button>
      </div>
      <div class="flex items-center">
        <button
          type="button"
          class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          @click="comShow = 'piechart'"
        >
          Pie Chart
        </button>
      </div>
    </div>
    <template v-if="comShow === 'carousel'">
      <Carousel />
    </template>
    <template v-if="comShow === 'piechart'">
      <PieChart />
    </template>
  </div>
</template>
