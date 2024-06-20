<script setup lang="ts">

const isPopoverVisible = ref(false);
  import Autoplay from 'embla-carousel-autoplay'
  import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
  } from '@/components/ui/carousel'

  import {
    PopoverArrow,
    PopoverClose,
    PopoverContent,
    PopoverPortal,
    PopoverRoot,
    PopoverTrigger
  } from 'radix-vue';

  const plugin = Autoplay({
    delay: 2000,
    stopOnMouseEnter: true,
    stopOnInteraction: false,
  })


  const categories = ref([{
      category: 'beef',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      category: 'beef',
      image: 'https://images.pexels.com/photos/840216/pexels-photo-840216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      category: 'beef',
      image: 'https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      category: 'beef',
      image: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      category: 'beef',
      image: 'https://images.pexels.com/photos/3053082/pexels-photo-3053082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
  ])

  const {
    products
  } = useProductStore();
const cartStore = useCartStore();
  const togglePopover = () => {
  isPopoverVisible.value = !isPopoverVisible.value;
};
  const handleImageClick = (id) => {
    navigateTo(`/products/${id}`)
}
  
</script>

<template>
  <div>
    <header class="md:flex justify-center px-14 mt-5 hidden md:pt-40 pt-10">
      <Carousel class="relative w-full" :opts="{ align: 'start' }" :plugins="[plugin]" @mouseenter="plugin.stop" @mouseleave="[plugin.reset(), plugin.play(), console.log('Running')]">
        <CarouselContent class="-ml-1">
          <CarouselItem v-for="(category, index) in categories" :key="index" class="pl-1 md:basis-1/2 lg:basis-1/3">
            <div>
              <img :src="category.image" alt="">
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </header>
    <section class="lg:px-44 md:px-10 md:h-[650px] h-svh md:overflow-hidden">
      <div class="mt-5 md:flex items-center justify-between border-b border-neutral-500 pb-3 px-2 hidden">
        <h1 class="text-xl">CATEGORIES</h1>
        <div class="flex items-center gap-2">
          <h1 class="border px-3 py-1 rounded border-black">VEG</h1>
          <div class="border px-3 py-1 rounded border-black flex items-center">
            <h1>PRICE</h1>
            <Icon name="oui:menu-down" />
          </div>
          <!-- Apply md:hidden to hide on screens smaller than md -->
          <PopoverRoot class="md:hidden">
            <PopoverTrigger aria-label="Update dimensions">
              <div class="px-3 py-1 rounded flex items-center">
                <Icon name="jam:filter" class="text-2xl" />
                <h1>FILTER</h1>
              </div>
            </PopoverTrigger>
            <PopoverPortal>
              <PopoverContent side="bottom" :side-offset="5" class="rounded w-[360px] bg-white shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.green7)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade z-30">
                <div class="flex flex-col gap-2.5 p-5">
                  <div class="flex items-center justify-between">
                    <h1>FILTERS</h1>
                    <h1 class="text-red-500">Reset All Filters</h1>
                  </div>
                  <div class="mb-2">
                    <h1 class="text-sm">Food Preference</h1>
                    <div class="flex gap-4 pt-2 flex-wrap">
                      <p class="border px-3 py-1 rounded-xl text-slate-400">Veg</p>
                      <p class="border px-3 py-1 rounded-xl text-slate-400">Contain Eggs</p>
                      <p class="border px-3 py-1 rounded-xl text-slate-400">Non Veg</p>
                    </div>
                  </div>
                  <div class="mb-2">
                    <h1 class="text-sm">Cuisine</h1>
                    <div class="flex gap-4 pt-2 flex-wrap">
                      <p class="border px-3 py-1 rounded-xl text-slate-400">Continental</p>
                      <p class="border px-3 py-1 rounded-xl text-slate-400">Fusion</p>
                      <p class="border px-3 py-1 rounded-xl text-slate-400">Asian</p>
                      <p class="border px-3 py-1 rounded-xl text-slate-400">Mexican</p>
                    </div>
                  </div>
                  <div class="mb-2">
                    <h1 class="text-sm">Trending</h1>
                    <div class="flex gap-4 pt-2 flex-wrap">
                      <p class="border px-3 py-1 rounded-xl text-slate-400">Desserts</p>
                      <p class="border px-3 py-1 rounded-xl text-slate-400">Best Offers</p>
                    </div>
                  </div>
                </div>
                <PopoverClose aria-label="Close"></PopoverClose>
                <PopoverArrow class="fill-white"></PopoverArrow>
                <div class="bg-orange-600 py-3 flex justify-center text-white">
                  Apply (8 Dishes)
                </div>
              </PopoverContent>
            </PopoverPortal>
          </PopoverRoot>
        </div>
      </div>
      <div class="flex items-start mt-7">
        <Sidebar />
        <div class="grow md:h-[550px] h-svh hide-scrollbar overflow-auto">
          <h1 class="md:text-4xl md:text-left text-xl text-center">ALL DAY BREAKFAST</h1>
          <div class="grid lg:grid-cols-3 grid-cols-2  gap-3 p-3">
            <div v-for="(product) in products" :key="product.id">
              <div>
                <div class="flex items-center gap-2">
                  <div class="h-4 w-4 flex items-center justify-center border border-red-500 rounded">
                    <div class="h-1 w-1 bg-red-500"></div>
                  </div>
                  <h1 class="text-slate-400">CONTINENTAL</h1>
                </div>
                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img class="lg:h-48 md:h-36 w-full object-cover object-center cursor-pointer hover:scale-105 duration-300 overflow-hidden" :src="product.Image" alt="product image" @click="handleImageClick(product.id)">
                  <div class="p-2">
                    <h2 class="tracking-widest title-font font-medium text-gray-400 mb-1">{{product.name}}</h2>
                    <div class="flex items-center justify-between">
                      <div>
                        <div class="flex items-center gap-2">
                          <h1 class="text-2xl">
                            <Icon name="ph:currency-inr-bold" /> {{product.price}}
                          </h1>
                          <h1 class="text-slate-400 line-through">
                            <Icon name="ph:currency-inr-bold" /> {{product.discountPrice}}
                          </h1>
                        </div>
                        <h1>40% OFF</h1>
                      </div>
                      <div>
                        <button @click="cartStore.addToCart(product)" class="w-24 py-2 bg-orange-500 rounded-2xl text-white">
                          {{ cartStore.getProductQuantity(product.id) > 0 ?  cartStore.getProductQuantity(product.id) : 'ADD' }}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
