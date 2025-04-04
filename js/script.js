document.addEventListener('DOMContentLoaded', function() {
  'use strict';

  // 設置當前年份（如果元素存在）
  const currentYearElement = document.getElementById('current-year');
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }
  
  // 全局變數來追踪當前選擇的語言
  let currentLanguage = 'zh';
  
  // 語言切換功能
  window.switchLanguage = function(lang) {
    if (lang === currentLanguage) return;
    
    // 更新當前語言
    currentLanguage = lang;
    
    // 切換語言按鈕的選中狀態
    const btnZh = document.getElementById('btn-lang-zh');
    const btnEn = document.getElementById('btn-lang-en');
    
    if (btnZh && btnEn) {
      btnZh.classList.toggle('active', lang === 'zh');
      btnEn.classList.toggle('active', lang === 'en');
    }
    
    // 切換中文和英文內容元素的顯示和隱藏
    const zhElements = document.querySelectorAll('.lang-zh');
    const enElements = document.querySelectorAll('.lang-en');
    
    zhElements.forEach(el => {
      if (lang === 'zh') {
        el.classList.remove('d-none');
      } else {
        el.classList.add('d-none');
      }
    });
    
    enElements.forEach(el => {
      if (lang === 'en') {
        el.classList.remove('d-none');
      } else {
        el.classList.add('d-none');
      }
    });
    
    // 更新表單標籤和按鈕文字
    if (lang === 'zh') {
      updateFormLabels('zh');
    } else {
      updateFormLabels('en');
    }
    
    // 存儲用戶語言偏好
    localStorage.setItem('preferredLanguage', lang);
  };
  
  // 根據語言更新表單標籤和按鈕
  function updateFormLabels(lang) {
    if (lang === 'zh') {
      // 中文標籤
      if (document.querySelector('label[for="name"]')) {
        document.querySelector('label[for="name"]').textContent = '您的姓名';
        document.querySelector('label[for="email"]').textContent = '電子郵件地址';
        document.querySelector('label[for="subject"]').textContent = '主題';
        document.querySelector('label[for="message"]').textContent = '訊息內容';
        document.getElementById('submitButton').innerHTML = '發送訊息 <i class="fas fa-paper-plane ms-2"></i>';
      }
    } else {
      // 英文標籤
      if (document.querySelector('label[for="name"]')) {
        document.querySelector('label[for="name"]').textContent = 'Your Name';
        document.querySelector('label[for="email"]').textContent = 'Email Address';
        document.querySelector('label[for="subject"]').textContent = 'Subject';
        document.querySelector('label[for="message"]').textContent = 'Message';
        document.getElementById('submitButton').innerHTML = 'Send Message <i class="fas fa-paper-plane ms-2"></i>';
      }
    }
  }
  
  // 檢查用戶之前的語言偏好
  const savedLanguage = localStorage.getItem('preferredLanguage');
  if (savedLanguage && savedLanguage !== 'zh') {
    window.switchLanguage(savedLanguage);
  }

  // 導航欄滾動效果
  const header = document.getElementById('header');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('py-2');
      header.classList.remove('py-3');
    } else {
      header.classList.add('py-3');
      header.classList.remove('py-2');
    }
  });

  // 平滑滾動
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
        
        // 如果在移動設備上並且導航菜單是開啟的，關閉它
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('.navbar-collapse');
        
        if (navbarCollapse.classList.contains('show')) {
          navbarToggler.click();
        }
      }
    });
  });

  // 回到頂部按鈕
  const backToTopButton = document.getElementById('backToTop');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      backToTopButton.classList.add('show');
    } else {
      backToTopButton.classList.remove('show');
    }
  });
  
  backToTopButton.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // 項目過濾
  const filterButtons = document.querySelectorAll('.filter-buttons button');
  const projectItems = document.querySelectorAll('.project-item');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // 移除所有按鈕的活動狀態
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      // 添加當前按鈕的活動狀態
      this.classList.add('active');
      
      const filter = this.getAttribute('data-filter');
      
      projectItems.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.style.display = 'block';
          setTimeout(() => {
            item.style.opacity = '1';
          }, 50);
        } else {
          item.style.opacity = '0';
          setTimeout(() => {
            item.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  // 聯繫表單驗證和提交
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // 獲取表單字段
      const nameField = document.getElementById('name');
      const emailField = document.getElementById('email');
      const subjectField = document.getElementById('subject');
      const messageField = document.getElementById('message');
      
      // 獲取錯誤訊息容器
      const nameError = document.getElementById('nameError');
      const emailError = document.getElementById('emailError');
      const subjectError = document.getElementById('subjectError');
      const messageError = document.getElementById('messageError');
      
      // 重置錯誤狀態
      resetFormErrors();
      
      // 驗證名稱
      if (!nameField.value.trim() || nameField.value.length < 2) {
        showError(nameField, nameError, '名稱必須至少為 2 個字符');
        return;
      }
      
      // 驗證電子郵件
      if (!isValidEmail(emailField.value)) {
        showError(emailField, emailError, '請輸入有效的電子郵件地址');
        return;
      }
      
      // 驗證主題
      if (!subjectField.value.trim() || subjectField.value.length < 3) {
        showError(subjectField, subjectError, '主題必須至少為 3 個字符');
        return;
      }
      
      // 驗證訊息
      if (!messageField.value.trim() || messageField.value.length < 10) {
        showError(messageField, messageError, '訊息必須至少為 10 個字符');
        return;
      }
      
      // 如果所有驗證通過，創建並打開 mailto 鏈接
      const recipientEmail = 'Lydia.hmlin@mail.ntust.edu.tw'; // 收件人郵件地址
      const name = nameField.value.trim();
      const email = emailField.value.trim();
      const subject = subjectField.value.trim();
      const message = messageField.value.trim();
      
      // 創建郵件正文，包含發件人信息
      const mailtoBody = `
發件人姓名: ${name}
發件人郵件: ${email}

${message}
      `.trim();
      
      // 創建 mailto URL
      const mailtoUrl = `mailto:${encodeURIComponent(recipientEmail)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(mailtoBody)}`;
      
      // 在新窗口中打開 mailto 鏈接
      window.open(mailtoUrl, '_blank');
      
      // 重置表單
      contactForm.reset();
      
      // 顯示成功訊息
      showToast('郵件客戶端已打開', '請在郵件客戶端中確認並發送您的訊息', 'success');
    });
  }

  // 輔助函數
  
  // 電子郵件驗證
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  // 顯示表單錯誤
  function showError(field, errorElement, message) {
    field.classList.add('is-invalid');
    errorElement.textContent = message;
    errorElement.style.display = 'block';
  }
  
  // 重置表單錯誤
  function resetFormErrors() {
    const invalidFields = document.querySelectorAll('.is-invalid');
    const errorMessages = document.querySelectorAll('.invalid-feedback');
    
    invalidFields.forEach(field => {
      field.classList.remove('is-invalid');
    });
    
    errorMessages.forEach(error => {
      error.textContent = '';
      error.style.display = 'none';
    });
  }
  
  // 顯示通知
  function showToast(title, message, type = 'success') {
    // 檢查是否存在 toast 容器，如果不存在則創建
    let toastContainer = document.querySelector('.toast-container');
    
    if (!toastContainer) {
      toastContainer = document.createElement('div');
      toastContainer.className = 'toast-container';
      document.body.appendChild(toastContainer);
    }
    
    // 創建 toast 元素
    const toastId = 'toast-' + Date.now();
    const toast = document.createElement('div');
    toast.className = `toast toast-${type} show`;
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'assertive');
    toast.setAttribute('aria-atomic', 'true');
    toast.setAttribute('id', toastId);
    
    // Toast 內容
    toast.innerHTML = `
      <div class="toast-header bg-${type}">
        <strong class="me-auto">${title}</strong>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body">
        ${message}
      </div>
    `;
    
    // 添加到容器
    toastContainer.appendChild(toast);
    
    // 設置自動消失
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        toast.remove();
      }, 300);
    }, 5000);
    
    // 添加關閉按鈕事件
    const closeButton = toast.querySelector('.btn-close');
    closeButton.addEventListener('click', () => {
      toast.classList.remove('show');
      setTimeout(() => {
        toast.remove();
      }, 300);
    });
  }
});