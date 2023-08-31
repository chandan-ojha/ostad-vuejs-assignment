<script setup>
import { ref } from "vue";
import BlogPost from "../components/Blog/BlogPost.vue";
import {
  getPostCategory,
  getPostList,
  getNewestPost,
} from "../APIRequest/SiteAPIRequest";

const postList = ref([]);
const postCategories = ref([]);
const newestPost = ref([]);

//assigning  data from the api to the variables
async function fetchData() {
  postList.value = await getPostList();
  newestPost.value = await getNewestPost();
  postCategories.value = await getPostCategory();
}

fetchData();
</script>
<template>
  <div class="grid grid-cols-3 gap-4 p-20 pt-10">
    <div class="grid grid-cols-3 col-span-2">
      <BlogPost :posts="postList" />
    </div>
    <div class="pl-5 mt-5 flex flex-col items-center">
      <h4 class="pb-4">Categories</h4>
      <ul>
        <li
          class="border-solid border-b-2 border-indigo-500 pt-3"
          v-for="category in postCategories"
          :key="category.id"
        >
          <a href="#">{{ category["name"] }}</a>
        </li>
      </ul>
    </div>
    <div class="grid grid-cols-3 col-span-2">
      <h3 class="col-span-3 flex justify-center mb-5 pb-5">
        <p class="border-solid border-b-2 border-indigo-500">Newest Post</p>
      </h3>
      <BlogPost :posts="newestPost" />
    </div>
  </div>
</template>
