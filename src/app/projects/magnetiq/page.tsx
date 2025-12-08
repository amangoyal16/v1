'use client';

// TODO: REVIEW AND UPDATE CASE STUDY CONTENT
// 1. Replace placeholder images with actual project artifacts (Dashboard, Token-gated Commerce, Engagement Graphs)
// 2. Verify specific metrics in 'Results & Impact' section
// 3. Confirm technical stack details

import Link from 'next/link';
import Image from 'next/image';
import { usePageAnimation, fadeInUp, fadeIn } from '@/hooks/usePageAnimation';
import { ArrowUpRightIcon, BackArrowIcon } from '@/components/Icons';

export default function MagnetiqProjectPage() {
  const isLoaded = usePageAnimation();

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-purple-100 selection:text-purple-900">
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
            <span className="text-purple-600">Web3 Product Design</span>
            <span>•</span>
            <span>Creator Economy</span>
            <span>•</span>
            <span>2021 - Present</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-gray-900 leading-[1.1]">
            MAGNETIQ: <br className="hidden md:block" /> Building Cult Brands{' '}
            <br className="hidden md:block" /> on the Blockchain
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl">
            A Web3-powered consumer platform that bridges the gap between
            creator influence and community ownership—delivering the power of
            blockchain with the simplicity of Web2.
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
                [Hero Image: MAGNETIQ Dashboard & Community Hub]
              </span>
            </div>
            {/* 
            <Image
              src="/projects/magnetiq-hero.png" 
              alt="MAGNETIQ Platform Interface"
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
            <p className="text-base font-medium">Product Designer</p>
            <p className="text-sm text-gray-500 mt-1">
              UX/UI, Design Strategy, Web3 Onboarding
            </p>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
              Timeline
            </h3>
            <p className="text-base font-medium">Ongoing</p>
            <p className="text-sm text-gray-500 mt-1">Started Early 2021</p>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
              Team
            </h3>
            <p className="text-base font-medium">Founding Team</p>
            <p className="text-sm text-gray-500 mt-1">Design + Engineering</p>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
              Stack
            </h3>
            <p className="text-base font-medium">Web3 / Blockchain</p>
            <p className="text-sm text-gray-500 mt-1">
              React, Solidity, Shopify API
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
            <h2 className="text-3xl font-bold mb-6">The Problem</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Web3 technologies offer incredible opportunities for verification,
              ownership, and community governance. However, the user experience
              is notoriously hostile. Wallets, gas fees, and seed phrases create
              a massive barrier to entry for the average consumer.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed bg-purple-50 p-6 rounded-xl border-l-4 border-purple-500 italic">
              &quot;Creators wanted to build &apos;cult-like&apos; loyalty using
              blockchain tech, but their fans didn&apos;t want to learn how to
              be crypto-traders just to buy a t-shirt.&quot;
            </p>
          </section>

          {/* Goals */}
          <section className={`mb-24 ${fadeInUp(isLoaded)}`}>
            <h2 className="text-3xl font-bold mb-8">Project Goals</h2>
            <ul className="space-y-6">
              {[
                {
                  title: 'Invisible Web3',
                  desc: 'Design an interface that feels like a standard Web2 app (Instagram/Shopify) while executing blockchain transactions in the background.',
                },
                {
                  title: 'Commerce-Based Community',
                  desc: 'Enable creators to sell customized items that double as digital access passes (utility NFTs) without using jargon.',
                },
                {
                  title: 'Verifiable Engagement',
                  desc: 'Create an "Engagement Engine" that tracks and rewards user interactions on-chain.',
                },
              ].map((goal, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-sm">
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

          {/* Research & Discovery */}
          <section className={`mb-24 ${fadeInUp(isLoaded)}`}>
            <h2 className="text-3xl font-bold mb-6">
              The &quot;Mullet&quot; Strategy
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              We adopted a philosophy I call the &quot;Mullet Strategy&quot;:{' '}
              <strong>Web2 in the front, Web3 in the back.</strong>
              Our research showed that users cared about the <em>
                benefits
              </em>{' '}
              of Web3 (reselling items, proving fandom) but hated the{' '}
              <em>process</em>.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-bold mb-2">Friction Point: Wallets</h4>
                <p className="text-sm text-gray-600">
                  <span className="text-red-500 font-medium">Problem:</span>{' '}
                  &quot;Connect Wallet&quot; buttons cause 90% drop-off for
                  non-crypto natives.
                  <br />
                  <span className="text-green-600 font-medium">
                    Solution:
                  </span>{' '}
                  Custodial wallets created via email login (Magic Link).
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-bold mb-2">Friction Point: Gas Fees</h4>
                <p className="text-sm text-gray-600">
                  <span className="text-red-500 font-medium">Problem:</span>{' '}
                  Paying for transactions is confusing.
                  <br />
                  <span className="text-green-600 font-medium">
                    Solution:
                  </span>{' '}
                  Gasless transactions (relayers) so users just see
                  &quot;Free&quot; or standard credit card checkout.
                </p>
              </div>
            </div>
          </section>

          {/* Solution & Design */}
          <section className={`mb-24 ${fadeInUp(isLoaded)}`}>
            <h2 className="text-3xl font-bold mb-8">The Solution</h2>

            <div className="mb-12">
              <h3 className="text-xl font-bold mb-4">1. Co-Lab Studio</h3>
              <p className="text-gray-700 mb-6">
                A drag-and-drop tool where creators can design customized
                merchandise. Behind the scenes, these items are minted as
                digital assets, proving authenticity and ownership history on
                the blockchain.
              </p>
              <div className="bg-gray-100 rounded-xl aspect-[16/10] flex items-center justify-center mb-4 text-gray-400 border border-dashed border-gray-300">
                [UI: Creator Customization Interface]
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-xl font-bold mb-4">
                2. The Engagement Engine
              </h3>
              <p className="text-gray-700 mb-6">
                We gamified brand loyalty. Users earn points (tokens) for
                actions like sharing content, attending events, or holding
                specific items. I designed the dashboard to look like a standard
                loyalty program, hiding the complex tokenomics.
              </p>
              <div className="bg-gray-100 rounded-xl aspect-[16/10] flex items-center justify-center mb-4 text-gray-400 border border-dashed border-gray-300">
                [UI: User Rewards Dashboard & Progress Tracking]
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-xl font-bold mb-4">
                3. Direct Engagement Hub
              </h3>
              <p className="text-gray-700 mb-6">
                A filtered feed where creators can reach their top holders
                directly, bypassing social media algorithms. This
                &quot;exclusive club&quot; feel was key to the &quot;Build a
                Cult&quot; value proposition.
              </p>
              <div className="bg-gray-100 rounded-xl aspect-[16/10] flex items-center justify-center mb-4 text-gray-400 border border-dashed border-gray-300">
                [UI: Community Feed & Token-Gated Content]
              </div>
            </div>
          </section>

          {/* Impact */}
          <section className={`mb-24 ${fadeInUp(isLoaded)}`}>
            <h2 className="text-3xl font-bold mb-8">Early Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6 border border-gray-100 rounded-2xl shadow-sm">
                <p className="text-4xl font-bold text-gray-900 mb-2">45%</p>
                <p className="text-gray-500 text-sm">
                  Participation Rate (Rollin Bagels Pilot)
                </p>
              </div>
              <div className="p-6 border border-gray-100 rounded-2xl shadow-sm">
                <p className="text-4xl font-bold text-gray-900 mb-2">40+</p>
                <p className="text-gray-500 text-sm">
                  Organic UGC Pieces Generated
                </p>
              </div>
              <div className="p-6 border border-gray-100 rounded-2xl shadow-sm">
                <p className="text-4xl font-bold text-gray-900 mb-2">0</p>
                <p className="text-gray-500 text-sm">
                  Wallets Manually Connected (Success!)
                </p>
              </div>
            </div>
          </section>

          {/* Learnings */}
          <section className={`mb-16 ${fadeInUp(isLoaded)}`}>
            <h2 className="text-2xl font-bold mb-4">Reflection</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              MAGNETIQ proved that{' '}
              <strong>technology should be invisible</strong>. The most
              successful Web3 products will be the ones where users don&apos;t
              even know they are using Web3. By abstracting away the complexity,
              we allowed creators to focus on what matters: building genuine
              connection.
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
