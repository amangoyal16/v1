'use client';

import Image from 'next/image';
import Link from 'next/link';
import { projectsData } from '@/constants/projects';
import {
  usePageAnimation,
  fadeInUp,
  getStaggerDelay,
} from '@/hooks/usePageAnimation';

import { ArrowRightIcon } from 'lucide-react';

interface ProjectsListProps {
  title?: string;
  description?: string;
}

export default function ProjectsList({
  title = 'All Projects',
  description = 'A comprehensive showcase of my work in product design, WebAR, AI applications, and digital experiences.',
}: ProjectsListProps) {
  const isLoaded = usePageAnimation(100);

  return (
    <section className="mx-auto px-4 py-12">
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
      <div className="space-y-6 sm:space-y-8 max-w-5xl mx-auto">
        {projectsData.map((project, index) => (
          <div
            key={project.id}
            className={fadeInUp(isLoaded)}
            style={{ transitionDelay: getStaggerDelay(index + 1) }}
          >
            <Link
              href={`/projects/${project.slug}`}
              className="group cursor-pointer block"
            >
              <div className="grid grid-cols-12 gap-4-6 rounded-xl sm:rounded-2xl border overflow-hidden border-gray-200 hover:bg-gray-50/50 hover:border-gray-300 transition-all duration-300 hover:shadow-sm">
                {/* Project Content */}
                <div className="space-y-2 col-span-12 md:col-span-8 sm:space-y-3 flex-1 min-w-0 p-8">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-3">
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 group-hover:text-black transition-colors duration-300 leading-tight">
                      {project.name}
                    </h3>
                    <span className="text-sm text-gray-500 flex-shrink-0">
                      {project.category}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-lg text-gray-600 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="bg-gradient-to-r from-blue-50 to-blue-50 rounded-2xl p-5 mb-8 border border-blue-100 text-gray-800 font-medium">
                    {project.highlights.map((highlight, index) => (
                      <div key={index} className="flex   items-center gap-2">
                        <span className="text-green-500">•</span>
                        <span className="text-base text-gray-600">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Action indicator */}
                  <div className="flex items-center text-sm text-gray-400 group-hover:text-gray-600 transition-colors duration-300 pt-4">
                    <span className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                      View project details
                    </span>
                    <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                      <ArrowRightIcon
                        width="16"
                        height="16"
                        className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300"
                      />
                    </span>
                  </div>
                </div>

                {/* Project Image */}
                <div className="relative overflow-hidden col-span-12 md:col-span-4 bg-gray-100 w-full flex-shrink-0">
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
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Empty state if no projects */}
      {projectsData.length === 0 && (
        <div className={`text-center py-16 ${fadeInUp(isLoaded)}`}>
          <p className="text-gray-500 text-lg">
            No projects available at the moment.
          </p>
        </div>
      )}
    </section>
  );
}
