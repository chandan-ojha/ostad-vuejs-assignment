<script setup>
import NavBar from "../components/common/NavBar.vue";
import Footer from "../components/common/Footer.vue";
import {
  heros,
  advertisements,
  features,
  services,
  testimonials,
} from "../data/data";

const iconStyle = "text-primary h1";
</script>

<template>
  <!-- NavBar -->
  <NavBar />

  <!-- Hero Section -->
  <section class="section gradient-banner">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6 order-2 order-md-1 text-center text-md-left">
          <h1 class="text-white font-weight-bold mb-4">
            {{ heros.title }}
          </h1>
          <p class="text-white mb-5">
            {{ heros.description }}
          </p>
          <a href="#" class="btn btn-main-md">Download Now</a>
        </div>
        <div class="col-md-6 text-center order-1 order-md-2">
          <img class="img-fluid" :src="heros.image" alt="screenshot" />
        </div>
      </div>
    </div>
  </section>
  <!-- End of Hero Section -->

  <section class="section pt-0 position-relative pull-top">
    <div class="container">
      <div class="rounded shadow p-5 bg-white">
        <div class="row">
          <div class="col-lg-4 col-md-6 mt-5 mt-md-0 text-center">
            <i :class="[advertisements[0].icon, iconStyle]"></i>
            <h3 class="mt-4 text-capitalize h5">
              {{ advertisements[0].title }}
            </h3>
            <p class="regular text-muted">
              {{ advertisements[0].description }}
            </p>
          </div>
          <div class="col-lg-4 col-md-6 mt-5 mt-md-0 text-center">
            <i :class="[advertisements[1].icon, iconStyle]"></i>
            <h3 class="mt-4 text-capitalize h5">
              {{ advertisements[1].title }}
            </h3>
            <p class="regular text-muted">
              {{ advertisements[1].description }}
            </p>
          </div>
          <div class="col-lg-4 col-md-12 mt-5 mt-lg-0 text-center">
            <i :class="[advertisements[2].icon, iconStyle]"></i>
            <h3 class="mt-4 text-capitalize h5">
              {{ advertisements[2].title }}
            </h3>
            <p class="regular text-muted">
              {{ advertisements[2].description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Feature Grid -->
  <section class="feature section pt-0">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 ml-auto justify-content-center">
          <!-- Feature Mockup -->
          <div class="image-content">
            <img class="img-fluid" :src="features[0].mockup" alt="iphone" />
          </div>
        </div>
        <div class="col-lg-6 mr-auto align-self-center">
          <div class="feature-content">
            <!-- Feature Title -->
            <h2>{{ features[0].title }} <a href="#">Small Apps</a></h2>
            <!-- Feature Description -->
            <p class="desc">
              {{ features[0].description }}
            </p>
          </div>
          <!-- Testimonial Quote -->
          <div class="testimonial">
            <p>
              {{ testimonials[0].quote }}
            </p>
            <ul class="list-inline meta">
              <li class="list-inline-item">
                <img :src="features[0].thumbnail" alt="" />
              </li>
              <li class="list-inline-item">
                {{ features[0].name }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="feature section pt-0">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 ml-auto align-self-center">
          <div class="feature-content">
            <!-- Feature Title -->
            <h2>{{ features[1].title }} <a href="#">Small Apps</a></h2>
            <!-- Feature Description -->
            <p>
              {{ features[1].description }}
            </p>
          </div>
          <!-- Testimonial Quote -->
          <div class="testimonial">
            <p>
              {{ testimonials[1].quote }}
            </p>
            <ul class="list-inline meta">
              <li class="list-inline-item">
                <img :src="features[1].thumbnail" alt="" />
              </li>
              <li class="list-inline-item">
                {{ features[1].name }}
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-6 mr-auto justify-content-center">
          <!-- Feature mockup -->
          <div class="image-content">
            <img class="img-fluid" :src="features[1].mockup" alt="ipad" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End of Feature Grid -->

  <!--Services -->
  <section class="service section bg-gray">
    <div class="container-fluid p-0">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title">
            <h2>An Interface For Lifestyle</h2>
            <p>
              <a href="#">Small Apps</a> makes it easy to stay on top of your
              Life Style. No late tasks. No gimmicks.
            </p>
          </div>
        </div>
      </div>
      <div class="row no-gutters">
        <div class="col-lg-6 align-self-center">
          <!-- Feature Image -->
          <div class="service-thumb left">
            <img class="img-fluid" :src="services[0].image" alt="iphone-ipad" />
          </div>
        </div>
        <div class="col-lg-5 mr-auto align-self-center">
          <div class="service-box">
            <div class="row align-items-center">
              <div class="col-md-6 col-xs-12">
                <!-- Service 01 -->
                <div class="service-item">
                  <!-- Icon -->
                  <i :class="services[0].icon"></i>
                  <!-- Heading -->
                  <h3>{{ services[0].heading }}</h3>
                  <!-- Description -->
                  <p>{{ services[0].description }}</p>
                </div>
              </div>
              <div class="col-md-6 col-xs-12">
                <!-- Service 02 -->
                <div class="service-item">
                  <!-- Icon -->
                  <i :class="services[1].icon"></i>
                  <!-- Heading -->
                  <h3>{{ services[1].heading }}</h3>
                  <!-- Description -->
                  <p>
                    {{ services[1].description }}
                  </p>
                </div>
              </div>
              <div class="col-md-6 col-xs-12">
                <!-- Service 03 -->
                <div class="service-item">
                  <!-- Icon -->
                  <i :class="services[2].icon"></i>
                  <!-- Heading -->
                  <h3>{{ services[2].heading }}</h3>
                  <!-- Description -->
                  <p>
                    {{ services[2].description }}
                  </p>
                </div>
              </div>
              <div class="col-md-6 col-xs-12">
                <!-- Service 04 -->
                <div class="service-item">
                  <!-- Icon -->
                  <i :class="services[3].icon"></i>
                  <!-- Heading -->
                  <h3>{{ services[3].heading }}</h3>
                  <!-- Description -->
                  <p>{{ services[3].description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!---- End of Services -->

  <!-- Video Promo -->
  <section class="video-promo section bg-1">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="content-block">
            <!-- Heading -->
            <h2>Watch Our Promo Video</h2>
            <!-- Promotional Speech -->
            <p>
              Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur
              arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus
            </p>
            <!-- Popup Video -->
            <a data-fancybox href="#">
              <i class="ti-control-play video"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End of Video Promo -->

  <!-- Testimonial -->
  <section class="section testimonial" id="testimonial">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <!-- Testimonial Slider -->
          <div class="testimonial-slider owl-carousel owl-theme">
            <!-- Testimonial 01 -->
            <div class="item">
              <div class="block shadow">
                <!-- Speech -->
                <p>{{ testimonials[0].Speech }}</p>
                <!-- Person Thumb -->
                <div class="image">
                  <img :src="testimonials[0].image" alt="image" />
                </div>
                <!-- Name and Company -->
                <cite
                  >{{ testimonials[0].name }} ,
                  {{ testimonials[0].company }}</cite
                >
              </div>
            </div>
            <!-- Testimonial 02 -->
            <div class="item">
              <div class="block shadow">
                <!-- Speech -->
                <p>
                  {{ testimonials[1].Speech }}
                </p>
                <!-- Person Thumb -->
                <div class="image">
                  <img :src="testimonials[1].image" alt="image" />
                </div>
                <!-- Name and Company -->
                <cite
                  >{{ testimonials[1].name }} ,
                  {{ testimonials[1].company }}</cite
                >
              </div>
            </div>
            <!-- Testimonial 03 -->
            <div class="item">
              <div class="block shadow">
                <!-- Speech -->
                <p>
                  {{ testimonials[2].Speech }}
                </p>
                <!-- Person Thumb -->
                <div class="image">
                  <img :src="testimonials[2].image" alt="image" />
                </div>
                <!-- Name and Company -->
                <cite
                  >{{ testimonials[2].name }} ,
                  {{ testimonials[2].company }}</cite
                >
              </div>
            </div>
            <!-- Testimonial 04 -->
            <div class="item">
              <div class="block shadow">
                <!-- Speech -->
                <p>
                  {{ testimonials[3].Speech }}
                </p>
                <!-- Person Thumb -->
                <div class="image">
                  <img :src="testimonials[3].image" alt="image" />
                </div>
                <!-- Name and Company -->
                <cite
                  >{{ testimonials[3].name }} ,
                  {{ testimonials[3].company }}</cite
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End of Testimonial -->

  <section class="call-to-action-app section bg-blue">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h2>It's time to change your mind</h2>
          <p>
            Download over 2 million humans .Get <a href="#">Small Apps</a> free
            forever! <br />We say you won’t look back.
          </p>
          <ul class="list-inline">
            <li class="list-inline-item">
              <a href="" class="btn btn-rounded-icon">
                <i class="ti-apple"></i>
                Iphone
              </a>
            </li>
            <li class="list-inline-item">
              <a href="" class="btn btn-rounded-icon">
                <i class="ti-android"></i>
                Android
              </a>
            </li>
            <li class="list-inline-item">
              <a href="" class="btn btn-rounded-icon">
                <i class="ti-microsoft-alt"></i>
                Windows
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <Footer />

  <!-- To Top -->
  <div class="scroll-top-to">
    <i class="ti-angle-up"></i>
  </div>
</template>

<style scoped></style>
