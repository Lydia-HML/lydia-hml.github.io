import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language);
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setCurrentLang(lng);
  };

  return (
    <div className="dropdown">
      <button 
        className="btn btn-primary dropdown-toggle" 
        type="button" 
        id="languageDropdown" 
        data-bs-toggle="dropdown" 
        aria-expanded="false"
        style={{ color: '#fff', fontWeight: 'bold' }}
      >
        {currentLang === 'zh' ? '中文' : 'English'}
      </button>
      <ul className="dropdown-menu" aria-labelledby="languageDropdown">
        <li>
          <button 
            className={`dropdown-item ${currentLang === 'zh' ? 'active' : ''}`} 
            onClick={() => changeLanguage('zh')}
          >
            中文
          </button>
        </li>
        <li>
          <button 
            className={`dropdown-item ${currentLang === 'en' ? 'active' : ''}`} 
            onClick={() => changeLanguage('en')}
          >
            English
          </button>
        </li>
      </ul>
    </div>
  );
}