import { ref } from "vue";
import { defineStore } from "pinia";
import router from "../router/index";

const authStore = defineStore("auth", () => {
  const isAuthenticated = ref(localStorage.getItem("auth") == 1);
  const user = ref(JSON.parse(localStorage.getItem("user")) || {});

  function register(userData) {
    const emailRegex = /\S+@\S+\.\S+/;
    //user data validation
    if (!emailRegex.test(userData.email)) {
      alert("Please enter a valid email address!");
    } else if (userData.password === "") {
      alert("Password cannot be empty.");
    } else if (userData.password !== userData.confirmPassword) {
      alert("Password and Confirm Password do not match.");
    } else {
      localStorage.setItem("user", JSON.stringify(userData));
      user.value = userData;
      alert("User registered successfully!");
      router.push({ name: "login" });
    }
  }

  function login(userData) {
    const emailRegex = /\S+@\S+\.\S+/;
    //user data validation
    if (user.value === "") {
      alert("User does not exist. Please register.");
    } else if (!emailRegex.test(userData.email)) {
      alert("Please enter a valid email address!");
    } else if (userData.password === "") {
      alert("Password cannot be empty.");
    } else if (
      userData.email !== user.value.email ||
      userData.password !== user.value.password
    ) {
      alert("Invalid credentials.");
    } else {
      isAuthenticated.value = true;
      localStorage.setItem("auth", 1);
      router.push({ name: "dashboard" });
    }
  }

  function logout() {
    isAuthenticated.value = false;
    localStorage.setItem("auth", 0);
    localStorage.setItem("user", "{}");
    router.push({ name: "login" });
  }

  return {
    isAuthenticated,
    user,
    register,
    login,
    logout,
  };
});

export { authStore };
