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
      category: 'All day breakfast',
      details: 'Experience the original flavors of a typical English breakfast with our delightful dish. Our take on this breakfast combines classic ingredients like eggs, sausages, beans, and tomatoes, cooked to perfection. Indulge in this savory and satisfying meal, perfect for a power-packed start to your day.',
      isVeg: false,
      ingredients: ['Eggs', 'Sausages', 'Beans', 'Tomatoes'],
      energy: 500,
      carbs: 50
    },
    {
      id: "2",
      name: 'Smoked Sausages',
      price: "339",
      discountPrice: '449',
      Image: 'https://images.pexels.com/photos/5764577/pexels-photo-5764577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'All day breakfast',
      details: 'Experience the smoky and savory flavors of our Smoked Sausages. Our sausages are perfectly seasoned and cooked to give you a delightful breakfast experience. Enjoy these delicious sausages as part of your morning meal or as a standalone treat.',
      isVeg: false,
      ingredients: ['Sausages', 'Herbs', 'Spices'],
      energy: 450,
      carbs: 10
    },
    {
      id: "3",
      name: 'High Protein English Breakfast',
      price: "78",
      discountPrice: '229',
      Image: 'https://images.pexels.com/photos/10645412/pexels-photo-10645412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'All day breakfast',
      details: 'Indulge in our High Protein English Breakfast, a smaller yet equally satisfying portion of our classic breakfast. This meal includes eggs, sausages, beans, and tomatoes, providing a balanced and nutritious start to your day.',
      isVeg: false,
      ingredients: ['Eggs', 'Sausages', 'Beans', 'Tomatoes'],
      energy: 300,
      carbs: 30
    },
    {
      id: "4",
      name: 'The Muscle Multiplier',
      price: "149",
      discountPrice: '249',
      Image: 'https://images.pexels.com/photos/11182249/pexels-photo-11182249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'All day breakfast',
      details: 'Boost your muscle growth with The Muscle Multiplier. This meal is packed with protein-rich ingredients like chicken, eggs, and spinach. It’s designed to help you build and maintain muscle while providing a delicious and satisfying breakfast.',
      isVeg: false,
      ingredients: ['Chicken', 'Eggs', 'Spinach'],
      energy: 600,
      carbs: 40
    },
    {
      id: "5",
      name: 'The V-King',
      price: "149",
      discountPrice: '249',
      Image: 'https://images.pexels.com/photos/14549805/pexels-photo-14549805.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      category: 'All day breakfast',
      details: 'Enjoy a royal breakfast with The V-King. This vegan-friendly meal features tofu, avocado, and tomatoes, offering a nutritious and delicious start to your day. Perfect for those who prefer plant-based options without compromising on taste.',
      isVeg: true,
      ingredients: ['Tofu', 'Avocado', 'Tomatoes'],
      energy: 400,
      carbs: 35
    },
    {
      id: "6",
      name: 'Fresh Fruit Bowl',
      price: "149",
      discountPrice: '249',
      Image: 'https://images.pexels.com/photos/11020402/pexels-photo-11020402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'All day breakfast',
      details: 'Start your day with a burst of freshness with our Fresh Fruit Bowl. This bowl is filled with a variety of mixed fresh fruits, including strawberries, blueberries, banana, and mango. It’s a refreshing and healthy way to begin your morning.',
      isVeg: true,
      ingredients: ['Strawberries', 'Blueberries', 'Banana', 'Mango'],
      energy: 200,
      carbs: 50
    },
    {
      id: "7",
      name: 'The Sprinter',
      price: "149",
      discountPrice: '249',
      Image: 'https://images.pexels.com/photos/7111471/pexels-photo-7111471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'All day breakfast',
      details: 'Fuel your morning with The Sprinter, a quick and light breakfast option designed for those on the go. Featuring a mix of oats, milk, and berries, this meal provides the right balance of nutrients to keep you energized throughout the day.',
      isVeg: false,
      ingredients: ['Oats', 'Milk', 'Berries'],
      energy: 300,
      carbs: 45
    },
    {
      id: "8",
      name: 'Cheese French Toast Combo',
      price: "149",
      discountPrice: '249',
      Image: 'https://images.pexels.com/photos/3828940/pexels-photo-3828940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'All day breakfast',
      details: 'Indulge in our Cheese French Toast Combo, where classic French toast meets a cheesy twist. Made with bread, eggs, and cheese, this dish is cooked to perfection and is perfect for those who love a savory breakfast.',
      isVeg: false,
      ingredients: ['Bread', 'Eggs', 'Cheese'],
      energy: 550,
      carbs: 60
    },
    {
      id: "9",
      name: 'Classic French Toast Combo',
      price: "149",
      discountPrice: '249',
      Image: 'https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'All day breakfast',
      details: 'Experience the traditional flavors of a classic French breakfast with our Classic French Toast Combo. Made with bread, eggs, and topped with maple syrup, this dish is a sweet and satisfying way to start your day.',
      isVeg: false,
      ingredients: ['Bread', 'Eggs', 'Maple Syrup'],
      energy: 500,
      carbs: 55
    },
    {
      id: "10",
      name: 'High Protein English Breakfast',
      price: "149",
      discountPrice: '249',
      Image: 'https://images.pexels.com/photos/262973/pexels-photo-262973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'All day breakfast',
      details: 'Power through your day with our High Protein English Breakfast. This meal includes eggs, sausages, beans, and tomatoes, all cooked to provide a high-protein, balanced breakfast that is both delicious and nutritious.',
      isVeg: false,
      ingredients: ['Eggs', 'Sausages', 'Beans', 'Tomatoes'],
      energy: 550,
      carbs: 60
    },
    {
      id: "11",
      name: 'Scrambled Egg Sausage Brekkie',
      price: "149",
      discountPrice: '249',
      Image: 'https://images.pexels.com/photos/233305/pexels-photo-233305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'All day breakfast',
      details: 'Savor our Scrambled Egg Sausage Brekkie, a delightful combination of scrambled eggs and sausages. This meal is perfect for those who enjoy a hearty and flavorful breakfast to kickstart their day.',
      isVeg: false,
      ingredients: ['Eggs', 'Sausages', 'Herbs'],
      energy: 450,
      carbs: 20
    },
    {
      id: "12",
      name: 'The Sausagaddict',
      price: "149",
      discountPrice: '249',
      Image: 'https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'All day breakfast',
      details: 'For sausage lovers, The Sausagaddict is the ultimate breakfast treat. Packed with a variety of sausages and complemented with eggs and bacon, this meal offers a protein-rich and flavorful start to your day.',
      isVeg: false,
      ingredients: ['Sausages', 'Bacon', 'Eggs'],
      energy: 600,
      carbs: 25
    },
    {
      id: "13",
      name: 'Vegan Protein Power Bowl',
      price: "199",
      discountPrice: '299',
      Image: 'https://images.pexels.com/photos/11020402/pexels-photo-11020402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'All day breakfast',
      details: 'Experience the original flavors of a typical French breakfast with our delightful bowl. Our take on this French toast combines the classic dish of bread soaked in a rich custard made with Eggs, milk, cream and sugar griddled to perfection. Indulge in this savory and satisfying treat, perfect for on-the-go snacks or a power-packed protein snack.',
      isVeg: true,
      ingredients: ['Quinoa', 'Chickpeas', 'Avocado', 'Spinach', 'Tomatoes'],
      energy: 350,
      carbs: 45
    }
]);



  const getProductById = (id) => {
    return products.value.find(product => product.id === id);
  };

  const setProduct = (product) => {
    localStorage.setItem('product', JSON.stringify(product));
  };

  const loadProductFromLocalStorage = () => {
    const product = localStorage.getItem('product');
    if (product) {
      return JSON.parse(product);
    }
    return null;
  };

  return { products, getProductById, setProduct, loadProductFromLocalStorage };

});
