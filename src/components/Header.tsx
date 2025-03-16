
import React, { useEffect, useState } from "react";
import { Brain, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/80 backdrop-blur-lg shadow-md py-3" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 animate-fade-in">
            <Brain className="w-6 h-6 text-primary" />
            <h2 className="text-lg md:text-xl font-alegreya font-black">
              {t("header.title")}
            </h2>
            <Sparkles className="w-6 h-6 text-primary animate-pulse-slow" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
