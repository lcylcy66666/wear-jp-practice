<script setup>
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
import HomePage from './views/HomePage.vue'
</script>

<template>
  <TheHeader />

  <main>
    <HomePage />
  </main>

  <TheFooter />
</template>

<style>
body {
  margin: 0;
  /* 最好也清除 body 的預設外邊距 */
  background-color: #f9f9f9;
  /* 設定柔和的背景色 */
  font-family:
    -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
    Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol', 'Noto Color Emoji';
  /* 使用更現代的字體棧 */
  color: #333;
}
</style>

<style scoped>
main {
  /* 簡單設定讓 header 和 footer 之間有些空間 */
  padding-top: 80px;
  /* 假設 header 高度為 80px */
  min-height: 100vh;
}
</style>
