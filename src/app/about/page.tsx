'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRightIcon } from '@/components/Icons';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main className="container mx-auto px-6 py-16 max-w-3xl">
        {/* Main Heading */}
        <div
          className="mb-12 animate-slideUp"
          style={{ animationDelay: '0.2s' }}
        >
          <h2 className="text-4xl font-medium   text-gray-900 leading-tight mb-8">
            I&apos;m a senior freelance product designer crafting intuitive,
            user-focused experiences.
          </h2>

          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              Inspired by minimalism, I focus on creating designs that simplify,
              enrich, and add value to users&apos; lives.
            </p>

            <p>
              In the past, I&apos;ve worked with startups like Khatabook,
              streamlining lending processes for MSMEs. Today, I mainly
              collaborate with SaaS founders, indie makers, and startups to
              bring their visions to life through user-centered design.
            </p>
          </div>
        </div>

        {/* Large Profile Image */}
        <div
          className="mb-16 animate-slideUp"
          style={{ animationDelay: '0.3s' }}
        >
          <div className="w-full aspect-square bg-gray-200 rounded-2xl overflow-hidden">
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              <span className="text-6xl font-light">AG</span>
            </div>
          </div>
        </div>

        {/* Additional Content */}
        <div
          className="space-y-12 animate-slideUp"
          style={{ animationDelay: '0.4s' }}
        >
          {/* Background */}
          <section>
            <h3 className="text-2xl font-medium text-gray-900 mb-6">
              Background
            </h3>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                My journey into design started with a fascination for how things
                work and how they could work better. I believe that great design
                isn&apos;t just about making things look good—it&apos;s about
                making them work intuitively for the people who use them.
              </p>
              <p>
                Over the years, I&apos;ve had the privilege of working with
                companies at different stages, from early-stage startups
                figuring out their product-market fit to established companies
                looking to reimagine their user experience.
              </p>
            </div>
          </section>

          {/* Approach */}
          <section>
            <h3 className="text-2xl font-medium text-gray-900 mb-6">
              My Approach
            </h3>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                I approach every project with curiosity and empathy. Before
                diving into pixels and prototypes, I spend time understanding
                the business goals, user needs, and technical constraints. This
                foundation helps me create designs that aren&apos;t just
                beautiful, but also practical and effective.
              </p>
              <p>
                My design philosophy is rooted in minimalism—not the stark, cold
                kind, but the thoughtful elimination of everything that
                doesn&apos;t serve the user&apos;s goals. Every element should
                have a purpose, every interaction should feel natural.
              </p>
            </div>
          </section>

          {/* What I Do */}
          <section>
            <h3 className="text-2xl font-medium text-gray-900 mb-6">
              What I Do
            </h3>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                I specialize in product design for SaaS companies and startups.
                Whether you&apos;re building an MVP, redesigning an existing
                product, or scaling your design system, I can help you create
                experiences that users love and businesses thrive on.
              </p>
              <p>
                My work spans the entire design process—from initial research
                and strategy to final implementation. I believe in close
                collaboration with development teams to ensure that the final
                product matches the design vision.
              </p>
            </div>
          </section>

          {/* Personal */}
          <section>
            <h3 className="text-2xl font-medium text-gray-900 mb-6">
              Beyond Design
            </h3>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                When I&apos;m not designing, you&apos;ll find me exploring new
                technologies, reading about psychology and human behavior, or
                experimenting with new design tools and techniques. I&apos;m
                always looking for ways to improve my craft and stay current
                with industry trends.
              </p>
              <p>
                I also enjoy sharing what I&apos;ve learned through writing and
                speaking. Teaching others helps me solidify my own understanding
                and gives back to the design community that has taught me so
                much.
              </p>
            </div>
          </section>
        </div>

        {/* Call to Action */}
        <div
          className="mt-20 text-center animate-slideUp"
          style={{ animationDelay: '0.5s' }}
        >
          <h3 className="text-2xl font-medium text-gray-900 mb-6">
            Let&apos;s work together
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            I&apos;m always interested in hearing about new projects and
            opportunities to create meaningful experiences.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-black text-white px-8 py-4 rounded-full text-base font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105 flex items-center gap-2 group"
            >
              Get In Touch
              <ArrowUpRightIcon
                width="20"
                height="20"
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </Link>
            <Link
              href="/blog"
              className="border border-gray-300 text-gray-700 px-8 py-4 rounded-full text-base font-medium hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 hover:scale-105"
            >
              Read My Writing
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideUp {
          animation: slideUp 0.6s ease-out both;
        }
      `}</style>
    </div>
  );
}
