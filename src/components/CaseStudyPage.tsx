'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRightIcon, BackArrowIcon } from '@/components/Icons';
import { type CaseStudyData } from '@/constants/caseStudies';
import { usePageAnimation } from '@/hooks/usePageAnimation';
import { cn } from '@/lib/utils';

const availableProjectImages = new Set([
  '/projects/ARKivist-desktop.png',
  '/projects/MUV-desktop.png',
  '/projects/Shiseido.png',
  '/projects/billiebot.png',
  '/projects/hive.png',
]);

function getProjectInitials(name: string) {
  return name
    .split(/[\s#()/-]+/)
    .filter(Boolean)
    .map((part) => part[0])
    .join('')
    .slice(0, 3)
    .toUpperCase();
}

function shortenText(text: string, maxLength: number) {
  if (text.length <= maxLength) {
    return text;
  }

  return `${text.slice(0, maxLength).trimEnd()}...`;
}

function ProjectVisual({
  study,
  className,
  priority = false,
  objectPosition = 'object-left',
  showCaption = false,
}: {
  study: CaseStudyData;
  className?: string;
  priority?: boolean;
  objectPosition?: string;
  showCaption?: boolean;
}) {
  const hasImage = availableProjectImages.has(study.project.image);

  return (
    <figure className={cn('space-y-3', showCaption && 'space-y-4')}>
      <div
        className={cn(
          'relative overflow-hidden rounded-[30px] bg-gray-100',
          className
        )}
      >
        {hasImage ? (
          <>
            <Image
              src={study.project.image}
              alt={`${study.project.name} interface preview`}
              fill
              priority={priority}
              sizes="(min-width: 1024px) 72vw, 100vw"
              className={cn('object-cover', objectPosition)}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,24,39,0.03)_0%,rgba(17,24,39,0.08)_44%,rgba(17,24,39,0.18)_100%)]" />
          </>
        ) : (
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#f5f5f5_0%,#ffffff_52%,#efefef_100%)]">
            <div className="absolute inset-x-8 top-8 border-t border-gray-200" />
            <div className="absolute left-8 bottom-8">
              <p className="text-[clamp(3.25rem,8vw,6rem)] font-medium tracking-tighter text-gray-900/80">
                {getProjectInitials(study.project.name)}
              </p>
            </div>
            <div className="absolute bottom-8 right-8 text-sm font-medium text-gray-400">
              {study.project.year}
            </div>
          </div>
        )}
        <div className="absolute inset-0 rounded-[30px] ring-1 ring-inset ring-black/5" />
      </div>

      {showCaption && (
        <figcaption className="max-w-xl">
          <p className="text-sm font-medium text-gray-900">{study.visualTitle}</p>
          <p className="mt-2 text-sm leading-6 text-gray-600">
            {study.visualCaption}
          </p>
        </figcaption>
      )}
    </figure>
  );
}

function SidebarBlock({
  label,
  text,
}: {
  label: string;
  text: string;
}) {
  return (
    <div className="border-t border-gray-200 pt-5">
      <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-gray-400">
        {label}
      </p>
      <p className="mt-3 text-sm leading-6 text-gray-600">{text}</p>
    </div>
  );
}

export default function CaseStudyPage({ study }: { study: CaseStudyData }) {
  const isLoaded = usePageAnimation(120);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div
          className={cn(
            'transition-[transform,opacity] duration-300 ease-out',
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
          )}
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors duration-200 hover:text-black"
          >
            <BackArrowIcon width="16" height="16" />
            All Projects
          </Link>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_240px] lg:items-start lg:gap-12">
          <div
            className={cn(
              'space-y-6 transition-[transform,opacity] duration-300 ease-out',
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
            )}
            style={{ transitionDelay: '70ms' }}
          >
            <header className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
                <span>{study.discipline}</span>
                <span aria-hidden="true">•</span>
                <span>{study.focus}</span>
                <span aria-hidden="true">•</span>
                <span>{study.project.year}</span>
              </div>

              <h1 className="mt-5 text-4xl font-medium leading-tight tracking-tighter text-gray-900 sm:text-5xl lg:text-6xl">
                {study.title}
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
                {study.heroSummary}
              </p>
            </header>

            <ProjectVisual
              study={study}
              priority
              className="aspect-[16/11] sm:aspect-[16/10]"
              showCaption
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <ProjectVisual
                study={study}
                className="aspect-[5/4]"
                objectPosition="object-center"
              />

              <ProjectVisual
                study={study}
                className="aspect-[5/4]"
                objectPosition="object-right"
              />
            </div>

            <ProjectVisual
              study={study}
              className="aspect-[16/10] sm:aspect-[16/8]"
              objectPosition="object-center"
            />
          </div>

          <aside
            className={cn(
              'space-y-5 lg:sticky lg:top-24 transition-[transform,opacity] duration-300 ease-out',
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
            )}
            style={{ transitionDelay: '120ms' }}
          >
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-gray-400">
                Snapshot
              </p>
              <dl className="mt-4 space-y-4">
                {study.snapshot.map((item) => (
                  <div key={item.label}>
                    <dt className="text-xs font-medium uppercase tracking-[0.16em] text-gray-400">
                      {item.label}
                    </dt>
                    <dd className="mt-1 text-sm font-medium text-gray-900">
                      {item.value}
                    </dd>
                    <p className="mt-1 text-sm leading-6 text-gray-500">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </dl>
            </div>

            <SidebarBlock
              label="Outcome"
              text={shortenText(study.outcomeSummary, 180)}
            />

            <SidebarBlock
              label="Stack"
              text={study.project.technologies.join(' • ')}
            />

            <div className="border-t border-gray-200 pt-5">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 transition-transform duration-200 ease-out hover:translate-x-1"
              >
                Let&apos;s talk about similar work
                <ArrowUpRightIcon width="18" height="18" />
              </Link>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
