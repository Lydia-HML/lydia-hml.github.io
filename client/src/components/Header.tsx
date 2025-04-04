import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { personalInfo } from "@/lib/constants";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navbarClasses = `navbar navbar-expand-lg fixed-top ${scrolled ? 'bg-white shadow-sm' : 'bg-transparent'} transition`;

  return (
    <nav className={navbarClasses}>
      <div className="container">
        <div className="d-flex align-items-center">
          <a 
            href="https://ba.ntust.edu.tw/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="me-3"
            title="國立台灣科技大學企業管理系"
          >
            <img 
              src="https://www.secretariat.ntust.edu.tw/var/file/63/1063/img/341961222.png"
              alt="國立台灣科技大學校徽"
              style={{ height: '40px', width: 'auto' }}
              className="d-inline-block align-top"
            />
          </a>
          <a className="navbar-brand fw-bold text-primary" href="#hero">
            Lydia's World
          </a>
        </div>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={toggleMenu}
          aria-controls="navbarNav" 
          aria-expanded={isOpen ? "true" : "false"} 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto me-3">
            <li className="nav-item">
              <a 
                className="nav-link px-3" 
                href="#about"
                onClick={closeMenu}
              >
                {t('header.about')}
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link px-3" 
                href="#projects"
                onClick={closeMenu}
              >
                {t('header.projects')}
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link px-3" 
                href="#skills"
                onClick={closeMenu}
              >
                {t('header.skills')}
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link px-3" 
                href="#research"
                onClick={closeMenu}
              >
                {t('header.research')}
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link px-3" 
                href="#blog"
                onClick={closeMenu}
              >
                {t('header.blog')}
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link px-3" 
                href="#contact"
                onClick={closeMenu}
              >
                {t('header.contact')}
              </a>
            </li>
          </ul>
          
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
}
