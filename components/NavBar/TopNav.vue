<script setup lang="ts">
  import {
    Button
  } from '@/components/ui/button'
  import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from '@/components/ui/tooltip'

  // import { CalendarDays } from 'lucide-vue-next'

  // import {
  //   Avatar,
  //   AvatarFallback,
  //   AvatarImage,
  // } from '@/components/ui/avatar'
  import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from '@/components/ui/hover-card'

  import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from '@/components/ui/dialog'
  // import { Input } from '@/components/ui/input'
  // import { Label } from '@/components/ui/label'
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
  <div class="px-44 grid grid-cols-5  border shadow-lg">

    <!-- left side -->
    <div class="py-2 invisible col-span-3">
      <!-- logo -->
      <div class="flex items-center">
        <div class="w-[47px]  ">
          <img src="@/assets/freshLogo.png" />
        </div>
        <h1 class="text-3xl font-bold">FreshMenu</h1>
      </div>
    </div>

    <!-- right side -->
    <div class="col-span-2 flex items-center px-2">
      <div class="flex items-center  grow justify-between h-full">

        <div class="flex items-center hover:bg-slate-100 px-3 py-1 rounded-xl transition cursor-pointer">
          <Icon name="material-symbols-light:search" class="text-3xl" />
          <h1>Search</h1>
        </div>

        <div class=" hover:bg-slate-100 px-3 py-2 rounded-xl transition cursor-pointer">
          <h1>Offers</h1>
        </div>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger as-child>
              <Button variant="solid">
                <Icon name="icomoon-free:target" class="text-xl text-slate-600 rotate-45" />
              </Button>
            </TooltipTrigger>
            <TooltipContent class="text-white bg-black">
              <p>Help Center</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <PopoverRoot>
          <PopoverTrigger class="inline-flex items-center justify-center  outline-none" aria-label="Update dimensions">
            <Icon name="mdi:user-key-outline" class="text-2xl text-slate-600" />
          </PopoverTrigger>
          <PopoverPortal>
            <PopoverContent side="bottom" :side-offset="5" class="rounded p-5 w-[260px] bg-white shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.green7)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade">
              <div class="flex flex-col gap-2.5">



                <Dialog>
                  <DialogTrigger as-child>
                    <Button variant="solid" class="hover:text-red-500">
                      Login
                    </Button>
                  </DialogTrigger>
                  <DialogContent class="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle></DialogTitle>
                      <DialogDescription>
                        
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                      <Button type="submit">
                        Log In
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
                <Dialog>
                  <DialogTrigger as-child>
                    <Button variant="solid" class="hover:text-red-500">
                      Sign Up
                    </Button>
                  </DialogTrigger>
                  <DialogContent class="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle></DialogTitle>
                      <DialogDescription>
                        
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                      <Button type="submit">
                        Sign Up
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>

              </div>
              <PopoverClose class="rounded-full h-[25px] w-[25px] inline-flex items-center justify-center text-grass11 absolute top-[5px] right-[5px] hover:bg-green4 focus:shadow-[0_0_0_2px] focus:shadow-green7 outline-none cursor-default" aria-label="Close">
                <Icon icon="radix-icons:cross-2" />
              </PopoverClose>
              <PopoverArrow class="fill-white" />
            </PopoverContent>
          </PopoverPortal>
        </PopoverRoot>
        <div class="h-full flex items-center flex-col justify-center bg-yellow-500">
          <p>1</p>
        <TooltipProvider >
          <Tooltip>
            <TooltipTrigger as-child>
              <Button variant="solid">
                <Icon name="mdi-light:cart" class="text-3xl  " />
              </Button>
            </TooltipTrigger>
            <TooltipContent class="text-white bg-black">
              <p>Cart</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        </div>
      </div>

    </div>

  </div>
</template>