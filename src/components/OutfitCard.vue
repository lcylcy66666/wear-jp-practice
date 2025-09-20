<template>
    <div class="card">
        <img :src="props.outfitData.imageUrl" alt="Fashion outfit" class="card-image">
        <div class="card-user-info">
            <img :src="props.outfitData.userAvatar" alt="User avatar" class="avatar">
            <span class="username">{{ props.outfitData.userName }}</span>
        </div>
    </div>
</template>

<script setup>
// 1. 使用 defineProps 來聲明我們期望從父組件接收哪些資料
const props = defineProps({
    // 'outfitData' 必須和父組件 v-for 中使用的 prop 名稱 (:outfit-data) 一致
    // 我們期望它是一個物件类型
    outfitData: {
        type: Object,
        required: true // 標示為必需的 prop
    }
})
</script>

<style scoped>
.card {
    border: 1px solid #e0e0e0;
    overflow: hidden;
    /* 確保圖片圓角生效 */
    border-radius: 4px;
}

.card-image {
    width: 100%;
    height: auto;
    display: block;
    /* 消除圖片底部的微小間距 */
}

.card-user-info {
    display: flex;
    align-items: center;
    padding: 8px;
}

.avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-right: 8px;
}

.username {
    font-size: 14px;
}
</style>