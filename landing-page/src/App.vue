<script setup></script>

<template>
  <div class="bg-gray-100 font-sans">
    <!-- Navigation -->
    <nav class="bg-gray-800 text-white p-4">
      <div class="container mx-auto flex justify-between items-center">
        <div class="text-2xl font-bold">Chandan Ojha</div>
        <div class="flex space-x-4">
          <a href="#" class="hover:text-gray-300">Home</a>
          <a href="#projects" class="hover:text-gray-300">Projects</a>
          <a href="#contact" class="hover:text-gray-300">Contact</a>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <header
      class="bg-blue-500 text-white h-screen flex flex-col justify-center items-center relative"
    >
      <!-- Profile Image -->
      <img
        src="https://avatars.githubusercontent.com/u/61087593?v=4"
        alt="Your Name"
        class="rounded-full w-32 h-32 object-cover mb-4"
      />

      <h3 class="text-5xl font-bold mb-4">Hi, I'm Chandan Ojha</h3>
      <p class="text-lg">A Passionate Software Developer</p>
      <a
        href="#projects"
        class="mt-8 bg-white text-blue-500 py-2 px-4 rounded-full font-semibold transition duration-300 hover:bg-blue-700 hover:text-white"
        >View Projects</a
      >
    </header>

    <!-- Projects Section -->
    <section id="projects" class="py-16">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold mb-8">Projects</h2>
        <!-- Example project card (repeat for each project) -->
        <div class="flex flex-wrap -mx-4">
          <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div class="bg-white p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-bold mb-2">Project Name</h3>
              <p class="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                hendrerit turpis in aliquam facilisis.
              </p>
              <a
                href="#"
                class="mt-4 inline-block text-blue-500 hover:underline"
                >Github Link</a
              >
            </div>
          </div>
          <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div class="bg-white p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-bold mb-2">Project Name</h3>
              <p class="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                hendrerit turpis in aliquam facilisis.
              </p>
              <a
                href="#"
                class="mt-4 inline-block text-blue-500 hover:underline"
                >Github Link</a
              >
            </div>
          </div>
          <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div class="bg-white p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-bold mb-2">Project Name</h3>
              <p class="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                hendrerit turpis in aliquam facilisis.
              </p>
              <a
                href="#"
                class="mt-4 inline-block text-blue-500 hover:underline"
                >Github Link</a
              >
            </div>
          </div>
          <!-- Repeat similar code for other projects -->
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="bg-gray-200 py-16">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold mb-8">Contact</h2>
        <p class="text-gray-700 mb-6">
          Feel free to reach out to me through the following channels:
        </p>

        <!-- Icon links -->
        <div class="flex justify-center space-x-4 mb-8">
          <a href="mailto:your@email.com" class="text-blue-500 hover:underline">
            <i class="fas fa-envelope"></i> Email
          </a>
          <a
            href="https://www.linkedin.com/in/your-profile"
            class="text-blue-500 hover:underline"
          >
            <i class="fab fa-linkedin"></i> LinkedIn
          </a>
          <a
            href="https://github.com/your-username"
            class="text-blue-500 hover:underline"
          >
            <i class="fab fa-github"></i> GitHub
          </a>
        </div>

        <!-- Additional content goes here -->
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-4">
      <div class="container mx-auto text-center">
        &copy; 2023 Chandan Ojha. All rights reserved.
      </div>
    </footer>
  </div>
</template>

<style scoped></style>
