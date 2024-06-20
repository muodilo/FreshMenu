<script setup>
import { ref } from 'vue';

const menuItems = ref([
  'All day breakfast',
  "Omelette's",
  "Bowls",
  "Noodles",
  "Keto and Salads",
  "Wraps",
  "Sandwiches",
  "Lite Bite",
  "Gourmet Sandwiches",
  "Burgers",
  "Appetizers",
  "Desserts Beverages",
]);
  const productStore = useProductStore();

  const filterAndSaveProducts = (category) => {
    const filteredProducts = productStore.getProductsByCategory(category);
    productStore.saveFilteredProductsToLocalStorage(category);
    // Optionally, you can do something with filteredProducts here
  };

</script>

<template>
  <div class="lg:w-[250px] md:grid hidden">
    <ul class="grid gap-5">
      <li v-for="(item, index) in menuItems" :key="index" @click="filterAndSaveProducts(item)">
        <p class="hover:border-b-2 hover:text-xl border-red-500 inline cursor-pointer">{{ item }}</p> 
      </li>
    </ul>
  </div>
</template>