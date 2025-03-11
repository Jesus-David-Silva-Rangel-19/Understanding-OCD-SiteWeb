
import React from "react";
import { Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setLanguage(language === "en" ? "es" : "en")}
        className="flex items-center space-x-1 bg-white/80 backdrop-blur-sm rounded-full px-3 py-2 shadow-md hover:bg-white transition-all"
        aria-label={language === "en" ? "Switch to Spanish" : "Cambiar a Inglés"}
      >
        <Globe className="w-4 h-4 text-primary" />
        <span className="text-sm font-medium">{language === "en" ? "ES" : "EN"}</span>
      </button>
    </div>
  );
};

export default LanguageSwitcher;
