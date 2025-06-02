'use client';

import Image from 'next/image';
import Link from 'next/link';
import { projectsData } from '@/constants/projects';

interface ProjectsShowcaseProps {
  showAll?: boolean;
  maxProjects?: number;
  showHeader?: boolean;
  title?: string;
  description?: string;
  layout?: 'grid' | 'list';
}

export default function ProjectsShowcase({
  showAll = false,
  maxProjects = 4,
  showHeader = true,
  title = 'Selected Work',
  description = 'A showcase of recent projects and collaborations',
  layout = 'grid',
}: ProjectsShowcaseProps) {
  const projectsToShow = showAll
    ? projectsData.filter((project) => project.isVisible)
    : projectsData.filter((project) => project.isVisible).slice(0, maxProjects);

  // Determine grid classes based on layout
  const gridClasses =
    layout === 'grid'
      ? 'grid grid-cols-1 md:grid-cols-2 gap-8'
      : 'space-y-8 gap-8';

  return (
    <section className="mx-auto px-6 py-16 max-w-6xl">
      {/* Section Header */}
      {showHeader && (
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <p className="text-base text-gray-600 mb-4">PORTFOLIO</p>
          <h2 className="text-3xl font-semibold text-gray-900 leading-tight mb-6">
            {title}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>
        </div>
      )}

      {/* Projects Grid/List */}
      <div className={gridClasses}>
        {projectsToShow.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.slug}`}
            className="group cursor-pointer mb-8"
          >
            <div
              className={`group cursor-pointer ${
                layout === 'list'
                  ? 'flex gap-6 p-6 rounded-2xl border border-gray-200 hover:bg-gray-50/30 transition-colors duration-300'
                  : ''
              }`}
            >
              <div
                className={`relative overflow-hidden rounded-2xl bg-gray-100 mb-4 ${
                  layout === 'list'
                    ? 'w-48 h-36 flex-shrink-0 mb-0'
                    : 'aspect-[4/3]'
                }`}
              >
                <Image
                  src={project.image}
                  alt={`${project.name} Project`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300 object-left"
                />
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded-full">
                    {project.status}
                  </span>
                </div>
              </div>
              <div className={`space-y-2 ${layout === 'list' ? 'flex-1' : ''}`}>
                <div
                  className={`flex items-center ${
                    layout === 'list' ? 'justify-between' : 'justify-between'
                  }`}
                >
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-black transition-colors duration-300">
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span>{project.year}</span>
                    <span>•</span>
                    <span>{project.category}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-base leading-relaxed">
                  {project.description}
                </p>
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs text-gray-400">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* View All Projects Button - Only show if not showing all projects */}
      {!showAll && (
        <div className="mt-16 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-8 py-4 rounded-full text-base font-medium hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 hover:scale-105"
          >
            View All Projects
            <span>→</span>
          </Link>
        </div>
      )}
    </section>
  );
}
