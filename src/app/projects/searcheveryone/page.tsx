'use client';

// TODO: REVIEW AND UPDATE CASE STUDY CONTENT
// 1. Replace placeholder images with actual project artifacts (Dashboard, Journey Builder, Profile View)
// 2. Verify specific metrics in 'Results & Impact' section
// 3. Confirm technical stack details

import Link from 'next/link';
import Image from 'next/image';
import { usePageAnimation, fadeInUp, fadeIn } from '@/hooks/usePageAnimation';
import { ArrowUpRightIcon, BackArrowIcon } from '@/components/Icons';

export default function SearchEveryoneProjectPage() {
  const isLoaded = usePageAnimation();

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100 selection:text-blue-900">
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
            <span className="text-blue-600">SaaS Product Design</span>
            <span>•</span>
            <span>Recruitment Tech</span>
            <span>•</span>
            <span>2023 - 2024</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-gray-900 leading-[1.1]">
            Search Everyone: <br className="hidden md:block" /> Intelligent
            Legal Recruiting
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl">
            A comprehensive recruitment platform that automates the sourcing and
            engagement of legal professionals through public record aggregation
            and customizable hiring journeys.
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
                [Hero Image: Search Everyone Dashboard Interface]
              </span>
            </div>
            {/* 
            <Image
              src="/projects/searcheveryone-hero.png" 
              alt="Search Everyone Platform Interface"
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
            <p className="text-base font-medium">Senior Product Designer</p>
            <p className="text-sm text-gray-500 mt-1">
              End-to-End Design, Design Ops
            </p>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
              Timeline
            </h3>
            <p className="text-base font-medium">15 Months</p>
            <p className="text-sm text-gray-500 mt-1">Long-term Engagement</p>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
              Team
            </h3>
            <p className="text-base font-medium">CPO, Project Manager</p>
            <p className="text-sm text-gray-500 mt-1">+ Engineering Team</p>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
              Platform
            </h3>
            <p className="text-base font-medium">Web Application (SaaS)</p>
            <p className="text-sm text-gray-500 mt-1">B2B Enterprise</p>
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
              Legal recruitment is a high-stakes, high-touch industry that
              suffers from data fragmentation. Recruiters spend countless hours
              manually cross-referencing public records to find qualified
              lawyers, then struggle to manage personalized outreach campaigns
              across email and LinkedIn.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500 italic">
              &quot;We needed to turn the internet into a structured database of
              legal talent and give recruiters a &apos;command center&apos; to
              manage the entire hiring lifecycle.&quot;
            </p>
          </section>

          {/* Goals */}
          <section className={`mb-24 ${fadeInUp(isLoaded)}`}>
            <h2 className="text-3xl font-bold mb-8">Project Goals</h2>
            <ul className="space-y-6">
              {[
                {
                  title: 'Automate Sourcing',
                  desc: 'Scrape and aggregate public records to build comprehensive lawyer profiles automatically.',
                },
                {
                  title: 'Custom Hiring Journeys',
                  desc: 'Build a flexible workflow engine allowing hiring managers to design custom outreach sequences.',
                },
                {
                  title: 'Unified Engagement',
                  desc: 'Seamlessly integrate email and LinkedIn automation into a single dashboard.',
                },
              ].map((goal, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">
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
            <h2 className="text-3xl font-bold mb-6">Discovery & Strategy</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Working directly with the CPO and Project Manager, we identified
              that a &quot;one-size-fits-all&quot; approach wouldn&apos;t work
              for top-tier legal recruiting. Hiring managers needed granular
              control over their criteria and communication style.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-bold mb-2">The Data Challenge</h4>
                <p className="text-sm text-gray-600">
                  Structuring unstructured data from across the web into a
                  clean, searchable UI was our primary UX hurdle.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-bold mb-2">Trust & Branding</h4>
                <p className="text-sm text-gray-600">
                  Recruiters needed outreach to look 100% native to their firm.
                  The platform had to support white-labeling with company logos
                  and custom domains.
                </p>
              </div>
            </div>
          </section>

          {/* Solution & Design */}
          <section className={`mb-24 ${fadeInUp(isLoaded)}`}>
            <h2 className="text-3xl font-bold mb-8">The Solution</h2>

            <div className="mb-12">
              <h3 className="text-xl font-bold mb-4">
                1. The Smart Sourcing Engine
              </h3>
              <p className="text-gray-700 mb-6">
                I designed a powerful filtering interface that allows recruiters
                to query our aggregated database. Users can filter by
                jurisdiction, practice area, and experience, instantly
                generating a list of qualified candidates.
              </p>
              <div className="bg-gray-100 rounded-xl aspect-[16/10] flex items-center justify-center mb-4 text-gray-400 border border-dashed border-gray-300">
                [UI: Advanced Search Filters & Candidate List]
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-xl font-bold mb-4">2. Journey Builder</h3>
              <p className="text-gray-700 mb-6">
                The heart of the platform. A visual workflow editor where hiring
                managers can drag-and-drop actions (Send Email, LinkedIn
                Connection, Wait 3 Days) to create automated hiring journeys.
              </p>
              <div className="bg-gray-100 rounded-xl aspect-[16/10] flex items-center justify-center mb-4 text-gray-400 border border-dashed border-gray-300">
                [UI: Visual Workflow/Journey Editor]
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-xl font-bold mb-4">
                3. Automated Engagement Dashboard
              </h3>
              <p className="text-gray-700 mb-6">
                A unified inbox and dashboard that tracks every interaction. It
                updates in real-time as candidates open emails or accept
                LinkedIn requests, giving recruiters a clear view of their
                pipeline.
              </p>
              <div className="bg-gray-100 rounded-xl aspect-[16/10] flex items-center justify-center mb-4 text-gray-400 border border-dashed border-gray-300">
                [UI: Analytics Dashboard & Activity Feed]
              </div>
            </div>
          </section>

          {/* Design Ops & Collaboration */}
          <section className={`mb-24 ${fadeInUp(isLoaded)}`}>
            <h2 className="text-3xl font-bold mb-6">
              Design Ops & Collaboration
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Over the 15-month engagement, I focused heavily on bridging the
              gap between design and engineering.
            </p>
            <div className="bg-slate-900 text-gray-300 p-8 rounded-xl font-mono text-sm">
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-blue-400 shrink-0">01.</span>
                  <span>
                    Established a token-based design system in Figma to match
                    CSS variables, ensuring 1:1 implementation.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 shrink-0">02.</span>
                  <span>
                    Created interactive prototypes for complex &quot;Journey
                    Builder&quot; interactions to remove ambiguity for
                    developers.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 shrink-0">03.</span>
                  <span>
                    Implemented regular design QA sessions before every sprint
                    release.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Impact */}
          <section className={`mb-24 ${fadeInUp(isLoaded)}`}>
            <h2 className="text-3xl font-bold mb-8">Results & Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6 border border-gray-100 rounded-2xl shadow-sm">
                <p className="text-4xl font-bold text-gray-900 mb-2">2x</p>
                <p className="text-gray-500 text-sm">Faster sourcing speed</p>
              </div>
              <div className="p-6 border border-gray-100 rounded-2xl shadow-sm">
                <p className="text-4xl font-bold text-gray-900 mb-2">30%</p>
                <p className="text-gray-500 text-sm">
                  Increase in response rates
                </p>
              </div>
              <div className="p-6 border border-gray-100 rounded-2xl shadow-sm">
                <p className="text-4xl font-bold text-gray-900 mb-2">100%</p>
                <p className="text-gray-500 text-sm">Design-to-Dev Match</p>
              </div>
            </div>
          </section>

          {/* Learnings */}
          <section className={`mb-16 ${fadeInUp(isLoaded)}`}>
            <h2 className="text-2xl font-bold mb-4">Reflection</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Leading the design for Search Everyone taught me that in B2B
              tools, <strong>flexibility is a feature</strong>. By empowering
              recruiters to build their own workflows rather than forcing a
              standard process, we built a tool that adapted to them, not the
              other way around.
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
