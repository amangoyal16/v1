'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRightIcon } from '@/components/Icons';
import {
  usePageAnimation,
  fadeInUp,
  fadeInLeft,
  fadeInScale,
  getStaggerDelay,
} from '@/hooks/usePageAnimation';
import { calLink, cvLink } from '@/constants/info';
import { ArrowDownIcon } from 'lucide-react';

export default function Hero() {
  const isLoaded = usePageAnimation(200);

  return (
    <section
      className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 max-w-2xl"
      role="banner"
    >
      {/* Profile Section */}
      <header
        className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-8 sm:mb-12 ${fadeInLeft(
          isLoaded
        )}`}
      >
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src="/amaninfo.jpg"
            alt="Aman Goyal - Product & Design Strategist"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="flex-1">
          <div className="text-lg sm:text-xl font-medium text-gray-900 mb-1 sm:mb-2">
            Aman Goyal
          </div>
          <p className="text-sm sm:text-base text-gray-600">
            Product & Design Strategist
          </p>
        </div>
      </header>

      {/* Main Content */}
      <div className="space-y-6 sm:space-y-8">
        {/* Main Headline - Primary H1 for SEO */}
        <div
          className={fadeInUp(isLoaded)}
          style={{ transitionDelay: getStaggerDelay(1) }}
        >
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight tracking-tight mb-4 sm:mb-6">
            I help{' '}
            <span className="relative">
              <span className="bg-yellow-200 px-1 sm:px-2 py-1 rounded-md">
                founders
              </span>
            </span>{' '}
            and{' '}
            <span className="relative">
              <span className="bg-blue-200 px-1 sm:px-2 py-1 rounded-md">
                product teams
              </span>
            </span>{' '}
            design and build products that{' '}
            <span className="relative">
              <span className="bg-green-200 px-1 sm:px-2 py-1 rounded-md">
                users love
              </span>
            </span>
          </h1>
        </div>

        {/* Description with schema markup */}
        <div
          className={fadeInUp(isLoaded)}
          style={{ transitionDelay: getStaggerDelay(2) }}
        >
          <p
            className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8"
            itemScope
            itemType="https://schema.org/description"
          >
            I&apos;m a{' '}
            <span itemProp="jobTitle">senior freelance product designer</span>{' '}
            with a passion for creating meaningful digital experiences. I work
            with{' '}
            <span itemProp="serviceType">
              startups and established companies
            </span>
            to design products that solve real problems and delight users
            through{' '}
            <span itemProp="expertise">
              user-centered design, MVP development, and product strategy
            </span>
            .
          </p>
        </div>

        {/* Call-to-Action Buttons */}
        <nav
          className={`flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 ${fadeInUp(
            isLoaded
          )}`}
          style={{ transitionDelay: getStaggerDelay(3) }}
          role="navigation"
          aria-label="Primary actions"
        >
          {/* <Link
            href={calLink}
            className="inline-flex items-center justify-center gap-2 bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105 active:scale-95"
            title="Contact Aman Goyal for product design services"
          >
            Book a Discovery Call
            <ArrowUpRightIcon width="18" height="18" aria-hidden="true" />
          </Link> */}
            <a
            href={cvLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105 active:scale-95"
            title="Download Aman Goyal's Resume"
          >
            Download CV
            <ArrowDownIcon width="18" height="18" aria-hidden="true" />
          </a>
          <Link
            href="/about"
            className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-medium hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 hover:scale-105 active:scale-95"
            title="Learn more about Aman Goyal's background and experience"
          >
            More about me
          </Link>
        
        </nav>
      </div>
    </section>
  );
}
