<script setup>
import NavBar from "./components/common/NavBar.vue";
import Footer from "./components/common/Footer.vue";
import Skills from "./components/Skills.vue";
import Educations from "./components/Educations.vue";
import Experiences from "./components/Experiences.vue";
</script>

<template>
  <div class="bg-gray-100 font-sans">
    <!-- Navigation -->
    <NavBar />

    <!-- Hero Section -->
    <header
      class="bg-teal-700 text-white h-screen flex flex-col justify-center items-center relative"
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
        href="https://www.linkedin.com/in/imchandan-ojha"
        target="_blank"
        class="mt-8 bg-white text-teal-700 py-2 px-4 rounded-full font-semibold transition duration-300 hover:bg-teal-950 hover:text-white"
        >Hire Me</a
      >
    </header>

    <!-- About Me Section -->
    <section id="about" class="p-8">
      <h3 class="text-3xl font-bold mb-8 text-center">About Me</h3>
      <div class="container mx-auto flex">
        <div class="flex-1">
          <div class="bg-white rounded-lg shadow-md flex justify-between">
            <!-- User Description -->
            <div class="w-2/4 p-2 m-2">
              <h2 class="text-2xl font-bold mb-4">Chandan Ojha</h2>
              <p class="text-gray-700 mb-4 text-justify">
                Greetings! I'm Chandan Ojha, a dedicated software engineer with
                a fervor for creating inventive and resilient solutions. My
                expedition in the tech domain has been an exhilarating journey
                marked by continuous learning and adept problem-solving. As a
                software engineer, I specialize in full-stack development,
                boasting an extensive skill set that traverses both front-end
                and back-end technologies. Proficient in PHP, I have a mastery
                of the Laravel framework, empowering me to construct robust and
                scalable server-side applications. On the client side, my
                proficiency in JavaScript, Vue.js, Inertia.js, and Nuxt.js
                allows me to craft dynamic and responsive user interfaces that
                elevate the user experience. Throughout my professional journey,
                I've had the honor of contributing to the creation of scalable
                and efficient software applications. Whether it involves
                architecting intricate systems, optimizing database performance,
                or troubleshooting challenging bugs, I relish transforming
                obstacles into avenues for growth. My commitment to staying at
                the forefront of emerging technologies reflects my belief in the
                transformative power of innovation. I thrive in collaborative
                environments, reveling in the collective expertise of
                cross-functional teams to bring out the best in each project.
                Beyond the lines of code, I hold a deep appreciation for clear
                communication and user-centric design principles. I am dedicated
                to developing software that not only meets technical
                requirements but also delivers an outstanding user experience.
                In addition to my technical prowess, I bring a strong sense of
                curiosity, adaptability, and an unwavering commitment to
                delivering top-notch solutions. If you're on the lookout for a
                software engineer passionate about leveraging PHP, Laravel,
                MySQL, JavaScript, Vue.js, Inertia.js, and Nuxt.js to drive
                innovation and surpass user expectations, I would be delighted
                to connect and explore the possibilities of creating something
                extraordinary together.
              </p>
            </div>
            <!-- Skills -->
            <Skills />
          </div>
        </div>
      </div>
    </section>

    <!-- Education & Experience Section -->
    <section id="education-experience" class="p-8">
      <h3 class="text-3xl font-bold mb-8 text-center">
        Education & Experience
      </h3>
      <div class="container mx-auto flex">
        <!-- Educations -->
        <Educations />
        <!-- Experiences-->
        <Experiences />
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="p-8">
      <div class="container mx-auto">
        <h3 class="text-3xl font-bold mb-8 text-center">
          Open Source Projects
        </h3>
        <div class="flex flex-wrap -mx-4">
          <!-- Project Item 1 -->
          <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div class="bg-white p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-bold mb-2">E-commerce</h3>
              <p class="text-gray-700 text-justify">
                Modern E-commerce application built with Laravel and Livewire.
              </p>
              <!-- Tools & Technologies -->
              <div class="mt-4 flex space-x-2">
                <span
                  class="bg-gray-200 px-2 py-1 text-sm text-gray-600 rounded-full"
                  >Laravel
                </span>
                <span
                  class="bg-gray-200 px-2 py-1 text-sm text-gray-600 rounded-full"
                  >Livewire
                </span>
                <span
                  class="bg-gray-200 px-2 py-1 text-sm text-gray-600 rounded-full"
                  >PHP
                </span>
                <span
                  class="bg-gray-200 px-2 py-1 text-sm text-gray-600 rounded-full"
                  >MySQL
                </span>
              </div>
              <!-- Github Link -->
              <a
                href="https://github.com/chandan-ojha/laravel-livewire-ecommerce"
                target="_blank"
                class="mt-4 inline-block text-blue-500 hover:underline"
                >Github Link</a
              >
            </div>
          </div>
          <!-- Project Item 2 -->
          <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div class="bg-white p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-bold mb-2">Barta App</h3>
              <p class="text-gray-700 text-justify">
                Barta App is a social media application built with Laravel,
                Vue.js and Inertia.js.
              </p>
              <!-- Tools & Technologies -->
              <div class="mt-4 flex space-x-2">
                <span
                  class="bg-gray-200 px-2 py-1 text-sm text-gray-600 rounded-full"
                  >Laravel
                </span>
                <span
                  class="bg-gray-200 px-2 py-1 text-sm text-gray-600 rounded-full"
                >
                  PHP
                </span>
                <span
                  class="bg-gray-200 px-2 py-1 text-sm text-gray-600 rounded-full"
                  >MySQL
                </span>
                <span
                  class="bg-gray-200 px-2 py-1 text-sm text-gray-600 rounded-full"
                  >Tailwind CSS
                </span>
                <span
                  class="bg-gray-200 px-2 py-1 text-sm text-gray-600 rounded-full"
                  >Vue.js
                </span>
                <span
                  class="bg-gray-200 px-2 py-1 text-sm text-gray-600 rounded-full"
                  >Inertia.js
                </span>
              </div>
              <!-- Github Link -->
              <a
                href="https://github.com/chandan-ojha/barta-app"
                target="_blank"
                class="mt-4 inline-block text-blue-500 hover:underline"
                >Github Link</a
              >
            </div>
          </div>
          <!-- Project Item 3 -->
          <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div class="bg-white p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-bold mb-2">Pharmacy Management System</h3>
              <p class="text-gray-700 text-justify">
                Pharmacy Management System is a web application built with
                Laravel and Vue.js.
              </p>
              <!-- Tools & Technologies -->
              <div class="mt-4 flex space-x-2">
                <span
                  class="bg-gray-200 px-2 py-1 text-sm text-gray-600 rounded-full"
                  >Laravel
                </span>
                <span
                  class="bg-gray-200 px-2 py-1 text-sm text-gray-600 rounded-full"
                  >PHP
                </span>
                <span
                  class="bg-gray-200 px-2 py-1 text-sm text-gray-600 rounded-full"
                  >MySQL
                </span>
                <span
                  class="bg-gray-200 px-2 py-1 text-sm text-gray-600 rounded-full"
                  >Vue.js
                </span>
              </div>
              <!-- Github Link -->
              <a
                href="https://github.com/chandan-ojha/pharmacy-management"
                target="_blank"
                class="mt-4 inline-block text-blue-500 hover:underline"
                >Github Link</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="bg-gray-200 py-16">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold mb-8">Contact</h2>
        <p class="text-gray-700 mb-6">
          Feel free to reach out to me through the following channels!
        </p>

        <!-- Icon links -->
        <div class="flex justify-center space-x-4 mb-8">
          <a
            href="mailto:chandanojha776@gmail.com"
            class="text-blue-500 hover:underline"
          >
            <i class="fas fa-envelope"></i> Email
          </a>
          <a
            href="https://www.linkedin.com/in/imchandan-ojha"
            target="_blank"
            class="text-blue-500 hover:underline"
          >
            <i class="fab fa-linkedin"></i> LinkedIn
          </a>
          <a
            href="https://github.com/chandan-ojha"
            target="_blank"
            class="text-blue-500 hover:underline"
          >
            <i class="fab fa-github"></i> GitHub
          </a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<style scoped></style>
