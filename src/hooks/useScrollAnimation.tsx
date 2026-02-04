import { useEffect, useRef, useState } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const { threshold = 0.1, rootMargin = "0px", triggerOnce = true } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
};

// Component wrapper for scroll animations
interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: "fade-up" | "fade-left" | "fade-right" | "scale" | "fade";
}

export const ScrollAnimation = ({ 
  children, 
  className = "", 
  delay = 0,
  animation = "fade-up" 
}: ScrollAnimationProps) => {
  const { ref, isVisible } = useScrollAnimation();

  const getAnimationClass = () => {
    const baseStyles = "transition-all duration-700 ease-out";
    const delayStyle = delay ? `delay-[${delay}ms]` : "";
    
    if (!isVisible) {
      switch (animation) {
        case "fade-up":
          return `${baseStyles} opacity-0 translate-y-10`;
        case "fade-left":
          return `${baseStyles} opacity-0 -translate-x-10`;
        case "fade-right":
          return `${baseStyles} opacity-0 translate-x-10`;
        case "scale":
          return `${baseStyles} opacity-0 scale-95`;
        case "fade":
          return `${baseStyles} opacity-0`;
        default:
          return `${baseStyles} opacity-0 translate-y-10`;
      }
    }
    return `${baseStyles} ${delayStyle} opacity-100 translate-y-0 translate-x-0 scale-100`;
  };

  return (
    <div 
      ref={ref} 
      className={`${getAnimationClass()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default useScrollAnimation;
