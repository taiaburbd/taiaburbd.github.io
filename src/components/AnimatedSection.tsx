import React, { useRef, useEffect, useState } from 'react';
import { cn } from '../lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  /** Stagger delay in ms (default 0) */
  delay?: number;
  /** Animation direction (default 'up') */
  direction?: 'up' | 'left' | 'none';
}

/**
 * Wraps children in a div that fades + slides into view once scrolled
 * into the viewport using IntersectionObserver.
 */
const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  delay = 0,
  direction = 'up',
}) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timer = setTimeout(() => setVisible(true), delay);
          observer.disconnect();
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.08 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const initial: Record<string, string> = {
    up: 'opacity-0 translate-y-6',
    left: 'opacity-0 -translate-x-6',
    none: 'opacity-0',
  };

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out',
        visible ? 'opacity-100 translate-y-0 translate-x-0' : initial[direction],
        className
      )}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
