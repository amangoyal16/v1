'use client';

import { useState, useEffect } from 'react';

export const usePageAnimation = (delay: number = 500) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return isLoaded;
};

// Enhanced animation utilities
export const fadeIn = (isLoaded: boolean, duration: string = '500ms') =>
  `transition-all duration-${duration.replace('ms', '')} ease-out ${
    isLoaded ? 'opacity-100' : 'opacity-0'
  }`;

export const fadeInUp = (
  isLoaded: boolean,
  distance: string = '20px',
  duration: string = '500ms'
) =>
  `transition-all duration-${duration.replace('ms', '')} ease-out ${
    isLoaded
      ? 'opacity-100 translate-y-0'
      : `opacity-0 translate-y-[${distance}]`
  }`;

export const fadeInDown = (
  isLoaded: boolean,
  distance: string = '20px',
  duration: string = '500ms'
) =>
  `transition-all duration-${duration.replace('ms', '')} ease-out ${
    isLoaded
      ? 'opacity-100 translate-y-0'
      : `opacity-0 -translate-y-[${distance}]`
  }`;

export const fadeInLeft = (
  isLoaded: boolean,
  distance: string = '20px',
  duration: string = '500ms'
) =>
  `transition-all duration-${duration.replace('ms', '')} ease-out ${
    isLoaded
      ? 'opacity-100 translate-x-0'
      : `opacity-0 -translate-x-[${distance}]`
  }`;

export const fadeInRight = (
  isLoaded: boolean,
  distance: string = '20px',
  duration: string = '500ms'
) =>
  `transition-all duration-${duration.replace('ms', '')} ease-out ${
    isLoaded
      ? 'opacity-100 translate-x-0'
      : `opacity-0 translate-x-[${distance}]`
  }`;

export const fadeInScale = (
  isLoaded: boolean,
  scale: string = '0.95',
  duration: string = '500ms'
) =>
  `transition-all duration-${duration.replace('ms', '')} ease-out ${
    isLoaded ? 'opacity-100 scale-100' : `opacity-0 scale-[${scale}]`
  }`;

export const slideInUp = (
  isLoaded: boolean,
  distance: string = '30px',
  duration: string = '600ms'
) =>
  `transition-all duration-${duration.replace('ms', '')} ease-out ${
    isLoaded ? 'translate-y-0' : `translate-y-[${distance}]`
  }`;

// Staggered animation helper
export const getStaggerDelay = (
  index: number,
  baseDelay: number = 100
): string => `${baseDelay + index * 100}ms`;

// Mobile responsive animation delays
export const getMobileDelay = (
  desktopDelay: string,
  isMobile: boolean = false
): string => {
  if (!isMobile) return desktopDelay;
  const delay = parseInt(desktopDelay.replace('ms', ''));
  return `${Math.max(delay * 0.7, 100)}ms`; // Faster on mobile but not too fast
};
