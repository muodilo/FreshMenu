<template>
  <div class="px-44 lg:grid grid-cols-5 border hidden bg-white">

    <!-- left side -->
    <div class="col-span-3 flex items-center gap-10 py-2">

      <!-- logo -->
      <div class="flex items-center">
        <div class="w-[47px]  ">
          <img src="@/assets/freshLogo.png"/>
        </div>
          <h1 class="text-3xl font-bold">FreshMenu</h1>
      </div>
      
      <div class="flex gap-1 items-center mt-2">
        <h1 class="text-neutral-400">Deliver To:</h1>
        <div class="flex items-center cursor-pointer">
          <h1 class="text-red-500 ">Koramangala, Bengal...</h1>
          <Icon name="icon-park-outline:down" size="30" class="text-red-400 text-sm "/>
        </div>
      </div>

    </div>

    <!-- right side -->
    
    <div class="col-span-2 grid grid-cols-3">
      <div class="bg-yellow-400 grid grid-cols-3 cursor-pointer">
        <div class="flex items-center justify-center">
          <icon name="foundation:ticket" class="text-2xl" />
        </div>
        <div class="col-span-2 flex items-center">
          <div>
            <h1 class="text-bold">Fresh Pass</h1>
            <h1 class="text-xs text-bold">Get extra 20% off</h1>
          </div>

        </div>
        
      </div>
      <div class="bg-fuchsia-950 cursor-pointer">
        <div class="flex justify-between p-1">
          <div>
          </div>
          <p class="bg-white text-xs px-1 rounded">New</p>
        </div>
        <div class="flex items-center gap-2 justify-center">
          <Icon name="mdi:suit-clubs" color="white"/> 
          <h1 class="text-white">Try Fresh Club</h1>
        </div>
        <div>

        </div>
      </div>
      <div class="flex items-center ps-3">
        Download App
      </div>
    </div>

    
  </div>
</template>