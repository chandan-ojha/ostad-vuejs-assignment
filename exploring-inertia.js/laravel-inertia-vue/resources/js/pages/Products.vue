<script setup>
defineProps(["products"]);
</script>

<template>
    <table class="table table-striped mt-2">
        <thead>
            <tr>
                <th scope="col">Product Name</th>
                <th scope="col">Product Price</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="product in products" :key="product.id">
                <td>{{ product.name }}</td>
                <td>{{ product.price }}</td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped></style>
