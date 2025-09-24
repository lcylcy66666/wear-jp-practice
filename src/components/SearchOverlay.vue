<template>
    <!-- 搜尋彈出視窗背景 -->
    <div class="search-overlay" @click="handleBackgroundClick">
        <!-- Modal 主體 -->
        <div class="search-modal" ref="searchModalRef" @click.stop>
            <!-- 標籤頁 -->
            <div class="search-tabs">
                <button class="tab-button" :class="{ active: activeTab === 'coordinate' }"
                    @click="setActiveTab('coordinate')">
                    コーディネート
                </button>
                <button class="tab-button" :class="{ active: activeTab === 'user' }" @click="setActiveTab('user')">
                    ユーザー
                </button>
                <button class="tab-button" :class="{ active: activeTab === 'item' }" @click="setActiveTab('item')">
                    アイテム
                </button>
                <button class="tab-button" :class="{ active: activeTab === 'shop' }" @click="setActiveTab('shop')">
                    店舗
                </button>
            </div>

            <!-- 搜尋內容區域 -->
            <div class="search-content">
                <!-- 搜尋建議連結 -->
                <div class="search-suggestions">
                    <a href="#" class="suggestion-link">コーディネート一覧から探す</a>
                    <span class="separator">|</span>
                    <a href="#" class="suggestion-link">ランキングから探す</a>
                </div>

                <!-- 搜尋歷史區域 -->
                <div class="search-section">
                    <div class="section-header">
                        <h3>履歴</h3>
                        <button class="clear-history">履歴を消去</button>
                    </div>

                    <div class="history-list">
                        <div class="history-item">
                            <svg class="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2">
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="21 21l-4.35-4.35"></path>
                            </svg>
                            <span>Vivienne Westwood</span>
                        </div>
                        <div class="history-item">
                            <svg class="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2">
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="21 21l-4.35-4.35"></path>
                            </svg>
                            <span>Vivienne Westwood 項鍊</span>
                        </div>
                        <div class="history-item">
                            <svg class="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2">
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="21 21l-4.35-4.35"></path>
                            </svg>
                            <span>ローファー</span>
                        </div>
                    </div>

                    <button class="more-button">もっと見る</button>
                </div>

                <!-- 熱門關鍵字區域 -->
                <div class="search-section">
                    <div class="section-header">
                        <h3>急上昇ワード</h3>
                    </div>

                    <div class="trending-list">
                        <div class="trending-item">
                            <svg class="trending-icon" width="16" height="16" viewBox="0 0 24 24" fill="none"
                                stroke="#ff4757" stroke-width="2">
                                <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"></polygon>
                            </svg>
                            <span>秋コーデ</span>
                        </div>
                        <div class="trending-item">
                            <svg class="trending-icon" width="16" height="16" viewBox="0 0 24 24" fill="none"
                                stroke="#ff4757" stroke-width="2">
                                <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"></polygon>
                            </svg>
                            <span>夏コーデ</span>
                        </div>
                        <div class="trending-item">
                            <svg class="trending-icon" width="16" height="16" viewBox="0 0 24 24" fill="none"
                                stroke="#ff4757" stroke-width="2">
                                <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"></polygon>
                            </svg>
                            <span>結婚式</span>
                        </div>
                        <div class="trending-item">
                            <svg class="trending-icon" width="16" height="16" viewBox="0 0 24 24" fill="none"
                                stroke="#ff4757" stroke-width="2">
                                <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"></polygon>
                            </svg>
                            <span>シンプルコーデ</span>
                        </div>
                        <div class="trending-item">
                            <svg class="trending-icon" width="16" height="16" viewBox="0 0 24 24" fill="none"
                                stroke="#ff4757" stroke-width="2">
                                <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"></polygon>
                            </svg>
                            <span>ハーフパンツ</span>
                        </div>
                        <div class="trending-item">
                            <svg class="trending-icon" width="16" height="16" viewBox="0 0 24 24" fill="none"
                                stroke="#ff4757" stroke-width="2">
                                <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"></polygon>
                            </svg>
                            <span>チェックシャツ</span>
                        </div>
                        <div class="trending-item">
                            <svg class="trending-icon" width="16" height="16" viewBox="0 0 24 24" fill="none"
                                stroke="#ff4757" stroke-width="2">
                                <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"></polygon>
                            </svg>
                            <span>きれいめカジュアル</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'

// 事件發送
const emit = defineEmits(['close'])

// 響應式資料
const activeTab = ref('coordinate')
const searchModalRef = ref(null)

// 設定活躍標籤
function setActiveTab(tab) {
    activeTab.value = tab
}

// 關閉 Modal
function handleBackgroundClick() {
    emit('close')
}

// 動態計算並設定 SearchOverlay 位置
function alignToSearchInput() {
    nextTick(() => {
        const searchInput = document.querySelector('.search-bar input')
        const modal = searchModalRef.value

        if (searchInput && modal) {
            const searchRect = searchInput.getBoundingClientRect()
            modal.style.left = `${searchRect.left}px`
        }
    })
}

// 組件掛載時對齊位置
onMounted(() => {
    alignToSearchInput()
    // 監聽視窗大小變化，重新對齊
    window.addEventListener('resize', alignToSearchInput)
})


</script>

<style scoped>
.search-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 2000;
}

.search-modal {
    background: white;
    border-radius: 0;
    width: 800px;
    max-width: calc(100vw - 40px);
    height: calc(100vh - 60px);
    overflow-y: auto;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
    animation: modalSlideIn 0.3s ease-out;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 60px;
    /* JavaScript 會動態設定 left 位置 */
    left: 0;
}

@keyframes modalSlideIn {
    from {
        opacity: 0;
        transform: translateY(-30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* 標籤頁 */
.search-tabs {
    display: flex;
    background-color: #f8f9fa;
    border-bottom: 1px solid #e5e5e5;
}

.tab-button {
    flex: 1;
    padding: 16px 12px;
    background: none;
    border: none;
    font-size: 14px;
    color: #666;
    cursor: pointer;
    transition: all 0.2s;
    position: relative;
}

.tab-button:hover {
    background-color: #f0f0f0;
}

.tab-button.active {
    color: #333;
    font-weight: 500;
}

.tab-button.active::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background-color: #4a90e2;
}

/* 搜尋內容 */
.search-content {
    padding: 20px 24px;
    flex: 1;
    overflow: visible;
}

/* 搜尋建議 */
.search-suggestions {
    margin-bottom: 24px;
    text-align: center;
}

.suggestion-link {
    color: #4a90e2;
    text-decoration: none;
    font-size: 14px;
}

.suggestion-link:hover {
    text-decoration: underline;
}

.separator {
    margin: 0 12px;
    color: #ccc;
}

/* 搜尋區段 */
.search-section {
    margin-bottom: 32px;
}

.section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
}

.section-header h3 {
    margin: 0;
    font-size: 16px;
    font-weight: 500;
    color: #333;
}

.clear-history {
    background: none;
    border: none;
    color: #666;
    font-size: 12px;
    cursor: pointer;
    text-decoration: underline;
}

.clear-history:hover {
    color: #333;
}

/* 歷史記錄列表 */
.history-list {
    margin-bottom: 16px;
}

.history-item {
    display: flex;
    align-items: center;
    padding: 12px 0;
    border-bottom: 1px solid #f5f5f5;
    cursor: pointer;
}

.history-item:hover {
    background-color: #f9f9f9;
}

.search-icon {
    margin-right: 12px;
    color: #999;
    flex-shrink: 0;
}

.history-item span {
    font-size: 14px;
    color: #333;
}

/* 更多按鈕 */
.more-button {
    width: 100%;
    padding: 12px;
    background: none;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    color: #666;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.2s;
}

.more-button:hover {
    background-color: #f5f5f5;
    border-color: #ddd;
}

/* 熱門關鍵字列表 */
.trending-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.trending-item {
    display: flex;
    align-items: center;
    padding: 10px 0;
    cursor: pointer;
}

.trending-item:hover {
    background-color: #f9f9f9;
}

.trending-icon {
    margin-right: 12px;
    flex-shrink: 0;
}

.trending-item span {
    font-size: 14px;
    color: #333;
}

/* 響應式設計 */
@media (max-width: 768px) {
    .search-modal {
        width: calc(100vw - 20px);
        left: 10px !important;
        top: 60px;
        height: calc(100vh - 60px);
    }

    .search-content {
        padding: 16px;
    }

    .tab-button {
        padding: 12px 8px;
        font-size: 13px;
    }
}

/* 當螢幕寬度小於等於 1240px 時的特殊處理 */
@media (max-width: 1240px) {
    .search-modal {
        left: 20px;
    }
}
</style>