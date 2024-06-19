<script setup>
  import {
    ref,
    onMounted,
    onBeforeUnmount
  } from 'vue';

  const showTopTopNav = ref(true);
  let lastScrollTop = 0;
  const scrollContainer = ref(null);

  const handleScroll = () => {
    const scrollTop = scrollContainer.value.scrollTop;
    if (scrollTop > lastScrollTop) {
      showTopTopNav.value = false; // Scrolling down
    } else {
      showTopTopNav.value = true; // Scrolling up
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
  };

  onMounted(() => {
    if (scrollContainer.value) {
      scrollContainer.value.addEventListener('scroll', handleScroll);
    }
  });

  onBeforeUnmount(() => {
    if (scrollContainer.value) {
      scrollContainer.value.removeEventListener('scroll', handleScroll);
    }
  });
</script>

<template>
  <div ref="scrollContainer" class="h-screen overflow-auto hide-scrollbar">
    <div class="flex">
      <div class="grow">
        <!-- top Nav -->
        <div class="fixed top-0 left-0 right-0 z-10 w-full flex flex-col">
          <div :class="{ 'hidden': !showTopTopNav }">
            <NavBarTopTopNav />
          </div>
          <div class="fixed-top-adjust">
            <NavBarTopNav :showTopTopNav="showTopTopNav" />
          </div>
        </div>
        <!-- pages -->
        <div class="pt-40">
          <slot />
        </div>
      </div>
      <div>
        <Cart/>
      </div>
    </div>
  </div>
</template>