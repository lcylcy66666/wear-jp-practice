<script setup>
import OutfitCard from './OutfitCard.vue'
import { ref } from 'vue'
import outfitsData from '../../../data/mockData.js'

const outfits = ref(outfitsData)
</script>

<template>
  <section class="outfit-grid-section">
    <h2 class="section-title">今日のピックアップ</h2>
    <div class="grid">
      <OutfitCard
        v-for="outfit in outfits"
        :key="outfit.id"
        :outfit-data="outfit"
      />
    </div>
  </section>
</template>

<style scoped>
.section-title {
  font-size: 24px;
  margin-bottom: 16px;
  text-align: center;
}

.grid {
  display: grid;
  /* 我們可以增加 grid-template-columns 的彈性，讓它在不同螢幕尺寸下表現更好 */
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
}
</style>
