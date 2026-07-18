'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowUpRightIcon } from '@/components/Icons';
import { projectsData } from '@/constants/projects';
import { usePageAnimation } from '@/hooks/usePageAnimation';
import { cn } from '@/lib/utils';

interface ProjectsListProps {
  title?: string;
  description?: string;
}

type Project = (typeof projectsData)[number];

const availableProjectImages = new Set([
  '/projects/ARKivist-desktop.png',
  '/projects/billiebot.png',
  '/projects/MUV-desktop.png',
  '/projects/Shiseido.png',
  '/projects/hive.png',
]);

const listedProjects = projectsData.filter((project) => project.isVisible);

function getProjectInitials(name: string) {
  return name
    .split(/[\s#()/-]+/)
    .filter(Boolean)
    .map((part) => part[0])
    .join('')
    .slice(0, 3)
    .toUpperCase();
}

function getProjectPreview(description: string) {
  if (description.length <= 150) {
    return description;
  }

  return `${description.slice(0, 147).trimEnd()}...`;
}

function ProjectVisual({ project }: { project: Project }) {
  const hasImage = availableProjectImages.has(project.image);

  return (
    <div className="relative aspect-[16/11] overflow-hidden rounded-[28px] bg-gray-100">
      {hasImage ? (
        <>
          <Image
            src={project.image}
            alt={`${project.name} preview`}
            fill
            sizes="(min-width: 1024px) 46vw, 100vw"
            className="object-cover object-left transition-transform duration-300 ease-out group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
        </>
      ) : (
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#f7f7f7_0%,#ffffff_48%,#f1f1f1_100%)]">
          <div className="absolute inset-x-6 top-6 border-t border-gray-200" />
          <div className="absolute left-6 top-10 text-[11px] font-medium uppercase tracking-[0.18em] text-gray-500">
            {project.category}
          </div>
          <div className="absolute left-6 bottom-6">
            <p className="text-[clamp(2.75rem,7vw,5rem)] font-semibold tracking-tighter text-gray-900/80">
              {getProjectInitials(project.name)}
            </p>
            <p className="mt-2 max-w-[14rem] text-sm leading-6 text-gray-500">
              {project.highlights[0]}
            </p>
          </div>
          <div className="absolute bottom-6 right-6 text-sm font-medium text-gray-400">
            {project.year}
          </div>
        </div>
      )}
      <div className="absolute inset-0 rounded-[28px] ring-1 ring-inset ring-black/5" />
    </div>
  );
}

function ProjectEntry({
  project,
  index,
  isLoaded,
}: {
  project: Project;
  index: number;
  isLoaded: boolean;
}) {
  const reverseLayout = index % 2 === 1;

  return (
    <article
      id={project.slug}
      className={cn(
        'scroll-mt-24 border-t border-gray-200 py-10 sm:py-14 lg:py-16',
        'transition-[transform,opacity] duration-300 ease-out',
        isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
      )}
      style={{ transitionDelay: `${160 + index * 70}ms` }}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-4 rounded-3xl"
      >
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-10">
          <div
            className={cn(
              'space-y-5 lg:col-span-5',
              reverseLayout && 'lg:order-2'
            )}
          >
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
              <span>{project.category}</span>
              <span aria-hidden="true">•</span>
              <span>{project.year}</span>
              <span aria-hidden="true">•</span>
              <span className="inline-flex items-center gap-2">
                <span
                  className={cn(
                    'h-2 w-2 rounded-full',
                    project.status === 'In Development'
                      ? 'bg-gray-300'
                      : project.status === 'Beta'
                        ? 'bg-gray-500'
                        : 'bg-gray-900'
                  )}
                />
                {project.status}
              </span>
            </div>

            <div>
              <h2 className="text-3xl font-medium leading-tight tracking-tighter text-gray-900 sm:text-4xl">
                {project.name}
              </h2>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-gray-900">
                {project.highlights[0]}
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
                {getProjectPreview(project.description)}
              </p>
            </div>

            <p className="text-sm leading-6 text-gray-500">
              {project.technologies.slice(0, 4).join(' • ')}
            </p>

            <div className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 sm:text-base">
              View case study
              <span className="transition-transform duration-200 ease-out group-hover:translate-x-1 group-hover:-translate-y-0.5">
                <ArrowUpRightIcon width="18" height="18" />
              </span>
            </div>
          </div>

          <div className={cn('lg:col-span-7', reverseLayout && 'lg:order-1')}>
            <ProjectVisual project={project} />
          </div>
        </div>
      </Link>
    </article>
  );
}

export default function ProjectsList({
  title = 'A closer look at the products I helped shape, launch, and refine.',
  description = 'Selected case studies across SaaS, AI, Web3, and immersive products. The goal here is simple: help you scan the work quickly, then open the details that feel most relevant.',
}: ProjectsListProps) {
  const isLoaded = usePageAnimation(120);
  const [activeSlug, setActiveSlug] = useState(listedProjects[0]?.slug ?? '');

  useEffect(() => {
    if (listedProjects.length === 0) {
      return;
    }

    let frameId = 0;

    const updateActiveProject = () => {
      frameId = 0;

      const activationOffset = 148;
      let nextActiveSlug = listedProjects[0].slug;

      for (const project of listedProjects) {
        const section = document.getElementById(project.slug);

        if (!section) {
          continue;
        }

        if (section.getBoundingClientRect().top <= activationOffset) {
          nextActiveSlug = project.slug;
        } else {
          break;
        }
      }

      setActiveSlug((currentSlug) =>
        currentSlug === nextActiveSlug ? currentSlug : nextActiveSlug
      );
    };

    const requestActiveProjectUpdate = () => {
      if (frameId !== 0) {
        return;
      }

      frameId = window.requestAnimationFrame(updateActiveProject);
    };

    requestActiveProjectUpdate();

    window.addEventListener('scroll', requestActiveProjectUpdate, {
      passive: true,
    });
    window.addEventListener('resize', requestActiveProjectUpdate);

    return () => {
      if (frameId !== 0) {
        window.cancelAnimationFrame(frameId);
      }

      window.removeEventListener('scroll', requestActiveProjectUpdate);
      window.removeEventListener('resize', requestActiveProjectUpdate);
    };
  }, []);

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <header
        className={cn(
          'max-w-4xl transition-[transform,opacity] duration-300 ease-out',
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
        )}
      >
        <p className="text-sm text-gray-600 tracking-wider uppercase mb-3 sm:mb-4">
          Portfolio
        </p>
        <h1 className="text-3xl font-medium text-gray-900 leading-tight tracking-tighter max-w-4xl sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-600 sm:mt-6 sm:text-lg">
          {description}
        </p>
      </header>

      <div className="mt-10 lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-10">
        <aside
          className={cn(
            'hidden lg:block lg:sticky lg:top-24 lg:self-start',
            'transition-[transform,opacity] duration-300 ease-out',
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
          )}
          style={{ transitionDelay: '100ms' }}
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-gray-400">
            Browse
          </p>
          <nav className="space-y-3" aria-label="Project index">
            {listedProjects.map((project, index) => {
              const isActive = activeSlug === project.slug;

              return (
              <a
                key={project.slug}
                href={`#${project.slug}`}
                onClick={() => setActiveSlug(project.slug)}
                className={cn(
                  'group flex items-baseline gap-3 border-l pl-3 text-sm transition-[color,border-color,transform] duration-200 ease-out',
                  isActive
                    ? 'border-gray-900 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-900'
                )}
              >
                <span
                  className={cn(
                    'w-6 flex-shrink-0 text-xs transition-colors duration-200',
                    isActive ? 'text-gray-900' : 'text-gray-400'
                  )}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span
                  className={cn(
                    'transition-all duration-200',
                    isActive ? 'font-semibold tracking-tight' : 'font-medium'
                  )}
                >
                  {project.name}
                </span>
              </a>
              );
            })}
          </nav>
        </aside>

        <div>
          {listedProjects.map((project, index) => (
            <ProjectEntry
              key={project.id}
              project={project}
              index={index}
              isLoaded={isLoaded}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
