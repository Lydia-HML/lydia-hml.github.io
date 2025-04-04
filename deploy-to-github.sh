#!/bin/bash

# 腳本用於將React應用部署到GitHub Pages

# 確保腳本在出錯時停止執行
set -e

echo "開始部署到GitHub Pages..."

# 建立生產版本
echo "構建應用程式..."
npm run build

# 運行GitHub Pages部署配置
echo "準備GitHub Pages格式..."
node github-pages-deploy.js

# 使用gh-pages部署到GitHub Pages
echo "部署到GitHub Pages..."
npx gh-pages -d github-pages

echo "部署完成！"
echo "請訪問 https://lydia-hml.github.io/Lydia-Portfolio 查看您的網站"