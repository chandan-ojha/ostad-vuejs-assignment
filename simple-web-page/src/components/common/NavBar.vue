<script setup>
import { logos } from "../../data/data";
import { ref } from "vue";
let activeMenu = ref(null);
</script>

<template>
  <nav class="navbar main-nav navbar-expand-lg px-2 px-sm-0 py-2 py-lg-0">
    <div class="container">
      <a class="navbar-brand" href="/"
        ><img :src="logos[0].image" alt="logo"
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="ti-menu"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item dropdown" @click="activeMenu = 'home'">
            <a
              class="nav-link dropdown-toggle"
              href="/"
              data-toggle="dropdown"
              :class="{ active: activeMenu === 'home' }"
              >Home
            </a>
          </li>
          <li class="nav-item dropdown @@pages" @click="activeMenu = 'pages'">
            <a
              class="nav-link dropdown-toggle"
              href="/"
              data-toggle="dropdown"
              :class="{ active: activeMenu === 'pages' }"
              >Pages
              <span><i class="ti-angle-down"></i></span>
            </a>
            <!-- Dropdown list -->
            <ul class="dropdown-menu">
              <li><a class="dropdown-item @@team" href="#">Team</a></li>
              <li><a class="dropdown-item @@career" href="#">Career</a></li>
              <li><a class="dropdown-item @@blog" href="#">Blog</a></li>
            </ul>
          </li>
          <li class="nav-item @@about" @click="activeMenu = 'about'">
            <a
              class="nav-link"
              href="#"
              :class="{ active: activeMenu === 'about' }"
              >About</a
            >
          </li>
          <li class="nav-item @@contact" @click="activeMenu = 'contact'">
            <a
              class="nav-link"
              href="#"
              :class="{ active: activeMenu === 'contact' }"
              >Contact</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style>
.active {
  color: #2e7eed !important;
}
</style>
