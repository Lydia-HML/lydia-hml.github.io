import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Research from "@/components/Research";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { personalInfo } from "@/lib/constants";

export default function Home() {
  const { t, i18n } = useTranslation();
  
  return (
    <>
      <Helmet>
        <title>{`${t('header.home')} | ${personalInfo.name}`}</title>
        <meta name="description" content={t('about.bio')} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
        <html lang={i18n.language} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>
      
      <Header />
      
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Research />
        <Blog />
        <Contact />
      </main>
      
      <Footer />
    </>
  );
}
