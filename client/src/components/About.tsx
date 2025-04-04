import { motion } from "framer-motion";
import { personalInfo } from "@/lib/constants";
import { Briefcase, MapPin, Mail, BookOpen } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-5 bg-light">
      <div className="container py-5">
        <motion.h2 
          className="text-center mb-5 fw-bold"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          {t('about.title')}
        </motion.h2>
        
        <div className="row gy-4">
          <motion.div 
            className="col-lg-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h3 className="card-title h5 mb-4">{t('about.educationTitle')}</h3>
                <ul className="list-unstyled">
                  <li className="d-flex mb-3">
                    <Briefcase className="text-primary me-2 flex-shrink-0" size={20} />
                    <div>
                      <span className="fw-medium">{t('hero.subtitle')}</span>
                    </div>
                  </li>
                  <li className="d-flex mb-3">
                    <MapPin className="text-primary me-2 flex-shrink-0" size={20} />
                    <div>
                      <span className="fw-medium">{t('contact.location')}:</span> {personalInfo.location}
                    </div>
                  </li>
                  <li className="d-flex mb-3">
                    <Mail className="text-primary me-2 flex-shrink-0" size={20} />
                    <div>
                      <span className="fw-medium">{t('contact.emailAddress')}:</span> {personalInfo.email}
                    </div>
                  </li>
                  <li className="d-flex mb-3">
                    <BookOpen className="text-primary me-2 flex-shrink-0" size={20} />
                    <div>
                      <span className="fw-medium">{t('about.educationTitle')}:</span> {t('about.education')}
                    </div>
                  </li>
                  <li className="d-flex mb-3">
                    <BookOpen className="text-primary me-2 flex-shrink-0" size={20} />
                    <div>
                      {t('about.education2')}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="col-lg-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h3 className="card-title h5 mb-4">{t('about.researchTitle')}</h3>
                <div className="text-secondary">
                  <p>{t('about.bio')}</p>
                  <p>{t('about.research')}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
