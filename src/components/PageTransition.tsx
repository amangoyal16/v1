'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Handle page loading
    setIsLoading(true);
    setIsExiting(false);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    // Handle smooth scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return (
    <>
      {/* Loading overlay */}
      <div
        className={`fixed inset-0 z-50 bg-white transition-all duration-500 ease-out ${
          isLoading ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex items-center justify-center h-full">
          <div className="flex flex-col items-center space-y-4">
            {/* Animated logo/loader */}
            <div className="relative">
              <div className="w-8 h-8 border-2 border-gray-300 border-t-black rounded-full animate-spin" />
            </div>

            {/* Loading text */}
            <div className="text-sm text-gray-600 font-medium">Loading...</div>
          </div>
        </div>
      </div>

      {/* Page content */}
      <div
        className={`transition-all duration-700 ease-out ${
          isLoading ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
        } ${
          isExiting ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'
        }`}
      >
        {children}
      </div>
    </>
  );
}
