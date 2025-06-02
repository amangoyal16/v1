'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRightIcon } from '@/components/Icons';
import {
  usePageAnimation,
  fadeInUp,
  fadeInLeft,
  fadeInScale,
  fadeIn,
} from '@/hooks/usePageAnimation';

export default function InvoiceGenerationPage() {
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
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-8"
          >
            <span>←</span>
            Back to Home
          </Link>
        </div>

        {/* Product Header */}
        <div
          className={`mb-16 ${fadeInUp(isLoaded)}`}
          style={{ transitionDelay: '200ms' }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="text-5xl">📄</div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Invoice Generation System
              </h1>
              <div className="flex items-center gap-3">
                <span className="bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full">
                  Live
                </span>
                <span className="text-gray-600">
                  Automated invoice creation and management
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Project Overview */}
        <section
          className={`mb-16 ${fadeInUp(isLoaded)}`}
          style={{ transitionDelay: '300ms' }}
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Project Overview
          </h2>
          <div className="prose prose-lg text-gray-600 leading-relaxed">
            <p className="mb-6">
              Built a comprehensive invoice generation system that automates the
              entire billing process for freelancers and small businesses. The
              system reduces manual work by 90% and ensures professional,
              consistent invoicing.
            </p>
            <p>
              The platform integrates with popular payment gateways and provides
              real-time tracking of invoice status, payments, and client
              communications.
            </p>
          </div>
        </section>

        {/* How I Built It */}
        <section
          className={`mb-16 ${fadeInUp(isLoaded)}`}
          style={{ transitionDelay: '400ms' }}
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            How I Built It
          </h2>
          <div className="space-y-8">
            {/* Step 1 */}
            <div
              className={fadeInLeft(isLoaded)}
              style={{ transitionDelay: '500ms' }}
            >
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">
                    Research & Planning
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Conducted user interviews with 15+ freelancers to understand
                    pain points in their current invoicing workflow. Identified
                    key features like template customization, automated
                    reminders, and payment tracking.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div
              className={fadeInLeft(isLoaded)}
              style={{ transitionDelay: '600ms' }}
            >
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">
                    Design & Prototyping
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Created wireframes and high-fidelity prototypes using Figma.
                    Focused on a clean, intuitive interface that makes invoice
                    creation feel effortless. Tested with 5 users and iterated
                    based on feedback.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div
              className={fadeInLeft(isLoaded)}
              style={{ transitionDelay: '700ms' }}
            >
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">
                    Development & Launch
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Built using Next.js, TypeScript, and Prisma with PostgreSQL.
                    Integrated Stripe for payments and Resend for email
                    automation. Deployed on Vercel with 99.9% uptime. Launched
                    with 50 beta users and scaled to 500+ active users.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section
          className={`mb-16 ${fadeInUp(isLoaded)}`}
          style={{ transitionDelay: '800ms' }}
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Tech Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Next.js',
              'TypeScript',
              'Prisma',
              'PostgreSQL',
              'Stripe',
              'Tailwind CSS',
              'Vercel',
              'Resend',
            ].map((tech, index) => (
              <div
                key={tech}
                className={`bg-gray-50 border border-gray-200 rounded-lg p-4 text-center ${fadeInScale(
                  isLoaded
                )}`}
                style={{ transitionDelay: `${900 + index * 50}ms` }}
              >
                <span className="text-sm font-medium text-gray-700">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section
          className={`bg-gray-50 rounded-2xl p-8 text-center ${fadeInUp(
            isLoaded
          )} scale-animation`}
          style={{ transitionDelay: '1000ms' }}
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Ready to streamline your invoicing?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of freelancers and small businesses who have automated
            their billing process.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="https://invoice-app.example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-8 py-4 rounded-full text-base font-medium hover:bg-gray-800 transition-colors flex items-center gap-2"
            >
              Launch App
              <ArrowUpRightIcon width="20" height="20" />
            </a>
            <Link
              href="/contact"
              className="border border-gray-300 text-gray-700 px-8 py-4 rounded-full text-base font-medium hover:bg-gray-50 hover:border-gray-400 transition-all duration-300"
            >
              Get Custom Version
            </Link>
          </div>
        </section>
      </main>

      <style jsx>{`
        .scale-animation {
          transition: opacity 0.7s ease-out, transform 0.7s ease-out,
            scale 0.7s ease-out;
        }
      `}</style>
    </div>
  );
}
