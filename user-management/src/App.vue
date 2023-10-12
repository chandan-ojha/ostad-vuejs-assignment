<script setup>
import { ref, reactive, computed, watch } from "vue";

const user = reactive({
  name: "Chandan Ojha",
  profileImage:
    "//flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
  birthdate: "1999-07-06",
  email: "chandan@gmail.com",
  description: "Hi, I am Chandan Ojha, a full-stack software developer.",
});

const votingEligibility = ref("");

//change profile image
const changeProfileImage = () => {
  const newImageURL = prompt("Enter the URL for your profile image:");
  if (newImageURL) {
    user.profileImage = newImageURL;
  }
};

//calculate age
const age = computed(() => {
  return new Date().getFullYear() - new Date(user.birthdate).getFullYear();
});

//check if user is eligible for voting
const isEligible = computed(() => {
  return age.value >= 18;
});

//watch age and update voting eligibility
watch(
  age,
  (newAge, oldAge) => {
    if (newAge >= 18) {
      votingEligibility.value = "You are eligible for voting!";
    } else {
      votingEligibility.value = "You are not eligible for voting!";
    }
  },
  { immediate: true }
);
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
        <label for="userName" class="block text-gray-600 font-semibold">
          Name
        </label>
        <input
          v-model="user.name"
          id="userName"
          class="w-full px-3 py-2 border rounded"
        />
      </div>
      <div class="mb-4">
        <label for="birthdate" class="block text-gray-600 font-semibold">
          Birthdate
        </label>
        <input
          v-model="user.birthdate"
          id="birthdate"
          type="date"
          class="w-full px-3 py-2 border rounded"
        />
      </div>
      <div class="mb-4">
        <label for="email" class="block text-gray-600 font-semibold">
          Email
        </label>
        <input
          v-model="user.email"
          id="email"
          type="email"
          class="w-full px-3 py-2 border rounded"
        />
      </div>
      <div class="mb-4">
        <label for="description" class="block text-gray-600 font-semibold">
          Description
        </label>
        <textarea
          v-model="user.description"
          id="description"
          class="w-full px-3 py-2 border rounded"
        ></textarea>
      </div>
      <div class="text-center">
        <label class="text-gray-600 font-semibold">Age: {{ age }}</label>
        <br />
        <label
          :class="{ 'text-green-500': isEligible, 'text-red-500': !isEligible }"
        >
          {{ votingEligibility }}
        </label>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
