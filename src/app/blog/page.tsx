'use client';

import Link from 'next/link';
import Blog from '@/components/Blog';
import { usePageAnimation, fadeInUp, fadeIn } from '@/hooks/usePageAnimation';

export default function BlogPage() {
  const isLoaded = usePageAnimation();

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div
        className={`container mx-auto px-6 pt-16 max-w-2xl ${fadeIn(isLoaded)}`}
        style={{ transitionDelay: '100ms' }}
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-8"
        >
          <span>←</span>
          Back to Home
        </Link>
      </div>

      {/* Blog Section with all posts */}
      <div className={fadeInUp(isLoaded)} style={{ transitionDelay: '200ms' }}>
        <Blog showAll={true} />
      </div>
    </div>
  );
}
