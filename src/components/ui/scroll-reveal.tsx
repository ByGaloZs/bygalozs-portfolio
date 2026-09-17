"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function ScrollReveal({ children, className = "", delay = 0 }: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { rootMargin: "0px 0px -8%" });

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`scroll-reveal ${isVisible ? "is-visible" : ""} ${className}`} ref={elementRef} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}
