import { reactive, computed } from "vue";
import { authStore } from "./authStore";
import { orderStore } from "./orderStore";

const cartStore = reactive({
  items: {},
  couponCode: "NEWUSER",
  discountInPercentage: 0,
  discountApplied: false,
  originalPrice: 0,

  //count total items in cart
  totalCartItems: computed(() => {
    let total = 0;
    for (let id in cartStore.items) {
      total += cartStore.items[id].quantity;
    }
    return total;
  }),

  //calculate total price
  totalPrice: computed(() => {
    let total = 0;
    for (let id in cartStore.items) {
      total += cartStore.items[id].product.price * cartStore.items[id].quantity;
    }
    cartStore.originalPrice = total.toFixed(2);
    //calculate discount
    if (cartStore.discountApplied) {
      total = total - (total * cartStore.discountInPercentage) / 100;
    }

    return parseFloat(total.toFixed(2));
  }),

  //add item into cart
  addItem(product) {
    if (this.items[product.id]) {
      this.items[product.id].quantity++;
    } else {
      this.items[product.id] = {
        product,
        quantity: 1,
      };
    }
    this.saveCartInLocalStorage();
  },

  //remove item from cart
  removeItem(product) {},

  //empty cart
  emptyCart() {
    this.items = {};
    this.saveCartInLocalStorage();
  },

  //save cart in local storage
  saveCartInLocalStorage() {
    localStorage.setItem("cart", JSON.stringify(this.items));
  },

  //get cart from local storage
  getCartFromLocalStorage() {
    this.items = JSON.parse(localStorage.getItem("cart")) || {};
  },

  //checkout
  checkout() {
    const order = orderStore;
    order.placeOrder(this.totalPrice, this.items);
  },

  //apply coupon code for discount
  async applyCoupon() {
    const apiUrl = "http://localhost:8000/api/coupon";
    const token = authStore.getUserToken();

    if (!token) {
      return;
    }

    const payload = {
      coupon: this.couponCode,
    };

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const couponData = await response.json();
      if (couponData.value != 0) {
        this.discountApplied = true;
        this.discountInPercentage = couponData.value;
      }
    } catch (error) {
      console.error("Apply coupon code error", error);
    }
  },

  //remove coupon
  removeCoupon() {
    this.discountApplied = false;
    this.discountInPercentage = 0;
  },
});

cartStore.getCartFromLocalStorage();

export { cartStore };
