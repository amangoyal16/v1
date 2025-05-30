'use client';

import Link from 'next/link';
import ProjectsList from '@/components/ProjectsList';
import { usePageAnimation, fadeInUp, fadeIn } from '@/hooks/usePageAnimation';
import { BackArrowIcon } from '@/components/Icons';

export default function ProjectsPage() {
  const isLoaded = usePageAnimation();

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div
        className={`container mx-auto px-6 pt-16 max-w-3xl ${fadeIn(isLoaded)}`}
        style={{ transitionDelay: '100ms' }}
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-8"
        >
          <BackArrowIcon width="16" height="16" />
          Back to Home
        </Link>
      </div>

      {/* Projects Showcase */}
      <div className={fadeInUp(isLoaded)} style={{ transitionDelay: '200ms' }}>
        <ProjectsList />
      </div>
    </div>
  );
}
