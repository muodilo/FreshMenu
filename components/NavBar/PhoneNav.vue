<script setup>
import {
  PopoverArrow,
  PopoverClose,
  PopoverContent,
  PopoverPortal,
  PopoverRoot,
  PopoverTrigger
} from 'radix-vue';
</script>
<template>
  <div class="md:hidden border bg-white">
    <div class="flex items-center">
      <NuxtLink href="/" class="w-[47px]">
        <img src="@/assets/freshLogo.png" />
      </NuxtLink>
        <div class="md:invisible visible">
       <PopoverRoot>
          <PopoverTrigger class="inline-flex items-center justify-center outline-none" aria-label="Update dimensions">
            <Icon name="uiw:down" class="text-2xl text-slate-600" />
          </PopoverTrigger>
          <PopoverPortal>
            <PopoverContent side="bottom" :side-offset="5" class="rounded p-5 w-[260px] bg-white shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.green7)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade z-30">
              <div class="flex flex-col gap-2.5 md:visible ">

              </div>
              <PopoverClose class="rounded-full h-[25px] w-[25px] inline-flex items-center justify-center text-grass11 absolute top-[5px] right-[5px] hover:bg-green4  outline-none cursor-default" aria-label="Close">
                <Icon name="radix-icons:cross-2" />
              </PopoverClose>
              <PopoverArrow class="fill-white" />
            </PopoverContent>
          </PopoverPortal>
        </PopoverRoot>
        </div>
        <div class="ps-4 flex items-center gap-2">
          <Icon name="fluent:building-townhouse-24-regular" class="text-red-500"/>
          <h1 class="text-red-500">Koramangara,Bengalulu,Karnataka, India</h1>
        </div>
    </div>
  </div>
</template>