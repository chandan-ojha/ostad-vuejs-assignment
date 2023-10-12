<script setup>
import { reactive, computed, watch } from "vue";

const user = reactive({
  name: "John Doe",
  profileImage:
    "//flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
  birthdate: "1990-01-15",
  email: "johndoe@example.com",
  description: "This is a sample user description.",
});

//change profile image
const changeProfileImage = () => {
  const newImageURL = prompt("Enter the URL for your profile image:");
  if (newImageURL) {
    user.profileImage = newImageURL;
  }
};
</script>

<template>
  <div class="bg-gray-100 min-h-screen flex items-center justify-center">
    <div class="bg-white p-4 rounded shadow-md w-96">
      <h1 class="text-2xl font-semibold text-center mb-4">User Details</h1>
      <div class="text-center mb-4">
        <img
          :src="user.profileImage"
          alt="Profile Image"
          class="w-32 h-32 mx-auto rounded-full"
          @click="changeProfileImage"
        />
      </div>
      <div class="mb-4">
        <label for="userName" class="block text-gray-600">Name:</label>
        <input
          v-model="user.name"
          id="userName"
          class="w-full px-3 py-2 border rounded"
        />
      </div>
      <div class="mb-4">
        <label for="birthdate" class="block text-gray-600">Birthdate:</label>
        <input
          v-model="user.birthdate"
          id="birthdate"
          type="date"
          class="w-full px-3 py-2 border rounded"
        />
      </div>
      <div class="mb-4">
        <label for="email" class="block text-gray-600">Email:</label>
        <input
          v-model="user.email"
          id="email"
          type="email"
          class="w-full px-3 py-2 border rounded"
        />
      </div>
      <div class="mb-4">
        <label for="description" class="block text-gray-600"
          >Description:</label
        >
        <textarea
          v-model="user.description"
          id="description"
          class="w-full px-3 py-2 border rounded"
        ></textarea>
      </div>
      <div class="text-center">
        <label class="text-gray-600">Age: {{ age }}</label>
        <br />
        <label class="text-gray-600">Birth Year: {{ birthYear }}</label>
        <br />
        <label
          :class="{ 'text-green-500': isEligible, 'text-red-500': !isEligible }"
          >{{ votingEligibility }}</label
        >
      </div>
    </div>
  </div>
</template>

<style scoped></style>
