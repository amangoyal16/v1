'use client';

// TODO: REVIEW AND UPDATE CASE STUDY CONTENT
// 1. Replace placeholder images with actual project artifacts (Learning Dashboard, Pin Design, Architecture Diagram)
// 2. Verify specific metrics in 'Results & Impact' section
// 3. Confirm technical stack details

import Link from 'next/link';
import Image from 'next/image';
import { usePageAnimation, fadeInUp, fadeIn } from '@/hooks/usePageAnimation';
import { ArrowUpRightIcon, BackArrowIcon } from '@/components/Icons';

export default function ShiseidoProjectPage() {
  const isLoaded = usePageAnimation();

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-red-100 selection:text-red-900">
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
            <span className="text-red-600">Technical Product Management</span>
            <span>•</span>
            <span>Enterprise Web3</span>
            <span>•</span>
            <span>2023</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-gray-900 leading-[1.1]">
            Shiseido: <br className="hidden md:block" /> Future Beauty Academy
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl">
            An internal Web3 e-learning platform empowering Shiseido employees
            to master blockchain technology through gamified education and
            &quot;Physical&quot; rewards.
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
                [Hero Image: Shiseido Learning Dashboard & Pin Collection]
              </span>
            </div>
            {/* 
            <Image
              src="/projects/shiseido-hero.png" 
              alt="Shiseido Platform Interface"
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
            <p className="text-base font-medium">Technical Product Manager</p>
            <p className="text-sm text-gray-500 mt-1">
              Architecture, Design Strategy
            </p>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
              Timeline
            </h3>
            <p className="text-base font-medium">6 Months</p>
            <p className="text-sm text-gray-500 mt-1">Consulting Engagement</p>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
              Audience
            </h3>
            <p className="text-base font-medium">Internal Employees</p>
            <p className="text-sm text-gray-500 mt-1">Global Workforce</p>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
              Stack
            </h3>
            <p className="text-base font-medium">SSO & Web3 Auth</p>
            <p className="text-sm text-gray-500 mt-1">AWS, Polygon, Next.js</p>
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
              Shiseido, a global leader in beauty, wanted to upskill its
              workforce on emerging Web3 technologies. However, explaining
              blockchain concepts abstractly led to low retention. They needed
              an immersive way to *teach* Web3 by *using* Web3.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed bg-red-50 p-6 rounded-xl border-l-4 border-red-500 italic">
              &quot;We didn&apos;t just want a lecture series. We wanted a
              hands-on platform where completing a lesson on NFTs actually
              results in earning one.&quot;
            </p>
          </section>

          {/* Goals */}
          <section className={`mb-24 ${fadeInUp(isLoaded)}`}>
            <h2 className="text-3xl font-bold mb-8">Project Goals</h2>
            <ul className="space-y-6">
              {[
                {
                  title: 'Secure Corporate Access',
                  desc: 'Integrate existing corporate SSO (Shiseido Email) with Web3 wallet generation seamlessly.',
                },
                {
                  title: 'Gamified Learning',
                  desc: 'Design interactive modules that reward progress with verifiable digital credentials.',
                },
                {
                  title: 'Phygital Rewards',
                  desc: 'Bridge the digital/physical divide by awarding exclusive physical pins upon course completion.',
                },
              ].map((goal, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 text-red-700 flex items-center justify-center font-bold text-sm">
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

          {/* Technical Strategy */}
          <section className={`mb-24 ${fadeInUp(isLoaded)}`}>
            <h2 className="text-3xl font-bold mb-6">Technical Strategy</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              As the Technical Product Manager, my primary responsibility was
              bridging the gap between Shiseido&apos;s enterprise security
              requirements and the open nature of public blockchains.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-bold mb-2">
                  Architecture Decision: Hybrid Auth
                </h4>
                <p className="text-sm text-gray-600">
                  We selected a hybrid approach. Users log in via{' '}
                  <strong>Azure AD</strong> (standard corporate email), which
                  triggers a backend process to generate a non-custodial wallet
                  associated with their employee ID.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-bold mb-2">Cloud Provider: AWS</h4>
                <p className="text-sm text-gray-600">
                  I led the selection of AWS for our infrastructure due to its
                  robust Key Management Service (KMS), which was critical for
                  securing the &quot;minting authority&quot; private keys.
                </p>
              </div>
            </div>
          </section>

          {/* Solution & Design */}
          <section className={`mb-24 ${fadeInUp(isLoaded)}`}>
            <h2 className="text-3xl font-bold mb-8">The Solution</h2>

            <div className="mb-12">
              <h3 className="text-xl font-bold mb-4">1. The Employee Portal</h3>
              <p className="text-gray-700 mb-6">
                A sleek, branded dashboard where employees can view available
                courses. The UI was designed to feel familiar (like corporate
                training tools) but with a &quot;futuristic&quot; aesthetic to
                signal innovation.
              </p>
              <div className="bg-gray-100 rounded-xl aspect-[16/10] flex items-center justify-center mb-4 text-gray-400 border border-dashed border-gray-300">
                [UI: Course Catalog & Progress Dashboard]
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-xl font-bold mb-4">
                2. The &quot;Phygital&quot; Redemption Flow
              </h3>
              <p className="text-gray-700 mb-6">
                This was the core innovation. Upon 100% completion, a smart
                contract mints a &quot;Certificate NFT.&quot; This NFT acts as a
                &quot;token-gate,&quot; unlocking a form where users input their
                office address to receive the physical pin.
              </p>
              <div className="bg-gray-100 rounded-xl aspect-[16/10] flex items-center justify-center mb-4 text-gray-400 border border-dashed border-gray-300">
                [Flow Diagram: NFT Mint -&gt; Physical Redemption]
              </div>
            </div>
          </section>

          {/* Impact */}
          <section className={`mb-24 ${fadeInUp(isLoaded)}`}>
            <h2 className="text-3xl font-bold mb-8">Results & Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6 border border-gray-100 rounded-2xl shadow-sm">
                <p className="text-4xl font-bold text-gray-900 mb-2">95%</p>
                <p className="text-gray-500 text-sm">
                  Completion Rate among Pilot Group
                </p>
              </div>
              <div className="p-6 border border-gray-100 rounded-2xl shadow-sm">
                <p className="text-4xl font-bold text-gray-900 mb-2">Secured</p>
                <p className="text-gray-500 text-sm">
                  Enterprise SSO Integration
                </p>
              </div>
              <div className="p-6 border border-gray-100 rounded-2xl shadow-sm">
                <p className="text-4xl font-bold text-gray-900 mb-2">100+</p>
                <p className="text-gray-500 text-sm">
                  Physical Pins Distributed
                </p>
              </div>
            </div>
          </section>

          {/* Learnings */}
          <section className={`mb-16 ${fadeInUp(isLoaded)}`}>
            <h2 className="text-2xl font-bold mb-4">Reflection</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              This project highlighted the power of{' '}
              <strong>tangible rewards</strong> in digital education. By
              connecting an abstract concept (blockchain certification) to a
              physical object (an exclusive pin), we made the learning
              achievement feel real and valuable to employees.
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
