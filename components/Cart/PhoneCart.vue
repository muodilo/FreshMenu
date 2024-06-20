<script setup>
  const cartStore = useCartStore();
</script>

<template>
  <!-- Use v-if to conditionally render based on totalQuantity -->
  <div v-if="cartStore.totalQuantity > 0" class="bg-orange-500 text-white fixed bottom-0 right-0 left-0 md:hidden flex items-center justify-between px-3 py-3 z-30">
    <div>
    </div>
    <div class="flex items-center flex-col">
      <div class="flex items-center gap-2">
        <!-- Use ternary operator to display 'item' or 'items' based on totalQuantity -->
        <h1>{{ cartStore.totalQuantity }} {{ cartStore.totalQuantity === 1 ? 'item' : 'items' }}</h1>
        <h1>in Cart</h1>
      </div>
      <h1>VIEW CART</h1>
    </div>
    <Icon name="pajamas:long-arrow" class="text-2xl"/>
  </div>
</template>
