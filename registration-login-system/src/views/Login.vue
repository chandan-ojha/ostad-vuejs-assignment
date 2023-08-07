<script setup>
import { reactive } from "vue";
import { RouterLink, useRouter } from "vue-router";

const router = useRouter();

const user = reactive({
  username: "",
  password: "",
});

function userLogin() {
  //check if username and password are not empty
  if (user.username === "" || user.password === "") {
    alert("Username and Password cannot be empty");
    return;
  }
  //check if user exists
  const userExists = localStorage.getItem("user");

  if (!userExists) {
    alert("User does not exist");
    return;
  }
  //check if username and password match
  const userObj = JSON.parse(userExists);
  if (
    userObj.username !== user.username ||
    userObj.password !== user.password
  ) {
    alert("Username and Password do not match");
    return;
  }
  //login user
  localStorage.setItem("loggedInUser", JSON.stringify(user));
  alert("User logged in successfully");

  //refresh form
  user.username = "";
  user.password = "";
  //redirect to home page
  router.push({ name: "Dashboard" });
}
</script>
<template>
  <div class="w-1/2 flex flex-col justify-center items-center bg-gray-200">
    <h2 class="mb-5 text-xl">Login</h2>
    <div class="w-full max-w-xs">
      <form
        class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        @submit.prevent="userLogin()"
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
        <div class="flex items-center justify-between">
          <button
            class="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
          <RouterLink
            class="inline-block align-baseline font-bold text-sm text-orange-600 hover:text-orange-800"
            to="/register"
          >
            Or Register
          </RouterLink>
        </div>
      </form>
      <p class="text-center text-gray-500 text-xs">
        &copy;2020 Acme Corp. All rights reserved.
      </p>
    </div>
  </div>
</template>

<style scoped></style>
