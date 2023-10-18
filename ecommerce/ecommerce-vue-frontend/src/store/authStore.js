import { reactive } from "vue";
import router from "../router/router";
import { cartStore } from "./cartStore";
import { wishlistStore } from "./wishlistStore";

const authStore = reactive({
  isAuthenticated: localStorage.getItem("auth") == 1,
  user: JSON.parse(localStorage.getItem("user")),

  register(name, email, password) {
    fetch("http://localhost:8000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        router.push("/login");
      });
  },

  authenticate(username, password) {
    fetch("http://localhost:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: username,
        password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error == 0) {
          authStore.isAuthenticated = true;
          authStore.user = res;
          localStorage.setItem("auth", 1);
          localStorage.setItem("user", JSON.stringify(res));
          router.push("/");
        }
      });
  },

  logout() {
    const cart = cartStore;
    const wishlist = wishlistStore;
    authStore.isAuthenticated = false;
    authStore.user = {};
    localStorage.setItem("auth", 0);
    localStorage.setItem("user", "{}");
    cart.items = {};
    // cart.totalPrice = 0;
    cart.saveCartInLocalStorage();
    wishlist.items = [];
    router.push("/login");
  },

  getUserToken() {
    return authStore.user.token;
  },
});

export { authStore };
