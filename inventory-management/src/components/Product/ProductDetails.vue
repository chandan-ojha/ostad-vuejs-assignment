<script setup>
import { useRoute } from "vue-router";
import { reactive, onBeforeMount } from "vue";

const product = reactive({});

const route = useRoute();
const id = route.params.id;

onBeforeMount(async () => {
  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await response.json();
    product.title = data.title;
    product.price = data.price;
    product.description = data.description;
    product.image = data.images[0];
  } catch (error) {
    console.error(error);
  }
});
</script>
<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <img
          :src="product.image"
          alt="Product Image"
          class="img-fluid product-image"
        />
      </div>
      <div class="col-md-6">
        <div class="product-details">
          <h2 class="product-title">{{ product.title }}</h2>
          <p class="product-price">Price: ${{ product.price }}</p>
          <p class="product-description">
            {{ product.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-image {
  max-width: 100%;
  height: auto;
}

.product-details {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
}

.product-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.product-price {
  font-size: 18px;
  color: #e74c3c;
  margin-bottom: 15px;
}

.product-description {
  font-size: 16px;
  line-height: 1.5;
}
</style>
