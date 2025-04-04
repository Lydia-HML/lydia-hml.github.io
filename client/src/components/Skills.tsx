import { motion } from "framer-motion";
import { skillCategories } from "@/lib/constants";
import { 
  FileText, 
  Server, 
  PenTool, 
  Code, 
  BarChart2, 
  MessageCircle,
  Brain,
  Wifi,
  Lightbulb,
  Rocket,
  BookOpen 
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Skills() {
  const { t } = useTranslation();
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const getIconComponent = (iconName: string) => {
    switch(iconName) {
      case "document-text":
        return <FileText className="text-primary" size={24} />;
      case "server":
        return <Server className="text-primary" size={24} />;
      case "pen-tool":
        return <PenTool className="text-primary" size={24} />;
      case "code":
        return <Code className="text-primary" size={24} />;
      case "bar-chart":
        return <BarChart2 className="text-primary" size={24} />;
      case "message-circle":
        return <MessageCircle className="text-primary" size={24} />;
      case "brain":
        return <Brain className="text-primary" size={24} />;
      case "wifi":
        return <Wifi className="text-primary" size={24} />;
      case "lightbulb":
        return <Lightbulb className="text-primary" size={24} />;
      case "rocket":
        return <Rocket className="text-primary" size={24} />;
      case "book-open":
        return <BookOpen className="text-primary" size={24} />;
      default:
        return <FileText className="text-primary" size={24} />;
    }
  };

  return (
    <section id="skills" className="py-5">
      <div className="container py-5">
        <motion.div
          className="text-center mb-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          <h2 className="fw-bold mb-3">{t('skills.title')}</h2>
          <p className="text-secondary mb-5 mx-auto" style={{ maxWidth: '700px' }}>
            {t('about.research')}
          </p>
        </motion.div>
        
        <div className="row g-4">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              className="col-md-6 col-lg-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-4">
                    <div className="rounded-circle bg-light p-3 me-3">
                      {getIconComponent(category.icon)}
                    </div>
                    <h3 className="card-title h5 mb-0">
                      {index === 0 ? t('skills.ai') :
                       index === 1 ? t('skills.iot') :
                       index === 2 ? t('skills.design') :
                       index === 3 ? t('skills.innovation') :
                       index === 4 ? t('skills.programming') :
                       t('skills.teaching')}
                    </h3>
                  </div>
                  <div className="d-flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <span 
                        key={idx} 
                        className="badge bg-light text-primary p-2"
                      >
                        {skill}
                      </span>
                    ))}
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
