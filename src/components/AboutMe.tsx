'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutMe() {
  return (
    <section className=" container mt-32">
      <div className="px-4 items-center gap-12">
        {/* Left: Text */}

        <h2 className="text-3xl md:text-4xl font-bold mb-4 ">About Me</h2>
        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-secondary/60"
        >
          I&apos;m Aman. I help high-velocity founders go from idea to live
          product, faster than most teams finish a pitch deck.
          <br />
          <br />
          Over the past 5 years, I&apos;ve worked with 20+ startups to design,
          prototype, and ship real products — some of which went on to raise,
          scale, and show up in Forbes and Google I/O.
          <br />
          <br />
          No fluff. No junior handoffs. Just sharp product thinking,
          founder-speed execution, and actual results.
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <Image
              src="/project-mockup/ARKivist-desktop.png"
              alt="ARKivist Desktop Screenshot"
              width={1200}
              height={300}
              className="rounded-lg shadow-lg min-h-[500px] object-cover"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-primary to-transparent rounded-b-lg" />
            <p className="absolute bottom-8 left-8 right-8 text-secondary text-lg font-medium">
              I turn raw ideas into products users get, love, and stick with —
              without dragging you through 12-week discovery phases or pretty
              decks that don&apos;t ship.
            </p>
          </div>
          <div className="relative">
            <Image
              src="/project-mockup/Jeeves.png"
              alt="Jeeves Project Screenshot"
              width={1200}
              height={300}
              className="rounded-lg shadow-lg min-h-[500px] object-cover"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-primary to-transparent rounded-b-lg" />
            <p className="absolute bottom-8 left-8 right-8 text-secondary text-lg font-medium">
              From concept to launch in weeks, not months. Fast, focused, and
              results-driven product development that moves at startup speed.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
