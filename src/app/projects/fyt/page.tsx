'use client';

// TODO: REVIEW AND UPDATE CASE STUDY CONTENT
// This page was identified as a duplicate and has been reset to a template.
// Please fill in the details for 'FYT'.

import Link from 'next/link';
import Image from 'next/image';
import { usePageAnimation, fadeInUp, fadeIn } from '@/hooks/usePageAnimation';
import { ArrowUpRightIcon, BackArrowIcon } from '@/components/Icons';

export default function FYTProjectPage() {
  const isLoaded = usePageAnimation();

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-gray-100 selection:text-gray-900">
      <main className="container mx-auto px-6 py-16 max-w-5xl">
        {/* Navigation */}
        <div
          className={`mb-12 ${fadeIn(isLoaded)}`}
          style={{ transitionDelay: '100ms' }}
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-black transition-colors group"
          >
            <BackArrowIcon
              width="16"
              height="16"
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span className="font-medium">All Projects</span>
          </Link>
        </div>

        {/* Hero Section */}
        <header
          className={`mb-20 ${fadeInUp(isLoaded)}`}
          style={{ transitionDelay: '200ms' }}
        >
          <div className="flex flex-wrap gap-3 text-sm font-medium tracking-wide uppercase text-gray-500 mb-6">
            <span className="text-gray-600">Product Category</span>
            <span>•</span>
            <span>Role</span>
            <span>•</span>
            <span>Year</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-gray-900 leading-[1.1]">
            FYT: <br className="hidden md:block" /> Project Title
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl">
            [A brief statement about the project's core value proposition and what it achieved.]
          </p>
        </header>

        {/* Hero Image */}
        <div
          className={`mb-24 ${fadeInUp(isLoaded)}`}
          style={{ transitionDelay: '300ms' }}
        >
          <div className="relative overflow-hidden rounded-3xl bg-gray-50 aspect-[16/9] shadow-sm border border-gray-100">
             <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-slate-50">
               <span className="text-lg">
                 [Hero Image: FYT Interface]
               </span>
             </div>
          </div>
        </div>

        {/* Project Metadata Grid */}
        <section
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 py-12 border-y border-gray-100 ${fadeInUp(
            isLoaded
          )}`}
          style={{ transitionDelay: '400ms' }}
        >
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
              My Role
            </h3>
            <p className="text-base font-medium">[Role]</p>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
              Team
            </h3>
            <p className="text-base font-medium">[Team Size]</p>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
              Timeline
            </h3>
            <p className="text-base font-medium">[Duration]</p>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
              Tech
            </h3>
            <p className="text-base font-medium">[Tech Stack]</p>
          </div>
        </section>

        {/* Case Study Content */}
        <article className="max-w-3xl mx-auto">
          <section
            className={`mb-24 ${fadeInUp(isLoaded)}`}
            style={{ transitionDelay: '500ms' }}
          >
            <h2 className="text-3xl font-bold mb-6">The Problem</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              [Description of the problem space.]
            </p>
          </section>

          <section className={`mb-24 ${fadeInUp(isLoaded)}`}>
            <h2 className="text-3xl font-bold mb-8">The Solution</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
               [Description of the solution.]
            </p>
          </section>
        </article>
      </main>
    </div>
  );
}
