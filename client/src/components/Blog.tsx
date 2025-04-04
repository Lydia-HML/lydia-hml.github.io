import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { blogPosts } from "@/lib/constants";
import { Clock, Tag, Calendar } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Blog() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  // Use useMemo to avoid recalculating on every render
  const categories = useMemo(() => {
    // Get unique categories using filter approach instead of Set
    const uniqueCategories: string[] = [];
    blogPosts.forEach(post => {
      if (!uniqueCategories.includes(post.category)) {
        uniqueCategories.push(post.category);
      }
    });
    return uniqueCategories;
  }, []);
  
  const filteredPosts = activeCategory 
    ? blogPosts.filter(post => post.category === activeCategory)
    : blogPosts;
    
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="blog" className="py-5">
      <div className="container py-5">
        <motion.div
          className="text-center mb-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          <h2 className="fw-bold mb-3">{t('blog.title')}</h2>
          <p className="text-secondary mb-5 mx-auto" style={{ maxWidth: '700px' }}>
            {t('blog.title')}
          </p>
        </motion.div>
        
        <div className="mb-4 text-center">
          <div className="d-inline-flex gap-2 flex-wrap justify-content-center">
            <button 
              className={`btn ${activeCategory === null ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setActiveCategory(null)}
            >
              {t('projects.all')}
            </button>
            
            {categories.map((category, index) => (
              <button 
                key={index}
                className={`btn ${activeCategory === category ? 'btn-primary' : 'btn-outline-primary'}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="row g-4">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id} 
              className="col-md-6 col-lg-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="card h-100 shadow-sm blog-card">
                <div className="position-relative">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="card-img-top"
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="position-absolute" style={{ 
                    background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)', 
                    inset: 0 
                  }}></div>
                  <div className="position-absolute bottom-0 start-0 p-3">
                    <span className="badge bg-primary">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="card-body">
                  <div className="d-flex gap-3 text-secondary mb-2 small">
                    <div className="d-flex align-items-center">
                      <Calendar size={14} className="me-1" />
                      {post.date}
                    </div>
                    <div className="d-flex align-items-center">
                      <Clock size={14} className="me-1" />
                      {post.readTime} {t('blog.minutes')}
                    </div>
                  </div>
                  
                  <h3 className="card-title h5">{post.title}</h3>
                  <p className="card-text text-secondary">{post.excerpt}</p>
                  
                  <div className="d-flex flex-wrap gap-1 mb-3">
                    {post.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="badge bg-light text-primary d-flex align-items-center">
                        <Tag size={12} className="me-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="card-footer bg-transparent border-top-0">
                  <a href={`#blog/${post.id}`} className="btn btn-outline-primary btn-sm">
                    {t('blog.readMore')}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}