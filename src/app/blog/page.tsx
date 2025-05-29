'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function BlogPage() {
  const blogPosts = [
    {
      date: 'MAR 24, 2025',
      title: 'Working from Home as a Freelancer: The Real Story',
      description:
        'Working from home as a freelance designer sounds dreamy—but the reality is a mix of freedom, focus, and unexpected challenges. This post shares the honest ups and downs, helpful routines, and lessons learned from building a solo creative practice at home.',
      slug: 'working-from-home-freelancer',
    },
    {
      date: 'FEB 24, 2025',
      title: 'Improving UI for AI-Powered Tools: Beyond the Textarea',
      description:
        "AI tools should be intuitive, not frustrating. Let's explore how structured inputs, interactive controls, and adaptive UIs can improve AI-powered tools, making them easier and more user-friendly.",
      slug: 'improving-ui-ai-tools',
    },
    {
      date: 'JAN 15, 2025',
      title:
        'Design Systems That Scale: Lessons from Building at Startup Speed',
      description:
        "Building a design system while shipping fast is like changing the wheels on a moving car. Here's what I learned about creating scalable design foundations without slowing down product development.",
      slug: 'design-systems-startup-speed',
    },
    {
      date: 'DEC 18, 2024',
      title: 'The Psychology of SaaS Onboarding: First Impressions Matter',
      description:
        "Your onboarding flow is your product's first handshake with users. Dive into the psychological principles that make some onboarding experiences memorable and others forgettable.",
      slug: 'psychology-saas-onboarding',
    },
    {
      date: 'NOV 22, 2024',
      title: 'From Wireframes to Wow: My Design Process Revealed',
      description:
        'Ever wondered how a simple wireframe transforms into a polished interface? Take a behind-the-scenes look at my design process, from initial sketches to final handoff.',
      slug: 'wireframes-to-wow-design-process',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="container mx-auto px-6 py-8 max-w-2xl">
        <Link
          href="/"
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
          Back to Home
        </Link>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 pb-16 max-w-2xl">
        {/* Profile Section */}
        <div
          className="flex items-start gap-6 mb-12 animate-slideUp"
          style={{ animationDelay: '0.1s' }}
        >
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-lg font-semibold text-gray-600">SV</span>
            </div>
          </div>

          {/* Profile Info */}
          <div>
            <h1 className="text-lg font-semibold text-gray-900 mb-1">
              Aman Goyal
            </h1>
            <p className="text-base text-gray-600">Senior Product Designer</p>
          </div>
        </div>

        {/* Section Header */}
        <div
          className="mb-16 animate-slideUp"
          style={{ animationDelay: '0.2s' }}
        >
          <p className="text-sm font-medium text-gray-500 tracking-wider uppercase mb-6">
            MY WRITING
          </p>
          <h2 className="text-3xl font-medium text-gray-900 leading-tight tracking-tighter mb-6">
            A place where I share what I&apos;ve learned, what I&apos;m
            exploring, and what I&apos;m experimenting with. Think of it as my
            creative journal—raw, real, and hopefully worth a read!
          </h2>
        </div>

        {/* Blog Posts */}
        <div className="space-y-16">
          {blogPosts.map((post, index) => (
            <article
              key={post.slug}
              className="group cursor-pointer animate-slideUp"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="space-y-4 group-hover:translate-y-[-2px] transition-transform duration-300">
                  <time className="text-sm font-medium text-gray-500 tracking-wider uppercase">
                    {post.date}
                  </time>
                  <h3 className="text-2xl font-medium text-gray-900 leading-tight group-hover:text-black transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {post.description}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className="mt-20 text-center animate-slideUp"
          style={{ animationDelay: '0.8s' }}
        >
          <h3 className="text-2xl font-medium text-gray-900 mb-6">
            Want to work together?
          </h3>
          <div className="flex gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-black text-white px-8 py-4 rounded-full text-base font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105 flex items-center gap-2 group"
            >
              Let&apos;s Work Together
              <svg
                width="20"
                height="20"
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
            <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-full text-base font-medium hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 hover:scale-105">
              Copy Email
            </button>
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
