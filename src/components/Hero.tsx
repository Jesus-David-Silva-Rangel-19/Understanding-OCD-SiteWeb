
import React, { useEffect, useRef } from "react";
import { Brain, ArrowDown, Award } from "lucide-react";
import AnimatedText from "./AnimatedText";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (heroRef.current) {
      // Apply fade-in animation but ensure it stays visible after
      heroRef.current.classList.add("animate-fade-in");
      heroRef.current.classList.add("opacity-100");
    }
  }, []);

  return (
    <div 
      ref={heroRef} 
      className="min-h-screen flex flex-col items-center justify-center px-4 py-20 pt-28 opacity-0 bg-gradient-to-b from-background to-background/95"
    >
      <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto text-center">
        <div className="info-chip mb-4">
          <Brain className="w-4 h-4 mr-2" />
          <span>{t("hero.disorder")}</span>
        </div>
        
        <AnimatedText 
          element="h1"
          text={t("hero.title")}
          className="text-4xl md:text-6xl mb-4 text-gray-900"
          delay={300}
        />
        
        <AnimatedText 
          element="p"
          text={t("hero.description")}
          className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8"
          delay={600}
        />
        
        <div className="mt-4 text-left px-4 md:px-8 py-4 bg-primary/5 rounded-lg border border-primary/10">
          <div className="flex items-center mb-2">
            <Award className="w-5 h-5 text-primary mr-2" />
            <h3 className="font-alegreya font-black text-xl">{t("hero.card.title")}</h3>
          </div>
          <p className="text-gray-700 italic mb-2">{t("hero.card.subtitle")}</p>
          <p className="text-sm text-gray-600">{t("hero.card.author")}</p>
        </div>
        
        <div className="mt-10">
          <a 
            href="#what-is-ocd"
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
          >
            <span className="mr-2">{t("hero.explore")}</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
