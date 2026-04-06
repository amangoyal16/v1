'use client';

// TODO: REVIEW AND UPDATE CASE STUDY CONTENT
// 1. Add specific visuals for Arora (AR overlay examples, map interface)
// 2. Expand on the 'Lens Protocol' integration
// 3. Detail the 'Rapid Prototyping Workflow' for non-tech artists

import Link from 'next/link';
import Image from 'next/image';
import { usePageAnimation, fadeInUp, fadeIn } from '@/hooks/usePageAnimation';
import { ArrowUpRightIcon, BackArrowIcon } from '@/components/Icons';

export default function AroraProjectPage() {
  const isLoaded = usePageAnimation();

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-purple-100 selection:text-purple-900">
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
            <span className="text-purple-600">Activism & Digital Art</span>
            <span>•</span>
            <span>WebAR Platform</span>
            <span>•</span>
            <span>2023</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-gray-900 leading-[1.1]">
            ARORA: <br className="hidden md:block" /> Reclaiming Public Space
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl">
            An AR-powered digital art campaign platform allowing artists to
            reclaim public space via mobile WebAR installations.
          </p>
        </header>

        {/* Hero Image */}
        <div
          className={`mb-24 ${fadeInUp(isLoaded)}`}
          style={{ transitionDelay: '300ms' }}
        >
          <div className="relative overflow-hidden rounded-3xl bg-gray-50 aspect-[16/9] shadow-sm border border-gray-100">
             {/* TODO: Add actual project screenshot */}
             <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-slate-50">
               <span className="text-lg">
                 [Hero Image: ARORA Map View & AR Art Overlay]
               </span>
             </div>
             {/*
            <Image
              src="/projects/MUV-desktop.png"
              alt="Arora Platform Interface"
              fill
              className="object-cover"
              priority
            />
            */}
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
            <p className="text-base font-medium">Head of Product</p>
            <p className="text-sm text-gray-500 mt-1">
              Strategy & Onboarding
            </p>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
              Partner
            </h3>
            <p className="text-base font-medium">#MakeUsVisible</p>
            <p className="text-sm text-gray-500 mt-1">Non-Profit Org</p>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
              Scale
            </h3>
            <p className="text-base font-medium">30+ Global Artists</p>
            <p className="text-sm text-gray-500 mt-1">
              Worldwide Campaign
            </p>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
              Tech
            </h3>
            <p className="text-base font-medium">WebAR</p>
            <p className="text-sm text-gray-500 mt-1">Three.js, React, Node</p>
          </div>
        </section>

        {/* Case Study Content */}
        <article className="max-w-3xl mx-auto">
          {/* Problem Statement */}
          <section
            className={`mb-24 ${fadeInUp(isLoaded)}`}
            style={{ transitionDelay: '500ms' }}
          >
            <h2 className="text-3xl font-bold mb-6">The Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Public monuments historically represent a narrow slice of history. #MakeUsVisible wanted to challenge this narrative by placing digital statues of underrepresented historical figures in prominent public spaces.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed bg-purple-50 p-6 rounded-xl border-l-4 border-purple-500 italic">
              &quot;We can't always build new physical statues, but we can build infinite digital ones. We needed a platform that made this accessible to anyone with a smartphone.&quot;
            </p>
          </section>

          {/* Goals */}
          <section className={`mb-24 ${fadeInUp(isLoaded)}`}>
            <h2 className="text-3xl font-bold mb-8">Product Goals</h2>
            <div className="space-y-6">
                 <div className="flex gap-4 items-start">
                   <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-sm">1</div>
                   <div>
                     <h4 className="text-lg font-bold text-gray-900">Zero-Code Art Upload</h4>
                     <p className="text-gray-600">Enable non-technical artists to upload 3D assets and geo-locate them without writing code.</p>
                   </div>
                 </div>
                 <div className="flex gap-4 items-start">
                   <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-sm">2</div>
                   <div>
                     <h4 className="text-lg font-bold text-gray-900">Universal Access</h4>
                     <p className="text-gray-600">Ensure the AR experience runs smoothly on mid-range mobile browsers (no app download).</p>
                   </div>
                 </div>
            </div>
          </section>

          {/* Solution */}
          <section className={`mb-24 ${fadeInUp(isLoaded)}`}>
            <h2 className="text-3xl font-bold mb-8">The Solution</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
               We built a geo-fenced WebAR platform. Users physically visit a specific location (e.g., a city square), scan a QR code, and see the digital monument anchored in the real world.
            </p>
             <div className="bg-gray-100 rounded-xl aspect-[16/10] flex items-center justify-center mb-4 text-gray-400 border border-dashed border-gray-300">
                [UI: Artist Upload Portal & Map Selection]
             </div>
             <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-100 rounded-xl aspect-[9/16] flex items-center justify-center text-gray-400 text-center p-4 border border-dashed border-gray-300">
                  [Mobile view: AR Scanner]
                </div>
                <div className="bg-gray-100 rounded-xl aspect-[9/16] flex items-center justify-center text-gray-400 text-center p-4 border border-dashed border-gray-300">
                   [Mobile view: Content Overlay]
                </div>
             </div>
          </section>

          {/* Impact */}
          <section className={`mb-24 ${fadeInUp(isLoaded)}`}>
            <h2 className="text-3xl font-bold mb-8">Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6 border border-gray-100 rounded-2xl shadow-sm">
                <p className="text-4xl font-bold text-gray-900 mb-2">30+</p>
                <p className="text-gray-500 text-sm">Partnered Artists</p>
              </div>
              <div className="p-6 border border-gray-100 rounded-2xl shadow-sm">
                <p className="text-4xl font-bold text-gray-900 mb-2">Featured</p>
                <p className="text-gray-500 text-sm">Lens Protocol Gallery</p>
              </div>
               <div className="p-6 border border-gray-100 rounded-2xl shadow-sm">
                <p className="text-4xl font-bold text-gray-900 mb-2">Global</p>
                <p className="text-gray-500 text-sm">Activations in 5+ Cities</p>
              </div>
            </div>
          </section>
        </article>

        {/* Footer Navigation */}
        <footer
          className={`mt-24 pt-12 border-t border-gray-100 ${fadeInUp(
            isLoaded
          )}`}
          style={{ transitionDelay: '600ms' }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Link
              href="/projects"
              className="group flex items-center gap-3 text-gray-500 hover:text-black transition-colors"
            >
              <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-black transition-colors">
                <BackArrowIcon width="14" height="14" />
              </div>
              <span className="font-medium">Back to All Projects</span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-transform hover:-translate-y-1"
            >
              Let&apos;s Build Something
              <ArrowUpRightIcon
                width="16"
                height="16"
                className="text-gray-400"
              />
            </Link>
          </div>
        </footer>
      </main>
    </div>
  );
}
