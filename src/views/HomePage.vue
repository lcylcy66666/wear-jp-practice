<template>
  <div class="home-page">
    <OutfitGrid />
  </div>
</template>

<script setup>
import OutfitGrid from '@/features/outfits/components/OutfitGrid.vue'
</script>

<style scoped>
.home-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
</style>