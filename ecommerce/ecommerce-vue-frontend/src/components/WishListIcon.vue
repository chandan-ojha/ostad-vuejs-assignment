<script setup>
import { wishlistStore } from "../store/wishlistStore";
const wishlist = wishlistStore;
const props = defineProps(["product"]);
</script>

<template>
  <img
    @click="wishlist.toggleWishlist(product)"
    class="w-8 cursor-pointer"
    :src="wishlist.getIcon(product)"
    alt=""
  />
</template>

<style scoped></style>
