'use client';

import ProjectsList from '@/components/ProjectsList';
import Footer from '@/components/Footer';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen mx-auto bg-white">
      <ProjectsList />
      <Footer />
    </div>
  );
}
