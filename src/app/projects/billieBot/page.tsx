'use client';

// TODO: REVIEW AND UPDATE CASE STUDY CONTENT
// 1. Add specific visuals for BillieBot (Chat interface, Safety filters)
// 2. Expand on the 'Trust & Safety' design patterns
// 3. Detail the 'Campus Rollout' strategy

import Link from 'next/link';
import Image from 'next/image';
import { usePageAnimation, fadeInUp, fadeIn } from '@/hooks/usePageAnimation';
import { ArrowUpRightIcon, BackArrowIcon } from '@/components/Icons';

export default function BillieBotProjectPage() {
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
            <span className="text-blue-600">AI & Wellbeing</span>
            <span>•</span>
            <span>mental Health</span>
            <span>•</span>
            <span>2024</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-gray-900 leading-[1.1]">
            BILLIEBOT: <br className="hidden md:block" /> AI Companion for
            <br className="hidden md:block" /> Student Wellbeing
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl">
            An AI-powered companion supporting student mental health through anonymous, accessible support and safety-first conversational design.
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
                 [Hero Image: BillieBot Chat Interface & Safety Check]
               </span>
             </div>
             {/*
            <Image
              src="/projects/billiebot.png"
              alt="BillieBot Interface"
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
            <p className="text-base font-medium">Head of Product Design</p>
            <p className="text-sm text-gray-500 mt-1">
              UX, Conversational Design
            </p>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
              Impact
            </h3>
            <p className="text-base font-medium">15+ US Campuses</p>
            <p className="text-sm text-gray-500 mt-1">Student Adoption</p>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
              Speed
            </h3>
            <p className="text-base font-medium">3 Months</p>
            <p className="text-sm text-gray-500 mt-1">
              MVP to V2 Transition
            </p>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
              Tech
            </h3>
            <p className="text-base font-medium">GenAI</p>
            <p className="text-sm text-gray-500 mt-1">Next.js, OpenAI, Postgres</p>
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
              Student mental health services are overwhelmed. Wait times for counselors can be weeks long. Students needed an immediate, judgment-free outlet for low-acuity stress and anxiety, available 24/7.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500 italic">
              &quot;The goal was not to replace therapy, but to bridge the gap. We needed to build trust with a generation that is skepticism of corporate &apos;wellness&apos; tools.&quot;
            </p>
          </section>

          {/* Goals */}
          <section className={`mb-24 ${fadeInUp(isLoaded)}`}>
            <h2 className="text-3xl font-bold mb-8">Design Goals</h2>
            <div className="space-y-6">
                 <div className="flex gap-4 items-start">
                   <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">1</div>
                   <div>
                     <h4 className="text-lg font-bold text-gray-900">Psychological Safety</h4>
                     <p className="text-gray-600">Design an onboarding feeling that emphasizes anonymity and data privacy above all else.</p>
                   </div>
                 </div>
                 <div className="flex gap-4 items-start">
                   <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">2</div>
                   <div>
                     <h4 className="text-lg font-bold text-gray-900">Conversational Warmth</h4>
                     <p className="text-gray-600">Fine-tune the AI persona to be empathetic but not clinical, avoiding &quot;therapist-speak&quot;.</p>
                   </div>
                 </div>
            </div>
          </section>

          {/* Solution */}
          <section className={`mb-24 ${fadeInUp(isLoaded)}`}>
            <h2 className="text-3xl font-bold mb-8">The Solution</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
               We created BillieBot, an AI companion living primarily via SMS and a lightweight web app. The interface is intentionally minimal to reduce cognitive load during high-stress moments.
            </p>
             <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-100 rounded-xl aspect-[9/16] flex items-center justify-center text-gray-400 text-center p-4 border border-dashed border-gray-300">
                  [Mobile view: Onboarding & Mood Check-in]
                </div>
                <div className="bg-gray-100 rounded-xl aspect-[9/16] flex items-center justify-center text-gray-400 text-center p-4 border border-dashed border-gray-300">
                   [Mobile view: Empathetic Chat Response]
                </div>
             </div>
             <p className="text-gray-700 mb-6 font-medium">Safety Guardrails</p>
             <p className="text-gray-700 mb-6">
               Critical to the product was the &quot;SOS&quot; logic. If the AI detects intent of self-harm, the UI immediately shifts to crisis mode, offering direct connection to campus safety or national hotlines.
             </p>
          </section>

          {/* Impact */}
          <section className={`mb-24 ${fadeInUp(isLoaded)}`}>
            <h2 className="text-3xl font-bold mb-8">Impact</h2>
             <p className="text-lg text-gray-700 leading-relaxed mb-8">
               Launched across 15+ campuses, BillieBot has handled thousands of conversations, providing a critical buffer for overwhelmed campus counseling centers.
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
