
import React, { createContext, useState, useContext, ReactNode, useEffect } from "react";
import translations from "@/utils/translations";

type Language = "en" | "es";

interface LanguageContextType {
  language: Language;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Siempre usar español por defecto
  const [language, setLanguage] = useState<Language>("es");

  // Asegurar que las traducciones existen
  const t = (key: string): string => {
    if (!translations[language]) {
      console.warn(`No translations found for language: ${language}`);
      return key;
    }
    
    if (!translations[language][key]) {
      console.warn(`Translation key not found: ${key} in language: ${language}`);
      return key;
    }
    
    return translations[language][key];
  };

  useEffect(() => {
    console.log("Current language:", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
