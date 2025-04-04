import { motion } from "framer-motion";
import { personalInfo } from "@/lib/constants";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();
  
  return (
    <section id="hero" className="py-5 mt-5">
      <div className="container">
        <div className="row align-items-center py-5">
          <motion.div 
            className="col-lg-6 mb-5 mb-lg-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="display-4 fw-bold mb-4">
              {t('hero.greeting')} <span className="text-primary">{personalInfo.name}</span>
            </h1>
            <p className="lead mb-4 text-secondary">
              {t('about.bio')}
            </p>
            <div className="d-flex flex-wrap gap-2">
              <a href="#projects" className="btn btn-primary me-2">
                {t('header.projects')}
              </a>
              <a href="#contact" className="btn btn-outline-primary">
                {t('header.contact')}
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="col-lg-6 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="position-relative mx-auto" style={{ width: '280px', height: '280px' }}>
              <img 
                src="https://ba.ntust.edu.tw/var/file/98/1098/img/796889617.png" 
                alt="Profile Photo" 
                className="img-fluid rounded-circle border border-4 border-white shadow"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
