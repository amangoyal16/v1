'use client';

// TODO: REVIEW AND UPDATE CASE STUDY CONTENT
// 1. Replace placeholder images with actual project artifacts (Extension Popup, Rewards Dashboard, ZK Flow Diagram)
// 2. Verify specific metrics in 'Results & Impact' section
// 3. Confirm technical stack details

import Link from 'next/link';
import Image from 'next/image';
import { usePageAnimation, fadeInUp, fadeIn } from '@/hooks/usePageAnimation';
import { ArrowUpRightIcon, BackArrowIcon } from '@/components/Icons';

export default function HiveProjectPage() {
  const isLoaded = usePageAnimation();

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-yellow-100 selection:text-yellow-900">
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
            <span className="text-yellow-600">Web3 Product Design</span>
            <span>•</span>
            <span>Data Sovereignty</span>
            <span>•</span>
            <span>2024</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-gray-900 leading-[1.1]">
            Hive: <br className="hidden md:block" /> Own Your Data,{' '}
            <br className="hidden md:block" /> Earn Your Worth
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl">
            A privacy-first Chrome Extension powered by Polybase and ZK-proofs
            that enables users to monetize their browsing data directly with
            brands—without compromising their identity.
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
                [Hero Image: Hive Extension Popup & Data Dashboard]
              </span>
            </div>
            {/* 
            <Image
              src="/projects/hive-hero.png" 
              alt="Hive Platform Interface"
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
              UX/UI, Extension Design
            </p>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
              Timeline
            </h3>
            <p className="text-base font-medium">6 Months</p>
            <p className="text-sm text-gray-500 mt-1">Concept to Beta</p>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
              Team
            </h3>
            <p className="text-base font-medium">3 Engineers, 1 PM</p>
            <p className="text-sm text-gray-500 mt-1">Web3 Startup</p>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
              Tech Stack
            </h3>
            <p className="text-base font-medium">Polybase, ZK-Snarks</p>
            <p className="text-sm text-gray-500 mt-1">Chrome Ext, React</p>
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
              The current internet is built on data harvesting. Tech giants
              track every click and sell that data to advertisers for billions,
              while the user—the source of that value—gets nothing but privacy
              violations and spam.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-500 italic">
              &quot;Users are the product. We wanted to flip the script and make
              users the *partners*, giving them control over what they share and
              paying them for it.&quot;
            </p>
          </section>

          {/* Goals */}
          <section className={`mb-24 ${fadeInUp(isLoaded)}`}>
            <h2 className="text-3xl font-bold mb-8">Project Goals</h2>
            <ul className="space-y-6">
              {[
                {
                  title: 'Data Sovereignty',
                  desc: 'Build a system where users own their data encrypted on a decentralized database (Polybase), not on our servers.',
                },
                {
                  title: 'Privacy-Preserving Targeting',
                  desc: 'Enable brands to target specific user personas using Zero-Knowledge (ZK) proofs without ever revealing individual identities.',
                },
                {
                  title: 'Value Redistribution',
                  desc: 'Create a gamified economy where the ad budget brands save on middlemen goes directly to the users.',
                },
              ].map((goal, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-100 text-yellow-700 flex items-center justify-center font-bold text-sm">
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
              The &quot;Glass Box&quot; Concept
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Trust was our biggest hurdle. Users are skeptical of any tool that
              asks for data. We designed around the concept of a &quot;Glass
              Box&quot;—total transparency.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-bold mb-2">Insight 1: Control</h4>
                <p className="text-sm text-gray-600">
                  Users need a &quot;Kill Switch.&quot; I designed a prominent
                  toggle in the extension to instantly stop data collection,
                  giving users a sense of safety and control.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-bold mb-2">Insight 2: Visibility</h4>
                <p className="text-sm text-gray-600">
                  We visualized the data being stored in real-time. Instead of a
                  hidden database, users see a &quot;Data Vault&quot; UI showing
                  exactly what tags (e.g., &quot;Interested in Sneakers&quot;)
                  were generated.
                </p>
              </div>
            </div>
          </section>

          {/* Solution & Design */}
          <section className={`mb-24 ${fadeInUp(isLoaded)}`}>
            <h2 className="text-3xl font-bold mb-8">The Solution</h2>

            <div className="mb-12">
              <h3 className="text-xl font-bold mb-4">
                1. The Chrome Extension
              </h3>
              <p className="text-gray-700 mb-6">
                The primary touchpoint. It passively analyzes browsing behavior
                (locally) to generate interest tags. I kept the UI minimal,
                focusing on the &quot;Active/Paused&quot; status and daily
                earnings ticker.
              </p>
              <div className="bg-gray-100 rounded-xl aspect-[16/10] flex items-center justify-center mb-4 text-gray-400 border border-dashed border-gray-300">
                [UI: Extension Popup & Status Toggle]
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-xl font-bold mb-4">
                2. The Data Vault (Polybase Integration)
              </h3>
              <p className="text-gray-700 mb-6">
                This is where the Web3 magic happens. Users can view their
                Polybase record. I designed a friendly interface over the raw
                database, allowing users to delete specific data points they
                don&apos;t want to share.
              </p>
              <div className="bg-gray-100 rounded-xl aspect-[16/10] flex items-center justify-center mb-4 text-gray-400 border border-dashed border-gray-300">
                [UI: Personal Data Vault & Privacy Controls]
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-xl font-bold mb-4">
                3. Gamified Rewards System
              </h3>
              <p className="text-gray-700 mb-6">
                To encourage participation, we introduced a tier system. As
                users share high-value data categories (e.g., purchase intent
                vs. general browsing), they level up to earn higher APY on their
                data dividends.
              </p>
              <div className="bg-gray-100 rounded-xl aspect-[16/10] flex items-center justify-center mb-4 text-gray-400 border border-dashed border-gray-300">
                [UI: Rewards Tier Progress & Earnings Graph]
              </div>
            </div>
          </section>

          {/* Impact */}
          <section className={`mb-24 ${fadeInUp(isLoaded)}`}>
            <h2 className="text-3xl font-bold mb-8">Results & Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6 border border-gray-100 rounded-2xl shadow-sm">
                <p className="text-4xl font-bold text-gray-900 mb-2">10k+</p>
                <p className="text-gray-500 text-sm">Early Beta Signups</p>
              </div>
              <div className="p-6 border border-gray-100 rounded-2xl shadow-sm">
                <p className="text-4xl font-bold text-gray-900 mb-2">100%</p>
                <p className="text-gray-500 text-sm">User Data Ownership</p>
              </div>
              <div className="p-6 border border-gray-100 rounded-2xl shadow-sm">
                <p className="text-4xl font-bold text-gray-900 mb-2">3x</p>
                <p className="text-gray-500 text-sm">
                  Brand Engagement vs Traditional Ads
                </p>
              </div>
            </div>
          </section>

          {/* Learnings */}
          <section className={`mb-16 ${fadeInUp(isLoaded)}`}>
            <h2 className="text-2xl font-bold mb-4">Reflection</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Hive taught me that privacy isn&apos;t just about hiding data;
              it&apos;s about <strong>agency</strong>. Users are willing to
              share data if they understand <em>what</em> they are sharing,{' '}
              <em>who</em> gets it, and <em>what</em> they get in return.
              Transparent design is the key to unlocking the zero-party data
              economy.
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
