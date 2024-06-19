<script setup lang="ts">
const cartStore = useCartStore();

const handleIconClick = () => {
  cartStore.toggleCart();
};

const incrementQuantity = (productId: number) => {
  cartStore.incrementQuantity(productId);
};

const decrementQuantity = (productId: number) => {
  cartStore.decrementQuantity(productId);
};
</script>

<template>
  <div v-if="cartStore.isCartOpen" class="fixed top-0 bottom-0 right-0 w-80 bg-white border z-30 md:grid hidden">
    <div class="px-3 py-5">
      <div class="flex items-center justify-between">
        <h1 class="text-2xl font-bold">Your Cart</h1>
        <Icon name="mdi:remove-bold" class="text-2xl cursor-pointer" @click="handleIconClick" />
      </div>
      <div class="pt-10">
        <template v-if="cartStore.cart.length > 0">
          <ul>
            <li v-for="item in cartStore.cart" :key="item.id" class="flex items-center justify-between mb-2">
              <h1>{{ item.name }}</h1>
              <div class="flex items-center gap-5 px-3 border py-1 rounded-3xl">
                <h1 class="text-orange-500 text-xl font-bold cursor-pointer" @click="decrementQuantity(item.id)">-</h1>
                <h1>{{ item.quantity }}</h1>
                <h1 class="text-orange-500 text-xl font-bold cursor-pointer" @click="incrementQuantity(item.id)">+</h1>
              </div>
            </li>
          </ul>
          <div class="mt-10 flex items-center justify-center gap-2 border bg-orange-600 text-white rounded-3xl py-2">
            <h1>Place Order.</h1> 
            <h1 class="text-2xl"><Icon name="ph:currency-inr-bold"/> {{cartStore.totalAmount}}</h1>
          </div>
        </template>
        <template v-else>
          <p class="text-center text-gray-500">Your cart is empty.</p>
        </template>
      </div>
    </div>
  </div>
</template>


