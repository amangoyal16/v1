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
          <h2 className="text-4xl font-medium text-gray-900 leading-tight mb-8">
            I help startups turn raw ideas into functional, user-driven
            products.
          </h2>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              My work sits at the intersection of product strategy, design, and
              execution. I care about solving real user problems while keeping
              things clean, clear, and scalable.
            </p>
            <p>
              I've worked with early-stage startups and growing SaaS teams to
              ship MVPs, improve conversion, and reduce design debt. Whether
              it's refining a product flow or building from zero, I bring
              clarity to complexity.
            </p>
          </div>
        </div>

        {/* Large Profile Image */}
        <div
          className="mb-16 animate-slideUp"
          style={{ animationDelay: '0.3s' }}
        >
          {/* PLACE IMAGE OF YOU HERE */}
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
                I started my career in engineering but quickly moved into
                product and design when I realized I was more interested in "why
                we're building" than just "what we're building."
              </p>
              <p>
                Since then, I've led cross-functional teams, redesigned SaaS
                dashboards, shipped AI tools, and helped founders find
                product-market fit. I'm not just here to make things look good —
                I'm here to make them work better.
              </p>
            </div>
          </section>

          {/* Approach */}
          <section>
            <h3 className="text-2xl font-medium text-gray-900 mb-6">
              Approach
            </h3>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                Every product starts with a problem. I begin by understanding
                the business case, the user context, and any technical
                constraints. That sets the foundation for fast, focused design.
              </p>
              <p>
                I work lean — designing just enough to test assumptions,
                validate early, and keep momentum. And I always keep dev handoff
                in mind, because good design is only useful when it ships.
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
                I partner with SaaS founders and product teams to launch and
                scale digital products. This includes MVP design, UX audits,
                feature design, and design systems.
              </p>
              <p>
                I can work solo or embedded with your team — async-first, always
                aligned with your roadmap. Most of my clients come back for
                multiple projects because I deliver clean, effective outcomes
                without overthinking.
              </p>
            </div>
          </section>

          {/* Optional Image: Screenshots of Projects */}
          <section>
            {/* PLACE PROJECT SCREENSHOTS OR DESIGN PROCESS IMAGE HERE */}
          </section>

          {/* Personal */}
          <section>
            <h3 className="text-2xl font-medium text-gray-900 mb-6">
              Outside Work
            </h3>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                I’m currently based in India but work with clients globally.
                Outside of work, I’m learning piano, experimenting with new
                tools, and trying to build healthier habits — slowly but surely.
              </p>
              <p>
                I occasionally write about design, product thinking, and remote
                work. I believe sharing what I learn is the best way to stay
                sharp and give back.
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
            Let’s work together
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            If you're building something and want design that’s clear, fast, and
            product-driven — I’m in.
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
