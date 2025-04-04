# GitHub Pages 部署指南

本文檔提供了將此專案部署到 GitHub Pages 的詳細步驟。

## 前提條件

1. 您需要有一個 GitHub 帳戶
2. 您需要在本地環境中安裝 Git
3. 您需要有 Node.js 和 npm 安裝在您的本地環境中

## 部署步驟

### 1. 克隆專案到本地

```bash
# 克隆此專案到本地
git clone https://github.com/Lydia-HML/Lydia-Portfolio.git
cd Lydia-Portfolio
```

### 2. 安裝依賴

```bash
npm install
```

### 3. 修改 package.json

在 package.json 文件的 "scripts" 部分添加以下部署命令：

```json
"scripts": {
  "dev": "tsx server/index.ts",
  "build": "vite build && esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist",
  "start": "NODE_ENV=production node dist/index.js",
  "check": "tsc",
  "db:push": "drizzle-kit push",
  "predeploy": "npm run build && node github-pages-deploy.js",
  "deploy": "gh-pages -d github-pages"
}
```

### 4. 執行部署命令

您可以使用兩種方式部署：

#### 選項 1：使用 npm 部署命令

```bash
npm run deploy
```

這個命令會自動執行以下步驟：
1. 構建應用 (`npm run build`)
2. 運行 GitHub Pages 部署配置腳本 (`node github-pages-deploy.js`)
3. 使用 gh-pages 部署到 GitHub Pages

#### 選項 2：使用部署腳本

```bash
bash deploy-to-github.sh
```

這個腳本執行相同的步驟，但提供更詳細的輸出。

### 5. 查看您的網站

部署完成後，您的網站將可在以下網址訪問：

```
https://lydia-hml.github.io/Lydia-Portfolio
```

如果您已配置自定義域名，則可以通過自定義域名訪問。

## 自定義域名配置

如果您想要使用自定義域名，請按照以下步驟操作：

1. 在您的 DNS 提供商處添加一個 CNAME 記錄，指向 `lydia-hml.github.io`
2. 在 GitHub 存儲庫的設置中，導航到 "Pages" 選項
3. 在 "Custom domain" 部分輸入您的域名
4. 點擊 "Save"

GitHub 將自動在存儲庫中創建一個 CNAME 文件。

## 部署的注意事項

1. 確保您的 Git 配置正確設置了您的用戶名和電子郵件
2. 如果是首次部署，可能需要在 GitHub 存儲庫設置中啟用 GitHub Pages
3. 默認情況下，網站將從 `gh-pages` 分支提供，確保不要刪除此分支
4. 部署可能需要幾分鐘才能生效

## 常見問題解決

### 部署失敗

如果部署失敗，請檢查以下事項：

1. 確保您有正確的倉庫訪問權限
2. 確保 Git 配置正確設置了您的用戶名和電子郵件
3. 檢查是否存在構建錯誤

### 路由問題

如果部署後出現路由問題（例如刷新頁面後顯示 404 錯誤），請確保：

1. 您的應用正在使用 HashRouter 或正確配置的 BrowserRouter
2. `404.html` 文件已正確配置
3. `index.html` 中的重定向腳本已正確實現

## 進一步的幫助

如果您在部署過程中遇到任何問題，請查閱以下資源：

- [GitHub Pages 官方文檔](https://docs.github.com/en/pages)
- [gh-pages npm 包文檔](https://www.npmjs.com/package/gh-pages)