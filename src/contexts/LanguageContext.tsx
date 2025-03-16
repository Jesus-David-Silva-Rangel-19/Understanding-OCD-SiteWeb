
import React, { createContext, useState, useContext, ReactNode } from "react";
import translations from "@/utils/translations";

type Language = "es";

interface LanguageContextType {
  language: Language;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Siempre usar español
  const language: Language = "es";
  
  // Función para obtener traducciones
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

  return (
    <LanguageContext.Provider value={{ language, t }}>
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
