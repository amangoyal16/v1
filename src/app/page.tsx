'use client';

import Image from 'next/image';
import {
  ArrowUpRightIcon,
  EmailIcon,
  TwitterIcon,
  DribbbleIcon,
  LinkedInIcon,
  PeerlistIcon,
  DocumentIcon,
  RefreshIcon,
  FileDocumentIcon,
  LayersIcon,
  PaletteIcon,
} from '@/components/Icons';
import { foundersImageArray, testimonials } from '@/constants/testimonials';
import TestimonialCard from '@/components/TestimonialCard';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import FoundersImages from '@/components/FoundersImages';
import Products from '@/components/Products';
import Blog from '@/components/Blog';
import ProjectsGrid from '@/components/ProjectsGrid';
import ClientLogosCarousel from '@/components/ClientLogosCarousel';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Client Logos Carousel */}
      <ClientLogosCarousel />

      {/* Projects Section */}
      <ProjectsGrid maxProjects={4} />

      {/* Client Testimonials Section */}
      <section className="mx-auto px-6 py-24 container mt-20">
        {/* Section Header */}
        <div className="mb-16">
          <FoundersImages />

          <h2 className="text-3xl font-medium text-gray-900 leading-tight tracking-tighter max-w-4xl">
            Here&apos;s what the people I partnered with say about our
            collaboration
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="space-y-12">
          {testimonials
            .slice(0, 3)
            .map(
              (testimonial) =>
                testimonial.is_visible && (
                  <TestimonialCard
                    key={testimonial.id}
                    testimonial={testimonial}
                  />
                )
            )}
        </div>

        {/* Read More Button */}
        <div className="mt-12 flex justify-center">
          <a
            href="/testimonials"
            className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-8 py-4 rounded-full text-base font-medium hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 "
          >
            Read More Testimonials
            <ArrowUpRightIcon width="20" height="20" />
          </a>
        </div>
      </section>

      {/* How Can I Help You Section */}
      <section className="container mx-auto px-6 py-16 max-w-2xl">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-base text-gray-600 mb-4">HOW CAN I HELP YOU</p>
          <h2 className="text-3xl font-semibold text-gray-900 leading-tight mb-4">
            I help founders, product teams, and SaaS companies to design, fix or
            scale their products.
          </h2>
        </div>

        {/* Services Grid */}
        <div className="space-y-6">
          {/* MVP Design for SaaS */}
          <div className="border border-gray-200 rounded-2xl p-6 hover:shadow-sm transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                <PaletteIcon
                  width="24"
                  height="24"
                  className="text-purple-600"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  MVP Design for SaaS
                </h3>
                <p className="text-base text-gray-600 leading-relaxed mb-4">
                  Hire MVP designers to create an early version of your SaaS
                  product that will be well-received by advisors, investors, and
                  customers alike.
                </p>
                <span className="inline-block bg-purple-100 text-purple-700 text-sm font-medium px-3 py-1 rounded-full">
                  Recommended for Indie-makers
                </span>
              </div>
            </div>
          </div>

          {/* Product Redesign */}
          <div className="border border-gray-200 rounded-2xl p-6 hover:shadow-sm transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                <LayersIcon width="24" height="24" className="text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Product Redesign
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  We&apos;ll work together to overhaul your SaaS with a
                  user-centered approach that will increase engagement,
                  retention, and revenue. Say goodbye to a lackluster UX and
                  hello to a product that stands out in the market.
                </p>
              </div>
            </div>
          </div>

          {/* Team Extension */}
          <div className="border border-gray-200 rounded-2xl p-6 hover:shadow-sm transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center flex-shrink-0">
                <FileDocumentIcon
                  width="24"
                  height="24"
                  className="text-pink-600"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Team Extension
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  I can seamlessly integrate into your product development team
                  and provide solutions to your design challenges.
                </p>
              </div>
            </div>
          </div>

          {/* UX Audit */}
          <div className="border border-gray-200 rounded-2xl p-6 hover:shadow-sm transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                <RefreshIcon width="24" height="24" className="text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  UX Audit
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  I can help you to spot your product&apos;s bottlenecks to
                  unlock its fullest potential.
                </p>
              </div>
            </div>
          </div>

          {/* Design System */}
          <div className="border border-gray-200 rounded-2xl p-6 hover:shadow-sm transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center flex-shrink-0">
                <DocumentIcon
                  width="24"
                  height="24"
                  className="text-yellow-600"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Design System
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Have big plans on scaling your SaaS? I can support you in
                  creating and shaping the design system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <Products />

      {/* Blog Section */}
      <Blog />

      {/* FAQ Section */}
      <FAQ />

      {/* Footer Section */}
      <Footer />
    </>
  );
}
