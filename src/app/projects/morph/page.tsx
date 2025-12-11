'use client';

// TODO: REVIEW AND UPDATE CASE STUDY CONTENT
// 1. Replace placeholder images with actual project artifacts (Triage Dashboard, Conversation Flow, Setup Config)
// 2. Verify specific metrics in 'Results & Impact' section
// 3. Confirm technical stack details

import Link from 'next/link';
import Image from 'next/image';
import { usePageAnimation, fadeInUp, fadeIn } from '@/hooks/usePageAnimation';
import { ArrowUpRightIcon, BackArrowIcon } from '@/components/Icons';

export default function MorphProjectPage() {
  const isLoaded = usePageAnimation();

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-teal-100 selection:text-teal-900">
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
            <span className="text-teal-600">SaaS Product Design</span>
            <span>•</span>
            <span>AI & Telephony</span>
            <span>•</span>
            <span>2023 - 2024</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-gray-900 leading-[1.1]">
            Morph: <br className="hidden md:block" /> AI Triage for{' '}
            <br className="hidden md:block" /> Critical Response
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl">
            An intelligent tele-messaging platform that routes emergency and
            non-emergency queries across SMS, WhatsApp, and Voice using
            context-aware AI.
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
                [Hero Image: Morph Operator Dashboard & Live Triage]
              </span>
            </div>
            {/* 
            <Image
              src="/projects/morph-hero.png" 
              alt="Morph Platform Interface"
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
              UX Research, UI Design, Prototyping
            </p>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
              Collaboration
            </h3>
            <p className="text-base font-medium">Direct w/ Founder</p>
            <p className="text-sm text-gray-500 mt-1">Strategic Partnership</p>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
              Sector
            </h3>
            <p className="text-base font-medium">Healthcare / Ops</p>
            <p className="text-sm text-gray-500 mt-1">US Market Focus</p>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
              Tech Stack
            </h3>
            <p className="text-base font-medium">Serverless AI</p>
            <p className="text-sm text-gray-500 mt-1">
              Twilio, AWS Lambda, OpenAI
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
              High-volume service providers in the US—particularly clinics and
              emergency support centers—are drowning in noise. Critical
              emergency calls often get buried under a mountain of routine
              administrative queries (scheduling, prescription checks), leading
              to dangerous delays in response times.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed bg-teal-50 p-6 rounded-xl border-l-4 border-teal-500 italic">
              &quot;When a patient calls about chest pain, they can&apos;t wait
              behind ten people asking about office hours. We needed a digital
              triage nurse that never sleeps.&quot;
            </p>
          </section>

          {/* Goals */}
          <section className={`mb-24 ${fadeInUp(isLoaded)}`}>
            <h2 className="text-3xl font-bold mb-8">Project Goals</h2>
            <ul className="space-y-6">
              {[
                {
                  title: 'Automated Triage',
                  desc: 'Develop an AI system capable of understanding context and sentiment to instantly distinguish between emergencies and routine tasks.',
                },
                {
                  title: 'Omnichannel Unity',
                  desc: 'Create a unified inbox that aggregates SMS, Voice transcripts, and WhatsApp messages into a single, prioritized queue.',
                },
                {
                  title: 'Workflow Flexibility',
                  desc: 'Design a "No-Code" workflow builder allowing different clinics to define their own routing logic and automated responses.',
                },
              ].map((goal, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-sm">
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
              Working with Greg (Co-Founder)
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Collaborating closely with the founder, we analyzed call logs from
              pilot clinics. We discovered that{' '}
              <strong>
                60% of inbound traffic could be resolved automatically
              </strong>{' '}
              if the system understood the intent (e.g., &quot;When is my
              appointment?&quot;).
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-bold mb-2">Technical Constraints</h4>
                <p className="text-sm text-gray-600">
                  We leveraged <strong>Twilio Webhooks</strong> and{' '}
                  <strong>AWS Lambda</strong> to process messages in real-time.
                  The design had to account for the latency of AI processing,
                  using optimistic UI states to keep the interface snappy.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-bold mb-2">Safety First</h4>
                <p className="text-sm text-gray-600">
                  In healthcare, false negatives are unacceptable. I designed a
                  &quot;Human Handoff&quot; protocol where any ambiguous query
                  is immediately flagged for manual review with a high-priority
                  alert.
                </p>
              </div>
            </div>
          </section>

          {/* Solution & Design */}
          <section className={`mb-24 ${fadeInUp(isLoaded)}`}>
            <h2 className="text-3xl font-bold mb-8">The Solution</h2>

            <div className="mb-12">
              <h3 className="text-xl font-bold mb-4">
                1. The Smart Triage Dashboard
              </h3>
              <p className="text-gray-700 mb-6">
                A prioritized inbox that sorts conversations by urgency, not
                just timestamp. Emergency flags are visual and prominent
                (red/pulsing), while completed automated tasks are archived
                silently.
              </p>
              <div className="bg-gray-100 rounded-xl aspect-[16/10] flex items-center justify-center mb-4 text-gray-400 border border-dashed border-gray-300">
                [UI: Priority Inbox with Sentiment Analysis Tags]
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-xl font-bold mb-4">
                2. Dynamic Workflow Builder
              </h3>
              <p className="text-gray-700 mb-6">
                Clinics operate differently. I designed a visual flow editor
                where admins can upload their specific datasets (e.g.,
                appointment schedules, FAQs) and define rules. &quot;If
                [Prescription], Check [Database], Reply [Status].&quot;
              </p>
              <div className="bg-gray-100 rounded-xl aspect-[16/10] flex items-center justify-center mb-4 text-gray-400 border border-dashed border-gray-300">
                [UI: Visual Logic/Flow Builder for AI Responses]
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-xl font-bold mb-4">3. Omnichannel Context</h3>
              <p className="text-gray-700 mb-6">
                A patient might call in the morning and text in the afternoon.
                We unified these threads so the AI (and the human operator) has
                the full context history across SMS, Voice, and WhatsApp.
              </p>
              <div className="bg-gray-100 rounded-xl aspect-[16/10] flex items-center justify-center mb-4 text-gray-400 border border-dashed border-gray-300">
                [UI: Patient Profile & Unified Conversation History]
              </div>
            </div>
          </section>

          {/* Impact */}
          <section className={`mb-24 ${fadeInUp(isLoaded)}`}>
            <h2 className="text-3xl font-bold mb-8">Results & Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6 border border-gray-100 rounded-2xl shadow-sm">
                <p className="text-4xl font-bold text-gray-900 mb-2">70%</p>
                <p className="text-gray-500 text-sm">
                  Reduction in Admin Call Volume
                </p>
              </div>
              <div className="p-6 border border-gray-100 rounded-2xl shadow-sm">
                <p className="text-4xl font-bold text-gray-900 mb-2">
                  &lt;1min
                </p>
                <p className="text-gray-500 text-sm">
                  Avg. Response Time for Emergencies
                </p>
              </div>
              <div className="p-6 border border-gray-100 rounded-2xl shadow-sm">
                <p className="text-4xl font-bold text-gray-900 mb-2">99%</p>
                <p className="text-gray-500 text-sm">Routing Accuracy</p>
              </div>
            </div>
          </section>

          {/* Learnings */}
          <section className={`mb-16 ${fadeInUp(isLoaded)}`}>
            <h2 className="text-2xl font-bold mb-4">Reflection</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Designing Morph highlighted that{' '}
              <strong>
                automation isn&apos;t about replacing humans, but empowering
                them.
              </strong>
              By clearing the noise of routine queries, we allowed healthcare
              professionals to focus entirely on the patients who needed them
              most.
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
