<script setup>
import { ref, reactive } from "vue";
import { carouselItems } from "./data/data.js";

const activeIndex = ref(0);
const imageFilter = "-webkit-filter: grayscale(100%);filter: grayscale(100%);";
</script>

<template>
  <h4>Vue Image Carousel</h4>
  <ol class="carousel-thumnails">
    <img
      @click="activeIndex = index"
      height="50"
      :style="activeIndex != index ? imageFilter : ''"
      style="cursor: pointer"
      class="mx-1"
      v-for="(thumnail, index) in carouselItems"
      :key="index"
      :src="thumnail.image"
      alt=""
    />
  </ol>

  <div id="carouselExampleCaptions" class="carousel" data-ride="carousel">
    <ol class="carousel-indicators">
      <li
        @click="activeIndex = index"
        data-target="#carouselExampleCaptions"
        v-for="(items, index) in carouselItems"
        :key="index"
        :class="index == activeIndex ? 'active' : ''"
      ></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          height="500"
          :src="carouselItems[activeIndex].image"
          class="d-block w-100 img img-responsive"
          alt="..."
        />
        <div class="carousel-caption d-none d-md-block">
          <h5>{{ carouselItems[activeIndex].title }}</h5>
          <p>{{ carouselItems[activeIndex].caption }}</p>
        </div>
      </div>
    </div>
    <a
      @click.prevent="
        0 == activeIndex
          ? (activeIndex = carouselItems.length - 1)
          : activeIndex--
      "
      class="carousel-control-prev"
      href="#"
      role="button"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      @click.prevent="
        carouselItems.length - 1 == activeIndex
          ? (activeIndex = 0)
          : activeIndex++
      "
      class="carousel-control-next"
      href="#"
      role="button"
      data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<style>
.carousel-inner {
  width: 950px !important;
}
</style>
