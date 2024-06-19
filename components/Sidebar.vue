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
</script>

<template>
  <div class="lg:w-[250px] md:grid hidden">
    <ul class="grid gap-5">
      <li v-for="(item, index) in menuItems" :key="index" >
      <p class="hover:border-b-2 hover:text-xl border-red-500 inline cursor-pointer">{{ item }}</p> 
      </li>
    </ul>
  </div>
</template>
