'use client';

import Image from 'next/image';
import Link from 'next/link';
import { projectsData } from '@/constants/projects';
import {
  usePageAnimation,
  fadeInUp,
  getStaggerDelay,
} from '@/hooks/usePageAnimation';
import { ArrowUpRightIcon } from './Icons';
import { projectsLink } from '@/constants/info';

interface ProjectsGridProps {
  maxProjects?: number;
}

export default function ProjectsGrid({ maxProjects = 4 }: ProjectsGridProps) {
  const isLoaded = usePageAnimation(100);
  const projectsToShow = projectsData
    .filter((project) => project.isVisible)
    .slice(0, maxProjects);

  return (
    <section className="mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20 max-w-7xl">
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {projectsToShow.map((project, index) => (
          <div
            key={project.id}
            className={fadeInUp(isLoaded)}
            style={{ transitionDelay: getStaggerDelay(index) }}
          >
            <Link
              href={`/projects/${project.slug}`}
              className="group cursor-pointer block"
            >
              <div className="space-y-3 sm:space-y-4">
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-gray-100 aspect-[4/3]">
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
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-xl sm:rounded-2xl" />
                </div>

                <div className="space-y-2 sm:space-y-3 px-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-black transition-colors duration-300 leading-tight">
                      {project.name}
                    </h3>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 flex-shrink-0">
                      <span>{project.year}</span>
                      <span>•</span>
                      <span>{project.category}</span>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed line-clamp-2 sm:line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1 sm:pt-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full transition-colors duration-200 hover:bg-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs text-gray-400 self-center">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Hover indicator */}
                  <div className="flex items-center text-xs sm:text-sm text-gray-400 group-hover:text-gray-600 transition-colors duration-300 pt-1">
                    <span>View project</span>
                    <span className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* View All Projects Button */}
      <div
        className={`mt-12 sm:mt-16 text-center ${fadeInUp(isLoaded)}`}
        style={{ transitionDelay: getStaggerDelay(projectsToShow.length) }}
      >
        <Link
          href={projectsLink}
          target="_blank"
          className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-medium hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-sm"
        >
          View All Projects
          <ArrowUpRightIcon width="20" height="20" />
        </Link>
      </div>
    </section>
  );
}
