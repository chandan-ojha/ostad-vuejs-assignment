<script setup></script>

<template>
  <div class="font-sans bg-gray-100">
    <!-- Hero Section -->
    <section class="bg-blue-500 text-white h-screen flex items-center">
      <div class="container mx-auto text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">
          Your Product or Service Name
        </h1>
        <p class="text-lg md:text-xl mb-8">
          A brief and catchy tagline to grab attention
        </p>
        <a
          href="#features"
          class="bg-white text-blue-500 font-semibold px-6 py-3 rounded-full hover:bg-blue-400 transition duration-300 ease-in-out"
          >Learn More</a
        >
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-16">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-8">Key Features</h2>
        <div class="flex flex-wrap">
          <!-- Feature 1 -->
          <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <h3 class="text-xl font-semibold mb-2">Feature 1</h3>
            <p class="text-gray-700">
              A brief description of the first feature. Keep it concise and
              engaging.
            </p>
          </div>

          <!-- Feature 2 -->
          <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <h3 class="text-xl font-semibold mb-2">Feature 2</h3>
            <p class="text-gray-700">
              A brief description of the second feature. Highlight its
              importance.
            </p>
          </div>

          <!-- Feature 3 -->
          <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <h3 class="text-xl font-semibold mb-2">Feature 3</h3>
            <p class="text-gray-700">
              A brief description of the third feature. Convince users of its
              value.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call-to-Action Section -->
    <section class="bg-gray-800 text-white py-16">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Ready to Get Started?
        </h2>
        <p class="text-lg mb-8">
          Sign up now and experience the benefits of our amazing product or
          service.
        </p>
        <a
          href="#signup"
          class="bg-blue-500 text-white font-semibold px-8 py-3 rounded-full hover:bg-blue-400 transition duration-300 ease-in-out"
          >Sign Up</a
        >
      </div>
    </section>
  </div>
</template>

<style scoped></style>
