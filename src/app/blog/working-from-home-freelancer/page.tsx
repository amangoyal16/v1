'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function BlogPostPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="container mx-auto px-6 py-8 max-w-2xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-300 mb-8 animate-slideUp"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 12H5M12 19L5 12L12 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back to Blog
        </Link>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 pb-16 max-w-2xl">
        {/* Article Header */}
        <div
          className="mb-12 animate-slideUp"
          style={{ animationDelay: '0.1s' }}
        >
          <time className="text-sm font-medium text-gray-500 tracking-wider uppercase mb-6 block">
            MAR 24, 2025
          </time>
          <h1 className="text-4xl font-medium text-gray-900 leading-tight mb-6">
            Working from Home as a Freelancer: The Real Story
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Working from home as a freelance designer sounds dreamy—but the
            reality is a mix of freedom, focus, and unexpected challenges. This
            post shares the honest ups and downs, helpful routines, and lessons
            learned from building a solo creative practice at home.
          </p>
        </div>

        {/* Article Content */}
        <div
          className="prose prose-lg max-w-none animate-slideUp"
          style={{ animationDelay: '0.2s' }}
        >
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            When I first started freelancing from home, I thought I had it all
            figured out. No commute, no office politics, complete control over
            my schedule—what could go wrong? Well, as it turns out, quite a lot.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The reality of working from home as a freelance designer is far more
            nuanced than the Instagram posts and productivity blogs would have
            you believe. It&apos;s a journey filled with unexpected challenges,
            surprising discoveries, and hard-earned lessons.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">
            The Freedom Paradox
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The biggest selling point of freelancing—complete freedom—can also
            be its biggest challenge. When you can work anytime, anywhere, it
            becomes surprisingly difficult to know when to start and when to
            stop.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            I found myself working at all hours, checking emails during dinner,
            and feeling guilty whenever I wasn&apos;t being
            &quot;productive.&quot; The boundaries between work and life
            didn&apos;t just blur—they completely disappeared.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">
            Building Sustainable Routines
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            After months of chaos, I realized that freedom without structure is
            just another form of prison. Here&apos;s what actually works:
          </p>

          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li className="text-lg text-gray-700">
              Start and end your day at consistent times
            </li>
            <li className="text-lg text-gray-700">
              Create a dedicated workspace, even if it&apos;s just a corner of
              your room
            </li>
            <li className="text-lg text-gray-700">
              Take real breaks—step away from the screen
            </li>
            <li className="text-lg text-gray-700">
              Communicate your boundaries clearly to clients
            </li>
          </ul>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The key insight? You need to become your own boss in the truest
            sense—not just in terms of finding work, but in creating the
            structure that helps you thrive.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">
            The Loneliness Factor
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Nobody talks about how isolating freelancing can be. The casual
            conversations by the coffee machine, the spontaneous brainstorming
            sessions, the simple human connection of working alongside
            others—you don&apos;t realize how much you miss these until
            they&apos;re gone.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            I&apos;ve learned to be intentional about connection. Regular video
            calls with other freelancers, working from coffee shops
            occasionally, and joining online communities have become essential
            parts of my routine.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">
            The Bottom Line
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Working from home as a freelancer isn&apos;t the effortless dream
            that social media portrays, but it&apos;s not a nightmare either.
            It&apos;s a skill that requires practice, patience, and constant
            adjustment.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The freedom is real, but so is the responsibility that comes with
            it. The flexibility is incredible, but it requires discipline to
            make it work. Most importantly, the journey is deeply personal—what
            works for others might not work for you, and that&apos;s perfectly
            okay.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            If you&apos;re considering making the leap or struggling with your
            current setup, remember: it&apos;s okay to experiment, fail, and try
            again. The perfect routine doesn&apos;t exist, but a routine that
            works for you absolutely does.
          </p>
        </div>

        {/* Call to Action */}
        <div
          className="mt-16 pt-8 border-t border-gray-200 animate-slideUp"
          style={{ animationDelay: '0.3s' }}
        >
          <h3 className="text-xl font-medium text-gray-900 mb-4">
            Want to work together?
          </h3>
          <p className="text-gray-600 mb-6">
            If you&apos;re building a product and need design help, I&apos;d
            love to hear about your project.
          </p>
          <div className="flex gap-4">
            <Link
              href="/contact"
              className="bg-black text-white px-6 py-3 rounded-full text-base font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105 flex items-center gap-2 group"
            >
              Let&apos;s Work Together
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:translate-x-1 transition-transform duration-300"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link
              href="/blog"
              className="border border-gray-300 text-gray-700 px-6 py-3 rounded-full text-base font-medium hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 hover:scale-105"
            >
              Read More Articles
            </Link>
          </div>
        </div>
      </main>

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
