export interface PersonalInfo {
  name: string;
  role: string;
  bio: string;
  location: string;
  email: string;
  phone: string;
  education: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  category: 'web' | 'app' | 'design';
  image: string;
  technologies: string[];
  detailLink: string;
  githubLink: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  tags: string[];
  readTime: number;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export const personalInfo: PersonalInfo = {
  name: "林筱玫 Lydia Hsiao-Mei Lin",
  role: "專案助理教授，國立台灣科技大學企業管理系",
  bio: "專注於人工智慧、物聯網、設計思考與創新創業研究，擁有台灣科技大學設計學院建築系博士學位，曾任國立台北科技大學互動設計系助理教授級專案教師，現為總統府國家氣候變遷對策委員會委員。目前在國立台灣科技大學企管系擔任專案助理教授（2025年至今）。",
  location: "台北市大安區基隆路四段43號，國立台灣科技大學",
  email: "Lydia.hmlin@mail.ntust.edu.tw",
  phone: "886-2-2730-3655",
  education: "國立台灣科技大學-設計學院建築系-博士"
};

export const projects: Project[] = [
  {
    id: 1,
    title: "AI 家庭螨蟲檢測與分類技術",
    description: "開發了基於人工智慧增強掃描影像的快速家庭螨蟲檢測與分類技術，該研究發表於Internet of Things期刊，並獲得SCI Q1評級。",
    category: "app",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["人工智慧", "圖像分類", "物件偵測", "健康監測"],
    detailLink: "https://doi.org/10.1016/j.iot.2024.101484",
    githubLink: "#"
  },
  {
    id: 2,
    title: "創新機械故障診斷系統",
    description: "基於轉移學習與概率置信卷積神經網絡模型的創新機械故障診斷研究，發表於Applied Sciences期刊，獲得SCI Q2評級。",
    category: "app",
    image: "https://images.unsplash.com/photo-1580894908361-967195033215?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["深度學習", "卷積神經網絡", "轉移學習", "故障診斷"],
    detailLink: "https://www.mdpi.com/2076-3417/12/19/9670",
    githubLink: "#"
  },
  {
    id: 3,
    title: "基於LoRa技術的防火門狀態檢測IoT系統",
    description: "開發了一種使用LoRa技術檢測和記錄防火門關閉狀態的物聯網系統，該研究發表於Architecture Science期刊。",
    category: "web",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["物聯網", "LoRa技術", "感測器整合", "安全監測"],
    detailLink: "https://doi.org/10.3966/221915772018120018003",
    githubLink: "#"
  },
  {
    id: 4,
    title: "動態Web開發課程教材",
    description: "為互動設計系學生設計的動態網頁開發課程內容，包含Web開發基礎、JavaScript程式設計和互動網頁應用等內容。",
    category: "design",
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["Web開發", "教學設計", "互動設計", "程式教育"],
    detailLink: "#",
    githubLink: "https://github.com/Lydia-HML/111-2-DynamicWeb"
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "人工智慧與物聯網在智慧城市的應用",
    excerpt: "探討人工智慧和物聯網技術如何改變都市環境，提升資源管理效率和生活品質。",
    content: "近年來，隨著人工智慧(AI)與物聯網(IoT)技術的快速發展，智慧城市的概念逐漸從理論走向實踐。智慧城市是指利用各種信息技術或創新意念，整合城市的組成系統和服務，以提高資源利用的效率，優化城市管理和服務，並改善市民的生活品質。\n\n在智慧城市的建設中，AI與IoT扮演著核心角色。物聯網技術通過各種感測器收集城市環境中的數據，如交通流量、空氣品質、能源消耗等，而人工智慧則負責分析這些數據，提取有價值的信息，輔助決策和自動化管理。\n\n在交通管理方面，AI可以通過分析交通流量數據，優化交通信號控制，減少交通擁堵和能源浪費。在環境監測方面，IoT傳感器網絡可以實時監測空氣質量、噪音水平和水質，為城市管理者提供快速反應的能力。在能源管理方面，智能電網可以根據用電需求的變化，動態調整供電計劃，提高能源利用效率，減少浪費。\n\n然而，智慧城市的建設也面臨著一些挑戰，如數據安全、隱私保護、技術標準化以及系統間的互操作性等。未來，隨著5G通訊、邊緣計算等技術的成熟，AI與IoT將更加深入地融入城市的各個方面，為城市的可持續發展提供新的解決方案。",
    author: "林筱玫",
    date: "2025-03-15",
    category: "人工智慧",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["AI", "IoT", "智慧城市", "可持續發展"],
    readTime: 5
  },
  {
    id: 2,
    title: "設計思考在創新教育中的應用",
    excerpt: "如何將設計思考方法論融入高等教育，培養學生的創新能力和解決複雜問題的能力。",
    content: "設計思考（Design Thinking）作為一種以人為中心的創新方法論，近年來已從商業領域逐漸延伸到教育領域。其強調同理心、創意發想、原型製作和測試的過程，為培養學生的創新思維和解決問題的能力提供了有效的工具和框架。\n\n在高等教育的環境中，設計思考可以幫助學生打破傳統學科界限，以跨學科的視角看待和解決問題。例如，在工程教育中引入設計思考，可以幫助學生更好地理解用戶需求，開發更符合實際使用情境的產品；在人文教育中，設計思考可以幫助學生將抽象的理論與現實世界的問題連接起來。\n\n實施設計思考教育的關鍵在於創造一個開放、包容的學習環境，鼓勵學生通過反覆試驗和失敗來學習。課堂上的活動可以包括實地觀察和訪談、頭腦風暴、快速原型製作和實施方案等，通過這些活動，學生不僅可以獲得實踐知識，還可以發展團隊合作、溝通表達和批判性思維等軟技能。\n\n然而，將設計思考融入教育也面臨著一些挑戰，如教師需要轉變傳統的教學方式，學校需要提供更靈活的課程設置和評估方法等。未來，随著教育改革的深入和對創新人才需求的增長，設計思考有望在教育體系中發揮更重要的作用。",
    author: "林筱玫",
    date: "2025-02-28",
    category: "設計思考",
    image: "https://images.unsplash.com/photo-1544531585-9847b68c8c86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["設計思考", "創新教育", "高等教育", "跨學科學習"],
    readTime: 4
  },
  {
    id: 3,
    title: "創新創業生態系統的建構與維護",
    excerpt: "探討如何建立一個有活力的創新創業生態系統，促進知識交流和資源整合。",
    content: "創新創業生態系統是指圍繞著創新和創業活動所形成的各種參與者、資源和制度環境的有機整體。一個健康的創新創業生態系統可以促進新想法的產生、資源的有效配置和創新成果的市場化，從而推動經濟增長和社會進步。\n\n在這個生態系統中，高校和研究機構是知識的主要產生者，提供技術創新的源頭；企業是創新的實踐者和應用者，將創新成果轉化為市場價值；政府則通過政策和資金支持，創造有利於創新和創業的環境；而創投機構、孵化器和加速器等中介組織則提供了資金、場地和專業服務，連接了生態系統中的各個環節。\n\n建立和維護一個有活力的創新創業生態系統需要關注以下幾個方面：首先，要促進產學研協同創新，加強高校、研究機構與企業之間的合作；其次，要完善風險投資機制，為初創企業提供資金支持；第三，要建立開放的交流平台，促進知識和經驗的分享；第四，要優化政策環境，減少創業障礙，保護知識產權；最後，要培育創新文化，鼓勵冒險精神和容忍失敗。\n\n台灣在發展創新創業生態系統方面有其獨特的優勢，如高素質的人才資源、強大的製造業基礎和靈活的中小企業文化。未來，随著全球創新競爭的加劇和產業轉型的需求，進一步完善創新創業生態系統將是台灣保持競爭力的關鍵。",
    author: "林筱玫",
    date: "2025-01-12",
    category: "創新創業",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["創新創業", "生態系統", "產學合作", "創業政策"],
    readTime: 6
  }
];

export const skillCategories = [
  {
    title: "人工智慧 (Artificial Intelligence)",
    icon: "brain",
    skills: ["機器學習", "深度學習", "卷積神經網路", "轉移學習", "物件偵測", "圖像分類", "AI應用開發"]
  },
  {
    title: "物聯網 (Internet of Things)",
    icon: "wifi",
    skills: ["IoT系統開發", "LoRa技術", "感測器整合", "智慧家居", "智慧健康監測", "資料收集與分析"]
  },
  {
    title: "設計思考 (Design Thinking)",
    icon: "lightbulb",
    skills: ["使用者中心設計", "原型設計", "互動設計", "用戶體驗", "創新解決方案", "跨領域合作"]
  },
  {
    title: "創新創業 (Innovation & Entrepreneurship)",
    icon: "rocket",
    skills: ["商業模式設計", "市場分析", "創新管理", "專案規劃", "產品開發", "策略思考"]
  },
  {
    title: "程式開發 (Programming)",
    icon: "code",
    skills: ["Python", "JavaScript", "Web開發", "數據分析", "API開發", "GitHub"]
  },
  {
    title: "教學與研究 (Teaching & Research)",
    icon: "book-open",
    skills: ["學術研究", "論文寫作", "課程設計", "教學方法", "研究計畫管理", "學術出版"]
  }
];
