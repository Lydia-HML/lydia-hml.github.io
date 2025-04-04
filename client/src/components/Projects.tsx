import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/lib/constants";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

type ProjectCategory = 'all' | 'web' | 'app' | 'design';

export default function Projects() {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');

  const handleFilterClick = (filter: ProjectCategory) => {
    setActiveFilter(filter);
  };

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const getCategoryLabel = (category: string) => {
    switch(category) {
      case 'web': return t('projects.web');
      case 'app': return t('projects.app');
      case 'design': return t('projects.design');
      default: return category;
    }
  };

  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container py-5">
        <motion.div
          className="text-center mb-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          <h2 className="fw-bold mb-3">{t('projects.title')}</h2>
          <p className="text-secondary mb-5 mx-auto" style={{ maxWidth: '700px' }}>
            {t('projects.title')}
          </p>
        </motion.div>
        
        <motion.div 
          className="text-center mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="btn-group" role="group" aria-label="Project filter">
            <button 
              className={`btn ${activeFilter === 'all' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => handleFilterClick('all')}
            >
              {t('projects.all')}
            </button>
            <button 
              className={`btn ${activeFilter === 'web' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => handleFilterClick('web')}
            >
              {t('projects.web')}
            </button>
            <button 
              className={`btn ${activeFilter === 'app' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => handleFilterClick('app')}
            >
              {t('projects.app')}
            </button>
            <button 
              className={`btn ${activeFilter === 'design' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => handleFilterClick('design')}
            >
              {t('projects.design')}
            </button>
          </div>
        </motion.div>
        
        <div className="row g-4">
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="col-md-6 col-lg-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="card h-100 shadow-sm project-card">
                <div className="position-relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="card-img-top"
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="position-absolute" style={{ 
                    background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)', 
                    inset: 0 
                  }}></div>
                  <div className="position-absolute bottom-0 start-0 p-3">
                    <span className="badge bg-primary">
                      {getCategoryLabel(project.category)}
                    </span>
                  </div>
                </div>
                
                <div className="card-body">
                  <h3 className="card-title h5">{project.title}</h3>
                  <p className="card-text text-secondary">{project.description}</p>
                  
                  <div className="d-flex flex-wrap gap-1 mb-3">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="badge bg-light text-primary">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="card-footer bg-transparent border-top-0">
                  <div className="d-flex justify-content-between">
                    <a href={project.detailLink} className="text-primary fw-medium d-inline-flex align-items-center">
                      {t('projects.viewDetails')}
                      <ArrowRight className="ms-1" size={16} />
                    </a>
                    <a href={project.githubLink} className="text-secondary d-inline-flex align-items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github me-1" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                      </svg>
                      {t('projects.viewGithub')}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
