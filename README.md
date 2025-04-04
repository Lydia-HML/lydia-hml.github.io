# 林筱玫 Lydia Hsiao-Mei Lin 的個人網站

這是林筱玫（Lydia Hsiao-Mei Lin）的個人作品集網站，展示了她作為國立台灣科技大學（NTUST）企業管理系專案助理教授的學術研究、專案和專業成就。

## 關於這個網站

這個網站使用以下技術構建：

- React.js前端
- TypeScript
- 響應式設計
- 完整的多語言支持 (中文/英文)
- 增強的UI/UX組件
- 動畫加載畫面

## 特點

- **多語言支持**：網站同時支持中文和英文，讓不同語言背景的訪問者都能了解Lydia的專業成就。
- **研究專區**：展示期刊論文和會議論文。
- **專案展示**：展示Lydia參與的主要專案。
- **博客部分**：分享Lydia的專業見解和最新研究。
- **聯繫表單**：方便訪問者與Lydia建立聯繫。

## 關於Lydia

林筱玫（Lydia Hsiao-Mei Lin）是國立台灣科技大學（NTUST）企業管理系的專案助理教授。她專注於人工智能、物聯網、設計思維以及創新與創業領域的研究和教學。

## 網站訪問

您可以通過以下網址訪問網站：
[https://lydia-hml.github.io/Lydia-Portfolio](https://lydia-hml.github.io/Lydia-Portfolio)

## 部署到GitHub Pages指南

要部署此網站到GitHub Pages，請按照以下步驟操作：

### 前提條件

1. 您需要有一個GitHub帳戶
2. 您需要在本地環境中安裝Git
3. 您需要有Node.js和npm安裝在您的本地環境中

### 部署步驟

#### 1. 克隆專案到本地

```bash
# 克隆此專案到本地
git clone https://github.com/Lydia-HML/Lydia-Portfolio.git
cd Lydia-Portfolio
```

#### 2. 安裝依賴

```bash
npm install
```

#### 3. 修改package.json

在package.json文件的"scripts"部分添加以下部署命令：

```json
"scripts": {
  // 其他已有的腳本...
  "predeploy": "npm run build && node github-pages-deploy.js",
  "deploy": "gh-pages -d github-pages"
}
```

#### 4. 執行部署命令

您可以使用以下命令部署：

```bash
npm run deploy
```

或者使用部署腳本：

```bash
bash deploy-to-github.sh
```

#### 5. 查看您的網站

部署完成後，您的網站將可在以下網址訪問：

```
https://lydia-hml.github.io/Lydia-Portfolio
```

### 自定義域名配置

如果您想要使用自定義域名，請在您的DNS提供商處添加一個CNAME記錄，指向`lydia-hml.github.io`，並在GitHub存儲庫設置中配置自定義域名。

### 常見問題解決

如果部署後出現路由問題（例如刷新頁面後顯示404錯誤），這是因為GitHub Pages不支持SPA路由。我們已經實現了一個解決方案，使用了自定義的404.html頁面和特殊的重定向腳本來處理這個問題。
