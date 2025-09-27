# WEAR.JP 首頁復刻練習 (Vue 3 + Vite)

這是一個以 Vue 3 + Vite 復刻日本穿搭社群 WEAR.JP 首頁的前端練習專案，目標是打造結構清晰、易於擴充且符合現代開發流程的展示網站。

想參與貢獻？請先閱讀 [Repository Guidelines](AGENTS.md) 了解專案結構與開發規範。

## 專案亮點
- 使用 Vue 3 `<script setup>` 與 Composition API 建構元件。
- 透過 Vite 提供快速開發體驗與模組熱重載。
- 採用 features/views/components 分層架構，聚焦領域職責分離。
- 整合 ESLint + Prettier，確保統一格式與程式碼品質。
- GitHub Actions 自動化品質檢查與 GitHub Pages 部署流程。

## 技術棧
- Vue 3
- Vite
- ESLint 9 + eslint-plugin-vue
- Prettier 3
- GitHub Actions（CI/CD）

## 專案結構
```
src/
  assets/           # 圖片等靜態資源
  components/       # 共用 UI 元件（Header、Footer、Overlay 等）
  data/             # mock 資料集
  features/         # 依領域劃分的複合元件（如 outfits）
  views/            # 頁面層級元件（HomePage）
  App.vue           # 根元件，掛載共享版型
  main.js           # 入口檔，掛載 Vue 應用
public/             # 直接發佈的靜態資源
```

## 快速開始
### 系統需求
- Node.js 20.19+（或 22.12+）
- npm 10 以上版本

### 安裝與啟動
```bash
# 安裝依賴
npm install

# 啟動開發伺服器（http://localhost:5173）
npm run dev

# 建置生產版，輸出於 dist/
npm run build

# 建置後預覽產出
npm run preview
```

## 程式碼品質
```bash
# 執行 ESLint 並嘗試自動修正
npm run lint

# 使用 Prettier 格式化 src/ 下的 Vue 與 JS 檔案
npm run format
```

## 部署說明
- 專案預設 `vite.config.js` 中 `base` 指向 `/wear-jp-practice/`，符合 GitHub Pages 子目錄部署。
- 推送至 `main` 會觸發 GitHub Actions：執行檢查並部署最新 `dist/` 成果。

## 參與貢獻
- 建議依據 issue / feature branch 流程開發。
- 提交前確認 lint、format、建置皆通過，並附上必要的截圖或說明。
- 詳細規範請見 [Repository Guidelines](AGENTS.md)。
