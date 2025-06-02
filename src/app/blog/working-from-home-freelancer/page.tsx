'use client';

import Link from 'next/link';
import { usePageAnimation, fadeInUp, fadeIn } from '@/hooks/usePageAnimation';
import { ArrowUpRightIcon, BackArrowIcon } from '@/components/Icons';

export default function WorkingFromHomeFreelancerPage() {
  const isLoaded = usePageAnimation();

  return (
    <div className="min-h-screen bg-white max-w-3xl mx-auto">
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
            <BackArrowIcon width="16" height="16" />
            Back to Home
          </Link>
        </div>

        {/* Article Header */}
        <header
          className={`mb-16 ${fadeInUp(isLoaded)}`}
          style={{ transitionDelay: '200ms' }}
        >
          <div className="mb-6">
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <time>MAR 24, 2025</time>
              <span>•</span>
              <span>5 min read</span>
              <span>•</span>
              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
                Freelancing
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-6">
              Working from Home as a Freelancer: The Real Story
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Working from home as a freelance designer sounds dreamy—but the
              reality is a mix of freedom, focus, and unexpected challenges.
            </p>
          </div>
        </header>

        {/* Article Content */}
        <article
          className={`prose prose-lg max-w-none ${fadeInUp(isLoaded)}`}
          style={{ transitionDelay: '300ms' }}
        >
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            When I first started freelancing as a product designer, the idea of
            working from home felt like the ultimate dream. No commute, no
            office politics, complete control over my schedule. After three
            years of remote freelancing, I can tell you that while it&apos;s
            incredibly rewarding, it&apos;s not quite the Instagram-worthy
            lifestyle you might imagine.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">
            The Good: Freedom and Flexibility
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Let&apos;s start with the positives, because there are many. Working
            from home as a freelancer gives you unparalleled flexibility. You
            can structure your day around your natural energy levels, take
            breaks when you need them, and work in an environment that&apos;s
            truly comfortable for you.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            I&apos;ve found that I&apos;m most creative in the early morning, so
            I block out 6-10 AM for deep design work. Try doing that in a
            traditional office! This flexibility has allowed me to produce my
            best work and maintain a healthier work-life balance.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">
            The Challenging: Isolation and Distractions
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            But it&apos;s not all perfect. Working from home can be incredibly
            isolating, especially when you&apos;re used to the energy of a
            collaborative office environment. Some days, the only human
            interaction I have is with the delivery person at my door.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Then there are the distractions. That pile of laundry, the dishes in
            the sink, the neighbor&apos;s dog that won&apos;t stop barking. It
            takes serious discipline to maintain focus when your home is also
            your office.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">
            What I&apos;ve Learned
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Here are the key strategies that have helped me thrive as a
            work-from-home freelancer:
          </p>

          <ul className="list-disc pl-6 text-gray-700 mb-8 space-y-2">
            <li>
              <strong>Create boundaries:</strong> I have a dedicated workspace
              that&apos;s separate from my living area. When I&apos;m in that
              space, I&apos;m in work mode.
            </li>
            <li>
              <strong>Stick to a routine:</strong> I start work at the same time
              every day and have consistent morning and evening routines.
            </li>
            <li>
              <strong>Schedule social time:</strong> I make sure to schedule
              regular coffee meetings, co-working sessions, or video calls with
              other freelancers.
            </li>
            <li>
              <strong>Invest in your setup:</strong> A good chair, proper
              lighting, and quality monitors aren&apos;t luxuries—they&apos;re
              necessities.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">
            The Bottom Line
          </h2>

          <p className="text-gray-700 leading-relaxed mb-8">
            Working from home as a freelancer is challenging, but it&apos;s also
            one of the most rewarding ways to work. It requires discipline, good
            systems, and a willingness to constantly adapt. But if you can make
            it work, the freedom and flexibility are unmatched.
          </p>

          <p className="text-gray-700 leading-relaxed">
            If you&apos;re considering making the jump to freelancing from home,
            my advice is simple: start small, build good habits, and don&apos;t
            be afraid to experiment until you find what works for you.
          </p>
        </article>

        {/* Article Footer */}
        <footer
          className={`mt-16 pt-8 border-t border-gray-200 ${fadeInUp(
            isLoaded
          )}`}
          style={{ transitionDelay: '400ms' }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-2">Written by</p>
              <p className="font-medium text-gray-900">Aman Goyal</p>
            </div>
            <div className="flex gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                Get in Touch
                <ArrowUpRightIcon width="16" height="16" />
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-50 hover:border-gray-400 transition-all duration-300"
              >
                More Articles
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
