import { reactive } from "vue";
import { authStore } from "./authStore";

const wishlistStore = reactive({
  items: [],

  //check if product is in wishlist
  isWishListed(product) {
    return this.items.includes(product.id);
  },

  //get wishlist items
  async fetchWishlist() {
    const apiUrl = "http://localhost:8000/api/wishlist";
    const token = authStore.getUserToken();
    if (!token) {
      return;
    }
    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const wishlistData = await response.json();
      this.items = wishlistData.wishlist;
    } catch (error) {
      console.error("Error fetching wishlist:", error);
    }
  },

  //add to wishlist
  async toggleWishlist(product) {
    let apiUrl = "http://localhost:8000/api/wishlist";
    let method = "POST";
    let payload = {
      product_id: product.id,
    };
    const token = authStore.getUserToken();

    if (!this.isWishListed(product)) {
      //add item to wishlist
      this.items.push(product.id);
    } else {
      //remove item from wishlist
      this.items = this.items.filter((id) => id != product.id);
      apiUrl = `http://localhost:8000/api/wishlist/${product.id}`;
      method = "DELETE";
      payload = {};
    }

    try {
      const response = await fetch(apiUrl, {
        method: method,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      //const data = await response.json();
      //console.log("Product ID saved to wishlist: ", data);
    } catch (error) {}
  },

  //get wishlist icon
  getIcon(product) {
    if (this.isWishListed(product)) {
      return "//img.icons8.com/?size=60&id=59805&format=png";
    } else {
      return "//img.icons8.com/?size=96&id=85038&format=png";
    }
  },

  //clear wishlist items when user logs out
  clearItems() {
    this.items = [];
  },
});

export { wishlistStore };
