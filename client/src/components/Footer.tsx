import { motion } from "framer-motion";
import { personalInfo } from "@/lib/constants";

export default function Footer() {
  // 將日期設定為 2025年4月4日
  const currentYear = 2025;
  const lastUpdated = "2025年4月4日";

  return (
    <footer className="bg-primary text-white py-4">
      <div className="container">
        <motion.div 
          className="row align-items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            &copy; {currentYear} {personalInfo.name}. 保留所有權利.
            <div className="small mt-1">最後更新於：{lastUpdated}</div>
          </div>
          
          <div className="col-md-6 text-center text-md-end">
            <a href="#" className="text-white text-decoration-none mx-2">隱私政策</a>
            <a href="#" className="text-white text-decoration-none mx-2">服務條款</a>
            <a href="#hero" className="text-white text-decoration-none mx-2">回到頂部</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
