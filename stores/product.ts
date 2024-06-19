import { defineStore } from 'pinia';
import { ref } from 'vue';
import { Product } from '@/types';

export const useProductStore = defineStore('products', () => {
  const products = ref<Product[]>([
    {
      id: "1",
      name: 'High Protein English Breakfast',
      price: "149",
      discountPrice: '249',
      Image: 'https://images.pexels.com/photos/6823325/pexels-photo-6823325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'All day breakfast'
    },
    {
      id: "2",
      name: 'Smoked Sausages',
      price: "339",
      discountPrice: '449',
      Image: 'https://images.pexels.com/photos/5764577/pexels-photo-5764577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'All day breakfast'
    },
    {
      id: "3",
      name: 'High Protein English Breakfast',
      price: "78",
      discountPrice: '229',
      Image: 'https://images.pexels.com/photos/10645412/pexels-photo-10645412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'All day breakfast'
    },
    {
      id: "4",
      name: 'The Muscle Multiplier',
      price: "149",
      discountPrice: '249',
      Image: 'https://images.pexels.com/photos/11182249/pexels-photo-11182249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'All day breakfast'
    },
    {
      id: "5",
      name: 'The V-King',
      price: "149",
      discountPrice: '249',
      Image: 'https://images.pexels.com/photos/14549805/pexels-photo-14549805.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      category: 'All day breakfast'
    },
    {
      id: "6",
      name: 'Fresh Fruit Bowl',
      price: "149",
      discountPrice: '249',
      Image: 'https://images.pexels.com/photos/11020402/pexels-photo-11020402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'All day breakfast'
    },
    {
      id: "7",
      name: 'The Sprinter',
      price: "149",
      discountPrice: '249',
      Image: 'https://images.pexels.com/photos/7111471/pexels-photo-7111471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'All day breakfast'
    },
    {
      id: "8",
      name: 'Cheese French Toast Combo',
      price: "149",
      discountPrice: '249',
      Image: 'https://images.pexels.com/photos/3828940/pexels-photo-3828940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'All day breakfast'
    },
    {
      id: "9",
      name: 'Classic French Toast Combo',
      price: "149",
      discountPrice: '249',
      Image: 'https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'All day breakfast'
    },
    {
      id: "10",
      name: 'High Protein English Breakfast',
      price: "149",
      discountPrice: '249',
      Image: 'https://images.pexels.com/photos/262973/pexels-photo-262973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'All day breakfast'
    },
    {
      id: "11",
      name: 'Scrambled Egg Sausage Brekkie',
      price: "149",
      discountPrice: '249',
      Image: 'https://images.pexels.com/photos/233305/pexels-photo-233305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'All day breakfast'
    },
    {
      id: "12",
      name: 'The Sausagaddict',
      price: "149",
      discountPrice: '249',
      Image: 'https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'All day breakfast'
    },
  ]);


  const getProductById = (id) => {
    return products.value.find(product => product.id === id);
  };

  return { products ,getProductById };
});
