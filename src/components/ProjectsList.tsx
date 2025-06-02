'use client';

import Image from 'next/image';
import Link from 'next/link';
import { projectsData } from '@/constants/projects';
import {
  usePageAnimation,
  fadeInUp,
  getStaggerDelay,
} from '@/hooks/usePageAnimation';

interface ProjectsListProps {
  title?: string;
  description?: string;
}

export default function ProjectsList({
  title = 'All Projects',
  description = 'A comprehensive showcase of my work in product design, WebAR, AI applications, and digital experiences.',
}: ProjectsListProps) {
  const isLoaded = usePageAnimation(100);
  const projectsToShow = projectsData.filter((project) => project.isVisible);

  return (
    <section className="mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20 max-w-6xl">
      {/* Section Header */}
      <div
        className={`mb-12 sm:mb-16 text-center max-w-3xl mx-auto ${fadeInUp(
          isLoaded
        )}`}
      >
        <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 tracking-wider uppercase">
          PORTFOLIO
        </p>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight mb-4 sm:mb-6">
          {title}
        </h2>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
      </div>

      {/* Projects List */}
      <div className="space-y-6 sm:space-y-8">
        {projectsToShow.map((project, index) => (
          <div
            key={project.id}
            className={fadeInUp(isLoaded)}
            style={{ transitionDelay: getStaggerDelay(index + 1) }}
          >
            <Link
              href={`/projects/${project.slug}`}
              className="group cursor-pointer block"
            >
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-200 hover:bg-gray-50/50 hover:border-gray-300 transition-all duration-300 hover:shadow-sm">
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-lg sm:rounded-xl bg-gray-100 w-full sm:w-48 lg:w-56 h-48 sm:h-36 lg:h-40 flex-shrink-0">
                  <Image
                    src={project.image}
                    alt={`${project.name} Project`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out object-left"
                  />
                  {/* Status Badge */}
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                    <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded-full backdrop-blur-sm bg-opacity-90">
                      {project.status}
                    </span>
                  </div>
                  {/* Mobile overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-5 transition-all duration-300 rounded-lg sm:rounded-xl" />
                </div>

                {/* Project Content */}
                <div className="space-y-2 sm:space-y-3 flex-1 min-w-0">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-3">
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 group-hover:text-black transition-colors duration-300 leading-tight">
                      {project.name}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500 flex-shrink-0">
                      <span>{project.year}</span>
                      <span>•</span>
                      <span>{project.category}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-1 sm:pt-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full transition-colors duration-200 hover:bg-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-xs text-gray-400 self-center">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Action indicator */}
                  <div className="flex items-center text-sm text-gray-400 group-hover:text-gray-600 transition-colors duration-300 pt-2 sm:pt-3">
                    <span>View project details</span>
                    <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Empty state if no projects */}
      {projectsToShow.length === 0 && (
        <div className={`text-center py-16 ${fadeInUp(isLoaded)}`}>
          <p className="text-gray-500 text-lg">
            No projects available at the moment.
          </p>
        </div>
      )}
    </section>
  );
}
