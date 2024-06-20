<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const productStore = useProductStore();
const cartStore = useCartStore();

const product = ref(null);
const isLoading = ref(true); // State to track loading status

onMounted(() => {
  const productId = route.params.id;
  const localProduct = productStore.loadProductFromLocalStorage();

  if (localProduct && localProduct.id === productId) {
    product.value = localProduct;
    isLoading.value = false; // Set loading to false once data is loaded
  } else {
    product.value = productStore.getProductById(productId);
    if (product.value) {
      productStore.setProduct(product.value);
      isLoading.value = false; // Set loading to false once data is loaded
    } else {
      // Handle case where product is not found
      isLoading.value = false;
    }
  }

  window.scrollTo(0, 0); // Scroll to the top of the page
});
</script>

<template>
  <section class="text-gray-600 body-font overflow-hidden pt-10">
    <div class="container px-5 py-24 mx-auto">
      <div v-if="isLoading" class="text-center py-24">
        <h1 class="text-gray-500 text-3xl">Loading...</h1>
        <p>Please wait while we fetch the product details.</p>
      </div>
      <div v-else-if="product" class="lg:w-4/5 mx-auto flex flex-wrap">
        <img :src="product.Image" alt="ecommerce" class="lg:w-1/2 w-full lg:h-96 h-64 object-cover object-center rounded">
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h1 class="text-gray-500 text-3xl title-font font-medium mb-4">{{ product.name }}</h1>

          <div class="flex items-center gap-2 mb-4">
            <div class="h-3 w-3 border flex items-center justify-center border-red-500 rounded">
              <div class="h-1 w-1 bg-red-500"></div>
            </div>
            <h1 class="text-red-500 underline">{{ product.category }}</h1>
          </div>

          <div class="flex items-center gap-5 mb-3">
            <div class="flex items-center gap-2">
              <h1 class="">
                <Icon name="ph:currency-inr-bold" /> {{ product.price }}
              </h1>
              <h1 class="text-slate-400 line-through">
                <Icon name="ph:currency-inr-bold" /> {{ product.discountPrice }}
              </h1>
            </div>
            <h1 class="text-blue-500 border border-blue-500 px-3">40% OFF</h1>
          </div>

          <button @click="cartStore.addToCart(product)" class="w-24 py-2 bg-orange-500 rounded-2xl text-white">
            {{ cartStore.getProductQuantity(product.id) > 0 ? cartStore.getProductQuantity(product.id) : 'ADD' }}
          </button>
          <h1 class="text-slate-900 mb-2">DETAILS ABOUT THIS MEAL</h1>

          <p class="leading-relaxed">{{ product.details }}</p>

          <div class="mt-5 mb-5">
            <Icon name="iconoir:leaf" class="text-5xl" />
            <h1>{{ product.isVeg ? 'VEG' : 'NON-VEG' }}</h1>
          </div>

          <h1 class="mb-2 text-slate-900 ">INGREDIENTS</h1>
          <p>{{ product.ingredients.join(', ') }}</p>

          <h1 class="mt-5 text-slate-900 ">NUTRITION</h1>
          <div class="flex flex-wrap gap-10 mt-5">
            <div class="text-center">
              <h1>{{ product.energy }}</h1>
              <p>ENERGY(KCAL)</p>
            </div>
            <div class="text-center">
              <h1>{{ product.carbs }}</h1>
              <p>Carbs (g)</p>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="text-center py-24">
        <h1 class="text-gray-500 text-3xl">Product not found</h1>
        <p>Please select a product to view its details.</p>
      </div>
    </div>
  </section>
</template>
