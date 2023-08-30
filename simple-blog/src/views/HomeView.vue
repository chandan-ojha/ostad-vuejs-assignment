<script setup>
import Header from "../components/common/Header.vue";
import BlogPost from "../components/common/BlogPost.vue";
import Footer from "../components/common/Footer.vue";
</script>
<template>
  <Header />
  <div class="grid grid-cols-3 gap-4 p-20 pt-10">
    <div class="grid grid-cols-3 col-span-2">
      <BlogPost />
      <BlogPost />
      <BlogPost />
    </div>
    <div class="pl-5 mt-5 flex flex-col items-center">
      <h4 class="pb-4">Categories</h4>
      <ul>
        <li class="border-solid border-b-2 border-indigo-500 pt-3">
          <a href="#">Category Name</a>
        </li>
      </ul>
    </div>
    <div class="grid grid-cols-3 col-span-2">
      <h3 class="col-span-3 flex justify-center mb-5 pb-5">
        <p class="border-solid border-b-2 border-indigo-500">Newest Post</p>
      </h3>
      <BlogPost />
    </div>
  </div>
  <Footer />
</template>
