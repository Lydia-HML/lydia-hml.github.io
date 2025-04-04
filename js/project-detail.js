document.addEventListener('DOMContentLoaded', function() {
  'use strict';

  // 獲取URL中的項目ID參數
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get('id');
  
  // 項目數據（在實際應用中，這可能來自API或數據庫）
  const projects = [
    {
      id: 1,
      title: "電子商務儀表板",
      subtitle: "具有分析和庫存管理功能的在線商店完整管理儀表板",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
      category: "web",
      technologies: "React, Node.js, MongoDB",
      description: `
        <p>這個電子商務儀表板項目是為了幫助中小型企業更好地管理他們的在線商店而開發的。該系統提供了全面的功能，包括：</p>
        
        <h4 class="mt-4">主要功能</h4>
        <ul>
          <li>實時銷售數據分析和可視化</li>
          <li>庫存管理系統，具有低庫存自動提醒</li>
          <li>客戶行為分析</li>
          <li>訂單處理和物流跟踪</li>
          <li>營銷活動效果分析</li>
        </ul>
        
        <h4 class="mt-4">技術細節</h4>
        <p>前端使用React.js開發，利用Redux進行狀態管理，Material-UI作為UI庫以確保美觀和一致的用戶界面。</p>
        <p>後端使用Node.js和Express.js構建，數據存儲在MongoDB中。RESTful API設計允許與前端和其他服務進行無縫集成。</p>
        
        <h4 class="mt-4">項目成果</h4>
        <p>該儀表板系統的實施幫助客戶：</p>
        <ul>
          <li>庫存週轉率提高35%</li>
          <li>訂單處理時間減少50%</li>
          <li>總體運營效率提升40%</li>
         
        </ul>
      `
    },
    {
      id: 2,
      title: "健康應用 UI 套件",
      subtitle: "健康和健身應用程序的綜合 UI 設計系統",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      category: "design",
      technologies: "Figma, Design System",
      description: `
        <p>這個健康應用UI套件是為健康和健身領域的應用開發者設計的綜合性UI系統。</p>
        
        <h4 class="mt-4">設計理念</h4>
        <p>遵循直觀易用、無障礙設計原則，同時以清晰的視覺層次結構展示健康數據。配色方案以綠色和藍色為主，傳達健康、信任和專業的氛圍。</p>
        
        <h4 class="mt-4">套件內容</h4>
        <ul>
          <li>200+ 個組件，包含按鈕、表單、卡片、圖表等</li>
          <li>完整的色彩系統和排版指南</li>
          <li>30+ 預設頁面模板（首頁、個人資料、活動跟踪等）</li>
          <li>健身和健康領域特有的圖標集</li>
          <li>響應式設計指南和組件</li>
        </ul>
        
        <h4 class="mt-4">技術細節</h4>
        <p>全部設計在Figma中完成，具有完整的組件庫和變體管理。所有組件按照原子設計原則構建，確保設計系統的可擴展性和一致性。</p>
        
        <h4 class="mt-4">使用案例</h4>
        <p>該UI套件已被多個健康應用開發團隊採用，其中包括健身追踪應用、營養計劃軟件和醫療保健客戶端等。對於新產品開發，它能使設計流程加速約70%。</p>
      `
    },
    {
      id: 3,
      title: "旅行伴侶應用",
      subtitle: "具有行程管理和當地推薦功能的移動應用程序",
      image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      category: "mobile",
      technologies: "React Native, Firebase",
      description: `
        <p>旅行伴侶應用是一款為自助旅行者設計的移動應用，將行程管理、目的地導航和本地體驗推薦整合在一個平台上。</p>
        
        <h4 class="mt-4">主要功能</h4>
        <ul>
          <li>行程計劃與管理，支持多目的地旅行</li>
          <li>基於用戶偏好的景點和活動推薦</li>
          <li>離線地圖和導航功能</li>
          <li>旅行預算追踪與花費分析</li>
          <li>旅行日記和照片整合</li>
          <li>旅行安全提示和緊急聯繫功能</li>
        </ul>
        
        <h4 class="mt-4">技術細節</h4>
        <p>使用React Native開發，確保iOS和Android平台的一致體驗。採用Firebase作為後端服務，包括實時數據庫、認證和雲函數。集成了多個第三方API，如地圖服務、天氣信息和當地活動數據。</p>
        
        <h4 class="mt-4">用戶反饋與成果</h4>
        <p>應用在發布後的三個月內達到了10萬次下載。用戶特別喜歡其離線功能和個性化推薦能力，平均評分為4.7/5。來自全球50多個國家的用戶反饋幫助我們持續改進和完善產品功能。</p>
      `
    },
    {
      id: 4,
      title: "金融分析平台",
      subtitle: "用於金融洞察和績效跟踪的數據可視化平台",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1015&q=80",
      category: "web",
      technologies: "Vue.js, D3.js, Express",
      description: `
        <p>金融分析平台是一個面向金融專業人士的數據可視化和分析工具，旨在將複雜的財務數據轉化為可操作的見解。</p>
        
        <h4 class="mt-4">核心功能</h4>
        <ul>
          <li>多維度財務數據分析儀表板</li>
          <li>自定義報表生成器</li>
          <li>投資組合績效分析與風險評估</li>
          <li>市場趨勢和預測模型</li>
          <li>數據異常檢測與提醒系統</li>
        </ul>
        
        <h4 class="mt-4">技術實現</h4>
        <p>前端基於Vue.js構建，結合Vuex進行狀態管理。數據可視化部分使用D3.js實現了豐富的交互式圖表。後端使用Express.js和Node.js，通過RESTful API與前端通信。數據處理流程包含了多個自定義算法，用於分析財務數據並生成洞察。</p>
        
        <h4 class="mt-4">業務影響</h4>
        <p>該平台已被多家金融機構採用，用於優化投資決策和風險管理。客戶反饋表明，平台幫助他們：</p>
        <ul>
          <li>將分析時間減少了65%</li>
          <li>提高了投資回報率平均8%</li>
          <li>顯著改善了風險識別能力</li>
        </ul>
      `
    },
    {
      id: 5,
      title: "品牌識別系統",
      subtitle: "完整品牌識別設計，包括徽標、色彩系統和品牌指南",
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      category: "design",
      technologies: "Adobe Creative Suite, Brand Design",
      description: `
        <p>為一家新興科技初創公司開發的全面品牌識別系統。該項目旨在建立一個現代、富有科技感但同時保持親和力的品牌形象。</p>
        
        <h4 class="mt-4">項目範圍</h4>
        <ul>
          <li>品牌策略與定位</li>
          <li>徽標設計（主標識和輔助標識系統）</li>
          <li>品牌色彩系統與排版方案</li>
          <li>視覺語言與圖像風格指南</li>
          <li>營銷材料和數字平台應用</li>
          <li>完整的品牌指南手冊</li>
        </ul>
        
        <h4 class="mt-4">設計過程</h4>
        <p>設計過程始於深入的市場研究和競爭對手分析，隨後進行了多輪創意工作坊和設計迭代。與客戶的密切合作確保了最終的品牌識別系統完全符合他們的業務願景和目標受眾期望。</p>
        
        <h4 class="mt-4">技術細節</h4>
        <p>使用Adobe Creative Suite完成所有設計工作，包括Illustrator用於矢量設計，Photoshop用於圖像處理，InDesign用於品牌指南排版。</p>
        
        <h4 class="mt-4">成果</h4>
        <p>新的品牌識別在發布後獲得了積極反響。客戶報告稱，清晰統一的品牌形象幫助他們：</p>
        <ul>
          <li>提高了品牌識別度和市場認知度</li>
          <li>在目標客戶中建立了更強的信任度</li>
          <li>提升了營銷效果和客戶轉化率</li>
        </ul>
      `
    },
    {
      id: 6,
      title: "智能家居控制系統",
      subtitle: "整合多種設備的家居自動化平台",
      image: "https://images.unsplash.com/photo-1558002038-10058c4f14b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      category: "web",
      technologies: "IoT, Angular, Node.js",
      description: `
        <p>智能家居控制系統是一個結合硬件和軟件的解決方案，允許用戶通過單一界面控制家中的多種智能設備。</p>
        
        <h4 class="mt-4">主要特點</h4>
        <ul>
          <li>統一控制面板，兼容多家廠商的設備</li>
          <li>基於AI的自動化場景建議</li>
          <li>能源使用監控和優化建議</li>
          <li>聲音控制和移動應用整合</li>
          <li>安全系統和實時監控</li>
        </ul>
        
        <h4 class="mt-4">技術實現</h4>
        <p>前端使用Angular開發，提供響應式和直觀的用戶界面。後端採用Node.js，通過自定義API與各種智能家居設備通信。系統集成了多種IoT協議，包括Zigbee、Z-Wave和Wi-Fi，確保與市場上大多數智能設備的兼容性。</p>
        
        <h4 class="mt-4">用戶體驗設計</h4>
        <p>經過多輪用戶測試和反饋優化，界面設計專注於簡潔性和易用性。特別關注了無障礙設計，確保老年用戶也能輕鬆操作。系統提供多種個性化選項，允許用戶根據自己的偏好定制界面。</p>
        
        <h4 class="mt-4">項目影響</h4>
        <p>該系統已在多個住宅和小型商業場所部署，用戶報告：</p>
        <ul>
          <li>能源使用減少平均20%</li>
          <li>顯著提高了生活便利性</li>
          <li>增強了家居安全性</li>
        </ul>
      `
    }
  ];

  // 查找選定的項目
  const project = projects.find(p => p.id === parseInt(projectId));
  
  // 顯示項目詳情
  const projectContentElement = document.getElementById('project-content');
  
  if (project) {
    // 更新頁面標題
    document.title = `${project.title} - 林筱玫 作品集`;
    
    // 創建項目詳情內容
    const projectDetailHTML = `
      <h1 class="display-4 fw-bold mb-3">${project.title}</h1>
      <p class="lead text-muted mb-4">${project.subtitle}</p>
      
      <div class="mb-4">
        <span class="badge bg-primary me-2">${getCategoryName(project.category)}</span>
        <span class="badge bg-secondary">${project.technologies}</span>
      </div>
      
      <img src="${project.image}" class="img-fluid rounded mb-4 shadow" alt="${project.title}">
      
      <div class="project-description mt-5">
        ${project.description}
      </div>
    `;
    
    projectContentElement.innerHTML = projectDetailHTML;
  } else {
    // 未找到項目，顯示錯誤信息
    projectContentElement.innerHTML = `
      <div class="alert alert-warning" role="alert">
        <h4 class="alert-heading">找不到項目!</h4>
        <p>抱歉，無法找到您請求的項目。可能是連接的項目ID不存在或已被移除。</p>
        <hr>
        <p class="mb-0">請返回<a href="index.html#projects" class="alert-link">項目列表</a>選擇一個有效的項目。</p>
      </div>
    `;
  }
  
  // 獲取類別名稱的輔助函數
  function getCategoryName(categoryCode) {
    const categories = {
      'web': '網頁開發',
      'design': '設計',
      'mobile': '移動應用'
    };
    
    return categories[categoryCode] || categoryCode;
  }
});