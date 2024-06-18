<script setup lang="ts">
  import Autoplay from 'embla-carousel-autoplay'
  import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
  } from '@/components/ui/carousel'

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

  import {
    PopoverArrow,
    PopoverClose,
    PopoverContent,
    PopoverPortal,
    PopoverRoot,
    PopoverTrigger
  } from 'radix-vue'
</script>

<template>
  <div>
    <header class="flex justify-center px-14 mt-5">
      <Carousel class="relative w-full" :opts="{
      align: 'start',
    }" :plugins="[plugin]" @mouseenter="plugin.stop" @mouseleave="[plugin.reset(), plugin.play(), console.log('Running')];">
        <CarouselContent class="-ml-1">
          <CarouselItem v-for="(category, index) in categories " :key="index" class="pl-1 md:basis-1/2 lg:basis-1/3">
            <div class="">
              <CardContent class=" items-center justify-center">
                <img :src="category.image" alt="">
              </CardContent>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

    </header>
    <section class="px-44">
      <div class="mt-5 flex items-center justify-between border-b border-neutral-500 pb-3 px-2">

        <h1 class="text-xl">CATEGORIES</h1>


        <div class="flex items-center gap-2">

          <h1 class="border px-3 py-1 rounded border-black">VEG</h1>
          <div class="border px-3 py-1 rounded border-black flex items-center">
            <h1>PRICE</h1>
            <Icon name="oui:menu-down" />
          </div>


          <PopoverRoot>
            <PopoverTrigger class="" aria-label="Update dimensions">
              <div class="px-3 py-1 rounded  flex items-center">
                <Icon name="jam:filter" class="text-2xl"/>
                <h1>PRICE</h1>
              </div>

            </PopoverTrigger>
            <PopoverPortal>
              <PopoverContent side="bottom" :side-offset="5" class="rounded p-5 w-[260px] bg-white shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.green7)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade">
                <div class="flex flex-col gap-2.5">
                  <div class="flex items-center justify-between">
                    <h1>FILTERS</h1>
                    <h1 class="text-red-500">Reset All Filters</h1>
                  </div>
                </div>
                <PopoverClose class="" aria-label="Close">
                  <!-- <Icon name="radix-icons:cross-2" /> -->
                </PopoverClose>
                <PopoverArrow class="fill-white" />
              </PopoverContent>
            </PopoverPortal>
          </PopoverRoot>
        </div>
      </div>


    </section>
  </div>
</template>