import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import parserVue from 'vue-eslint-parser'
import eslintConfigPrettier from 'eslint-config-prettier'

export default [
  {
    ignores: ['dist', 'node_modules']
  },

  // Vue 檔案的設定 (這是核心)
  {
    files: ['**/*.vue'],
    // 這一整塊是新的、更完整的設定
    languageOptions: {
      globals: { ...globals.browser },
      // 關鍵：告訴 ESLint 用 vue-eslint-parser 來解析 .vue 檔案
      parser: parserVue,
      parserOptions: {
        // 關鍵：告訴 vue-eslint-parser，在 <script> 標籤內，要使用 @babel/eslint-parser
        parser: '@babel/eslint-parser',
        sourceType: 'module',
        requireConfigFile: false // 告訴 babel 解析器不需要額外的 babel 設定檔
      }
    },
    // 這裡我們直接使用 pluginVue 推薦的組合設定
    ...pluginVue.configs['flat/vue3-recommended'],
    // 關閉一些與 Prettier 可能衝突的樣式規則
    rules: {
      'vue/html-indent': 'off',
      'vue/max-attributes-per-line': 'off',
      'vue/singleline-html-element-content-newline': 'off'
    }
  },

  // JavaScript 檔案的設定
  {
    files: ['**/*.js'],
    ...pluginJs.configs.recommended,
    languageOptions: {
      globals: { ...globals.node }
    }
  },

  // Prettier 整合 (必須放在最後)
  eslintConfigPrettier
]
