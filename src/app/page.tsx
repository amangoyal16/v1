'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 max-w-2xl">
        {/* Profile Section */}
        <div className="flex items-start gap-6 mb-12">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-lg font-semibold text-gray-600">AG</span>
            </div>
          </div>

          {/* Profile Info */}
          <div>
            <h1 className="text-lg font-semibold text-gray-900 mb-1">
              Aman Goyal
            </h1>
            <p className="text-base text-gray-600">Product Designer</p>
          </div>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl font-semibold text-gray-900 leading-tight mb-4 ">
          Helping SaaS Teams Scale Through UX Strategy & Design
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-600 leading-relaxed mb-12 ">
          I work with early-stage founders, SaaS companies, and product teams to
          turn complex ideas into thoughtful, conversion-focused interfaces that
          scale.
        </p>

        {/* Action Buttons */}
        <div className="flex gap-4 mb-16">
          <a
            href="/contact"
            className="bg-black text-white px-8 py-4 rounded-full text-base font-medium hover:bg-gray-800 transition-colors flex items-center gap-2"
          >
            Let&apos;s Work Together
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-full text-base font-medium hover:bg-gray-50 transition-colors">
            Copy Email
          </button>
        </div>

        {/* Company Logos */}
        <p className="text-gray-600 text-sm mb-4">
          My work has been featured in:
        </p>
        <div className="flex items-center justify-center gap-8 md:gap-12">
          <div className="opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
            <Image
              src="/press/coinbase.svg"
              alt="Coinbase"
              width={100}
              height={32}
              className="h-8 w-24 object-contain filter brightness-0"
            />
          </div>
          <div className="opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
            <Image
              src="/press/yahoo.svg"
              alt="Yahoo"
              width={100}
              height={32}
              className="h-8 w-24 object-contain filter brightness-0"
            />
          </div>
          <div className="opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
            <Image
              src="/press/forbes.svg"
              alt="Forbes"
              width={100}
              height={32}
              className="h-8 w-24 object-contain filter brightness-0"
            />
          </div>
          <div className="opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
            <Image
              src="/press/googleio.svg"
              alt="Google I/O"
              width={100}
              height={32}
              className="h-8 w-24 object-contain filter brightness-0"
            />
          </div>
          <div className="opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
            <Image
              src="/press/PBS.svg"
              alt="PBS"
              width={100}
              height={32}
              className="h-8 w-24 object-contain filter brightness-0"
            />
          </div>
          <div className="opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
            <Image
              src="/press/hypebeast.svg"
              alt="Hypebeast"
              width={100}
              height={32}
              className="h-8 w-24 object-contain filter brightness-0"
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="mx-auto px-6  max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1 - Hive */}
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-[4/3] mb-4">
              <Image
                src="/projects/hive.png"
                alt="Hive Project"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Hive</h3>
            <p className="text-gray-600 text-base">
              Collaborative workspace platform for modern teams
            </p>
          </div>

          {/* Project 2 - Blackbeard */}
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-[4/3] mb-4">
              <Image
                src="/projects/blackbeard-mockup.png"
                alt="Blackbeard Project"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Blackbeard
            </h3>
            <p className="text-gray-600 text-base">
              Advanced analytics dashboard for maritime operations
            </p>
          </div>

          {/* Project 3 - Jeeves */}
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-[4/3] mb-4">
              <Image
                src="/projects/Jeeves.png"
                alt="Jeeves Project"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Jeeves</h3>
            <p className="text-gray-600 text-base">
              AI-powered business automation platform
            </p>
          </div>

          {/* Project 4 - Staking Portal */}
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-[4/3] mb-4">
              <Image
                src="/projects/Staking-portal.png"
                alt="Staking Portal Project"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Staking Portal
            </h3>
            <p className="text-gray-600 text-base">
              Cryptocurrency staking and rewards management platform
            </p>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="container mx-auto px-6 py-24 max-w-2xl">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-sm font-medium text-gray-500 tracking-wider uppercase mb-6">
            MY WRITING
          </p>
          <h2 className="text-3xl font-medium text-gray-900 leading-tight tracking-tighter mb-6">
            Thoughts, insights, and lessons from the design trenches
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            I share what I&apos;ve learned about design, freelancing, and
            building products that people love.
          </p>
        </div>

        {/* Featured Blog Posts */}
        <div className="space-y-12">
          {/* Blog Post 1 */}
          <article className="group cursor-pointer">
            <a href="/blog/working-from-home-freelancer" className="block">
              <div className="space-y-4 group-hover:translate-y-[-2px] transition-transform duration-300">
                <time className="text-sm font-medium text-gray-500 tracking-wider uppercase">
                  MAR 24, 2025
                </time>
                <h3 className="text-xl font-semibold text-gray-900 leading-tight group-hover:text-black transition-colors duration-300">
                  Working from Home as a Freelancer: The Real Story
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Working from home as a freelance designer sounds dreamy—but
                  the reality is a mix of freedom, focus, and unexpected
                  challenges.
                </p>
              </div>
            </a>
          </article>

          {/* Blog Post 2 */}
          <article className="group cursor-pointer">
            <a href="/blog/improving-ui-ai-tools" className="block">
              <div className="space-y-4 group-hover:translate-y-[-2px] transition-transform duration-300">
                <time className="text-sm font-medium text-gray-500 tracking-wider uppercase">
                  FEB 24, 2025
                </time>
                <h3 className="text-xl font-semibold text-gray-900 leading-tight group-hover:text-black transition-colors duration-300">
                  Improving UI for AI-Powered Tools: Beyond the Textarea
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  AI tools should be intuitive, not frustrating. Let&apos;s
                  explore how structured inputs and adaptive UIs can improve
                  AI-powered tools.
                </p>
              </div>
            </a>
          </article>
        </div>

        {/* Read More Button */}
        <div className="mt-12 flex justify-center">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-8 py-4 rounded-full text-base font-medium hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 hover:scale-105"
          >
            Read More Articles
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="mx-auto px-6 py-24 container mt-20">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-sm font-medium text-gray-500 tracking-wider uppercase mb-6">
            CLIENT TESTIMONIALS
          </p>
          <h2 className="text-3xl font-medium text-gray-900 leading-tight tracking-tighter max-w-4xl">
            Here&apos;s what the people I partnered with say about our
            collaboration
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className=" space-y-12">
          {/* Testimonial 1 */}
          <div className="bg-white">
            <blockquote className="text-lg text-gray-900 leading-relaxed mb-8 max-w-5xl">
              &quot;I&apos;ve never seen anyone ship faster and with such insane
              quality.{' '}
              <span className="font-semibold">
                His attention to detail and creativity were unmatched.
              </span>{' '}
              The process was smooth, efficient, and quick. Couldn&apos;t be
              happier with the end result. Sahil is a must-hire!&quot;
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                <Image
                  src="/founders/tyler.png"
                  alt="Danny Postma"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Danny Postma</p>
                <p className="text-gray-600">Founder, HeadshotPro</p>
              </div>
            </div>
          </div>
        </div>

        {/* Read More Button */}
        <div className="mt-12 flex justify-center">
          <a
            href="/testimonials"
            className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-8 py-4 rounded-full text-base font-medium hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 hover:scale-105"
          >
            Read More Testimonials
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </section>

      {/* How Can I Help You Section */}
      <section className="container mx-auto px-6 py-16 max-w-2xl">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-base text-gray-600 mb-4">HOW CAN I HELP YOU</p>
          <h2 className="text-3xl font-semibold text-gray-900 leading-tight mb-4">
            I get hired to design, fix or scale SaaS products
          </h2>
        </div>

        {/* Services Grid */}
        <div className="space-y-6">
          {/* MVP Design for SaaS */}
          <div className="border border-gray-200 rounded-2xl p-6 hover:shadow-sm transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-purple-600"
                >
                  <rect
                    x="3"
                    y="4"
                    width="18"
                    height="12"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M7 8h6M7 12h4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
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
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-green-600"
                >
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
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
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-pink-600"
                >
                  <path
                    d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="9"
                    cy="7"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M23 21V19C23 17.1362 21.7252 15.5701 20 15.126"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M16 3.12598C17.7252 3.56992 19 5.13616 19 7C19 8.86384 17.7252 10.4301 16 10.874"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
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
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-blue-600"
                >
                  <path
                    d="M9 11H15M9 15H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L19.7071 9.70711C19.8946 9.89464 20 10.149 20 10.4142V19C20 20.1046 19.1046 21 18 21H17Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
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
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-yellow-600"
                >
                  <rect
                    x="3"
                    y="3"
                    width="6"
                    height="6"
                    rx="1"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <rect
                    x="15"
                    y="3"
                    width="6"
                    height="6"
                    rx="1"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <rect
                    x="3"
                    y="15"
                    width="6"
                    height="6"
                    rx="1"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <rect
                    x="15"
                    y="15"
                    width="6"
                    height="6"
                    rx="1"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
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

      {/* FAQ Section */}
      <section className="container mx-auto px-6 py-16 max-w-2xl">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-base text-gray-600 mb-4">SOME FAQS</p>
          <h2 className="text-3xl font-semibold text-gray-900 leading-tight mb-4">
            Here are some common questions I get.
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-12">
          {/* FAQ 1 */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              How can I hire you for a project?
            </h3>
            <p className="text-base text-gray-600 leading-relaxed">
              You can either fill out the contact form above or email me
              directly at iamsahilvhora@gmail.com. We&apos;ll discuss your needs
              and how I can help.
            </p>
          </div>

          {/* FAQ 2 */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              How quickly can I get started?
            </h3>
            <p className="text-base text-gray-600 leading-relaxed">
              I like to get started as soon as possible. My availability can
              vary throughout the year - send me an email with more information
              about your project to see if its a good fit.
            </p>
          </div>

          {/* FAQ 3 */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              We have wireframes, can you work with these?
            </h3>
            <p className="text-base text-gray-600 leading-relaxed">
              Absolutely! I&apos;ll utilize the wireframes as a foundation for
              the general content and structure and build out the visual design
              on top.
            </p>
          </div>

          {/* FAQ 4 */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              How long does a project take?
            </h3>
            <p className="text-base text-gray-600 leading-relaxed">
              Each project is different. Nonetheless, you can anticipate
              receiving updates on a daily basis throughout the creative
              process. Usually within the initial stages of a project, I
              typically require just one or two business days to present
              tangible progress.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="container mx-auto px-6 py-16 max-w-2xl">
        {/* Call to Action */}
        <div className="mb-16">
          <p className="text-base text-gray-600 mb-4">
            LET&apos;S WORK TOGETHER
          </p>
          <h2 className="text-2xl font-medium text-gray-900 leading-tight mb-8">
            Feel free to reach out to explore opportunities, discuss freelance
            projects, seek design advice, or just say hello.
          </h2>

          {/* Action Buttons */}
          <div className="flex gap-4 mb-16">
            <a
              href="/contact"
              className="bg-black text-white px-8 py-4 rounded-full text-base font-medium hover:bg-gray-800 transition-colors flex items-center gap-2"
            >
              Let&apos;s Work Together
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-full text-base font-medium hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 hover:scale-105">
              Copy Email
            </button>
          </div>
        </div>

        {/* Social Links */}
        <div className="space-y-2 mb-6 group/social">
          {/* Email */}
          <a
            href="mailto:amangoyal676@gmail.com"
            className="flex items-center justify-between group hover:bg-gray-50 -mx-4 px-4 py-3 rounded-lg transition-all duration-300 group-hover/social:opacity-100 group-hover/social:[&:not(:hover)]:opacity-40"
          >
            <div className="flex items-center gap-4">
              <div className="w-6 h-6 flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-gray-600"
                >
                  <path
                    d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <polyline
                    points="22,6 12,13 2,6"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <span className="text-lg font-medium text-gray-900">Email</span>
            </div>
            <span className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
              amangoyal676@gmail.com
            </span>
          </a>

          {/* X / Twitter */}
          <a
            href="https://twitter.com/amangoyal676"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between group hover:bg-gray-50 -mx-4 px-4 py-3 rounded-lg transition-all duration-300 group-hover/social:opacity-100 group-hover/social:[&:not(:hover)]:opacity-40"
          >
            <div className="flex items-center gap-4">
              <div className="w-6 h-6 flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-gray-600"
                >
                  <path
                    d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <span className="text-lg font-medium text-gray-900">
                X / Twitter
              </span>
            </div>
            <span className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
              BTS and design posts
            </span>
          </a>

          {/* Dribbble */}
          <a
            href="https://dribbble.com/amangoyal676"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between group hover:bg-gray-50 -mx-4 px-4 py-3 rounded-lg transition-all duration-300 group-hover/social:opacity-100 group-hover/social:[&:not(:hover)]:opacity-40"
          >
            <div className="flex items-center gap-4">
              <div className="w-6 h-6 flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-gray-600"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M8.56 2.75C4.37 6.03 2 10.83 2 16.15C2 17.38 2.18 18.58 2.5 19.72C4.08 16.65 8.75 13.5 15.97 13.5C18.69 13.5 21.02 14.07 22.5 14.9C21.95 11.13 19.58 7.93 16.19 6.15C15.17 8.45 13.14 10.06 10.75 10.06C9.04 10.06 7.5 9.15 6.44 7.68C7.27 5.02 8.5 3.5 8.56 2.75Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <span className="text-lg font-medium text-gray-900">
                Dribbble
              </span>
            </div>
            <span className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
              Visual timeline of my work
            </span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/amangoyal676"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between group hover:bg-gray-50 -mx-4 px-4 py-3 rounded-lg transition-all duration-300 group-hover/social:opacity-100 group-hover/social:[&:not(:hover)]:opacity-40"
          >
            <div className="flex items-center gap-4">
              <div className="w-6 h-6 flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-gray-600"
                >
                  <path
                    d="M16 8C18.5 8 20.5 10 20.5 12.5V21H17V13C17 11.5 16 10.5 14.5 10.5C13 10.5 12 11.5 12 13V21H8.5V8.5H12V10C12.8 9 14.1 8 16 8Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <rect
                    x="2"
                    y="9"
                    width="4"
                    height="12"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="4"
                    cy="4"
                    r="2"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <span className="text-lg font-medium text-gray-900">
                LinkedIn
              </span>
            </div>
            <span className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
              Work related background
            </span>
          </a>

          {/* Peerlist */}
          <a
            href="https://peerlist.io/amangoyal676"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between group hover:bg-gray-50 -mx-4 px-4 py-3 rounded-lg transition-all duration-300 group-hover/social:opacity-100 group-hover/social:[&:not(:hover)]:opacity-40"
          >
            <div className="flex items-center gap-4">
              <div className="w-6 h-6 flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-gray-600"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="3"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <span className="text-lg font-medium text-gray-900">
                Peerlist
              </span>
            </div>
            <span className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
              Design insights & experiences
            </span>
          </a>
        </div>

        {/* Footer Credits */}
        <div className="flex items-center justify-between pt-8 border-t border-gray-200">
          <div className="flex items-center gap-2 text-gray-600">
            <span>Built in Remote</span>
            <span>•</span>
            <span>© 2025 Aman Goyal</span>
          </div>
          <div className="text-gray-600 hover:text-gray-900 transition-colors duration-300 cursor-pointer">
            Changelog
          </div>
        </div>
      </footer>
    </>
  );
}
