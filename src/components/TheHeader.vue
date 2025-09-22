<template>
  <header class="site-header">
    <div class="header-content">
      <div class="header-left">
        <div class="search-bar">
          <input type="text" placeholder="コーディネートやユーザーを探す" />
        </div>
      </div>

      <div class="header-center">
        <a href="/">
          <svg
            width="147"
            height="32"
            viewBox="0 0 147 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <text
              x="50%"
              y="50%"
              dominant-baseline="middle"
              text-anchor="middle"
              font-family="Helvetica, Arial, sans-serif"
              font-size="30"
              font-weight="bold"
              fill="#1C1C1C"
            >
              LCY
            </text>
          </svg>
        </a>
      </div>

      <div class="header-right">
        <!-- 「登入」連結，加入了使用者圖示 -->
        <a href="#" class="header-link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          <span>ログイン</span>
        </a>
        <a href="#" class="header-link signup-link">新規会員登録</a>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup></script>

<style scoped>
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid #e0e0e0;
  z-index: 1000;
}

.header-content {
  display: flex;
  align-items: center;
  /* justify-content: space-between; 依然有效，但下面有更精準的技巧 */
  max-width: 1200px;
  margin: 0 auto;
  height: 60px;
  padding: 0 20px;
}

/* --- 關鍵佈局技巧：三欄等寬，確保中間完美置中 --- */
.header-left,
.header-right {
  flex: 1;
  /* 讓左右兩邊各佔一份空間 */
}

.header-center {
  /* 中間的 Logo 佔據它自身需要的空間 */
  padding: 0 20px;
  /* 給 Logo 左右一些呼吸空間 */
}

.header-left {
  display: flex;
  /* 使用 Flexbox 來對齊內部項目 */
  justify-content: flex-start;
  /* 讓內容靠左 */
}

.header-right {
  display: flex;
  /* 使用 Flexbox 來對齊內部項目 */
  justify-content: flex-end;
  /* 讓內容靠右 */
  align-items: center;
  gap: 24px;
  /* 設定連結之間的間距 */
}

/* --- 各區塊內部樣式 --- */
.search-bar {
  position: relative;
}

.search-bar input {
  border: 1px solid #ccc;
  border-radius: 4px;
  /* 從截圖看，圓角比較小 */
  padding: 8px 12px 8px 32px;
  /* 左邊留出空間給 icon */
  width: 280px;
  font-size: 14px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%23888' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: 10px center;
}

.header-center a {
  display: flex;
  /* 使用 flex 讓 svg 垂直居中，避免對齊問題 */
  align-items: center;
}

.header-center svg {
  height: 32px;
  /* 控制 svg 的高度 */
  width: auto;
  /* 寬度自動，保持比例 */
  display: block;
}

.header-link {
  text-decoration: none;
  color: #333;
  font-size: 14px;
  white-space: nowrap;
  /* 防止文字換行 */
}

.signup-link {
  border: 1px solid #555;
  padding: 6px 12px;
  border-radius: 4px;
}

.signup-link:hover {
  background-color: #f5f5f5;
}

.icon-link {
  /* 這裡可以放上圖示的樣式 */
  /* 為了對齊，我們先讓它跟其他連結一樣 */
  padding: 6px 0;
  /* 模擬上下空間 */
}
</style>
