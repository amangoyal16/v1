'use client';

import Link from 'next/link';
import ProjectsList from '@/components/ProjectsList';
import { usePageAnimation, fadeInUp, fadeIn } from '@/hooks/usePageAnimation';
import { BackArrowIcon } from '@/components/Icons';
import Footer from '@/components/Footer';

export default function ProjectsPage() {
  const isLoaded = usePageAnimation();

  return (
    <div className="min-h-screen  mx-auto bg-white">
      {/* Projects Showcase */}
      <div className={fadeInUp(isLoaded)} style={{ transitionDelay: '200ms' }}>
        <ProjectsList />
      </div>
      <Footer />
    </div>
  );
}
