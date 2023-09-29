import { ref } from "vue";
import { defineStore } from "pinia";
import router from "../router/index";

const authStore = defineStore("auth", () => {
  const isAuthenticated = ref(localStorage.getItem("auth") == 1);
  const user = JSON.parse(localStorage.getItem("user"));

  const register = (userData) => {
    //proper email validation
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(userData.email)) {
      alert("Please enter a valid email address.");
      return;
    }
    //check if password and confirm password match
    if (userData.password !== userData.confirmPassword) {
      alert("Password and Confirm Password do not match.");
      return;
    }
    //check if username and password are not empty
    if (userData.username === "" || userData.password === "") {
      alert("Username and Password cannot be empty.");
      return;
    }

    localStorage.setItem("user", JSON.stringify(userData));
    alert("User registered successfully!");

    userData.username = "";
    userData.password = "";
    userData.confirmPassword = "";

    router.push({ name: "login" });
  };

  const login = (userData) => {
    //check if username and password are not empty
    if (userData.username === "" || userData.password === "") {
      alert("Username and Password cannot be empty.");
      return;
    }

    if (!user) {
      alert("User does not exist. Please register first!");
      return;
    }

    //check if username and password match
    if (
      user.username !== userData.username ||
      userData.password !== user.password
    ) {
      alert("Username and Password do not match.");
      return;
    }

    isAuthenticated.value = true;
    localStorage.setItem("auth", 1);
    router.push({ name: "dashboard" });
  };

  const logout = () => {
    isAuthenticated.value = false;
    localStorage.setItem("auth", 0);
    localStorage.setItem("user", "{}");
    router.push({ name: "Login" });
  };
  return {
    isAuthenticated,
    user,
    register,
    login,
    logout,
  };
});

export { authStore };
