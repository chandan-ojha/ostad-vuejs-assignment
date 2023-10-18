<script setup>
import { useRoute } from "vue-router";
import { reactive, ref, onBeforeMount } from "vue";
import { cartStore } from "../store/cartStore";
import axios from "axios";
const product = reactive({});
const cart = cartStore;

const route = useRoute();
const id = route.params.id;

onBeforeMount(() => {
  axios
    .get(`http://localhost:8000/api/products/${id}`)
    .then((res) => {
      product.id = res.data.id;
      product.title = res.data.title;
      product.body = res.data.body;
      product.image = res.data.image;
      product.price = res.data.price;
      product.description = res.data.description;
    })
    .catch((err) => {
      console.log(err);
    });
});
</script>

<template>
  <article class="mb-10">
    <h1 class="text-xl mb-2">
      {{ product.title }}
    </h1>
    <p>
      <img class="w-60" :src="product.image" alt="" />
      {{ product.description }}
    </p>
    <p>Price: ${{ product.price }}</p>
    <p>
      <button
        @click="cart.addItem(product)"
        class="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add To Cart
      </button>
    </p>
  </article>
</template>
