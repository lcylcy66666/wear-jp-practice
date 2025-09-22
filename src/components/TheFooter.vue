<template>
  <footer class="site-footer">
    <div class="footer-container">
      <div class="footer-main">
        <!-- Column 1 -->
        <div class="footer-column">
          <ul>
            <li><a href="#">WEAR</a></li>
            <li><a href="#">ZOZOTOWN</a></li>
            <li><a href="#">ZOZOUSED</a></li>
          </ul>
        </div>

        <!-- Column 2 -->
        <div class="footer-column">
          <ul>
            <li class="list-title"><a href="#">コーディネート一覧</a></li>
            <li><a href="#">ユーザー一覧</a></li>
            <li><a href="#">アイテム一覧</a></li>
            <li><a href="#">店舗一覧</a></li>
            <li><a href="#">ブランド一覧</a></li>
            <li><a href="#">カテゴリー一覧</a></li>
          </ul>
        </div>

        <!-- Column 3 -->
        <div class="footer-column">
          <ul>
            <li class="list-title"><a href="#">コーディネートランキング</a></li>
            <li><a href="#">ユーザーランキング</a></li>
            <li><a href="#">ファッション記事一覧</a></li>
            <li><a href="#">トレンドキーワード</a></li>
            <li><a href="#">骨格タイプ別コーディネート</a></li>
          </ul>
        </div>

        <!-- Column 4 -->
        <div class="footer-column">
          <ul>
            <li class="list-title"><a href="#">はじめての方へ</a></li>
            <li><a href="#">ヘルプ</a></li>
            <li><a href="#">お問い合わせ</a></li>
            <li><a href="#">サイトマップ</a></li>
          </ul>
        </div>

        <!-- Column 5 -->
        <div class="footer-column">
          <ul>
            <li class="list-title"><a href="#">公式アプリ</a></li>
            <li><a href="#">iPhone</a></li>
            <li><a href="#">Android</a></li>
          </ul>
          <div class="sns-section">
            <p class="list-title">公式SNS</p>
            <ul class="social-links">
              <li><a href="#" class="social-icon">X</a></li>
              <li><a href="#" class="social-icon">f</a></li>
              <li><a href="#" class="social-icon">I</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer-divider"></div>

      <div class="footer-sub">
        <ul>
          <li><a href="#">コーポレートサイト</a></li>
          <li><a href="#">会社概要</a></li>
          <li><a href="#">IR情報</a></li>
          <li><a href="#">採用情報</a></li>
          <li><a href="#">利用規約</a></li>
          <li><a href="#">プライバシーポリシー</a></li>
          <li><a href="#">ライセンス</a></li>
        </ul>
      </div>

      <div class="footer-copyright">
        <p>COPYRIGHT © ZOZO, Inc. ALL RIGHTS RESERVED.</p>
        <p>
          サイト内の文章、画像などの著作物は株式会社ZOZOに属します。複製、無断転載を禁止します。
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  width: 100%;
  padding: 60px 0;
  background-color: #fff;
  color: #555;
  font-size: 13px;
  border-top: 1px solid #e0e0e0;
}

.footer-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-main {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.footer-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-column li {
  margin-bottom: 14px;
}

.footer-column a {
  text-decoration: none;
  color: #555;
  transition: color 0.2s ease;
}

.footer-column a:hover {
  color: #000;
}

.list-title {
  margin-bottom: 20px;
}

.list-title a,
.list-title {
  color: #1c1c1c;
}

.sns-section {
  margin-top: 30px;
}

.social-links {
  display: flex;
  gap: 12px;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background-color: #555;
  color: #fff;
  border-radius: 50%;
  font-weight: bold;
}

/* START: 要加入的樣式 */
.footer-divider {
  border-top: 1px solid #e0e0e0;
  /* 效果：畫出一條 1px 的淺灰色分隔線 */
  margin: 40px 0 20px;
  /* 效果：在分隔線的上下產生間距 */
}

.footer-sub ul {
  display: flex;
  /* 效果：讓公司資訊連結水平排列 */
  justify-content: center;
  /* 效果：讓整串連結在容器中置中 */
  flex-wrap: wrap;
  /* 效果：如果螢幕太窄，允許連結換行 */
  gap: 10px 20px;
  /* 效果：設定行列間距 (垂直10px, 水平20px) */
  list-style: none;
  padding: 0;
  margin: 0;
}

/* 使用 ::after 偽元素來製作分隔線 "|" */
.footer-sub li:not(:last-child)::after {
  content: '|';
  /* 效果：在除了最後一個 li 之外的所有 li 後面加上 "|" */
  margin-left: 20px;
  /* 效果：讓 "|" 和前面的文字隔開 */
  color: #ccc;
  /* 效果：設定分隔線的顏色 */
}

.footer-copyright {
  margin-top: 30px;
  /* 效果：和上方的連結區隔開 */
  text-align: center;
  /* 效果：讓版權文字置中 */
  font-size: 11px;
  /* 效果：設定更小的字號 */
  color: #aaa;
  /* 效果：設定更淺的文字顏色 */
  line-height: 1.6;
  /* 效果：增加行高，讓文字不擁擠 */
}

.footer-copyright p {
  margin: 0;
  /* 效果：清除段落的預設外邊距 */
}

/* END: 要加入的樣式 */
</style>
