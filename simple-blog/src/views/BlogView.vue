<script setup>
import { ref } from "vue";
import BlogPost from "../components/Blog/BlogPost.vue";
import { getPostList } from "../APIRequest/SiteAPIRequest";

const postList = ref([]);

//assigning  data from the api to the variables
async function fetchData() {
  postList.value = await getPostList();
}

fetchData();
</script>
<template>
  <div className="grid grid-cols-3 col-span-2">
    <BlogPost :posts="postList" />
  </div>
</template>
