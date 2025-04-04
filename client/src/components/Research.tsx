import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function Research() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<"journal" | "conference">("journal");

  return (
    <section id="research" className="py-5 bg-light">
      <div className="container py-5">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <h2 className="display-4 fw-bold text-primary mb-4">{t('research.title')}</h2>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="d-flex justify-content-center gap-3 mb-4">
                <button
                  className={`btn ${activeTab === "journal" ? "btn-primary" : "btn-outline-primary"}`}
                  onClick={() => setActiveTab("journal")}
                >
                  {t('research.journalTitle')}
                </button>
                <button
                  className={`btn ${activeTab === "conference" ? "btn-primary" : "btn-outline-primary"}`}
                  onClick={() => setActiveTab("conference")}
                >
                  {t('research.conferenceTitle')}
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="row justify-content-center">
          <div className="col-md-10">
            {activeTab === "journal" ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-4 rounded shadow-sm"
              >
                <h3 className="h4 mb-4 text-center">{t('research.journalTitle')}</h3>
                <ol className="list-group list-group-numbered">
                  <li className="list-group-item d-flex border-0 ps-0">
                    <div>
                      <p className="mb-1">Lydia Hsiao-Mei Lin, Wei-Cheng Lien, Cindy Yu-Ting Cheng, You-Cheng Lee, Yi-Ting Lin, Chin-Chia Kuo, Yi-Ting Lai, and Yan-Tsung Peng, "A rapid household mite detection and classification technology based on artificial intelligence-enhanced scanned images," Internet of Things, Vol. 29, Jan. 2025. [Online]. Available: <a href="https://doi.org/10.1016/j.iot.2024.101484" target="_blank" rel="noopener noreferrer">https://doi.org/10.1016/j.iot.2024.101484</a> (SCI, Q1) <span className="badge bg-primary">First Author</span></p>
                    </div>
                  </li>
                  <li className="list-group-item d-flex border-0 ps-0">
                    <div>
                      <p className="mb-1">Hsiao-Mei Lin, Ching-Yuan Lin, Chun-Hung Wang, and Ming-Jong Tsai. "A Novel Mechanical Fault Diagnosis Based on Transfer Learning with Probability Confidence Convolutional Neural Network Model," Applied Sciences, vol. 12, no. 19, p. 9670, Sep. 2022. [Online]. Available: <a href="https://www.mdpi.com/2076-3417/12/19/9670" target="_blank" rel="noopener noreferrer">https://www.mdpi.com/2076-3417/12/19/9670</a>. (SCI, Q2) <span className="badge bg-primary">First Author</span></p>
                    </div>
                  </li>
                  <li className="list-group-item d-flex border-0 ps-0">
                    <div>
                      <p className="mb-1">Zhi-Feng Guan, Hsiao-Mei Lin, and Ching-Yuan Lin. IoT System to Detect and Record Closure Status of Fire Doors-Using LoRa Technology, Architecture Science (ArS), Pp. 29-38, Dec. 2018. [Online]. Available: <a href="https://doi.org/10.3966/221915772018120018003" target="_blank" rel="noopener noreferrer">https://doi.org/10.3966/221915772018120018003</a></p>
                    </div>
                  </li>
                  <li className="list-group-item d-flex border-0 ps-0">
                    <div>
                      <p className="mb-1">Hsiao-Mei Lin, Shuo-Hung Chen, Jim Kao, Yung-Ming Lee, Gary Li-Kai Hsiao, Ching-Yuan Lin, "Applying Active Dynamic Signage System in Complex Underground Construction," International Journal of Scientific & Engineering Research (IJSER), vol. 8, Feb. 2017. [Online]. Available: <a href="https://api.semanticscholar.org/CorpusID:212458586" target="_blank" rel="noopener noreferrer">https://api.semanticscholar.org/CorpusID:212458586</a> <span className="badge bg-primary">First Author</span></p>
                    </div>
                  </li>
                </ol>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-4 rounded shadow-sm"
              >
                <h3 className="h4 mb-4 text-center">{t('research.conferenceTitle')}</h3>
                <ol className="list-group list-group-numbered">
                  <li className="list-group-item d-flex border-0 ps-0">
                    <div>
                      <p className="mb-1">Ting-Jui Chang, Lydia Hsiao-Mei Lin, Richard Tzong-Han Tsai, "Conversational Product Recommendation using LLM," 2024 IEEE 4th International Conference on Electronic Communications, Internet of Things and Big Data (ICEIB 2024), Taipei, Taiwan, 2024, pp. 340-343. [Online]. Available: doi: 10.1109/ICEIB61477.2024.10602608. <span className="badge bg-info">Corresponding Author</span></p>
                    </div>
                  </li>
                  <li className="list-group-item d-flex border-0 ps-0">
                    <div>
                      <p className="mb-1">Jun-Wei Wu, Lydia Hsiao-Mei Lin, Richard Tzong-Han Tsai, "Enhancing ESG Reporting Analysis: Leveraging GPT and Resampling Methods for Improved Multi-Label Classification," 2024 IEEE 4th International Conference on Electronic Communications, Internet of Things and Big Data (ICEIB 2024), Taipei, Taiwan, 2024, pp. 415-418. [Online]. Available: doi: 10.1109/ICEIB61477.2024.10602711. <span className="badge bg-info">Corresponding Author</span></p>
                    </div>
                  </li>
                  <li className="list-group-item d-flex border-0 ps-0">
                    <div>
                      <p className="mb-1">Lydia Hsiao-Mei Lin, Fang-Kai Ting, Ting-Jui Chang, Jun-Wei Wu, Richard Tzong-Han Tsai, "GPT4ESG: Streamlining Environment, Society, and Governance Analysis with Custom AI Models," 2024 IEEE 4th International Conference on Electronic Communications, Internet of Things and Big Data (ICEIB 2024), Taipei, Taiwan, 2024, pp. 442-446, [Online]. Available: doi: 10.1109/ICEIB61477.2024.10602567. <span className="badge bg-primary">First and Corresponding Author</span></p>
                    </div>
                  </li>
                  <li className="list-group-item d-flex border-0 ps-0">
                    <div>
                      <p className="mb-1">Cindy Yu-Ting Cheng, Lydia Hsiao-Mei Lin*, Wei-Cheng Lien, Yi-Ting Lai, Yi-Ting Lin, Yan-Tsung Peng, and You-Cheng Lee, "AI -Enhanced Household Mite Detection and Classification", IEEE International Conference on Electronic Communications，Internet of Things and Big Data (ICEIB 2024), Taipei, Taiwan, 2024. <span className="badge bg-info">Corresponding Author</span></p>
                    </div>
                  </li>
                  <li className="list-group-item d-flex border-0 ps-0">
                    <div>
                      <p className="mb-1">Fang-Kai Ting, Lydia Hsiao-Mei Lin*, Wei-Cheng Lien, Simon Hung-Yi Lu, Richard Tzong-Han Tsai, "Advanced RUL Prediction with Transformer Architecture and Multi-Scale Feature Engineering", IEEE International Conference on Electronic Communications，Internet of Things and Big Data (ICEIB 2024), Taipei, Taiwan, 2024. <span className="badge bg-info">Corresponding Author</span></p>
                    </div>
                  </li>
                  <li className="list-group-item d-flex border-0 ps-0">
                    <div>
                      <p className="mb-1">Yi-Ting Lin; Yan-Tsung Peng; Wei-Cheng Lien; You-Cheng Lee; Yi-Ting Lai and Lydia Hsiao-Mei Lin, "High-Precision AI-based Mite Detection and Classification using Image Enhancement Techniques", National Computer Symposium (NCS 2023), Taipei, Taiwan, 2023. pp. 280-284.</p>
                    </div>
                  </li>
                  <li className="list-group-item d-flex border-0 ps-0">
                    <div>
                      <p className="mb-1">Hsiao-Mei Lin, Chun-Hung Wang, Ming-Jong Tsai, and Ching-Yuan Lin, "A Novel Mechanical Fault Diagnosis Based on Transfer Learning in Probabilistic Confidence CNN Model," presented at the 2022 IEEE International Conference on Electronic Communications, Internet of Things and Big Data (ICEIB 2022), 2022 Hsinchu, Taiwan. <span className="badge bg-primary">First and Corresponding Author</span></p>
                    </div>
                  </li>
                  <li className="list-group-item d-flex border-0 ps-0">
                    <div>
                      <p className="mb-1">Hsiao-Mei Lin, Ching-Yuan Lin, Jui-Cheng Ko, and Yu-Shiang Wu, "Risk Factors of Post-earthquake Fire for Constructions Using the Analytic Hierarchy Process Approach," in Proceedings of the 2016 International Conference on Architectural Engineering and Civil Engineering (ICAECE 2016), Dec. 2016, pp. 1–4, doi: 10.2991/aece-16.2017.1 [Online]. Available: <a href="https://doi.org/10.2991/aece-16.2017.1" target="_blank" rel="noopener noreferrer">https://doi.org/10.2991/aece-16.2017.1</a> <span className="badge bg-primary">First Author</span></p>
                    </div>
                  </li>
                  <li className="list-group-item d-flex border-0 ps-0">
                    <div>
                      <p className="mb-1">Shuo- Hung Chen, Hsiao-Mei Lin, Ching-Chou Hsieh, Chih-Tsun Huang, Jing-Jia Liou, Yeh-Ching Chung, "TurboVG: A HW/SW co-designed multi-core OpenVG accelerator for vector graphics applications with embedded power profiler," 16th Asia and South Pacific Design Automation Conference (ASP-DAC 2011), Yokohama, Japan, January 25-28, 2011. [Online]. Available: doi:10.1109/ASPDAC.2011.5722315</p>
                    </div>
                  </li>
                  <li className="list-group-item d-flex border-0 ps-0">
                    <div>
                      <p className="mb-1">Shuo-Hung Chen, Hsiao-Mei Lin, Hsin-Wen Wei, Yi-Cheng Chen, Chih-Tsun Huang, Yeh-Ching Chung, "Hardware/Software co-designed accelerator for vector graphics applications," 9th IEEE Symposium on Application Specific Processors (SASP 2011), San Diego, CA, USA, 2011. [Online]. Available: doi: 10.1109/SASP.2011.5941086</p>
                    </div>
                  </li>
                </ol>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}