<script setup>
import { reactive } from "vue";
import { RouterLink, useRouter } from "vue-router";
const user = reactive({
  username: "",
  password: "",
  confirmPassword: "",
});

const router = useRouter();

function userRegister() {
  //check if password and confirm password match
  if (user.password !== user.confirmPassword) {
    alert("Password and Confirm Password do not match.");
    return;
  }
  //check if username and password are not empty
  if (user.username === "" || user.password === "") {
    alert("Username and Password cannot be empty.");
    return;
  }

  localStorage.setItem("user", JSON.stringify(user));
  alert("User registered successfully!");

  //refresh form
  user.username = "";
  user.password = "";
  user.confirmPassword = "";

  //back to login page
  router.push({ name: "Login" });
}
</script>
<template>
  <div class="w-1/2 flex flex-col justify-center items-center bg-gray-200">
    <h2 class="mb-5 text-xl">Register</h2>
    <div class="w-full max-w-xs">
      <form
        class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        @submit.prevent="userRegister()"
      >
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Username
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            autocomplete="username"
            v-model="user.username"
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
            autocomplete="new-password"
            v-model="user.password"
          />
          <!-- <p class="text-red-500 text-xs italic">Please choose a password.</p> -->
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Confirm Password
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="confirmPassword"
            type="password"
            placeholder="******************"
            autocomplete="confirm-password"
            v-model="user.confirmPassword"
          />
          <!-- <p class="text-red-500 text-xs italic">Please choose a password.</p> -->
        </div>
        <div class="flex items-center justify-between">
          <RouterLink
            class="inline-block align-baseline font-bold text-sm text-orange-600 hover:text-orange-800"
            to="/"
          >
            Or Login
          </RouterLink>
          <button
            class="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Register
          </button>
        </div>
      </form>
      <p class="text-center text-gray-500 text-xs">
        &copy;2020 Acme Corp. All rights reserved.
      </p>
    </div>
  </div>
</template>

<style scoped></style>
