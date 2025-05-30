'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePageAnimation, fadeInUp, fadeIn } from '@/hooks/usePageAnimation';
import { ArrowUpRightIcon, BackArrowIcon } from '@/components/Icons';

export default function ARKivistProjectPage() {
  const isLoaded = usePageAnimation();

  return (
    <div className="min-h-screen bg-white">
      <main
        className={`container mx-auto px-6 py-16 max-w-4xl ${fadeInUp(
          isLoaded
        )}`}
      >
        {/* Back Button */}
        <div className={fadeIn(isLoaded)} style={{ transitionDelay: '100ms' }}>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-8"
          >
            <BackArrowIcon width="16" height="16" />
            Back to Projects
          </Link>
        </div>

        {/* Project Header */}
        <header
          className={`mb-16 ${fadeInUp(isLoaded)}`}
          style={{ transitionDelay: '200ms' }}
        >
          <div className="mb-6">
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                Live
              </span>
              <span>•</span>
              <span>2024</span>
              <span>•</span>
              <span>WebAR</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-6">
              ARKivist
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Plug-and-play WebAR platform for brands to implement immersive
              web-based augmented reality (WebAR) and contextual commerce.
            </p>
          </div>
        </header>

        {/* Project Image */}
        <div
          className={`mb-16 ${fadeInUp(isLoaded)}`}
          style={{ transitionDelay: '300ms' }}
        >
          <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-video">
            <Image
              src="/projects/ARKivist-desktop.png"
              alt="ARKivist Project"
              fill
              className="object-cover object-left"
            />
          </div>
        </div>

        {/* Project Content */}
        <article
          className={`prose prose-lg max-w-none ${fadeInUp(isLoaded)}`}
          style={{ transitionDelay: '400ms' }}
        >
          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">
            Project Overview
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            ARKivist represents the future of web-based augmented reality,
            offering brands a seamless way to integrate immersive AR experiences
            directly into their web platforms. This plug-and-play solution
            eliminates the need for users to download specialized apps, making
            AR accessible to everyone with a web browser.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">
            The Challenge
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Traditional AR solutions require users to download native
            applications, creating friction in the user journey. Brands needed a
            solution that could deliver compelling AR experiences while
            maintaining the ease and accessibility of web browsing.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">
            The Solution
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            ARKivist provides a comprehensive WebAR platform that enables brands
            to:
          </p>

          <ul className="list-disc pl-6 text-gray-700 mb-8 space-y-2">
            <li>
              Create immersive product visualizations directly in web browsers
            </li>
            <li>
              Implement contextual commerce experiences with AR
              try-before-you-buy features
            </li>
            <li>Deploy AR campaigns without requiring app downloads</li>
            <li>Track engagement and conversion metrics in real-time</li>
            <li>Customize AR experiences to match brand aesthetics</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">
            Technologies Used
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {['React', 'Three.js', 'WebXR', 'TypeScript'].map((tech) => (
              <div key={tech} className="bg-gray-50 rounded-lg p-4 text-center">
                <span className="text-gray-700 font-medium">{tech}</span>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">
            Results & Impact
          </h2>

          <p className="text-gray-700 leading-relaxed mb-8">
            The platform successfully bridges the gap between traditional
            e-commerce and immersive shopping experiences, resulting in
            increased user engagement and higher conversion rates for
            participating brands. Early adopters report a 40% increase in
            product interaction time and a 25% improvement in purchase intent.
          </p>
        </article>

        {/* Project Footer */}
        <footer
          className={`mt-16 pt-8 border-t border-gray-200 ${fadeInUp(
            isLoaded
          )}`}
          style={{ transitionDelay: '500ms' }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-2">Project Type</p>
              <p className="font-medium text-gray-900">WebAR Platform Design</p>
            </div>
            <div className="flex gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                Work with Me
                <ArrowUpRightIcon width="16" height="16" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-50 hover:border-gray-400 transition-all duration-300"
              >
                More Projects
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
