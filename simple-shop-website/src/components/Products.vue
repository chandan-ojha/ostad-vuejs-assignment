<script setup>
import { ref, onBeforeMount } from "vue";
import axios from "axios";
const products = ref([]);

//fetch products
onBeforeMount(() => {
  axios
    .get("https://dummyjson.com/products?limit=10")
    .then((res) => {
      products.value = res.data.products;
    })
    .catch((err) => {
      console.log(err);
    });
});

//load more products
function loadMore() {
  axios
    .get("https://dummyjson.com/products?limit=10&skip=10")
    .then((res) => {
      products.value = [...products.value, ...res.data.products];
    })
    .catch((err) => {
      console.log(err);
    });
}
</script>
<template>
  <div
    class="bg-white rounded-lg shadow-lg p-4"
    v-for="product in products"
    :key="product.id"
  >
    <div class="flex justify-center">
      <img
        :src="product.images[0]"
        alt="product"
        class="w-48 h-48 rounded-lg"
      />
    </div>
    <div class="mt-4 text-center">
      <h2 class="text-lg font-bold">{{ product.title }}</h2>
      <span class="text-sm">Price: ${{ product.price }}</span>
    </div>
    <div class="mt-4 text-center">
      <router-link
        :to="{ name: 'Product', params: { id: product.id } }"
        class="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded-full"
      >
        Details
      </router-link>
    </div>
  </div>
  <button
    @click="loadMore()"
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    v-if="products.length > 0"
  >
    Load More
  </button>
</template>

<style scoped></style>
