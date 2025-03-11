
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  element?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className,
  delay = 0,
  element = "p",
}) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate-slide-up");
              entry.target.classList.add("opacity-100");
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay]);

  const Tag = element as keyof JSX.IntrinsicElements;
  
  return (
    <Tag
      ref={elementRef as any}
      className={cn("opacity-0", className)}
    >
      {text}
    </Tag>
  );
};

export default AnimatedText;
