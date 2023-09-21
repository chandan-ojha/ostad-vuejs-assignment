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
      product.title = res.data.title;
      product.description = res.data.description;
      product.price = res.data.price;
      product.image = res.data.images[0];
    })
    .catch((err) => {
      console.log(err);
    });
});
</script>
<template>
  <div class="grid grid-cols-1 md:grid-cols-2 place-items-center mt-5">
    <div class="w-full pl-48">
      <img :src="product.image" alt="Product Image" />
    </div>
    <div class="w-full">
      <h2 class="text-2xl font-bold">{{ product.title }}</h2>
      <p class="text-gray-700">{{ product.description }}</p>
      <p class="text-gray-700 mt-3">
        <strong>Price: ${{ product.price }} </strong>
      </p>
    </div>
  </div>
</template>

<style scoped></style>
