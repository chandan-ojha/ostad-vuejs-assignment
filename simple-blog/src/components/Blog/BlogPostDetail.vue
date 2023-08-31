<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { getPostDetail } from "../../APIRequest/SiteAPIRequest";

const route = useRoute();
const postDetail = ref({});

//assigning  data from the api to the variables
async function fetchData() {
  postDetail.value = await getPostDetail(route.params.id);
}
fetchData();
</script>
<template>
  <main>
    <article>
      <header class="px-10">
        <div class="flex flex-col items-center">
          <h2 class="text-2xl mb-5">{{ postDetail.title }}</h2>
          <img alt="Image" :src="postDetail.img" class="img" />
        </div>
        <p class="meta mt-10 pb-5">Published on: {{ postDetail.created_at }}</p>
      </header>
      <div class="content px-10">
        <p class="mb-20">{{ postDetail.content }}</p>
      </div>
    </article>
  </main>
</template>

<style>
.img {
  width: 500px;
  height: 300px;
}
</style>
