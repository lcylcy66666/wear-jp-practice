<template>
    <header class="header">
        我是 Header
    </header>
</template>


<script lang="ts" setup>
</script>

<style scoped>
.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    background-color: #fff;
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
}
</style>