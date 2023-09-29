<script setup>
import { reactive } from "vue";
import { RouterLink } from "vue-router";
import { authStore } from "../stores/authStore";
const auth = authStore();

const userData = reactive({
  email: "",
  password: "",
});
</script>

<template>
  <div class="flex justify-center items-center">
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 w-1/3">
      <h1 class="text-2xl font-semibold text-center mb-4">Login</h1>
      <form>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            Email
          </label>
          <input
            v-model="userData.email"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="you@example.com"
          />
        </div>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            v-model="userData.password"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="********"
          />
        </div>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="remember-me"
          >
            <input
              type="checkbox"
              class="mr-2 leading-tight"
              id="remember-me"
            />
            Remember Me
          </label>
        </div>
        <div class="flex items-center justify-between mb-4">
          <button
            @click="auth.login(userData)"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign In
          </button>
          <a class="text-sm text-gray-600 hover:text-gray-800" href="#"
            >Forgot Password?</a
          >
        </div>
        <div class="text-center">
          <p class="text-gray-600 text-sm">
            Don’t have an account yet?
            <RouterLink
              class="text-blue-500 hover:text-blue-800"
              to="/register"
            >
              Sign up
            </RouterLink>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<style></style>
