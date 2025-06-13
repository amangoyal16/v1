'use client';

import { CheckmarkIcon } from '@/components/Icons';
import { calLink } from '@/constants/info';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Pricing = () => {
  return (
    <section className="mx-auto px-6 py-24 bg-gray-50">
      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-base text-gray-600 mb-4">PRICING</p>

          <h2 className="text-5xl font-semibold text-gray-900 mb-6 ">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            No contracts. No surprises. Cancel anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Your Product Partner */}
          <div className="bg-gradient-to-br from-pink-100 via-purple-100 to-yellow-100 rounded-3xl p-8 relative overflow-hidden border border-gray-200 group">
            {/* Most popular badge */}
            <div className="absolute top-4 right-4">
              <div className="bg-gray-800 text-white text-xs font-medium px-3 py-1 rounded-full">
                Most popular
              </div>
            </div>

            {/* Icon */}
            <div className="mb-6">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-200">
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
            </div>

            {/* Header */}
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Your Product Partner
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Perfect for startups scaling fast who need strategic product
                leadership without the full-time hire.
              </p>
            </div>

            {/* Price */}
            <div className="mb-8">
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-5xl font-bold text-gray-900">$1999</span>
                <span className="text-gray-600 text-lg">/month</span>
              </div>
              <p className="text-sm text-gray-600">
                ↳ Start with 1-week trial for $299
              </p>
            </div>

            {/* Features */}
            <div className="space-y-3 mb-8">
              {[
                'Strategic product roadmap planning',
                'Weekly strategy calls + async support',
                'User research and validation',
                'Design system and UX optimization',
                'Technical architecture guidance',
                'Team coaching and process setup',
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckmarkIcon
                    width="16"
                    height="16"
                    className="text-green-500 flex-shrink-0 mt-0.5"
                  />
                  <span className="text-gray-700 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            {/* Button */}
            <Link
              href={calLink}
              className="w-full bg-gray-900 text-white font-semibold py-3 px-6 rounded-xl hover:bg-gray-800 transition-colors duration-200 text-center block"
            >
              Get started
            </Link>
          </div>

          {/* MVP Launch Sprint */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200 relative overflow-hidden group hover:border-gray-300 transition-colors duration-200">
            {/* Icon */}
            <div className="mb-6">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center border border-gray-200">
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
            </div>

            {/* Header */}
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                MVP Launch Sprint
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Get your product from idea to launch in 2-4 weeks with clear
                scope and timeline.
              </p>
            </div>

            {/* Price */}
            <div className="mb-8">
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-gray-600 text-lg">Starting at</span>
                <span className="text-5xl font-bold text-gray-900">$2999</span>
              </div>
              <p className="text-sm text-gray-600">
                ↳ Exact price depends on scope complexity
              </p>
            </div>

            {/* Features */}
            <div className="space-y-3 mb-8">
              {[
                'Complete product specification',
                'User journey mapping and wireframes',
                'Technical feasibility assessment',
                'Launch-ready designs + developer handoff',
                'Go-to-market strategy recommendations',
                '2 weeks post-launch optimization',
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckmarkIcon
                    width="16"
                    height="16"
                    className="text-green-500 flex-shrink-0 mt-0.5"
                  />
                  <span className="text-gray-700 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            {/* Button */}
            <Link
              href={calLink}
              className="w-full bg-gray-100 text-gray-900 font-semibold py-3 px-6 rounded-xl hover:bg-gray-200 transition-colors duration-200 text-center block"
            >
              Get started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
