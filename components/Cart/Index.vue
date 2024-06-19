
import type DialogVue from '../ui/dialog/Dialog.vue';

import type { SelectItem } from '#build/components';

import type { SelectItem } from '#build/components';

import type { SelectItem } from '#build/components';
<script setup lang="ts">


const cartStore = useCartStore();

const handleIconClick = () => {
  cartStore.toggleCart();
};
</script>

<template>
  <div v-if="cartStore.isCartOpen" class="fixed top-0 bottom-0 right-0 left-[1200px] bg-white border z-30 lg:visible invisible">
    <div class="px-3 py-5">
      <div class="flex items-center justify-between">
        <h1 class="text-2xl font-bold">Your Cart</h1>
        <Icon name="mdi:remove-bold" class="text-2xl cursor-pointer" @click="handleIconClick"/>
      </div>
      <div class="pt-10">
        <ul>
          <li v-for="item in cartStore.cart" :key="item.id" class="flex items-center justify-between">
            <h1>{{item.name}}</h1>
            <div class="flex items-center gap-5 px-3 border  py-1 rounded-3xl">
              <h1 class="text-orange-500 text-xl font-bold cursor-pointer">-</h1>
              <h1>{{item.quantity}}</h1>
              <h1 class="text-orange-500 text-xl font-bold cursor-pointer">+</h1>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
