<script setup>
import Nav from './Nav.vue';
import allbg from '/allbg.jpg';

</script>

<template>
  <div>
    <img :src="allbg" class="-z-10 w-screen h-screen object-cover fixed top-0 right-0" alt="">
    <div class="z-50 flex flex-col h-screen w-screen">
      <Nav />
      <router-view class="p-4" v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </div>
  </div>
</template>
