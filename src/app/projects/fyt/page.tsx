'use client';

import Link from 'next/link';
import {
  ArrowLeftIcon,
  Clock3Icon,
  Layers3Icon,
  SparklesIcon,
  SmartphoneIcon,
} from 'lucide-react';
import { usePageAnimation } from '@/hooks/usePageAnimation';
import { cn } from '@/lib/utils';

export default function FYTProjectPage() {
  const isLoaded = usePageAnimation(120);

  const revealClass = cn(
    'transition-[transform,opacity] duration-300 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)]',
    isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
  );

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f8f5ef_0%,#ffffff_26%,#ffffff_100%)] text-stone-900">
      <main className="mx-auto max-w-6xl px-6 py-16">
        <div className={revealClass} style={{ transitionDelay: '80ms' }}>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white/85 px-4 py-2 text-sm font-medium text-stone-600 shadow-[0_24px_70px_-48px_rgba(15,23,42,0.35)] transition-[transform,background-color,border-color,color] duration-200 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] hover:border-stone-300 hover:bg-white hover:text-stone-900 active:scale-[0.97]"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            All Projects
          </Link>
        </div>

        <header
          className={cn(revealClass, 'mt-10 max-w-4xl')}
          style={{ transitionDelay: '130ms' }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white">
            <Clock3Icon className="h-3.5 w-3.5" />
            In Development
          </div>
          <h1 className="mt-6 text-[clamp(3rem,6vw,6.25rem)] font-semibold leading-[0.92] tracking-[-0.08em] text-stone-950">
            FYT is still taking shape.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-600 sm:text-xl">
            The product direction, interaction model, and final visuals are
            currently in progress. Rather than fill this case study with
            placeholders or invented outcomes, this page shares the honest
            state of the work and what will be documented once the project is
            ready.
          </p>
        </header>

        <section
          className={cn(revealClass, 'mt-12 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]')}
          style={{ transitionDelay: '180ms' }}
        >
          <div className="relative overflow-hidden rounded-[34px] border border-stone-200/80 bg-[linear-gradient(135deg,#f5efe5_0%,#ffffff_48%,#f9f2d8_100%)] p-6 shadow-[0_40px_110px_-62px_rgba(15,23,42,0.38)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.92),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(251,191,36,0.18),transparent_34%)]" />
            <div className="relative min-h-[22rem]">
              <div className="absolute left-0 top-0 rounded-full bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-stone-500 shadow-[0_24px_70px_-52px_rgba(15,23,42,0.5)] backdrop-blur-sm">
                Mobile Product
              </div>
              <div className="absolute left-8 top-16 h-28 w-[68%] rounded-[28px] border border-white/70 bg-white/70 shadow-[0_36px_90px_-60px_rgba(15,23,42,0.5)] backdrop-blur-sm" />
              <div className="absolute left-14 top-24 h-20 w-[58%] rounded-[24px] border border-white/80 bg-white shadow-[0_40px_90px_-58px_rgba(15,23,42,0.45)]" />
              <div className="absolute right-6 top-20 h-56 w-40 rounded-[36px] border border-stone-300/60 bg-stone-950 p-3 shadow-[0_42px_90px_-50px_rgba(15,23,42,0.55)]">
                <div className="h-full rounded-[28px] bg-[linear-gradient(180deg,#2f2c26_0%,#111111_100%)] p-4 text-white">
                  <div className="h-3 w-14 rounded-full bg-white/20" />
                  <div className="mt-6 h-16 rounded-[20px] bg-white/10" />
                  <div className="mt-4 space-y-3">
                    <div className="h-3 rounded-full bg-white/15" />
                    <div className="h-3 w-4/5 rounded-full bg-white/10" />
                    <div className="h-3 w-3/5 rounded-full bg-white/10" />
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-2">
                    <div className="h-14 rounded-[18px] bg-white/8" />
                    <div className="h-14 rounded-[18px] bg-amber-300/30" />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 max-w-sm rounded-[28px] border border-white/60 bg-white/78 px-5 py-4 shadow-[0_36px_90px_-56px_rgba(15,23,42,0.42)] backdrop-blur-sm">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-stone-500">
                  Current focus
                </p>
                <p className="mt-2 text-base leading-7 text-stone-700">
                  Interaction patterns, flow clarity, and mobile-first visual
                  hierarchy.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: SmartphoneIcon,
                title: 'What exists now',
                text: 'Early mobile patterns, product direction, and interaction studies.',
              },
              {
                icon: Layers3Icon,
                title: 'What is still evolving',
                text: 'Refined interface systems, polished screens, and shipped outcomes.',
              },
              {
                icon: SparklesIcon,
                title: 'Why this page stays visible',
                text: 'It shows active work honestly without pretending the story is finished.',
              },
              {
                icon: Clock3Icon,
                title: 'What comes next',
                text: 'A complete case study once the product and artifacts are ready to share.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[28px] border border-stone-200/80 bg-white/85 p-5 shadow-[0_30px_80px_-58px_rgba(15,23,42,0.35)]"
              >
                <item.icon className="h-5 w-5 text-stone-900" />
                <h2 className="mt-4 text-lg font-semibold tracking-[-0.04em] text-stone-950">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-stone-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          className={cn(revealClass, 'mt-12 rounded-[34px] border border-stone-200/80 bg-white/88 p-6 shadow-[0_36px_100px_-64px_rgba(15,23,42,0.35)] sm:p-8')}
          style={{ transitionDelay: '230ms' }}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-stone-500">
            What the final case study will cover
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              'How the product direction was shaped and narrowed into a focused mobile experience.',
              'The interaction decisions that improved usability and reduced cognitive overhead.',
              'The visual system, product rationale, and launch outcomes once the work is complete.',
            ].map((item) => (
              <div
                key={item}
                className="rounded-[24px] border border-stone-200 bg-stone-50/80 p-5"
              >
                <p className="text-base leading-7 text-stone-700">{item}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
