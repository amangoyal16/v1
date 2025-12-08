'use client';

// TODO: REVIEW AND UPDATE CASE STUDY CONTENT
// 1. Replace placeholder images with actual project artifacts (wireframes, user research, final UI)
// 2. Verify specific metrics in 'Results & Impact' section
// 3. Update 'My Role' and 'Team' sections with actual contributors
// 4. Validate technical details in 'Engineering Challenges'

import Link from 'next/link';
import Image from 'next/image';
import { usePageAnimation, fadeInUp, fadeIn } from '@/hooks/usePageAnimation';
import { ArrowUpRightIcon, BackArrowIcon } from '@/components/Icons';

export default function ARKivistProjectPage() {
  const isLoaded = usePageAnimation();

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-green-100 selection:text-green-900">
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
            <span className="text-green-600">Product Design</span>
            <span>•</span>
            <span>WebAR Strategy</span>
            <span>•</span>
            <span>2024</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-gray-900 leading-[1.1]">
            ARKivist: Democratizing <br className="hidden md:block" /> Immersive
            Commerce
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl">
            A plug-and-play WebAR platform empowering brands to deploy immersive
            product experiences instantly—no app download required.
          </p>
        </header>

        {/* Hero Image */}
        <div
          className={`mb-24 ${fadeInUp(isLoaded)}`}
          style={{ transitionDelay: '300ms' }}
        >
          <div className="relative overflow-hidden rounded-3xl bg-gray-50 aspect-[16/9] shadow-sm border border-gray-100">
            <Image
              src="/projects/ARKivist-desktop.png"
              alt="ARKivist Platform Interface"
              fill
              className="object-cover"
              priority
            />
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
            <p className="text-base font-medium">Lead Product Designer</p>
            <p className="text-sm text-gray-500 mt-1">
              UX Research, UI Design, Prototyping
            </p>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
              Timeline
            </h3>
            <p className="text-base font-medium">4 Months</p>
            <p className="text-sm text-gray-500 mt-1">Jan 2024 - April 2024</p>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
              Team
            </h3>
            <p className="text-base font-medium">1 PM, 2 Engineers</p>
            <p className="text-sm text-gray-500 mt-1">
              Cross-functional collaboration
            </p>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
              Platform
            </h3>
            <p className="text-base font-medium">Web (Mobile & Desktop)</p>
            <p className="text-sm text-gray-500 mt-1">React, WebXR, Three.js</p>
          </div>
        </section>

        {/* Case Study Content */}
        <article className="max-w-3xl mx-auto">
          {/* Problem Statement */}
          <section
            className={`mb-24 ${fadeInUp(isLoaded)}`}
            style={{ transitionDelay: '500ms' }}
          >
            <h2 className="text-3xl font-bold mb-6">The Problem</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Augmented Reality (AR) in e-commerce has historically suffered
              from high friction. Users were forced to download heavy native
              apps just to view a single product in their space, leading to
              massive drop-off rates.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed bg-gray-50 p-6 rounded-xl border-l-4 border-green-500 italic">
              &quot;60% of users abandon an AR experience if it requires an app
              download. Brands wanted the engagement of AR without the friction
              of the App Store.&quot;
            </p>
          </section>

          {/* Goals */}
          <section className={`mb-24 ${fadeInUp(isLoaded)}`}>
            <h2 className="text-3xl font-bold mb-8">Project Goals</h2>
            <ul className="space-y-6">
              {[
                {
                  title: 'Eliminate Friction',
                  desc: 'Enable instant AR experiences directly in the mobile browser using WebXR.',
                },
                {
                  title: 'Simplify Integration',
                  desc: 'Create a "low-code" dashboard for brands to upload 3D assets and generate embeddable snippets.',
                },
                {
                  title: 'Drive Conversion',
                  desc: 'Design clear calls-to-action within the AR view to bridge the gap between visualization and purchase.',
                },
              ].map((goal, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold text-sm">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">
                      {goal.title}
                    </h4>
                    <p className="text-gray-600">{goal.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Research & Discovery */}
          <section className={`mb-24 ${fadeInUp(isLoaded)}`}>
            <h2 className="text-3xl font-bold mb-6">Discovery & Insights</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              We conducted interviews with 15 e-commerce managers and analyzed 5
              competitor platforms. The discovery phase revealed that while the
              technology was the main barrier, the *workflow* for content
              management was equally broken.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-bold mb-2">Insight 1: Asset Pipeline</h4>
                <p className="text-sm text-gray-600">
                  Brands struggle to optimize 3D models for the web. They need
                  automated compression tools built-in.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-bold mb-2">Insight 2: Contextual UI</h4>
                <p className="text-sm text-gray-600">
                  Users feel &quot;lost&quot; in AR. Standard UI overlays (like
                  &quot;Add to Cart&quot;) need to be persistent but
                  unobtrusive.
                </p>
              </div>
            </div>
          </section>

          {/* Solution & Design */}
          <section className={`mb-24 ${fadeInUp(isLoaded)}`}>
            <h2 className="text-3xl font-bold mb-8">The Solution</h2>

            <div className="mb-12">
              <h3 className="text-xl font-bold mb-4">
                1. The Merchant Dashboard
              </h3>
              <p className="text-gray-700 mb-6">
                I designed a clean, drag-and-drop interface for asset
                management. The focus was on giving immediate feedback on model
                quality and file size, ensuring performant WebAR experiences.
              </p>
              <div className="bg-gray-100 rounded-xl aspect-[16/10] flex items-center justify-center mb-4 text-gray-400">
                {/* Placeholder for Dashboard UI Image */}
                [Merchant Dashboard UI - Drag & Drop Flow]
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-xl font-bold mb-4">
                2. The AR Viewer Interface
              </h3>
              <p className="text-gray-700 mb-6">
                The mobile viewer needed to be intuitive. I introduced a
                &quot;reticle&quot; placement system and gesture hints that
                appear only when the user is inactive, reducing cognitive load.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-100 rounded-xl aspect-[9/16] flex items-center justify-center text-gray-400 text-center p-4">
                  [Mobile AR View - Placement State]
                </div>
                <div className="bg-gray-100 rounded-xl aspect-[9/16] flex items-center justify-center text-gray-400 text-center p-4">
                  [Mobile AR View - Product Interaction]
                </div>
              </div>
            </div>
          </section>

          {/* Technical Implementation */}
          <section className={`mb-24 ${fadeInUp(isLoaded)}`}>
            <h2 className="text-3xl font-bold mb-6">
              Engineering Collaboration
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Working closely with engineers, we had to solve for the
              constraints of mobile browsers.
            </p>
            <div className="bg-gray-900 text-gray-300 p-8 rounded-xl font-mono text-sm">
              <p className="mb-4">
                <span className="text-green-400">{'// Challenge:'}</span>{' '}
                High-poly models crashing iOS Safari.
              </p>
              <p className="mb-4">
                <span className="text-purple-400">{'// Solution:'}</span>{' '}
                Implemented Draco compression in the pipeline, reducing file
                sizes by ~85% without visible quality loss.
              </p>
              <p>
                <span className="text-blue-400">{'// Impact:'}</span> Load times
                dropped from 8s to 1.2s on 4G networks.
              </p>
            </div>
          </section>

          {/* Impact */}
          <section className={`mb-24 ${fadeInUp(isLoaded)}`}>
            <h2 className="text-3xl font-bold mb-8">Results & Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6 border border-gray-100 rounded-2xl shadow-sm">
                <p className="text-4xl font-bold text-gray-900 mb-2">40%</p>
                <p className="text-gray-500 text-sm">
                  Increase in time-on-page
                </p>
              </div>
              <div className="p-6 border border-gray-100 rounded-2xl shadow-sm">
                <p className="text-4xl font-bold text-gray-900 mb-2">25%</p>
                <p className="text-gray-500 text-sm">
                  Uplift in conversion rate
                </p>
              </div>
              <div className="p-6 border border-gray-100 rounded-2xl shadow-sm">
                <p className="text-4xl font-bold text-gray-900 mb-2">3x</p>
                <p className="text-gray-500 text-sm">
                  Faster deployment for brands
                </p>
              </div>
            </div>
          </section>

          {/* Learnings */}
          <section className={`mb-16 ${fadeInUp(isLoaded)}`}>
            <h2 className="text-2xl font-bold mb-4">Reflection</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Designing for AR requires a shift from 2D pixel-perfect thinking
              to spatial understanding. The biggest takeaway was that{' '}
              <strong>instructional design</strong> is just as important as the
              visual interface in AR—users need to be taught how to interact
              with the space, not just the UI.
            </p>
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
