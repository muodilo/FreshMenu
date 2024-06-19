import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { CartItem, Product } from '@/types';

export const useCartStore = defineStore('cart', () => {
  const cart = ref<CartItem[]>([]);
  const isCartOpen = ref(false);

  const toggleCart = () => {
    isCartOpen.value = !isCartOpen.value;
  };

  const addToCart = (product: Product) => {
    const itemInCart = cart.value.find(item => item.id === product.id);
    if (itemInCart) {
      itemInCart.quantity += 1;
    } else {
      cart.value.push({ ...product, quantity: 1 });
    }
  };

  const removeFromCart = (productId: string) => {
    cart.value = cart.value.filter(item => item.id !== productId);
  };

  const incrementQuantity = (productId: string) => {
    const itemInCart = cart.value.find(item => item.id === productId);
    if (itemInCart) {
      itemInCart.quantity += 1;
    }
  };

  const decrementQuantity = (productId: string) => {
    const itemInCart = cart.value.find(item => item.id === productId);
    if (itemInCart && itemInCart.quantity > 1) {
      itemInCart.quantity -= 1;
    } else if (itemInCart) {
      removeFromCart(productId);
    }
  };

  const totalAmount = computed(() => {
    return cart.value.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
  });

  const totalQuantity = computed(() => {
    return cart.value.reduce((total, item) => total + item.quantity, 0);
  });

  const getProductQuantity = (productId: string) => {
    const item = cart.value.find(item => item.id === productId);
    return item ? item.quantity : 0;
  };

  return {
    cart,
    isCartOpen,
    toggleCart,
    addToCart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    totalAmount,
    totalQuantity,
    getProductQuantity,
  };
});
