<script setup></script>
<template>
  <div class="sticky top-0 navbar bg-base-200 z-10">
    <div class="navbar-start">
      <router-link
        to="/"
        class="text-cyan-700 tracking-widest text-xl font-bold"
      >
        SimpleBlog
      </router-link>
    </div>
    <div class="navbar-end hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <router-link to="/blog"> Blog</router-link>
        </li>
        <li>
          <router-link to="/contact">Contact</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
