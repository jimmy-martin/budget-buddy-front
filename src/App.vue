
<script setup>
//import component from './components/component.vue'
</script>

<template>
  <div class="navbar">
    <router-link to="/">Go to Home</router-link>
    <router-link to="/profile">Go to Profile</router-link>
  </div>
 
  <router-view></router-view>
</template>

<style scoped>
  .navbar {
    display: flex;
    gap: 12px;
  }
</style>
