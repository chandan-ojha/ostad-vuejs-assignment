<script setup>
const NavOpenClose = () => {
  let sideNav = document.getElementById("sideNav");
  let content = document.getElementById("content");
  let topNav = document.getElementById("topNav");
  if (sideNav.classList.contains("side-nav-open")) {
    sideNav.classList.add("side-nav-close");
    sideNav.classList.remove("side-nav-open");
    content.classList.add("content-expand");
    content.classList.remove("content");
    topNav.classList.add("top-navbar-expand");
    topNav.classList.remove("top-navbar");
  } else {
    sideNav.classList.remove("side-nav-close");
    sideNav.classList.add("side-nav-open");
    content.classList.remove("content-expand");
    content.classList.add("content");
    topNav.classList.remove("top-navbar-expand");
    topNav.classList.add("top-navbar");
  }
};
</script>
<template>
  <div>
    <nav id="topNav" class="navbar fixed-top bg-success top-navbar">
      <div class="container-fluid">
        <a id="MenuBar" @click="NavOpenClose" class="icon-nav mx-0 my-1 h5">
          <i class="fa text-white fa-bars"></i>
        </a>
        <div class="d-flex">
          <div class="dropdown">
            <a
              class="dropdown-toggle text-white"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="fa text-white fa-user-circle fa-2x"></i>
            </a>
            <ul
              class="dropdown-menu dropdown-menu-end"
              aria-labelledby="dropdownMenuLink"
            >
              <li>
                <a class="dropdown-item" href="#">Profile</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">Settings</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>

    <div id="sideNav" class="side-nav-open">
      <div class="side-nav-top text-center mt-3">
        <h5 class="text-white">Admin Panel</h5>
      </div>
      <router-link to="/" class="side-bar-item mt-5">
        <span class="side-bar-item-icon">
          <i class="fa fa-shopping-cart"></i>
        </span>
        <span class="side-bar-item-caption">Products</span>
      </router-link>
    </div>

    <div id="content" class="content">
      <div class="container-fluid">
        <main>
          <slot></slot>
        </main>
      </div>
    </div>
  </div>
</template>
