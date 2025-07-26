<script setup>
import Nav from './Nav.vue';


</script>

<template>
  <div class="flex flex-col h-screen w-screen">
    <Nav />
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </div>
</template>
