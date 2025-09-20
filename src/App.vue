<script setup>
import TheHeader from './components/TheHeader.vue'
import Thefooter from './components/Thefooter.vue'
import HomePage from './components/HomePage.vue';
</script>

<template>
  <TheHeader />

  <main>
    <HomePage />
  </main>

  <Thefooter />
</template>

<style scoped>
main {
  /* 簡單設定讓 header 和 footer 之間有些空間 */
  padding-top: 80px;
  /* 假設 header 高度為 80px */
  min-height: 100vh;
}
</style>