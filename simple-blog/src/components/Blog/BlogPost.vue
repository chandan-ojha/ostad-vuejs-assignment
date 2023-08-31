<script setup>
defineProps(["posts"]);
</script>
<template>
  <div class="card glass m-2" v-for="post in posts" :key="post.id">
    <figure>
      <img :src="post.img" alt="image not found" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ post["title"] }}</h2>
      <p>{{ post["short"] }}</p>
      <div class="cardActions card-actions">
        <router-link
          :to="{ name: 'blog-post-detail', params: { id: post.id } }"
        >
          <button class="cardButton btn btn-primary">Learn More....</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style>
.cardActions {
  width: 100% !important;
}
.cardButton {
  width: inherit !important;
}
</style>
