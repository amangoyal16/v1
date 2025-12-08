'use client';

// TODO: REVIEW AND UPDATE CASE STUDY CONTENT
// 1. Replace placeholder images with actual project artifacts (OTC Dashboard, Mobile App Screens, Admin Panel)
// 2. Verify specific metrics in 'Results & Impact' section
// 3. Confirm technical stack details

import Link from 'next/link';
import Image from 'next/image';
import { usePageAnimation, fadeInUp, fadeIn } from '@/hooks/usePageAnimation';
import { ArrowUpRightIcon, BackArrowIcon } from '@/components/Icons';

export default function MidChainsProjectPage() {
  const isLoaded = usePageAnimation();

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <main className="container mx-auto px-6 py-16 max-w-5xl">
        {/* Navigation */}
        <div
          className={`mb-12 ${fadeIn(isLoaded)}`}
          style={{ transitionDelay: '100ms' }}
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-black transition-colors group"
          >
            <BackArrowIcon
              width="16"
              height="16"
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span className="font-medium">All Projects</span>
          </Link>
        </div>

        {/* Hero Section */}
        <header
          className={`mb-20 ${fadeInUp(isLoaded)}`}
          style={{ transitionDelay: '200ms' }}
        >
          <div className="flex flex-wrap gap-3 text-sm font-medium tracking-wide uppercase text-gray-500 mb-6">
            <span className="text-indigo-600">FinTech Product Design</span>
            <span>•</span>
            <span>Institutional Crypto</span>
            <span>•</span>
            <span>2022 - 2023</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-gray-900 leading-[1.1]">
            MidChains: <br className="hidden md:block" /> Institutional-Grade{' '}
            <br className="hidden md:block" /> Crypto Trading
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl">
            Designing a fully regulated ecosystem (Web, Mobile, Admin) for
            high-net-worth individuals and institutions to trade digital assets
            securely.
          </p>
        </header>

        {/* Hero Image */}
        <div
          className={`mb-24 ${fadeInUp(isLoaded)}`}
          style={{ transitionDelay: '300ms' }}
        >
          <div className="relative overflow-hidden rounded-3xl bg-gray-50 aspect-[16/9] shadow-sm border border-gray-100">
            {/* TODO: Add actual project screenshot */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-slate-50">
              <span className="text-lg">
                [Hero Image: MidChains Trading Terminal & Mobile App]
              </span>
            </div>
            {/* 
            <Image
              src="/projects/midchains-hero.png" 
              alt="MidChains Platform Interface"
              fill
              className="object-cover"
              priority
            /> 
            */}
          </div>
        </div>

        {/* Project Metadata Grid */}
        <section
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 py-12 border-y border-gray-100 ${fadeInUp(
            isLoaded
          )}`}
          style={{ transitionDelay: '400ms' }}
        >
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
              My Role
            </h3>
            <p className="text-base font-medium">Lead Product Designer</p>
            <p className="text-sm text-gray-500 mt-1">
              Web, Mobile, & Admin Design
            </p>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
              Timeline
            </h3>
            <p className="text-base font-medium">10 Months</p>
            <p className="text-sm text-gray-500 mt-1">Full-Cycle Development</p>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
              Team
            </h3>
            <p className="text-base font-medium">Cross-Functional</p>
            <p className="text-sm text-gray-500 mt-1">PM, Devs, Compliance</p>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
              Platform
            </h3>
            <p className="text-base font-medium">Multi-Platform Ecosystem</p>
            <p className="text-sm text-gray-500 mt-1">
              iOS, Android, Web, Admin
            </p>
          </div>
        </section>

        {/* Case Study Content */}
        <article className="max-w-3xl mx-auto">
          {/* Problem Statement */}
          <section
            className={`mb-24 ${fadeInUp(isLoaded)}`}
            style={{ transitionDelay: '500ms' }}
          >
            <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Institutional investors and High Net Worth Individuals (HNWIs) in
              the Middle East lacked a regulated, secure platform to trade
              digital assets. Global exchanges were too complex or
              non-compliant, while local options lacked the sophistication of
              professional trading tools.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed bg-indigo-50 p-6 rounded-xl border-l-4 border-indigo-500 italic">
              &quot;Trust is our currency. We needed a design system that
              projected the stability of a Swiss bank with the speed of a crypto
              exchange.&quot;
            </p>
          </section>

          {/* Goals */}
          <section className={`mb-24 ${fadeInUp(isLoaded)}`}>
            <h2 className="text-3xl font-bold mb-8">Project Goals</h2>
            <ul className="space-y-6">
              {[
                {
                  title: 'Unified Ecosystem',
                  desc: 'Design a cohesive experience across three distinct platforms: a pro-trading Web App, a simplified Mobile App, and a robust Admin Dashboard.',
                },
                {
                  title: 'Regulatory Compliance',
                  desc: 'Integrate complex KYC/AML workflows (required by VARA) without destroying conversion rates.',
                },
                {
                  title: 'Institutional OTC',
                  desc: 'Build a bespoke "Request for Quote" (RFQ) system for large-block trades that avoids market slippage.',
                },
              ].map((goal, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-sm">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">
                      {goal.title}
                    </h4>
                    <p className="text-gray-600">{goal.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Strategy & Scope */}
          <section className={`mb-24 ${fadeInUp(isLoaded)}`}>
            <h2 className="text-3xl font-bold mb-6">Scope & Strategy</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Over 10 months, I led the design charge for the entire product
              suite. This wasn&apos;t just a reskin; it was building the
              foundational UX for a regulated financial institution.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-bold mb-2">The Mobile App</h4>
                <p className="text-sm text-gray-600">
                  Designed for on-the-go monitoring and quick execution. We
                  prioritized &quot;glanceability&quot; of portfolio value and
                  simplified the buy/sell flow to 3 taps.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-bold mb-2">The Admin Portal</h4>
                <p className="text-sm text-gray-600">
                  Often overlooked, the internal tools needed love too. I
                  designed the compliance dashboard that allows operations teams
                  to approve KYC documents 50% faster.
                </p>
              </div>
            </div>
          </section>

          {/* Solution & Design */}
          <section className={`mb-24 ${fadeInUp(isLoaded)}`}>
            <h2 className="text-3xl font-bold mb-8">The Solution</h2>

            <div className="mb-12">
              <h3 className="text-xl font-bold mb-4">
                1. The OTC Trading Desk
              </h3>
              <p className="text-gray-700 mb-6">
                For institutional clients moving millions, standard order books
                don&apos;t work. I designed a &quot;Request for Quote&quot;
                interface where users input their trade size and receive a
                locked-in price for 10 seconds, ensuring certainty of execution.
              </p>
              <div className="bg-gray-100 rounded-xl aspect-[16/10] flex items-center justify-center mb-4 text-gray-400 border border-dashed border-gray-300">
                [UI: OTC Request-for-Quote Interface]
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-xl font-bold mb-4">
                2. Seamless Onboarding (KYC)
              </h3>
              <p className="text-gray-700 mb-6">
                Compliance is heavy, but the UX shouldn&apos;t be. We broke the
                KYC process into bite-sized &quot;progressive disclosure&quot;
                steps, using clear progress indicators and auto-saving drafts to
                reduce abandonment.
              </p>
              <div className="bg-gray-100 rounded-xl aspect-[16/10] flex items-center justify-center mb-4 text-gray-400 border border-dashed border-gray-300">
                [UI: Mobile KYC Flow Steps]
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-xl font-bold mb-4">
                3. Developer Collaboration
              </h3>
              <p className="text-gray-700 mb-6">
                I didn&apos;t just hand off Figma files. I worked side-by-side
                with developers to build a shared component library (React/React
                Native), ensuring that the button verified on iOS looked exactly
                like the button on the Web Dashboard.
              </p>
              <div className="bg-gray-100 rounded-xl aspect-[16/10] flex items-center justify-center mb-4 text-gray-400 border border-dashed border-gray-300">
                [Image: Design System / Component Library Spec]
              </div>
            </div>
          </section>

          {/* Impact */}
          <section className={`mb-24 ${fadeInUp(isLoaded)}`}>
            <h2 className="text-3xl font-bold mb-8">Results & Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6 border border-gray-100 rounded-2xl shadow-sm">
                <p className="text-4xl font-bold text-gray-900 mb-2">3</p>
                <p className="text-gray-500 text-sm">
                  Platforms Launched (Web, Mobile, Admin)
                </p>
              </div>
              <div className="p-6 border border-gray-100 rounded-2xl shadow-sm">
                <p className="text-4xl font-bold text-gray-900 mb-2">50%</p>
                <p className="text-gray-500 text-sm">
                  Reduction in KYC Processing Time
                </p>
              </div>
              <div className="p-6 border border-gray-100 rounded-2xl shadow-sm">
                <p className="text-4xl font-bold text-gray-900 mb-2">VARA</p>
                <p className="text-gray-500 text-sm">
                  Fully Compliant UX Design
                </p>
              </div>
            </div>
          </section>

          {/* Learnings */}
          <section className={`mb-16 ${fadeInUp(isLoaded)}`}>
            <h2 className="text-2xl font-bold mb-4">Reflection</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Designing for MidChains taught me that in FinTech,{' '}
              <strong>trust is the ultimate UX feature</strong>. Every
              interaction, from the color palette to the speed of a confirmation
              animation, must reinforce reliability and security for high-value
              users.
            </p>
          </section>
        </article>

        {/* Footer Navigation */}
        <footer
          className={`mt-24 pt-12 border-t border-gray-100 ${fadeInUp(
            isLoaded
          )}`}
          style={{ transitionDelay: '600ms' }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Link
              href="/projects"
              className="group flex items-center gap-3 text-gray-500 hover:text-black transition-colors"
            >
              <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-black transition-colors">
                <BackArrowIcon width="14" height="14" />
              </div>
              <span className="font-medium">Back to All Projects</span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-transform hover:-translate-y-1"
            >
              Let&apos;s Build Something
              <ArrowUpRightIcon
                width="16"
                height="16"
                className="text-gray-400"
              />
            </Link>
          </div>
        </footer>
      </main>
    </div>
  );
}
