WEAR.JP 首頁復刻練習 (Vue 3 + Vite)
這是一個使用 Vue 3 和 Vite 來復刻日本最大級穿搭社群網站 WEAR.JP 首頁的前端練習專案。

專案目標是從零開始，逐步搭建一個結構清晰、可維護、符合現代前端開發標準的網頁應用。

✨ 專案特色
現代前端框架：使用最新的 Vue 3 Composition API (<script setup>)。

極速開發體驗：基於 Vite 進行專案建構與開發，享受閃電般的熱重載。

專業專案架構：採用 features、views、components 的分層結構，易於擴展與維護。

自動化程式碼品質管理：整合 ESLint 和 Prettier，透過 npm run lint 和 npm run format 實現一鍵檢查與格式化。

持續整合/持續部署 (CI/CD)：透過 GitHub Actions 自動化程式碼品質檢查與部署。

🛠️ 技術棧 (Tech Stack)
框架: Vue 3

建構工具: Vite

程式碼品質: ESLint (v9)

程式碼風格: Prettier

自動化: GitHub Actions

🚀 快速開始
1. 安裝依賴
npm install

2. 啟動開發伺服器
npm run dev

3. 打包用於生產環境
npm run build

4. 程式碼品質檢查與格式化
# 執行 ESLint 檢查並自動修正
npm run lint

# 執行 Prettier 格式化所有檔案
npm run format

部署
本專案已設定 GitHub Actions，當有新的程式碼推送到 main 分支時，將會自動執行程式碼品質檢查，並將打包後的專案部署到 GitHub Pages。