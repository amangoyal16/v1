'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRightIcon } from '@/components/Icons';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main className="container mx-auto px-6 py-16 max-w-2xl">
        <h1 className="text-4xl font-bold mb-8 animate-slideUp">
          Hello there, I&apos;m Aman{' '}
        </h1>

        <section
          className="mb-12 animate-slideUp"
          style={{ animationDelay: '0.2s' }}
        >
          <p className="text-gray-700 mb-4">
            I&apos;m a product and design strategist with 5+ years of experience
            building products, designing products, and a little bit of
            developing products too.
          </p>
          <p className="text-gray-700 mb-4">
            Started my journey with graphic design, then UI design, then
            development, and now with the help of this whole suite I&apos;m
            working as a product strategist where I&apos;m helping early-stage
            founders and teams craft their vision into user-friendly products
            that people love and actually want to use.
          </p>
          <p className="text-gray-700">
            I helped build products from MVP companies to big scale companies
            like Shiseido, managing up to 15+ developers and designers at a time
            across multiple time zones.
          </p>
        </section>

        <div className="flex flex-row gap-6 justify-center">
          <div className="bg-white p-4 shadow-lg transform rotate-[-2deg] hover:rotate-0 transition-transform duration-300">
            <Image
              src="/travel.jpg"
              alt="Aman Goyal"
              width={300}
              height={200}
              className="rounded-sm"
            />
            <div className="mt-2 text-center text-sm text-gray-600 font-handwriting">
              Adventures await
            </div>
          </div>
          <div className="bg-white p-4 shadow-lg transform rotate-[2deg] hover:rotate-0 transition-transform duration-300">
            <Image
              src="/aman-bawa.jpg"
              alt="Aman Goyal"
              width={300}
              height={200}
              className="rounded-sm"
            />
            <div className="mt-2 text-center text-sm text-gray-600 font-handwriting">
              Good times
            </div>
          </div>
        </div>

        <section
          className="my-12 animate-slideUp"
          style={{ animationDelay: '0.4s' }}
        >
          <h2 className="text-2xl font-semibold mb-4">
            Why I love this stuff.
          </h2>
          <p className="text-gray-700 mb-4">
            Every project is different. One day I&apos;m helping a founder
            validate their MVP, next day I&apos;m optimizing someone&apos;s
            product that&apos;s been live for months but not converting users.
          </p>
          <p className="text-gray-700 mb-4">
            I&apos;ve realized that most of the time, people don&apos;t need
            more features – they need clarity on what they&apos;re actually
            trying to solve. And honestly, that&apos;s become my favorite part
            of the job.
          </p>
          <p className="text-gray-700">
            The startup world moves so fast and there&apos;s always something
            new happening. I like being part of that energy.
          </p>
        </section>

        <div className="flex flex-row gap-6 justify-center">
          <div className="bg-white p-4 shadow-lg transform rotate-[-2deg] hover:rotate-0 transition-transform duration-300">
            <Image
              src="/travel.jpg"
              alt="Aman Goyal"
              width={300}
              height={200}
              className="rounded-sm"
            />
            <div className="mt-2 text-center text-sm text-gray-600 font-handwriting">
              Adventures await
            </div>
          </div>
          <div className="bg-white p-4 shadow-lg transform rotate-[2deg] hover:rotate-0 transition-transform duration-300">
            <Image
              src="/aman-bawa.jpg"
              alt="Aman Goyal"
              width={300}
              height={200}
              className="rounded-sm"
            />
            <div className="mt-2 text-center text-sm text-gray-600 font-handwriting">
              Good times
            </div>
          </div>
        </div>

        <section
          className="my-12 animate-slideUp"
          style={{ animationDelay: '0.6s' }}
        >
          <h2 className="text-2xl font-semibold mb-4">
            Random stuff about me.
          </h2>
          <p className="text-gray-700 mb-4">
            I genuinely enjoy the chaos of early-stage startups. There&apos;s
            something exciting about not knowing what you&apos;ll be working on
            next week.
          </p>
          <p className="text-gray-700 mb-4">
            I like working out and watching anime in my free time.
          </p>
          <p className="text-gray-700">
            I love to travel – try to travel to at least one new country each
            year to explore new things and meet new people.
          </p>
        </section>

        <section className="animate-slideUp" style={{ animationDelay: '0.8s' }}>
          <p className="text-gray-700 mb-6">
            If you&apos;re working on something and want to bounce ideas around,
            feel free to reach out.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center text-black hover:underline font-medium"
          >
            Let&apos;s grab a virtual coffee
            <ArrowUpRightIcon className="ml-1 w-4 h-4" />
          </Link>
        </section>
      </main>

      <Footer />
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
