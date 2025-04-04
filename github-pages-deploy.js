// GitHub Pages部署配置

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// 創建一個基本的index.html文件，指向我們的構建資源
async function createGitHubPagesFiles() {
  console.log('準備GitHub Pages部署文件...');
  
  const publicDir = path.resolve(__dirname, 'dist/public');
  const deployDir = path.resolve(__dirname, 'github-pages');
  
  // 確保部署目錄存在
  if (!fs.existsSync(deployDir)) {
    fs.mkdirSync(deployDir, { recursive: true });
  }
  
  // 複製所有構建文件到部署目錄
  console.log(`從 ${publicDir} 複製到 ${deployDir}`);
  copyRecursive(publicDir, deployDir);
  
  // 創建.nojekyll文件（告訴GitHub Pages不要使用Jekyll處理文件）
  fs.writeFileSync(path.join(deployDir, '.nojekyll'), '');
  
  // 創建一個簡單的404頁面，重定向到首頁（解決SPA路由問題）
  const notFoundPage = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Redirecting...</title>
  <script>
    // GitHub Pages SPA支持
    // 這將重定向到根目錄並保持URL路徑
    // 然後React Router可以接管並顯示正確的頁面
    var segmentCount = 1; // 更改為您的repo名稱深度 (通常是1，例如 "/repo-name")
    var l = window.location;
    l.replace(
      l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
      l.pathname.split('/').slice(0, 1 + segmentCount).join('/') + '/?p=/' +
      l.pathname.slice(1).split('/').slice(segmentCount).join('/').replace(/&/g, '~and~') +
      (l.search ? '&q=' + l.search.slice(1).replace(/&/g, '~and~') : '') +
      l.hash
    );
  </script>
</head>
<body>
  <p>如果您沒有被重定向，<a href="/">點擊這裡</a>返回首頁。</p>
</body>
</html>
  `;
  
  fs.writeFileSync(path.join(deployDir, '404.html'), notFoundPage);
  
  // 更新index.html以處理SPA重定向
  let indexPath = path.join(deployDir, 'index.html');
  let indexContent = fs.readFileSync(indexPath, 'utf8');
  
  // 添加SPA重定向腳本到head標籤的末尾
  const spaRedirectScript = `
  <!-- GitHub Pages SPA支持的開始 -->
  <script type="text/javascript">
    // 單頁應用的GitHub頁面支持
    (function(l) {
      if (l.search[1] === '/' ) {
        var decoded = l.search.slice(1).split('&').map(function(s) { 
          return s.replace(/~and~/g, '&')
        }).join('?');
        window.history.replaceState(null, null,
            l.pathname.slice(0, -1) + decoded + l.hash
        );
      }
    }(window.location))
  </script>
  <!-- GitHub Pages SPA支持的結束 -->
  `;
  
  // 在</head>之前插入腳本
  indexContent = indexContent.replace('</head>', spaRedirectScript + '\n</head>');
  fs.writeFileSync(indexPath, indexContent);
  
  console.log('GitHub Pages部署文件已準備好！');
  console.log('使用gh-pages -d github-pages部署到GitHub Pages');
}

// 輔助函數：遞歸複製目錄
function copyRecursive(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  
  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach(function(childItemName) {
      copyRecursive(
        path.join(src, childItemName),
        path.join(dest, childItemName)
      );
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

// 執行部署準備
createGitHubPagesFiles().catch(console.error);