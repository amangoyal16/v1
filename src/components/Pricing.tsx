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
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Retainer Plan */}
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white rounded-3xl p-8 relative overflow-hidden shadow-2xl border border-gray-700 group">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Glow effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-5 h-5 bg-white rounded-full shadow-inner"></div>
                </div>
                <h3 className="text-2xl font-bold">Monthly Retainer</h3>
                <div className="ml-auto bg-gradient-to-r from-green-400 to-blue-400 text-black text-xs font-bold px-3 py-1 rounded-full">
                  POPULAR
                </div>
              </div>

              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                Ideal for fast-moving teams who need a plug-and-play product
                partner.
              </p>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {[
                  'Ongoing product & UX strategy support',
                  'Weekly planning & feedback calls',
                  'Async collaboration on Slack',
                  'Unlimited design & product requests',
                  // 'Up to 60 hours/month of hands-on work',
                  'Prioritized sprint support & turnaround',
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 group/item"
                  >
                    <div>
                      <CheckmarkIcon
                        width="18"
                        height="18"
                        className="text-green-400 flex-shrink-0 drop-shadow-sm"
                      />
                    </div>
                    <span className="text-gray-200 group-hover/item:text-white transition-colors duration-200">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <p className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-5 mb-8 border border-blue-100 text-gray-800 font-medium">
                Perfect for startups without an in-house designer or product
                strategist.
              </p>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                    $2999
                  </span>
                  <span className="text-gray-400 text-xl">per month</span>
                </div>
              </div>

              {/* Button */}
              <div className="flex gap-4">
                <Link
                  href={calLink}
                  className="flex-1 bg-gradient-to-r from-white to-blue-50 text-gray-900 font-bold py-4 px-6 rounded-full hover:shadow-2xl transition-all duration-300 border border-blue-100"
                >
                  Book a Free Discovery Call
                </Link>
              </div>
            </div>
          </div>

          {/* Fixed-scope projects */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200 relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group">
            {/* Hover gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 border-2 border-gray-300 rounded-full flex items-center justify-center group-hover:border-blue-400 transition-colors duration-300">
                  <div className="w-4 h-4 border-2 border-gray-400 rounded-sm group-hover:border-blue-500 transition-colors duration-300"></div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-900 transition-colors duration-300">
                  Fixed-scope projects
                </h3>
              </div>

              <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                Great for founders launching something specific — like a landing
                page, MVP, or redesign.
              </p>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {[
                  'Clear deliverables and milestones',
                  'Fixed timeline and pricing',
                  '1–2 weeks delivery (depending on scope)',
                  'Includes kickoff + handoff + 1 revision loop',
                  'Post-launch design support (7 days)',
                  'Async collaboration on Slack',
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 group/item"
                  >
                    <div>
                      <CheckmarkIcon
                        width="18"
                        height="18"
                        className="text-green-500 flex-shrink-0 drop-shadow-sm"
                      />
                    </div>
                    <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors duration-200">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <p className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-5 mb-8 border border-green-100 text-gray-800 font-medium">
                Ideal for getting your product from idea to live — fast.
              </p>

              {/* Price */}
              <div className="mb-8 mt-10">
                <div className="flex items-baseline gap-2">
                  <span className="text-gray-600 text-xl">Starting at</span>
                  <span className="text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
                    $1799
                  </span>
                </div>
              </div>

              {/* Button */}
              <div className="flex gap-4">
                <Link
                  href={calLink}
                  className="flex-1 bg-gradient-to-r from-gray-900 to-blue-900 text-white font-bold py-4 px-6 rounded-full hover:shadow-2xl transition-all duration-300"
                >
                  Book a Free Discovery Call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
