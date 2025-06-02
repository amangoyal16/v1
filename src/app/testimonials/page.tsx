'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRightIcon } from '@/components/Icons';
import { testimonials } from '@/constants/testimonials';
import TestimonialCard from '@/components/TestimonialCard';
import FoundersImages from '@/components/FoundersImages';

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main className="container mx-auto px-6 py-16 max-w-2xl">
        <FoundersImages />
        <h1 className="text-3xl font-medium text-gray-900 leading-tight tracking-tighter mb-6">
          I&apos;ve been fortunate to work with amazing people who&apos;ve
          shaped me professionally and personally. Here&apos;s what they say
          about working with me.
        </h1>
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

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-medium text-gray-900 mb-6">
            Ready to work together?
          </h2>
          <div className="flex gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-black text-white px-8 py-4 rounded-full text-base font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105 flex items-center gap-2 group"
            >
              Let&apos;s Work Together
              <ArrowUpRightIcon
                width="20"
                height="20"
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </Link>
            <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-full text-base font-medium hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 hover:scale-105">
              Copy Email
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
