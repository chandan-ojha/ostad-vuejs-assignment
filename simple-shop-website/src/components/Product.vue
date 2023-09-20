<script setup>
import { useRoute } from "vue-router";
import { reactive, onBeforeMount } from "vue";
import axios from "axios";
const product = reactive({});

const route = useRoute();
const id = route.params.id;

onBeforeMount(() => {
  axios
    .get(`https://dummyjson.com/products/${id}`)
    .then((res) => {
      product.id = res.data.id;
      product.title = res.data.title;
      product.price = res.data.price;
      product.image = res.data.images[0];
    })
    .catch((err) => {
      console.log(err);
    });
});
</script>
<template>
  <div class="bg-white rounded-lg shadow-lg p-4">
    <div class="flex justify-center">
      <img :src="product.image" alt="product" class="w-48 h-48 rounded-lg" />
    </div>
    <div class="mt-4 text-center">
      <h2 class="text-lg font-bold">{{ product.title }}</h2>
      <span class="text-sm">Price: ${{ product.price }}</span>
    </div>
  </div>
</template>

<style scoped></style>
