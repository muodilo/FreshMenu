<template>
  <div>
    <!-- top Nav -->
    <div class="flex flex-col">
      <div>
        <NavBarTopTopNav/>        
      </div>
      <div>
        <NavBarTopNav/>
      </div>
    </div>
    <!-- pages -->
    <div>
      <slot/>
    </div>
  </div>
</template>