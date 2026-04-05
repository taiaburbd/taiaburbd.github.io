import React, { useState, useRef, useEffect } from 'react';
import { cn } from '../lib/utils';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  skeletonHeight?: string;
}

/**
 * Image that uses IntersectionObserver to defer loading until it scrolls near
 * the viewport, then shows a shimmer skeleton while the image loads.
 */
const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className,
  containerClassName,
  skeletonHeight = 'h-full',
}) => {
  const [inView, setInView] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.01, rootMargin: '120px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={cn('relative overflow-hidden', containerClassName)}>
      {/* Skeleton shown until image is loaded */}
      {!loaded && (
        <div className={cn('absolute inset-0 shimmer', skeletonHeight)} />
      )}

      {/* Only create the <img> once in viewport */}
      {inView && (
        <img
          src={src}
          alt={alt}
          onLoad={() => setLoaded(true)}
          className={cn(
            'transition-opacity duration-500',
            loaded ? 'opacity-100' : 'opacity-0',
            className
          )}
        />
      )}
    </div>
  );
};

export default LazyImage;
