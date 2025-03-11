
import React, { useEffect, useRef } from "react";
import { Brain, ArrowDown, Award } from "lucide-react";
import AnimatedText from "./AnimatedText";

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.classList.add("animate-fade-in");
    }
  }, []);

  return (
    <div 
      ref={heroRef} 
      className="min-h-screen flex flex-col items-center justify-center px-4 py-20 pt-28 opacity-0"
    >
      <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto text-center">
        <div className="info-chip mb-4">
          <Brain className="w-4 h-4 mr-2" />
          <span>Obsessive Compulsive Disorder</span>
        </div>
        
        <AnimatedText 
          element="h1"
          text="Understanding OCD" 
          className="text-4xl md:text-6xl mb-4 text-gray-900"
          delay={300}
        />
        
        <AnimatedText 
          element="p"
          text="A comprehensive guide to Obsessive Compulsive Disorder, its symptoms, diagnosis, and treatment options."
          className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8"
          delay={600}
        />
        
        <div className="mt-4 text-left px-4 md:px-8 py-4 bg-primary/5 rounded-lg border border-primary/10">
          <div className="flex items-center mb-2">
            <Award className="w-5 h-5 text-primary mr-2" />
            <h3 className="font-alegreya font-black text-xl">Aprendiendo a vivir con TOC</h3>
          </div>
          <p className="text-gray-700 italic mb-2">Un recorrido por retos y oportunidades</p>
          <p className="text-sm text-gray-600">Por: Jesús David Silva Rangel</p>
        </div>
        
        <div className="mt-10 animate-slide-up opacity-0" style={{ animationDelay: "900ms" }}>
          <a 
            href="#what-is-ocd"
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
          >
            <span className="mr-2">Explore</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
